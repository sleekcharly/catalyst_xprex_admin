'use client';

import {
  BikeIcon,
  BookImageIcon,
  ChevronRight,
  HomeIcon,
  Package,
  PersonStandingIcon,
  Settings,
} from 'lucide-react';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './ui/sidebar';
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

const NavMain = () => {
  return (
    <SidebarGroup>
      <SidebarMenu className="flex flex-col gap-5">
        <SidebarMenuItem>
          <Link href="/">
            <SidebarMenuButton tooltip="Home">
              <HomeIcon />
              <span>Home</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/riders">
            <SidebarMenuButton tooltip="Riders">
              <BikeIcon />
              <span>Riders</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/hubs">
            <SidebarMenuButton tooltip="Hubs">
              <Package />
              <span>Hubs</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/customers">
            <SidebarMenuButton tooltip="Customers">
              <PersonStandingIcon />
              <span>Customers</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/Booking">
            <SidebarMenuButton tooltip="Booking">
              <BookImageIcon />
              <span>Booking</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <Collapsible asChild className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip="Settings">
                <Settings />
                <span>Settings</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <Link href="delivery-fees">
                    <SidebarMenuSubButton asChild>
                      <span>Delivery fee</span>
                    </SidebarMenuSubButton>
                  </Link>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
