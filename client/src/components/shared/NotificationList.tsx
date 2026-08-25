import Dismissable from "./Dismissable";
import { type Notification } from "./useNotifications";
import "./Dismissable.css";

interface Props {
  notifications: Notification[];
  onDismissed: (id: number) => void;
}

export default function NotificationList({ notifications, onDismissed }: Props) {
  // Nothing queued means no container at all, so it can't intercept clicks
  if (notifications.length === 0) return null;

  return (
    // aria-live announces new notifications to screen readers without stealing focus
    <div id="notification-list" aria-live="polite">
      {notifications.map((n) => (
        <Dismissable key={n.id} notification={n} onDismissed={onDismissed} />
      ))}
    </div>
  );
}
