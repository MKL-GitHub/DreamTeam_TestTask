import './globals.scss'
import { Ubuntu } from 'next/font/google';

export const metadata = {
  title: 'DreamTeam Test Task',
  description: 'Project was created by MKL',
}

const ubuntu = Ubuntu({
  weight: ['300', '400', '500'],
  subsets: ["latin", "cyrillic"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  )
}
