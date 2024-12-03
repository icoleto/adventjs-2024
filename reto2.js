function createFrame(names) {
  const longestName = names.reduce(
    (acc, name) => (name.length > acc ? name.length : acc),
    0
  );

  return `${"*".repeat(longestName + 4)}
${names
  .map((name) => {
    return `* ${name}${" ".repeat(longestName - name.length)} *`;
  })
  .join("\n")}
${"*".repeat(longestName + 4)}`;
}

const result = createFrame(["midu", "madeval", "educalvolpz"]);
const expected = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`;

console.log("Result:\n", result);
console.log("----------------------");
console.log("Expected:\n", expected);

console.log(result === expected);
