// @flow
import ShapeDefault, { ShapeClassName } from '../stub';

export type ShapeType = {
  structAlias: ?{
    foo: ?string,
  },
  primitiveFields: ?{
    string: ?string,
    bool: boolean,
    number: number,
  },
  arrayFields: ?{
    numberArray: ?Array<?number>,
    stringArray: ?Array<?string>,
    shapeArray: ?Array<?{
      foo: ?string,
    }>,
  },
  enumFields: ?{
    stringEnum: 'foo' | 'bar' | 'baz',
    intEnum: 1 | 2 | 3,
  },
  instanceFields: ?{
    instOf: ?ShapeClassName,
    instanceOf: ?ShapeDefault,
  },
  objectFields: ?{
    numberObj: ?{ [key: string]: ?number },
    boolObject: ?{ [key: string]: ?boolean },
    intStringObject: ?{ [key: number]: ?string },
    unionObject: ?{ [key: string]: ?number | ?string | ?{
      foo: ?string,
    } },
  },
  unionFields: ?{
    multiUnion: ?number | ?boolean | ?ShapeClassName | ?{ [key: string]: ?string } | ?{
      string: ?string,
      enum: 123 | 456 | 789,
    },
  },
};
