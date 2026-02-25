import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import {
  AppShell,
  Avatar,
  IconButton,
  Main,
  MainContent,
  MobileDrawer,
  NavItem,
  Sidebar,
  SidebarSection,
  SidebarSectionTitle,
  TopNav,
  useMobileDrawer,
} from "../components/layout";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import "../styles/global.css";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "unwrap.fm",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  const mobileDrawer = useMobileDrawer();
  const location = useLocation();

  const navItems = (
    <>
      <SidebarSection>
        <NavItem
          to="/"
          isActive={location.pathname === "/"}
          onClick={() => mobileDrawer.close()}
          icon={<HomeIcon />}
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
          icon={<UserIcon />}
        >
          Profile
        </NavItem>
      </SidebarSection>
    </>
  );

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppShell>
          <TopNav onMenuClick={mobileDrawer.toggle}>
            <IconButton label="Notifications">
              <BellIcon />
            </IconButton>
            <Avatar name="User" />
          </TopNav>

          <MobileDrawer
            isOpen={mobileDrawer.isOpen}
            onClose={mobileDrawer.close}
          >
            {navItems}
          </MobileDrawer>

          <Sidebar>{navItems}</Sidebar>

          <Main>
            <MainContent>
              <Outlet />
            </MainContent>
          </Main>
        </AppShell>

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
