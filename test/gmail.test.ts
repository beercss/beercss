import { expect, test, beforeAll } from "vitest";
import domain from "../src/gmail/domain";
import { type IItemGmail } from "../src/gmail/interfaces";
import "./globals";

let emails: Array<IItemGmail>;

beforeAll(() => {
  emails = [
    {
      check: false,
      star: false,
    },
    {
      check: false,
      star: false,
    },
    {
      check: false,
      star: false,
    },
  ];
});

test("checkAll()", () => {
  domain.checkAll(emails, true);
  expect(emails.every((x) => x.check)).toBe(true);

  domain.checkAll(emails, false);
  expect(emails.every((x) => !x.check)).toBe(true);
});

test("check()", () => {
  const firstEmail = emails[0];

  domain.check(firstEmail);
  expect(firstEmail.check).toBe(true);

  domain.check(firstEmail);
  expect(firstEmail.check).toBe(false);
});

test("star()", () => {
  const firstEmail = emails[0];

  domain.star(firstEmail);
  expect(firstEmail.star).toBe(true);

  domain.star(firstEmail);
  expect(firstEmail.star).toBe(false);
});
