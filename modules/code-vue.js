import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function vue(text) {
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\//g, "&#47;")

    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\=\")/g, spirit("&#61;&#34;", "quote") + spiritBegin("value"))
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
    .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

    .replace(/(?<=&lt;)&#47;/g, spirit("&#47;", "tag"))
    .replace(/&lt;/g, spirit("&lt;", "tag"))
    .replace(/&#47;(?=&gt;)/g, spiritEnd() + spirit("&#47;", "tag"))
    .replace(/&gt;/g, spiritEnd() + spirit("&gt;", "tag"));
}