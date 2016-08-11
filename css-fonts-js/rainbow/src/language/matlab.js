/**
* Matlab patterns
*
* @author Leo Accend
* @version 1.0.0
*/
Rainbow.extend("matlab", [
  {
      name: "constant",
      pattern: /\b(false|null|true|[A-Z_]+)\b/g
  },
  {
      matches: {
          1: "keyword",
          2: "support.namespace"
      },
      pattern: /(import|package)\s(.+)/g
  },
  {
      // see http://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html
      name: "keyword",
      pattern: /\b(break|case|catch|classdef|continue|else|elseif|end|for|function|global|if|otherwise|parfor|persistent|return|spmd|switch|try|while)\b/g
  },
  {
      name: "string",
      pattern: /(".*?")/g
  },
  {
      name: "char",
      pattern: /(')(.|\\.|\\u[\dA-Fa-f]{4})\1/g
  },
  {
      name: "integer",
      pattern: /\b(0x[\da-f]+|\d+)L?\b/g
  },
  {
      name: "comment",
      pattern: /\/\*[\s\S]*?\*\/|(\/\/).*?$/gm
  },
  {
      name: "support.annotation",
      pattern: /@\w+/g
  },
  {
      matches: {
          1: "entity.function"
      },
      pattern: /([^@\.\s]+)\(/g
  },
  {
      name: "entity.class",
      pattern: /\b([A-Z]\w*)\b/g
  },
  {
      // see http://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html
      name: "operator",
      pattern: /(\+{1,2}|-{1,2}|~|!|\*|\/||(?:&lt;){1,2}|(?:&gt;){1,3}|exp|(?:&amp;){1,2}|\^|\|{1,2}|\?|:|(?:=|!|\+|-|\*|\/|%|\^|\||(?:&lt;){1,2}|(?:&gt;){1,3})?=)/g
  },
  {
      name: 'storage.modifier',
      pattern: /\b(static|extern|auto|register|volatile|inline)\b/g
  },
    {
        name: 'support.type',
        pattern: /\b(struct|union|enum)\b/g
    },
]);
