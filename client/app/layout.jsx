import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'AI Support Platform',
  description: 'Frontend authentication flow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
