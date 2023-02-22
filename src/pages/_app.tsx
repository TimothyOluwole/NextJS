import '@/styles/globals.css'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import localFont from '@next/font/local'
import type {AppProps} from 'next/app'

const aeonik = localFont({
  src: [
    // Light
    {
      path: './fonts/Aeonik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    // Regular
    {
      path: './fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // Medium
    {
      path: './fonts/Aeonik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    // Bold
    {
      path: './fonts/Aeonik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-aeonik',
})

export default function App({Component, pageProps}: AppProps) {
  const {user} = pageProps

  return (
    <div
      className={`${aeonik.variable} grid min-h-screen grid-rows-layout font-sans`}
    >
      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  )
}
