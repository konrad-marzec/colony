import { ColonyClient } from "@colony/colony-js";
import { InfuraProvider } from "ethers/providers";
import { createContext, ReactNode, useMemo, useState } from "react";
import getClient, { provider } from "./client";

interface ColonyClientProps {
  children: ReactNode;
}

interface ColonyClientContextValue {
  client: ColonyClient | undefined;
  provider: InfuraProvider;
}

export const ColonyClientContext = createContext<ColonyClientContextValue>({
  client: undefined,
  provider,
});

function ColonyClientProvider({ children }: ColonyClientProps) {
  const [client, setClient] = useState<ColonyClient | undefined>();

  useMemo(async () => {
    const cli = await getClient();
    setClient(cli);
  }, []);

  const value = useMemo(
    () => ({
      client,
      provider,
    }),
    [client]
  );

  return (
    <ColonyClientContext.Provider value={value}>
      {children}
    </ColonyClientContext.Provider>
  );
}

export default ColonyClientProvider;
