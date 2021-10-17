import { TokenSymbol } from "../../constants/token.constants";

export function isTokenSymbol(value: any): value is keyof typeof TokenSymbol {
  return (TokenSymbol as any)[value] !== undefined;
}
