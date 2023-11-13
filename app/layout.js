import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Immigration Law Firm',
  description: 'created by <3'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main className='p-4'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
