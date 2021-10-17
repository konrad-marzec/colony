import { utils } from "ethers";
import { BigNumberish } from "ethers/utils";

import { Avatar } from "../../../../ui";
import { Event } from "../../events.types";
import EventContent from "./EventContent";

interface DomainAddedEventProps {
  data: Event<{ domainId: BigNumberish }>;
  inView: boolean;
}

function DomainAddedEvent({ data, inView }: DomainAddedEventProps) {
  const domainId = new utils.BigNumber(data.values.domainId);

  return (
    <>
      <Avatar seed={data.transactionHash || data.address} />
      <EventContent blockHash={inView ? data.blockHash : undefined}>
        {`Domain **${domainId.toString()}** added.`}
      </EventContent>
    </>
  );
}

export default DomainAddedEvent;
