"use client"

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

export default function NavigationWrapper() {
  const pathname = usePathname()
  
  const isWorksPage = pathname === '/works'
  
  return (
    <Navigation BgColor={isWorksPage ? '#111111' : undefined} />
  )
}