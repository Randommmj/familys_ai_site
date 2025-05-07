import '../styles/globals.css'

export const metadata = {
  title: 'FAMILyS - Family Alliance for Multi-generational International LegacY and Sustainability',
  description: 'From Families For Families',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-SG">
      <head>
        <meta name="theme-color" content="#d5cac0" />
      </head>
      <body className="font-raleway">
        {children}
      </body>
    </html>
  )
}
