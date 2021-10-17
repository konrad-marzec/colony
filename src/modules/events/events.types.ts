import { Log } from "ethers/providers";
import { LogDescription } from "ethers/utils";

export type Event<T = any> = { values: T } & Log &
  Omit<LogDescription, "values">;
