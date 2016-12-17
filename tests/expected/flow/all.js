// @flow
import ArrayDefault from '../stub';
import DefaultName from '../stub';
import { foo, bar } from '../stub';
import AnotherDefault, { Baz, Qux } from '../stub';
import InstanceDefault, { InstanceClassName } from '../stub';
import ObjectDefault from '../stub';
import ShapeDefault, { ShapeClassName } from '../stub';
import UnionDefault, { UnionClassName } from '../stub';

export const ARRAY_NUM = 123;
export const CONST_STRING = 'string';
export const STATUS_NUMBER = 123;
export const MAGIC_FLOAT = 456.78;
export const IS_ENABLED = true;
export const EMPTY_VALUE = null;
export const PRIMITIVE_LIST = ['foo', 123, 456.78, false];
export const INST_STR = 'foobar';
export const INST_ENABLED = true;
export const PRIMITIVE_VALUES = ['string', 123, true];
export const PRIMITIVE_STR = 'primitive';

export type ArrayType = {
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

export type ConstantsType = {
  numberField: number,
};

export type EnumType = {
  boolField: true | false,
  booleanField: false | true,
  intField: 123,
  integerField: 1 | 2 | 3,
  numField: 123 | 456 | 789,
  numberField: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  floatField: 12.34 | 56.78 | 9 | 65.4,
  strField: 'foo' | 'bar',
  stringField: 'baz' | 'qux',
};

export type ImportsType = {
  stringField: string,
};

export type InstanceType = {
  instField: InstanceClassName,
  instanceField: InstanceDefault,
};

export type ObjectType = {
  arrayField: { [key: string]: string[] },
  boolField: { [key: string]: boolean },
  enumField: { [key: string]: 'foo' | 'bar' | 'baz' },
  funcField: { [key: string]: () => string },
  instanceField: { [key: string]: ObjectDefault },
  numberField: { [key: string]: number },
  objectField: { [key: string]: { [key: string]: number } },
  shapeField: { [key: string]: {
    foo: string,
    bar: boolean,
    baz: () => void,
  } },
  stringField: { [key: string]: string },
  unionField: { [key: string]: number | string[] },
  objShorthandField: { [key: string]: string },
  objKeyTypeField: { [key: number]: string },
};

export type PrimitiveType = {
  boolField: boolean,
  boolFieldExpanded: boolean,
  booleanField: boolean,
  booleanFieldExpanded: boolean,
  funcField: () => void,
  functionField: ?(arg0: ?string) => void,
  intField: number,
  intFieldExpanded: number,
  integerField: number,
  integerFieldExpanded: number,
  numField: number,
  numFieldExpanded: ?number,
  numberField: number,
  numberFieldExpanded: number,
  floatField: number,
  floatFieldExpanded: number,
  strField: string,
  strFieldExpanded: string,
  stringField: string,
  stringFieldExpanded: string,
};

export type ReferenceBarType = {
  boolField: boolean,
};

export type ReferenceFooType = {
  numberField: number,
  refField: ReferenceBarType,
};

export type ReferenceSelfBasicType = {
  stringField: string,
};

export type ReferenceSelfType = {
  stringField: string,
  referenceField: ReferenceSelfType,
  requiredRefField: ?ReferenceSelfType,
  subsetRefField: Array<ReferenceSelfBasicType>,
};

export type ReferenceSetOnlyStringType = {
  stringField: string,
};

export type ReferenceSetType = {
  boolField: boolean,
  stringField: string,
  numberField: number,
};

export type ReferenceType = {
  stringField: string,
  refField: ?ReferenceFooType,
  referenceField: ReferenceFooType,
  subsetRefField: ReferenceSetOnlyStringType,
};

export type SetsBasicType = {
  foo: string,
  baz: boolean,
};

export type SetsWithRequiredType = {
  bar: number,
  baz: boolean,
  qux: () => void,
};

export type SetsWithNullType = {
  foo: ?string,
  qux: ?() => void,
};

export type SetsWithBothType = {
  baz: boolean,
  qux: ?() => void,
};

export type SetsType = {
  foo: string,
  bar: number,
  baz: boolean,
  qux: () => void,
};

export type ShapeReferencePriceType = {
  amount: number,
  nativeAmount: number,
  exchangeRate: number,
};

export type ShapeReferenceType = {
  fees: ShapeReferencePriceType,
  taxes: ?ShapeReferencePriceType,
  total: ShapeReferencePriceType,
};

export type ShapeType = {
  structAlias: {
    foo: string,
  },
  primitiveFields: {
    string: string,
    bool: boolean,
    func: (arg0: boolean) => void,
    number: number,
  },
  arrayFields: {
    numberArray: number[],
    stringArray: string[],
    shapeArray: Array<{
      foo: string,
    }>,
  },
  enumFields: {
    stringEnum: 'foo' | 'bar' | 'baz',
    intEnum: 1 | 2 | 3,
  },
  instanceFields: {
    instOf: ShapeClassName,
    instanceOf: ShapeDefault,
  },
  objectFields: {
    numberObj: { [key: string]: number },
    boolObject: { [key: string]: boolean },
    intStringObject: { [key: number]: string },
    unionObject: { [key: string]: number | string | {
      foo: string,
    } },
  },
  unionFields: {
    multiUnion: number | boolean | ShapeClassName | { [key: string]: string } | {
      string: string,
      enum: 123 | 456 | 789,
    },
  },
};

export type UnionType = {
  arrayField: string[] | Array<{ [key: string]: string }>,
  primitiveFields: boolean | number | () => void,
  enumField: 'foo' | 'bar' | 'baz' | 789 | 456 | 123,
  instanceField: UnionClassName | UnionDefault,
  objectField: { [key: string]: number } | { [key: string]: string[] },
  shapeField: {
    foo: string,
    bar: boolean,
    baz: () => void,
  } | {
    qux: string | boolean,
  },
  unionField: string | 1 | 2 | 3 | boolean | number,
};
