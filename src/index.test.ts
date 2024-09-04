import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

type greeting = {
  message: string
}

function greet(name: string) :greeting {
  return { message: `Welcome, ${name}!`}
}

test("should greet person", () => {
  const result = greet("Alek");

  deepEqual(result, { message: "Welcome, Alek!" });
});
