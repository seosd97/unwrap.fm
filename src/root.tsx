import { Bell, Home, User } from "lucide-react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import { AppShell } from "@/layout/app-shell";
import { Main, MainContent } from "@/layout/main-content";
import { MobileDrawer } from "@/layout/mobile-drawer";
import {
  NavItem,
  Sidebar,
  SidebarSection,
  SidebarSectionTitle,
} from "@/layout/sidebar";
import { TopNav } from "@/layout/top-nav";
import { useMobileDrawer } from "@/shared/hooks/use-mobile-drawer";
import { RelayProvider } from "@/shared/providers/relay-provider";
import { Avatar } from "@/shared/ui/avatar";
import { IconButton } from "@/shared/ui/icon-button";

import "@/shared/styles/global.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Your music streaming analytics dashboard"
        />
        <title>unwrap.fm</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const mobileDrawer = useMobileDrawer();
  const location = useLocation();

  const navItems = (
    <>
      <SidebarSection>
        <NavItem
          to="/"
          isActive={location.pathname === "/"}
          onClick={() => mobileDrawer.close()}
          icon={<Home size={20} />}
        >
          Home
        </NavItem>
      </SidebarSection>
      <SidebarSection>
        <SidebarSectionTitle>Account</SidebarSectionTitle>
        <NavItem
          to="/account"
          isActive={location.pathname === "/account"}
          onClick={() => mobileDrawer.close()}
          icon={<User size={20} />}
        >
          Profile
        </NavItem>
      </SidebarSection>
    </>
  );

  return (
    <RelayProvider>
      <AppShell>
        <TopNav onMenuClick={mobileDrawer.toggle}>
          <IconButton label="Notifications">
            <Bell size={20} />
          </IconButton>
          <Avatar name="User" />
        </TopNav>

        <MobileDrawer isOpen={mobileDrawer.isOpen} onClose={mobileDrawer.close}>
          {navItems}
        </MobileDrawer>

        <Sidebar>{navItems}</Sidebar>

        <Main>
          <MainContent>
            <Outlet />
          </MainContent>
        </Main>
      </AppShell>
    </RelayProvider>
  );
}
