export function capitalize(text: string) {
  let setStringName = text
  setStringName = `${setStringName[0].toUpperCase()}${setStringName.substring(
    1
  )}`
  return setStringName
}
