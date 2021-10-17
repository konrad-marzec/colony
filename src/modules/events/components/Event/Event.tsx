import { ComponentType } from "react";
import { useInView } from "react-intersection-observer";

import { Empty, List } from "../../../../ui";
import { Event as EventType } from "../../events.types";
import ColonyInitialisedEvent from "./ColonyInitialisedEvent";
import ColonyRoleSetEvent from "./ColonyRoleSetEvent";
import DomainAddedEvent from "./DomainAddedEvent";
import PayoutClaimedEvent from "./PayoutClaimedEvent";

interface EventProps {
  data: EventType;
}

const EVENT_TO_COMPONENT: Record<
  string,
  ComponentType<EventProps & { inView: boolean }>
> = {
  ColonyInitialised: ColonyInitialisedEvent,
  PayoutClaimed: PayoutClaimedEvent,
  ColonyRoleSet: ColonyRoleSetEvent,
  DomainAdded: DomainAddedEvent,
};

function Event({ data }: EventProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const Component = EVENT_TO_COMPONENT[data.name] ?? Empty;

  return (
    <List.Item ref={ref}>
      <Component data={data} inView={inView} />
    </List.Item>
  );
}

export default Event;
