'use client';

import { Trash2, CheckSquare, X, BellOff } from 'lucide-react';
import { notificationsData } from '../lib/data';
import { useState } from 'react';
// import Image from 'next/image';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState(notificationsData)

    const removeNotification = (id: number) => { 
        setNotifications((prev) => { 
            return prev.filter((notification) => (notification.id !== id))
        })
    }

    const removeAll = () => { 
        setNotifications([])
    }

  return (
    // Outer wrapper limits width on giant screens and adds standard mobile padding
    <div className="max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-10">
      
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between md:mb-8">
        <h1 className="text-lg font-bold text-slate-900 md:text-xl">
          Notifications
        </h1>
        
        {/* Bulk Actions */}
        <div className="flex items-center gap-3 text-sm font-medium md:gap-4 md:text-md">
            <button
            onClick={() => removeAll()}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors">
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
            <span>Delete all</span>
          </button>
          
          {/* Vertical Divider */}
          <div className="w-px h-4 bg-slate-300 md:h-5"></div>
          
          <button className="flex items-center gap-1.5 text-indigo-700 hover:text-indigo-900 transition-colors">
            <CheckSquare className="w-4 h-4 md:w-5 md:h-5" />
            <span>Mark all as read</span>
          </button>
        </div>
      </div>

      {/* Notifications List Container */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {notifications.length > 0 ? (notifications.map((notification, index) => (
          <div 
            key={notification.id}
            className={`flex items-start gap-3 p-4 md:p-6 md:gap-5 transition-colors border-b border-gray-100 last:border-b-0
              ${notification.isUnread ? 'bg-slate-50/80 hover:bg-slate-100/80' : 'bg-white hover:bg-slate-50/50'}
            `}
          >
            {/* Avatar - Fixed size, prevents shrinking */}
            <div className="shrink-0 mt-1">
              <img 
                src={notification.avatar} 
                alt="User avatar" 
                className="w-10 h-10 rounded-full object-cover md:w-12 md:h-12"
              />
            </div>

            {/* Content Area - Takes up remaining space */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-700 leading-relaxed md:text-xs">
                {notification.text}
              </p>
              <p className="mt-1.5 text-xs text-slate-400 md:text-xs md:mt-2">
                {notification.time}
              </p>
            </div>

            {/* Close/Dismiss Button */}
                <button 
                    onClick={() => { removeNotification(notification.id)}}
              className="shrink-0 p-1 text-slate-400 hover:text-red-600 hover:bg-red-100/50 rounded-full transition-all"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        ))) : (
            <div className="flex flex-col items-center justify-center gap-5 py-20">
                <BellOff className="w-15 h-15 text-gray-300" /> 
                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg font-semibold text-gray-500">You're all caught up!</p>
                    <p className="text-sm text-gray-300">No new notifications at the moment.</p>
                </div>
            </div>
        )}
      </div>
      
    </div>
  );
};

export default NotificationsPage;