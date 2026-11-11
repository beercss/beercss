import { expect, test } from "vitest";
import domain from "../src/home/domain";

test("updateShape replaces existing shape class with new shape", () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <div id="shape-1" class="shape circle active"></div>
    <div id="shape-2" class="shape boom border"></div>
    <div id="shape-3" class="other-element"></div>
  `;
  document.body.appendChild(container);

  domain.updateShape("#shape-1", "triangle");
  expect(document.querySelector("#shape-1")?.className).toBe("shape triangle active");

  domain.updateShape("#shape-1", "diamond");
  expect(document.querySelector("#shape-1")?.className).toBe("shape diamond active");

  domain.updateShape("#shape-2", "sunny");
  expect(document.querySelector("#shape-2")?.className).toBe("shape sunny border");

  domain.updateShape(".shape", "puffy");
  expect(document.querySelector("#shape-1")?.className).toBe("shape puffy active");
  expect(document.querySelector("#shape-2")?.className).toBe("shape puffy border");

  container.remove();
});
