import { getBlockTime } from "@colony/colony-js";
import { useAsync } from "react-async-hook";
import ContentLoader from "react-content-loader";

import { useProvider } from "../../../colony";
import styles from "./EventDate.module.css";

interface EventDateProps {
  hash: string;
}

function EventDate({ hash }: EventDateProps) {
  const provider = useProvider();
  const result = useAsync(async () => getBlockTime(provider, hash), []);

  if (result.error) {
    return null;
  }

  if (result.loading) {
    return (
      <ContentLoader
        width={75}
        height={15}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect height="7.5" rx="1" ry="1" width="100%" x="0" y="0" />
      </ContentLoader>
    );
  }

  return (
    <span className={styles.holder}>
      {new Date(result.result!).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </span>
  );
}

export default EventDate;
