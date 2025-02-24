'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [pathname, setPathName] = useState('');
  const path = usePathname();
  const routes = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/home#services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavbarClick = (path: string) => {
    setPathName(path);
  };

  useEffect(() => {
    setPathName(path + window.location.hash);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className='logo-container fade-up'>
          <Link href={'/home'} passHref>
            <Image
              src="/logo.png"
              alt="logo image"
              width={137}
              height={88}
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav className="navbar fade-up">
          {routes.map(({ name, path }) => (
            <Link key={path} href={path} target={path === '/home#services' ? '_blank': '_self'} onClick={() => handleNavbarClick(path)} passHref>
              <p className={`nav-link ${pathname === path ? 'active' : ''}`}>
                {name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
