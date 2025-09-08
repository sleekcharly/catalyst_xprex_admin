'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { Separator } from './ui/separator';
import { SidebarInset, SidebarTrigger } from './ui/sidebar';

const MainBody = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </div>
        <ThemeToggle />
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
    </SidebarInset>
  );
};

export default MainBody;
