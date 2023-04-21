import assert from "assert/strict";
import fs from "fs";
import ohm from "ohm-js";

// Programs expected to be syntactically correct
const syntaxChecks = [
  // ["single line func", "func square(n) -> n<n>*"],
  // ["comments", "func square(n) -> n<n>* # Single line fundecl"],
  [
    "variable assignment",
    `characterName = "Vi" #name
    characterAge = 23 #age`,
  ],
  [
    "print statements",
    `print(21)
    print("hi")
    print(13.23)`,
  ],
  // ["func call", `myFunc(1, 3, "hello")`],
  // [
  //   "variable assignment overrides",
  //   `my_num<1>
  // my_num<3>  # override
  // my_num<4>- # subtract
  // `,
  // ],
  ["simple loop declaration", "iter loop range[0,10]{}"],
  // [
  //   "dot operators",
  //   `
  //   -counter<0>
  //   iter loop range[0,10] {
  //       counter<iter.index>
  //   }
  //   `,
  // ],
  // ["this shouldnt work", `-name<"Kira">hi`],
];

// Programs with syntax errors that the parser will detect
const syntaxErrors = [
  ["empty programs", "", /Line 1, col 1:/],
  // ["extra junk after statements", `-name<"Kira">hi`, /Line 1, col 16:/],
];

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
