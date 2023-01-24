![Logo](https://raw.githubusercontent.com/rtoal/ekko/main/docs/logo.png)

# Ekko

A experimental programming language with many temporal features.

```
// Greetings

stdout <- "Hello, world"
```

## Language Specification

See the file src/syntax/ekko.ohm for the grammar.

The language is very much in a rapid design phase right now. A language manual will be coming as soon as the basic ideas start to settle.

## Building

Nodejs is required to build and run this project. Make sure you have a recent version of Node, since the source code uses a fair amount of very modern JavaScript.

Clone the repo, then run `npm install`.

You can then run `npm test`.

## Usage

You can run this on the command line or use this as a module in a larger program.

Command line syntax:

```
node ekko.js <filename> <outputType>
```

The `outputType` indicates what you wish to print to standard output:

<table>
<tr><th>Option</th><th>Description</th></tr>
<tr><td>ast</td><td>The AST</td></tr>
<tr><td>analyzed</td><td>The decorated AST</td></tr>
<tr><td>optimized</td><td>The optimized decorated AST</td></tr>
<tr><td>js</td><td>The translation of the program to JavaScript</td></tr>
</table>

To embed in another program:

```
import { compile } from "ekko"

compile(programAsString, outputType)
```

where the `outputType` argument is as in the previous section.

## Original Authors

@rtoal, @amandacmarques, @kirakira0

## Contributing

We’re happy to take PRs. As usual, be nice when filing issues and contributing. We’d love to see any improvements you might have for the language and its implementation.

Make sure to run `npm test` before submitting the PR.
