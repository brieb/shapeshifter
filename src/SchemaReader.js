/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';
import Factory from './Factory';
import Definition from './Definition';
import isObject from './helpers/isObject';

import type {
  Options,
  SchemaStructure,
  AttributesField,
  MetadataField,
  ConstantsField,
  ImportsField,
  SubsetsField,
  ReferencesField,
} from './types';

export default class SchemaReader {
  data: SchemaStructure;
  path: string;
  name: string;
  options: Options;
  metadata: MetadataField;
  attributes: Definition[];
  constants: ConstantsField;
  imports: ImportsField;
  subsets: SubsetsField;
  references: ReferencesField;
  referenceReaders: { [key: string]: SchemaReader };

  /**
   * Load and parse a schema, either as a JSON string, or as a JS object.
   *
   * @param {String} filePath
   * @param {Object} data
   * @param {Object} options
   */
  constructor(filePath: string, data: SchemaStructure, options: Options) {
    this.path = filePath;
    this.name = path.basename(filePath);
    this.data = data;
    this.options = options;
    this.metadata = {};
    this.attributes = [];
    this.constants = {};
    this.imports = [];
    this.subsets = {};
    this.references = {};
    this.referenceReaders = {};

    this.setup();
  }

  /**
   * Throw an error prefixed with the schema name.
   *
   * @param {String} error
   */
  throwError(error: string): void {
    throw new SyntaxError(`[${this.name}] ${error}`);
  }

  /**
   * Setup the state of the schema.
   */
  setup(): void {
    const data = this.data;

    this.setName(data.name);
    this.setAttributes(data.attributes);

    if ('meta' in data) {
      this.setMeta(data.meta);
    }

    if ('constants' in data) {
      this.setConstants(data.constants);
    }

    if ('imports' in data) {
      this.setImports(data.imports);
    }

    if ('references' in data) {
      this.setReferences(data.references);
    }

    if ('subsets' in data) {
      this.setSubsets(data.subsets);
    }
  }

  /**
   * Set schema attributes.
   *
   * @param {Object} attributes
   */
  setAttributes(attributes: AttributesField): void {
    if (!isObject(attributes) || !Object.keys(attributes).length) {
      this.throwError('No attributes found in schema.');
    }

    // Convert to type definitions
    this.attributes = Object.keys(attributes).map((attribute) => (
      Factory.definition(this.options, attribute, attributes[attribute])
    ));
  }

  /**
   * Set schema constants.
   *
   * @param {Object} constants
   */
  setConstants(constants: ConstantsField): void {
    if (!isObject(constants)) {
      this.throwError('Schema constants must be an object that maps to primitive values.');
    }

    this.constants = constants;
  }

  /**
   * Set schema imports.
   *
   * @param {Object[]} imports
   */
  setImports(imports: ImportsField): void {
    if (!Array.isArray(imports)) {
      this.throwError('Schema imports must be an array of import declarations.');
    }

    this.imports = imports;
  }

  /**
   * Set schema metadata.
   *
   * @param {Object} metadata
   */
  setMeta(metadata: MetadataField): void {
    if (!isObject(metadata)) {
      this.throwError('Schema metadata must be an object of strings.');
    }

    this.metadata = metadata;
  }

  /**
   * Set the name of the schema.
   *
   * @param {String} name
   */
  setName(name: string): void {
    if (!name || typeof name !== 'string') {
      this.throwError('No name found in schema.');
    }

    this.name = name;
  }

  /**
   * Set reference schemas.
   *
   * @param {Object} references
   */
  setReferences(references: ReferencesField): void {
    if (!isObject(references)) {
      this.throwError('Schema references must be an object that maps to other schemas.');
    }

    this.references = references;
  }

  /**
   * Set subsets of the schema.
   *
   * @param {Object} subsets
   */
  setSubsets(subsets: SubsetsField): void {
    if (!isObject(subsets)) {
      this.throwError('Schema subsets must be an object.');
    }

    this.subsets = subsets;
  }
}
