import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function svelte(text) {
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\//g, "&#47;")

    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\=\{)/g, spirit("&#61;{", "royal-purple") + spiritBegin("gold-tips"))
    .replace(/(\})/g, spiritEnd() + spirit("}", "royal-purple"))
    .replace(/(\=\")/g, spirit("&#61;&#34;", "royal-purple") + spiritBegin("gold-tips"))
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "royal-purple"))
    // .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("denim"))

    // .replace(/(?<=&lt;)&#47;/g, spirit("&#47;", "blush"))
    .replace(/&lt;/g, spirit("&lt;", "blush"))
    .replace(/&#47;(?=&gt;)/g, spiritEnd() + spirit("&#47;", "blush"))
    .replace(/&gt;/g, spiritEnd() + spirit("&gt;", "blush"));
}