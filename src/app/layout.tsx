import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Project Fuso',
    description: 'Modernized Operating System',
}

const LogoExpanded: FC = () => {
    return (
        <div className="flex flex-row items-center p-36">
            <Image alt="Project Fuso" src="/logo.svg" width={150} height={150} priority />
            <span className="text-[72px]">Project <span className="text-fuso">Fuso</span></span>
        </div>
    )
}


const HeaderNav: FC = () => {
    const Element: FC<PropsWithChildren<{ href?: string }>> = ({ children, href }) => (
        <li className="p-8"><a href={href}>{children}</a></li>
    )

    return (
        <ul className="flex">
            <Element href="/">Home</Element>
            <Element href="https://www.github.com/ProjectFuso">Github</Element>
        </ul>
    )
}

const Header: FC = () => {
    return (
        <div className="self-stretch flex flex-row justify-between items-start bg-black text-white border-fuso border-b-8">
            <LogoExpanded />
            <HeaderNav />
        </div>
    )
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center">
                    <Header />
                    <div className="max-w-4xl p-6">
                        <div className="prose max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
