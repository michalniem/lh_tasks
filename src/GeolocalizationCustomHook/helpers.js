export function getObjectKeyByPath(path, object) {
  const properties = path ? path.split(".") : [];
  return properties.reduce((prev, curr) => prev && prev[curr], object)
}
