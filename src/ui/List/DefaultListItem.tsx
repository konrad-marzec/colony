import { forwardRef, ReactNode } from "react";

import styles from "./DefaultListItem.module.css";

interface ListItemProps {
  children?: ReactNode;
}

const DefaultListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children }, ref) => {
    return (
      <li ref={ref} className={styles.holder}>
        {children}
      </li>
    );
  }
);

export default DefaultListItem;
