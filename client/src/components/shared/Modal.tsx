import {useEffect, useId, useRef, type ReactNode } from 'react';
import './Modal.css'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string; // per-modal sizing
  children: ReactNode;
}

export default function Modal ({isOpen, onClose, title, className="", children}: Props){
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // Sync effect
  // Adapter between parent and dialog element
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return; // Null before first render, so check that
    if (isOpen && !dialog.open) dialog.showModal(); // Move element to browser's top layer
    if (!isOpen && dialog.open) dialog.close();

    // Block scrolling of background when modal is open
    // Is run on unmount, so return statement unlocks the scrolling no matter how dialogue is disposed of
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {document.documentElement.style.overflow = ""};
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      // Browser can close dialogue without React's involvement, so this handler syncs the events
      onClose={onClose}
      // The backdrop is part of the dialog's own box
      // e.target === ref.current is checking if the click was on the backdrop
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      className={`modal rounded-xl bg-surface p-0 backdrop:bg-black/50 ${className}`}
    >
      <div className="flex shrink-0 items-center justify-between p-4">
        <h2 id={titleId}>{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="min-h-0 flex-1">
        {isOpen && children}
      </div>
    </dialog>
  );
}