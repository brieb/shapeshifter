// @flow
import ArrayDefault from '../stub';

export const ARRAY_NUM = 123;

export type ArraySchema = {
  arrayField: Array<string[]>,
  boolField: boolean[],
  enumField: Array<'foo' | 'bar' | 'baz'>,
  funcField: Array<(arg0: string, arg1: number) => number>,
  instanceField: ArrayDefault[],
  numberField: number[],
  objectField: Array<{ [key: string]: number }>,
  shapeField: Array<{
    foo: string,
    bar: boolean,
    baz: () => void,
  }>,
  stringField: string[],
  unionField: Array<string | 1 | 2 | 3>,
};