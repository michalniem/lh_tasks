export function isMatchedObject(testedObject, matchingObject) {
  const hasTheSameKeysCount = Object.keys(matchingObject).length === Object.keys(testedObject).length;
  const hasEqualKeysName =  Object.keys(matchingObject).every(
    (key, index) => key === Object.keys(testedObject)[index]
  );
  return hasTheSameKeysCount && hasEqualKeysName
}
