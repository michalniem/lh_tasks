export function isMatchedObject(testedObject, matchingObject) {
  return Object.keys(matchingObject).every(
    (key, index) => key === Object.keys(testedObject)[index]
  );
}
