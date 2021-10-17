import EventDate from "./EventDate";
import styles from "./EventContent.module.css";
import ReactMarkdown from "react-markdown";
import { ComponentProps } from "react";

interface EventContentProps {
  children: string;
  blockHash?: string;
}

const RENDERERS: ComponentProps<typeof ReactMarkdown>["components"] = {
  p: ({ children }) => <span className={styles.text}>{children}</span>,
};

function EventContent({ children, blockHash }: EventContentProps) {
  return (
    <div className={styles.content}>
      <ReactMarkdown components={RENDERERS}>{children}</ReactMarkdown>
      {blockHash && <EventDate hash={blockHash} />}
    </div>
  );
}

export default EventContent;
