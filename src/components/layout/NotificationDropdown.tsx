import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useNotificationStore } from '../../store/useNotificationStore';

export const NotificationDropdown: React.FC = () => {
  const { notifications, markAllRead, unreadCount } = useNotificationStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = unreadCount();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleOpen = () => {
    setOpen(v => !v);
    if (!open) markAllRead();
  };

  return (
    <div className="relative" ref={ref}>
      <button onClick={handleOpen} className="relative text-gray-500 hover:text-gray-900">
        <Bell className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-danger text-white text-[10px] font-bold flex items-center justify-center">
            {count > 9 ? '9+' : count}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-gray-200 shadow-lg z-50">
          <div className="p-3 border-b border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900">Notifications</h4>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-sm text-gray-500 text-center">No notifications yet</p>
            ) : (
              notifications.map(n => (
                <Link
                  key={n.id}
                  to={`/issue/${n.issueId}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm border-b border-gray-50 hover:bg-gray-50 ${n.read ? 'text-gray-500' : 'text-gray-900 font-medium'}`}
                >
                  {n.message}
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
