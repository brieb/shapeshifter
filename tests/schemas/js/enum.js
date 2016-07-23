module.exports = {
  name: 'Enum',
  attributes: {
    boolField: {
      type: 'enum',
      name: 'BoolEnum',
      valueType: 'bool',
      values: [true, false]
    },
    booleanField: {
      type: 'enum',
      name: 'BooleanEnum',
      valueType: 'boolean',
      values: [false, true]
    },
    intField: {
      type: 'enum',
      name: 'IntEnum',
      valueType: 'int',
      values: [123]
    },
    integerField: {
      type: 'enum',
      name: 'IntegerEnum',
      valueType: 'integer',
      values: [1, 2, 3]
    },
    numField: {
      type: 'enum',
      name: 'NumEnum',
      valueType: 'num',
      values: [123, 456, 789]
    },
    numberField: {
      type: 'enum',
      name: 'NumberEnum',
      valueType: 'number',
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    floatField: {
      type: 'enum',
      name: 'FloatEnum',
      valueType: 'float',
      values: [12.34, 56.78, 9.00, 65.4]
    },
    strField: {
      type: 'enum',
      name: 'StrEnum',
      valueType: 'str',
      values: ['foo', 'bar']
    },
    stringField: {
      type: 'enum',
      name: 'StringEnum',
      valueType: 'string',
      values: ['baz', 'qux']
    }
  }
};