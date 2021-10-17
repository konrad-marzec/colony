import classNames from "classnames";
import { ComponentType, useCallback } from "react";
import ContentLoader from "react-content-loader";

import DefaultListItem from "./DefaultListItem";
import styles from "./List.module.css";

interface ListProps<T> {
  data: Array<T>;
  loading?: boolean;
  className?: string;
  item: ComponentType<{ data: T }>;
  dataKey: keyof T | ((item: T) => string | number);
}

function List<T>({
  data,
  loading,
  dataKey,
  className,
  item: Item,
}: ListProps<T>) {
  const getKey = useCallback(
    (item: T) => {
      if (typeof dataKey === "function") {
        return dataKey(item);
      }

      return `${item[dataKey]}`;
    },
    [dataKey]
  );

  return (
    <ul className={classNames(styles.holder, className)}>
      {loading ? (
        <ContentLoader
          width="100%"
          height={350}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
        >
          <rect x="114" y="52" rx="6" ry="6" width="483" height="15" />
          <circle cx="77" cy="60" r="15" />
          <rect x="116" y="105" rx="6" ry="6" width="420" height="15" />
          <circle cx="78" cy="113" r="15" />
          <rect x="115" y="158" rx="6" ry="6" width="483" height="15" />
          <circle cx="78" cy="166" r="15" />
          <rect x="117" y="211" rx="6" ry="6" width="444" height="15" />
          <circle cx="79" cy="219" r="15" />
          <rect x="117" y="263" rx="6" ry="6" width="483" height="15" />
          <circle cx="80" cy="271" r="15" />
        </ContentLoader>
      ) : (
        data?.map((record) => <Item key={getKey(record)} data={record} />)
      )}
    </ul>
  );
}

List.Item = DefaultListItem;

export default List;
