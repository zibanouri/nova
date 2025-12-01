import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  Home,
  Settings,
  User,
  FileText,
  ChevronDown,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';
const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
  {
    title: 'Content',
    icon: FileText,
    subItems: [
      { title: 'Posts', url: '/posts' },
      { title: 'Categories', url: '/categories' },
      { title: 'Comments', url: '/comments' },
    ],
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'Support',
    icon: HelpCircle,
    subItems: [
      { title: 'FAQ', url: '/faq' },
      { title: 'Contact', url: '/contact' },
    ],
  },
];

const DashboardSidebar = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Sidebar className="border-r border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/30 dark:bg-emerald-950/10">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-700 dark:text-emerald-300 font-medium">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible
                      open={openItems[item.title] || false}
                      onOpenChange={() => toggleItem(item.title)}
                      className="group/collapsible"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="data-[state=open]:bg-emerald-100 data-[state=open]:text-emerald-700
                                     dark:data-[state=open]:bg-emerald-900/40 dark:data-[state=open]:text-emerald-200"
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          <span>{item.title}</span>
                          {openItems[item.title] ? (
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform" />
                          ) : (
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a
                                  href={subItem.url}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-xs">
                                    {subItem.title}
                                  </span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
