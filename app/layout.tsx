import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import '@radix-ui/themes/styles.css';
import {Theme, } from "@radix-ui/themes"
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Issue manager',
  description: 'Generated by Mate Papava',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Theme appearance="light" accentColor="purple" radius="large">
        <NavBar />
        <main className='p-5'>{children}</main>
        
        </Theme>
        
        </body>
    </html>
  )
}
