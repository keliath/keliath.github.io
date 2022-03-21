import { Heroe } from "./heroes.interface";

const propName: unique symbol = Symbol();

export interface EditedHeroes {
  [propName]?: EditedHeroe;
}

export interface EditedHeroe extends Heroe {
  newName: string;
  newDescription: string;
}
