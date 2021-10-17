import blockies from "ethereum-blockies";
import { useCallback } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps {
  seed: string;
}

function Avatar({ seed }: AvatarProps) {
  const setRef = useCallback(
    (ref: HTMLCanvasElement | null) => {
      if (!ref) {
        return;
      }

      blockies.render({ seed, size: 12, scale: 3.09 }, ref);
    },
    [seed]
  );

  return <canvas className={styles.holder} key={seed} ref={setRef} />;
}

export default Avatar;
