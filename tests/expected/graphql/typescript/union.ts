/* Automatically generated by shapeshifter. Do not modify! */
/* eslint-disable */

export enum UnionEnumField0Enum {
  FOO,
  BAR
}

export enum UnionEnumField1Enum {
  BAZ,
  QUX
}

export enum UnionUnionField10Enum {
  FOO,
  BAR
}

export enum UnionUnionField11Enum {
  BAZ,
  QUX
}

export interface UnionFooStructInterface {
  foo: string | null;
}

export interface UnionBarStructInterface {
  bar: boolean | null;
}

export interface UnionBazStructInterface {
  baz: boolean | number | null;
}

export interface UnionInterface {
  primitiveField: boolean | number | null;
  enumField: UnionEnumField0Enum | UnionEnumField1Enum | null;
  shapeField: UnionFooStructInterface | UnionBarStructInterface | UnionBazStructInterface | null;
  unionField: boolean | number | UnionUnionField10Enum | UnionUnionField11Enum | UnionFooStructInterface | UnionBarStructInterface | UnionBazStructInterface | null;
}