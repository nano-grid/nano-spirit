export function shell(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")
}