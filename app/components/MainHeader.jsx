'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MainHeader = () => {
  const path = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Home</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              href="/news"
              className={path.startsWith('/news') ? 'active' : undefined}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className={path.startsWith('/archive') ? 'active' : undefined}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
