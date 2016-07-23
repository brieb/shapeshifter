module.exports = {
  name: 'Array',
  imports: [
    { default: 'ArrayDefault', path: '../stub' }
  ],
  constants: {
    ARRAY_NUM: 123
  },
  attributes: {
    arrayField: {
      type: 'array',
      valueType: {
        type: 'array',
        valueType: 'string'
      }
    },
    boolField: {
      type: 'array',
      valueType: 'bool'
    },
    enumField: {
      type: 'array',
      valueType: {
        type: 'enum',
        name: 'ArrayStringEnum',
        valueType: 'string',
        values: ['foo', 'bar', 'baz']
      }
    },
    funcField: {
      type: 'array',
      valueType: {
        type: 'func',
        returnType: 'number',
        argTypes: [
          'string',
          {
            type: 'number'
          }
        ]
      },
      null: false
    },
    instanceField: {
      type: 'array',
      valueType: {
        type: 'instance',
        contract: 'ArrayDefault'
      }
    },
    numberField: {
      type: 'array',
      valueType: 'number',
      required: true
    },
    objectField: {
      type: 'array',
      valueType: {
        type: 'object',
        valueType: 'number'
      }
    },
    shapeField: {
      type: 'array',
      valueType: {
        type: 'shape',
        attributes: {
          foo: 'string',
          bar: 'bool',
          baz: {
            type: 'func',
            required: true
          }
        }
      }
    },
    stringField: {
      type: 'array',
      valueType: 'string'
    },
    unionField: {
      type: 'array',
      valueType: {
        type: 'union',
        valueTypes: [
          {
            type: 'string'
          },
          {
            type: 'enum',
            name: 'ArrayUnionNumberEnum',
            valueType: 'number',
            values: [1, 2, 3]
          }
        ]
      }
    }
  }
};