import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Rule Engine UI',
  description: 'Manage your rule engines with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
