import React from 'react';

import { Home, Bell, Bookmark, List, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Notifications', icon: Bell, href: '/notifications' },
  { name: 'Bookmarks', icon: Bookmark, href: '/bookmarks' },
  { name: 'Lists', icon: List, href: '/lists' },
  { name: 'Write', icon: Edit, href: '/write' },
];

export const Sidebar: React.FC = () => {
  return (
    <nav className="bg-white h-screen w-16 sm:w-64 flex flex-col border-r border-gray-200 dark:border-gray-700">
      <div className='p-4'>
        <ul className="flex-1 px-2">
          {sidebarItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link to={item.href}>
                <span className={`flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 ${
                  // router.pathname === item.href ? 'bg-gray-100 dark:bg-gray-700' : 
                  ''}`}>
                  <item.icon className="w-6 h-6" />
                  <span className="ml-3 hidden sm:inline">{item.name}</span>
                </span>
              </Link>
            </li>
          ))}
      </ul>
      </div>
    </nav>
  );
};

