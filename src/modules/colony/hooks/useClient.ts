import { useContext } from "react";
import { ColonyClientContext } from "../ColonyClient";

export function useClient() {
  const { client } = useContext(ColonyClientContext);

  return client;
}
