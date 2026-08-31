interface NotificationBadgeProps {
  unreadCount: number
}

function NotificationBadge({ unreadCount }: NotificationBadgeProps) {
  return (
    <div className="notification-badge">
      {unreadCount > 0 && `มี ${unreadCount} ข้อความใหม่`}
    </div>
  )
}

export default NotificationBadge
