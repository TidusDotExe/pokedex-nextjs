import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ title, children }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto max-w-xl pt-8 min-h-screen">
                {children}
            </main>
            <footer>
                <Link href='https://tidusdotexe.fr'>
                    <a className="text-purple-800">
                        tidusdotexe.fr
                    </a>
                </Link>
            </footer>
        </div>
    )
}