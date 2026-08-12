import {useEffect, useRef, type ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal ({isOpen, onClose, title, children}: Props){
  const ref = useRef<HTMLDialogElement>(null);

  // 
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return; // Null before first render, so check that
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (<dialog
      ref={ref}
      // Esc closes natively without telling React — this syncs the state back,
      // otherwise isOpen stays true and the next open() call does nothing.
      onClose={onClose}
      // The backdrop is part of the dialog's own box, so a click that lands on
      // the dialog element itself (rather than the content) is a backdrop click.
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      className="w-full max-w-3xl rounded-xl bg-surface p-0 text-text backdrop:bg-black/50"
    >
      <div className="flex items-center justify-between p-4">
        <h2>{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="max-h-[70vh] overflow-y-auto p-4">
        {isOpen && children}
      </div>
    </dialog>
  )
}