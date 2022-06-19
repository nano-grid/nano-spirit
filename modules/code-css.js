import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function css(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/\:/g, spirit(":", "tag"))
    .replace(/\{/g, "{" + spiritBegin("text"))
    .replace(/\}/g, spiritEnd() + "}")

    .replace(/\{/g, spirit("{", "quote"))
    .replace(/\}/g, spirit("}", "quote"))

    .replace(/\(/g, spirit("(", "attr"))
    .replace(/\)/g, spirit(")", "attr"))
}