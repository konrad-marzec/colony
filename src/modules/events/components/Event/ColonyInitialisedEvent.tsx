import { Avatar } from "../../../../ui";
import { Event } from "../../events.types";
import EventContent from "./EventContent";

interface ColonyInitialisedEventProps {
  data: Event;
  inView: boolean;
}

function ColonyInitialisedEvent({ data, inView }: ColonyInitialisedEventProps) {
  return (
    <>
      <Avatar seed={data.transactionHash || data.address} />
      <EventContent blockHash={inView ? data.blockHash : undefined}>
        Congratulations! It's a beautiful baby colony!
      </EventContent>
    </>
  );
}

export default ColonyInitialisedEvent;
