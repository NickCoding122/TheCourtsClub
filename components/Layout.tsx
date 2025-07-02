import Link from 'next/link';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <nav>
        <img src="/logo.svg" alt="The Courts Club logo" className="logo" />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/membership">Membership</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {children}
      <footer>© 2025 The Courts Club</footer>
    </>
  );
}
