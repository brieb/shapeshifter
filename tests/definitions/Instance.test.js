import { falsyValues, options, truthyValues } from '../mocks';
import InstanceDefinition from '../../src/definitions/Instance';

describe('definitions/Instance', () => {
  it('errors if `contract` is empty', () => {
    falsyValues.forEach((value) => {
      expect(() => (
        new InstanceDefinition(options, 'foo', { contract: value })
      )).toThrowError('Instance definitions require a "contract" property, ' +
        'which is the function or class name to evaluate against.');
    });
  });

  it('errors if `contract` is not a string', () => {
    truthyValues
      .filter(value => typeof value !== 'string')
      .forEach((value) => {
        expect(() => (
          new InstanceDefinition(options, 'foo', { contract: value })
        )).toThrowError('Invalid type detected, "contract" property must be a string.');
      });
  });
});
