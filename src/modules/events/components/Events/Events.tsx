import { List } from "../../../../ui";
import { useEvents } from "../../hooks/useEvents";
import Event from "../Event";
import styles from "./Events.module.css";

function Events() {
  const [events, { loading }] = useEvents();

  return (
    <div className={styles.holder}>
      <div className={styles.content}>
        <List
          item={Event}
          loading={loading}
          data={events as any}
          className={styles.list}
          dataKey={(item) => `${item.transactionHash}-${item.logIndex}`}
        />
      </div>
    </div>
  );
}

export default Events;
