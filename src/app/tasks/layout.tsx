"use client"
import useIsCollapsed from '@/hooks/use-is-collapsed'
import Sidebar from '@/components/sidebar'
// import useLocalStorage from './use-local-storage'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { SiteHeader } from '@/components/site-header'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children, }: Readonly<DashboardLayoutProps>) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()

  return (
   
       <>
          <SiteHeader />
        <div className='relative h-full overflow-hidden bg-background'>
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

  

      <main
        id='content'
        className={`overflow-x-hidden transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        {children}
      </main>
       </>
  );
}
