import * as React from 'react'
import { cn } from '@/lib/utils'

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
})

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  fadedBelow?: boolean
  fixedHeight?: boolean
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, fadedBelow = false, fixedHeight = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex h-full w-full flex-col',
        fadedBelow &&
          'after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-32 after:w-full after:bg-[linear-gradient(180deg,_transparent_10%,_hsl(var(--background))_70%)] after:md:block',
        fixedHeight && 'md:h-svh',
        className
      )}
      {...props}
    />
  )
)
Layout.displayName = 'Layout'

const LayoutHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8',
      className
    )}
    {...props}
  />
))
LayoutHeader.displayName = 'LayoutHeader'

interface LayoutBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  fixedHeight?: boolean
}

const LayoutBody = React.forwardRef<HTMLDivElement, LayoutBodyProps>(
  ({ className, fixedHeight, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex-1 overflow-hidden px-4 py-6 md:px-8',
        fixedHeight && 'h-[calc(100%-var(--header-height))]',
        roboto.className,
        GeistSans.variable,
          GeistMono.variable,
        className
      )}
      {...props}
    />
  )
)
LayoutBody.displayName = 'LayoutBody'

export { Layout, LayoutHeader, LayoutBody }
