import { falsyValues, options, truthyValues } from '../mocks';
import ReferenceDefinition from '../../src/definitions/Reference';

describe('definitions/Reference', () => {
  it('errors if `reference` is empty', () => {
    falsyValues.forEach((value) => {
      expect(() => (
        new ReferenceDefinition(options, 'foo', { reference: value })
      )).toThrowError('Reference definitions require a "reference" property, ' +
        'which points to an external schema to use, ' +
        'or a "self" property, which uses the current schema.');
    });
  });

  it('errors if `reference` is not a string', () => {
    truthyValues
      .filter(value => typeof value !== 'string')
      .forEach((value) => {
        expect(() => (
          new ReferenceDefinition(options, 'foo', { reference: value })
        )).toThrowError('Invalid type detected, "reference" property must be a string.');
      });
  });

  it('errors if `self` is not a boolean', () => {
    truthyValues
      .filter(value => typeof value !== 'boolean')
      .forEach((value) => {
        expect(() => (
          new ReferenceDefinition(options, 'foo', { self: value })
        )).toThrowError('Invalid type detected, "self" property must be a boolean.');
      });
  });

  it('errors if `subset` is not a string', () => {
    truthyValues
      .filter(value => typeof value !== 'string')
      .forEach((value) => {
        expect(() => (
          new ReferenceDefinition(options, 'foo', { reference: 'foo', subset: value })
        )).toThrowError('Invalid type detected, "subset" property must be a string.');
      });
  });

  it('errors if `export` is not a boolean', () => {
    truthyValues
      .filter(value => typeof value !== 'boolean')
      .forEach((value) => {
        expect(() => (
          new ReferenceDefinition(options, 'foo', { reference: 'foo', export: value })
        )).toThrowError('Invalid type detected, "export" property must be a boolean.');
      });
  });
});
