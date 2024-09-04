import { deepEqual } from "node:assert/strict"
import { test } from "node:test"

type Greeting = {
  message: string
}

function greet(name: string): Greeting {
  return { message: `Welcome, ${name}!` }
}

test("should greet person", () => {
  const result = greet("Alek")

  deepEqual(result, { message: "Welcome, Alek!" })
})
