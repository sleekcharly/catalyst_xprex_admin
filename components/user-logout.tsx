'use client';

import React from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import Link from 'next/link';
import { DoorClosedIcon } from 'lucide-react';

type Props = {};

const UserLogout = (props: Props) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/">
          <SidebarMenuButton tooltip="Home">
            <DoorClosedIcon />
            <span>Logout</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default UserLogout;
