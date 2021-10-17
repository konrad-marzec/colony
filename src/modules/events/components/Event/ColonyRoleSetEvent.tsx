import { ColonyRole } from "@colony/colony-js";
import { utils } from "ethers";
import { BigNumberish } from "ethers/utils";

import { Avatar } from "../../../../ui";
import { Event } from "../../events.types";
import EventContent from "./EventContent";

interface ColonyRoleSetEventProps {
  data: Event<{ user: string; role: ColonyRole; domainId: BigNumberish }>;
  inView: boolean;
}

function ColonyRoleSetEvent({ data, inView }: ColonyRoleSetEventProps) {
  const domainId = new utils.BigNumber(data.values.domainId);

  return (
    <>
      <Avatar seed={data.transactionHash || data.address} />
      <EventContent blockHash={inView ? data.blockHash : undefined}>
        {`**${ColonyRole[data.values.role]}** role assigned to user **${
          data.values.user
        }** in domain **${domainId.toNumber()}.**`}
      </EventContent>
    </>
  );
}

export default ColonyRoleSetEvent;
