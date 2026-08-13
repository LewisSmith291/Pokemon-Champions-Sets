import {useEffect, useId, useRef, type ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal ({isOpen, onClose, title, children}: Props){
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
      className="w-full max-w-3xl rounded-xl bg-surface p-0 text-text backdrop:bg-black/50"
    >
      <div className="flex items-center justify-between p-4">
        <h2 id={titleId}>{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="">
        {isOpen && children}
      </div>
    </dialog>
  );
}