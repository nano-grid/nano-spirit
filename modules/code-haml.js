import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function haml(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(
      /(\:&nbsp;\")/g,
      spirit(":&nbsp;&#34;", "quote") + spiritBegin("value")
    )
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
    .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

    .replace(/\{/g, spirit("{", "tag") + spiritBegin("attr"))
    .replace(/\}/g, spiritEnd() + spirit("}", "tag"));
}