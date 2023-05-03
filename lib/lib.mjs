import { add } from "./myLib.mjs";
import assert from "assert";

console.log("add()\nShould add two numbers");
try {
  assert.strictEqual(add(2, 2), 3);
  console.log("Success");
} catch (error) {
  console.log("Failed");
  console.error(error);
}
