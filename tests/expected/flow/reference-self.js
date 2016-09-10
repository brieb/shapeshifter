// @flow

export type ReferenceSelfBasicType = {
  stringField: string,
};

export type ReferenceSelfType = {
  stringField: string,
  referenceField: ReferenceSelfType,
  requiredRefField: ?ReferenceSelfType,
  subsetRefField: Array<ReferenceSelfBasicType>,
};