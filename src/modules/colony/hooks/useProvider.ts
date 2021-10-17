import { useContext } from "react";
import { ColonyClientContext } from "../ColonyClient";

export function useProvider() {
  const { provider } = useContext(ColonyClientContext);

  return provider;
}
