import { expect, test } from "vitest";
import "./globals";

function calculate(value: number): Array<string> {
  return [
    `${Math.max(50, Math.min(100, (12.5 + value) * 4))}% 0%`,
    `100% ${Math.max(0, Math.min(50, 50 - (25 - value) * 4))}%`,
    `100% ${Math.max(50, Math.min(100, 100 - (37.5 - value) * 4))}%`,
    `${Math.min(100, Math.max(50, 50 + (50 - value) * 4))}% 100%`,
    `${Math.min(50, Math.max(0, (62.5 - value) * 4))}% 100%`,
    `0% ${Math.min(100, Math.max(50, 50 + (75 - value) * 4))}%`,
    `0% ${Math.min(50, Math.max(0, (87.5 - value) * 4))}%`,
    `${Math.min(50, Math.max(0, 50 - (100 - value) * 4))}% 0%`,
  ];
}

test("calculating percentage on circular progress", () => {
  expect(calculate(-1)[0]).toBe("50% 0%");
  expect(calculate(0)[0]).toBe("50% 0%");
  expect(calculate(12.5)[0]).toBe("100% 0%");
  expect(calculate(13)[0]).toBe("100% 0%");

  expect(calculate(12)[1]).toBe("100% 0%");
  expect(calculate(12.5)[1]).toBe("100% 0%");
  expect(calculate(25)[1]).toBe("100% 50%");
  expect(calculate(26)[1]).toBe("100% 50%");

  expect(calculate(24)[2]).toBe("100% 50%");
  expect(calculate(25)[2]).toBe("100% 50%");
  expect(calculate(37.5)[2]).toBe("100% 100%");
  expect(calculate(38)[2]).toBe("100% 100%");

  expect(calculate(37)[3]).toBe("100% 100%");
  expect(calculate(37.5)[3]).toBe("100% 100%");
  expect(calculate(50)[3]).toBe("50% 100%");
  expect(calculate(55)[3]).toBe("50% 100%");

  expect(calculate(49)[4]).toBe("50% 100%");
  expect(calculate(50)[4]).toBe("50% 100%");
  expect(calculate(62.5)[4]).toBe("0% 100%");
  expect(calculate(63)[4]).toBe("0% 100%");

  expect(calculate(62)[5]).toBe("0% 100%");
  expect(calculate(62.5)[5]).toBe("0% 100%");
  expect(calculate(75)[5]).toBe("0% 50%");
  expect(calculate(76)[5]).toBe("0% 50%");

  expect(calculate(74)[6]).toBe("0% 50%");
  expect(calculate(75)[6]).toBe("0% 50%");
  expect(calculate(87.5)[6]).toBe("0% 0%");
  expect(calculate(88)[6]).toBe("0% 0%");

  expect(calculate(87)[7]).toBe("0% 0%");
  expect(calculate(87.5)[7]).toBe("0% 0%");
  expect(calculate(100)[7]).toBe("50% 0%");
  expect(calculate(101)[7]).toBe("50% 0%");
});
