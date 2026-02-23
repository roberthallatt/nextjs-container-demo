import './globals.css';

export const metadata = {
  title: 'Next.js Dev Container Demo',
  description: 'A Next.js app running inside a VS Code Dev Container',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
