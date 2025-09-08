'use client';

import { ComponentProps, useEffect, useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from './ui/sidebar';
import Image from 'next/image';
import CatalystLogoDark from '@/public/logos/catalyst_logo.png';
import CatalystLogoLight from '@/public/logos/catalyst_logo2.png';
import NavMain from './nav-main';
import UserLogout from './user-logout';
import { useTheme } from 'next-themes';

type Props = {};

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="relative flex aspect-square size-8 items-center justify-center rounded-lg">
                <Image
                  src={
                    theme === 'dark' ? CatalystLogoDark! : CatalystLogoLight!
                  }
                  alt="Catalyst Logo"
                  fill
                  priority
                  className="object-cover size-4"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <p>Catalyst</p>
                <p>Xprex</p>
              </div>
              <h1 className="font-bold text-sm leading-tight ml-auto">Admin</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <UserLogout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
