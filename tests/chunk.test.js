import chunk from "../src/chunk";

test("camel case should exist", () => {
  expect(camelCase).toBeDefined();
});

test("Convert to camel case from title case", () => {
  const text = "Foo Bar";
  const result = camelCase(text);
  expect(result).toBe("fooBar");
});

test("Convert to camel case with special chars", () => {
  const text = "--Foo--Bar";
  const result = camelCase(text);
  expect(result).toBe("fooBar");
});
