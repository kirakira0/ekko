import assert from "assert/strict";
import fs from "fs";
import ohm from "ohm-js";

// Programs expected to be syntactically correct
const syntaxChecks = [
  ["single line func", "func square(n) -> n<n>*"],
  ["comments", "func square(n) -> n<n>* # Single line fundecl"],
  ["variable assignment", "name<Vi> # Variable assignment"],
  [
    "print statements",
    `print("Oh the misery, everybody wants to be my enemy")
    print()`,
  ],
  ["func call", `myFunc(1, 3, "hello")`],
  [
    "variable assignment overrides",
    `my_num<1>
  my_num<3>  # override 
  my_num<4>- # subtract
  `,
  ],
];

// Programs with syntax errors that the parser will detect
const syntaxErrors = [["empty programs", "", /Line 1, col 1:/]];

describe("The grammar", () => {
  const grammar = ohm.grammar(fs.readFileSync("src/ekko.ohm"));
  for (const [scenario, source] of syntaxChecks) {
    it(`properly specifies ${scenario}`, () => {
      assert(grammar.match(source).succeeded());
    });
  }
  for (const [scenario, source, errorMessagePattern] of syntaxErrors) {
    it(`does not permit ${scenario}`, () => {
      const match = grammar.match(source);
      assert(!match.succeeded());
      assert(new RegExp(errorMessagePattern).test(match.message));
    });
  }
});
