import { deepEqual } from "./utils.js";

function createXmasTree(height, ornament) {
  let tree = [];
  const totalWidth = height * 2 - 1;
  let width = 1;
  for (let i = 0; i < height; i++) {
    if (i == 0) {
      width = 1;
    } else {
      width += 2;
    }
    tree.push(
      `${"_".repeat((totalWidth - width) / 2)}${ornament.repeat(
        width
      )}${"_".repeat((totalWidth - width) / 2)}`
    );
  }
  tree.push(
    `${"_".repeat((totalWidth - 1) / 2)}#${"_".repeat((totalWidth - 1) / 2)}`
  );
  tree.push(
    `${"_".repeat((totalWidth - 1) / 2)}#${"_".repeat((totalWidth - 1) / 2)}`
  );

  return tree.join("\n");
}

const expected = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;

console.log(createXmasTree(5, "*"));
console.log(deepEqual(createXmasTree(5, "*"), expected));
