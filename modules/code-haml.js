import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function haml(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(
      /(\:&nbsp;\")/g,
      spirit(":&nbsp;&#34;", "royal-purple") + spiritBegin("gold-tips")
    )
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "royal-purple"))
    // .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("denim"))

    .replace(/\{/g, spirit("{", "blush") + spiritBegin("denim"))
    .replace(/\}/g, spiritEnd() + spirit("}", "blush"));
}