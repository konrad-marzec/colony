type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

type Options = {
  seed: string;
  size: number;
  scale: number;
  color: string;
  bgcolor: string;
  spotcolor: string;
};

declare module "ethereum-blockies" {
  const api = {
    create: (opts: Partial<Options>) => HTMLCanvasElement,
    render: (opts: Partial<Options>, canvas: HTMLCanvasElement) =>
      HTMLCanvasElement,
  };

  export default api;
}

// declare module "ethereum-blockies/react-component" {
//   import { Component } from "react";

//   type Options = {
//     seed: string;
//     size: number;
//     scale: number;
//     color: string;
//     bgcolor: string;
//     spotcolor: string;
//   };

//   declare class Blockies extends Component<{ opts?: Partial<Options> }> {
//     draw: () => void;
//     getOpts: () => Options;
//     render(): React.ReactNode;
//     componentDidMount: () => void;
//   }

//   export default Blockies;
// }
