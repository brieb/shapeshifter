import ArrayDefinition from '../../src/definitions/Array';
import BoolDefinition from '../../src/definitions/Bool';
import EnumDefinition from '../../src/definitions/Enum';
import InstanceDefinition from '../../src/definitions/Instance';
import NumberDefinition from '../../src/definitions/Number';
import ObjectDefinition from '../../src/definitions/Object';
import ReferenceDefinition from '../../src/definitions/Reference';
import Schematic from '../../src/Schematic';
import StringDefinition from '../../src/definitions/String';
import TypeScriptRenderer from '../../src/renderers/TypeScript';
import UnionDefinition from '../../src/definitions/Union';
import { options } from '../mocks';

describe('TypeScriptRenderer', () => {
  let renderer;

  beforeEach(() => {
    renderer = new TypeScriptRenderer(options, new Schematic('/foo.json', {
      name: 'Foo',
      attributes: { id: 'number' },
    }, options));
  });

  describe('renderArray()', () => {
    it('renders', () => {
      expect(renderer.renderArray(new ArrayDefinition(options, 'foo', {
        valueType: 'string',
      }))).toBe('string[]');
    });

    it('handles non-primitive', () => {
      expect(renderer.renderArray(new ArrayDefinition(options, 'foo', {
        valueType: {
          type: 'object',
          valueType: 'string',
        },
      }))).toBe('Array<{ [key: string]: string }>');
    });

    it('handles instance ofs', () => {
      expect(renderer.renderArray(new ArrayDefinition(options, 'foo', {
        valueType: {
          type: 'instance',
          contract: 'FooBar',
        },
      }))).toBe('FooBar[]');
    });
  });

  describe('renderBool()', () => {
    it('renders', () => {
      expect(renderer.renderBool(new BoolDefinition(options, 'foo'))).toBe('boolean');
    });
  });

  describe('renderEnum()', () => {
    it('renders', () => {
      expect(renderer.renderEnum(new EnumDefinition(options, 'bar', {
        valueType: 'number',
        values: [1, 23, 164],
      }))).toBe('FooBarEnum');
    });
  });

  describe('renderInstance()', () => {
    it('renders', () => {
      expect(renderer.renderInstance(new InstanceDefinition(options, 'foo', {
        contract: 'FooBar',
      }))).toBe('FooBar');
    });
  });

  describe('renderNumber()', () => {
    it('renders', () => {
      expect(renderer.renderNumber(new NumberDefinition(options, 'foo'))).toBe('number');
    });
  });

  describe('renderObject()', () => {
    it('renders', () => {
      expect(renderer.renderObject(new ObjectDefinition(options, 'foo', {
        valueType: 'number',
      }))).toBe('{ [key: string]: number }');
    });

    it('handles key type', () => {
      expect(renderer.renderObject(new ObjectDefinition(options, 'foo', {
        keyType: 'number',
        valueType: {
          type: 'array',
          valueType: 'string',
        },
      }))).toBe('{ [key: number]: string[] }');
    });
  });

  describe('renderReference()', () => {
    it('renders', () => {
      expect(renderer.renderReference(new ReferenceDefinition(options, 'foo', {
        self: true,
      }))).toBe('FooInterface');
    });
  });

  describe('renderString()', () => {
    it('renders', () => {
      expect(renderer.renderString(new StringDefinition(options, 'foo'))).toBe('string');
    });
  });

  describe('renderUnion()', () => {
    const valueTypes = [
      'string',
      { type: 'bool' },
      {
        type: 'array',
        valueType: 'number',
      },
    ];

    it('renders', () => {
      expect(renderer.renderUnion(new UnionDefinition(options, 'foo', {
        valueTypes,
      }))).toBe('string | boolean | number[]');
    });

    it('handles nested unions', () => {
      expect(renderer.renderUnion(new UnionDefinition(options, 'foo', {
        valueTypes: [
          ...valueTypes,
          {
            type: 'union',
            valueTypes: [
              {
                type: 'instance',
                contract: 'FooBar',
              },
            ],
          },
        ],
      }))).toBe('string | boolean | number[] | FooBar');
    });
  });
});
