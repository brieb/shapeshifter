// Use a hash map for faster lookups
const ALIAS_MAP = {
  bool: 'boolean',
  func: 'function',
  inst: 'instance',
  int: 'number',
  integer: 'number',
  num: 'number',
  float: 'number',
  obj: 'object',
  struct: 'shape',
  str: 'string',
};

/**
 * Expand and return the valid type name for all aliases and shorthands.
 *
 * @param {String} type
 * @returns {String}
 */
export default function normalizeType(type) {
  type = String(type).toLowerCase();

  return ALIAS_MAP[type] || type;
}
