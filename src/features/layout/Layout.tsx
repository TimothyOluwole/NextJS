import Head from 'next/head'
import {ReactNode} from 'react'
import {Footer} from './Footer'
import {Header} from './header/Header'

interface Props {
  children: ReactNode
  pageTitle?: string
}

export function Layout({children, pageTitle = 'Vialto Partners'}: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <main className="p-8">{children}</main>

      <Footer />
    </>
  )
}
