// GraphQL provides flowtype files, but I cannot get them to work
import { parse, Kind } from 'graphql';
import type {
  DocumentNode,
  DefinitionNode,
  TypeDefinitionNode,
  EnumValueDefinitionNode,
  FieldDefinitionNode,
  NamedTypeNode,
} from 'graphql/language/ast';

declare module 'graphql' {
  declare export { parse, Kind };
  declare export type DocumentNode = DocumentNode;
  declare export type DefinitionNode = DefinitionNode;
  declare export type TypeDefinitionNode = TypeDefinitionNode;
  declare export type EnumValueDefinitionNode = EnumValueDefinitionNode;
  declare export type FieldDefinitionNode = FieldDefinitionNode;
  declare export type NamedTypeNode = NamedTypeNode;
}
