import '@/styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'FAMILyS - Family Alliance for Multi-generational International LegacY and Sustainability',
  description: 'From Families For Families',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
