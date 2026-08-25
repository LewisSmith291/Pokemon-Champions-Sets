import { useCallback, useRef, useState } from "react";

export type NotificationColour = "red" | "orange" | "green";

export interface Notification {
  id: number;
  text: string;
  colour: NotificationColour;
}

// Owns the queue of notifications for one page
// Drop it into any component that needs to tell the user something, and render with <NotificationList/>
export default function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // A ref rather than notifications.length: two notifications raised in the same 
  // tick would otherwise read the same stale length and collide on id
  const nextId = useRef<number>(0);

  // useCallback keeps these identities stable across renders, so an effect can
  // list 'notify' as a dependency without re-running every time the page renders
  const notify = useCallback((text: string, colour: NotificationColour = "red") => {
    setNotifications((prev) => [...prev, { id: nextId.current++, text, colour }]);
  }, []);

  const dismiss = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const dismissAll = useCallback(() => setNotifications([]), []);

  return { notifications, notify, dismiss, dismissAll };
}
