import "@emotion/react";

declare module "@emotion/react" {
  interface Model<T> {
    [key: string]: T;
  }
  interface Colors {
    white: string;
    black: string;
    red: string;
  }
  export interface Theme {
    readonly colors: Colors;
    readonly fontSize: Model<string>;
  }
}
