import { RelayEnvironmentProvider } from "react-relay";

import { getClientEnvironment } from "@/shared/lib/relay-environment";

export function RelayProvider({ children }: { children: React.ReactNode }) {
  const environment = getClientEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
