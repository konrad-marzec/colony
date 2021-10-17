import { ColonyClient } from "@colony/colony-js";
import { LogDescription } from "ethers/utils";
import { utils } from "ethers";
import { useAsync } from "react-async-hook";

import { useClient } from "../../colony";

export function useEventDetails(
  log: LogDescription,
  inView?: boolean
): [
  Awaited<ReturnType<ColonyClient["getPayment"]>> | undefined,
  { loading: boolean; hasError: boolean }
] {
  const client = useClient();

  const result = useAsync(async () => {
    if (!client || !inView) {
      return;
    }

    const { associatedTypeId } = await client.getFundingPot(
      new utils.BigNumber(log.values.fundingPotId).toString()
    );

    return client.getPayment(associatedTypeId);
  }, [client, log, inView]);

  return [result.result, { loading: result.loading, hasError: !!result.error }];
}
