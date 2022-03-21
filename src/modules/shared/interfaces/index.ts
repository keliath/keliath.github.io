const propName: unique symbol = Symbol();

export interface UnknownObject {
  [propName]?: unknown;
}
