import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function css(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/\:/g, spirit(":", "blush"))
    .replace(/\{/g, "{" + spiritBegin("silver"))
    .replace(/\}/g, spiritEnd() + "}")

    .replace(/\{/g, spirit("{", "royal-purple"))
    .replace(/\}/g, spirit("}", "royal-purple"))

    .replace(/\(/g, spirit("(", "denim"))
    .replace(/\)/g, spirit(")", "denim"));
}