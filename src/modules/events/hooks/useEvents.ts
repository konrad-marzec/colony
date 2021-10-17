import { getLogs } from "@colony/colony-js";
import { useAsync } from "react-async-hook";

import { useClient } from "../../colony";
import { Event } from "../events.types";

export function useEvents(): [
  Array<Event> | undefined,
  { loading: boolean; hasError: boolean }
] {
  const client = useClient();

  const result = useAsync(async () => {
    if (!client) {
      return;
    }

    const eventLogs = (
      await Promise.all([
        getLogs(client, client.filters.PayoutClaimed(null, null, null)),
        getLogs(client, client.filters.ColonyInitialised(null, null)),
        getLogs(client, client.filters.DomainAdded(null)),
        // @ts-expect-error
        getLogs(client, client.filters.ColonyRoleSet(null, null, null, null)),
      ])
    ).flat();

    return eventLogs
      .map((event) => ({
        ...event,
        ...client.interface.parseLog(event),
      }))
      .sort(
        (a: Event, b: Event) => (b.blockNumber ?? 0) - (a.blockNumber ?? 0)
      );
  }, [client]);

  return [result.result, { hasError: !!result.error, loading: result.loading }];
}
