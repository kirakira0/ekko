import assert from "node:assert/strict";
import parse from "../src/parser.js";
import analyze from "../src/analyzer.js";

// Programs that are semantically correct
const semanticChecks = [["print statements", 'print("Hello world")']];

// Programs that are syntactically correct but have semantic errors
const semanticErrors = [
  //   ["non-distinct fields", "struct S {x: boolean x: int}", /Fields must be distinct/],
];

describe("The analyzer", () => {
  it("throws on syntax errors", () => {
    assert.throws(() => analyze(parse("*(^%$")));
  });
  for (const [scenario, source] of semanticChecks) {
    it(`recognizes ${scenario}`, () => {
      assert.ok(analyze(parse(source)));
    });
  }
  for (const [scenario, source, errorMessagePattern] of semanticErrors) {
    it(`throws on ${scenario}`, () => {
      assert.throws(() => analyze(parse(source)), errorMessagePattern);
    });
  }
  //   it("builds an unoptimized AST for a trivial program", () => {
  //     const ast = analyze(parse("print(1+2);"));
  //     assert.equal(ast.statements[0].callee.name, "print");
  //     assert.equal(ast.statements[0].args[0].left, 1n);
  //   });
});
