import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'yash bhuva', description: 'personal site of yash bhuva — building things and figuring things out.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
