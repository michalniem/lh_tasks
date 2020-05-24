export function getObjectKeyByPath(path, object) {
  const properties = path.split(".")
  return properties.reduce((prev, curr) => prev && prev[curr], object)
}
