import { useState, type TransitionEvent } from "react";
import "./Dismissable.css";
import { type Notification } from "./useNotifications";

interface Props {
  notification: Notification;
  onDismissed: (id: number) => void;
}

export default function Dismissable({ notification, onDismissed }: Props) {
  // The exit animation is a presentation detail, so the item owns it rather
  // than the list. It stays mounted until its fade finishes, then reports back.
  const [isExiting, setIsExiting] = useState<boolean>(false);

  function handleTransitionEnd(e: TransitionEvent<HTMLDivElement>) {
    // onTransitionEnd fires for EVERY transition on this element - including the
    // hover scale - so check that this is actually the exit fade finishing.
    if (!isExiting) return;
    if (e.propertyName !== "opacity") return;
    if (e.target !== e.currentTarget) return;
    onDismissed(notification.id);
  }

  return (
    <div
      className={`dismissable ${notification.colour} ${isExiting ? "exiting-notif" : ""}`}
      onClick={() => setIsExiting(true)}
      onTransitionEnd={handleTransitionEnd}
    >
      <p>{notification.text}</p>
      {/* A real button so the notification can be dismissed by keyboard.
          Its click bubbles to the div above, which does the same thing. */}
      <button type="button" className="exit" aria-label="Dismiss notification">✖</button>
    </div>
  );
}
