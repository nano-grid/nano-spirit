import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function react(text) {
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\//g, "&#47;")

    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\{)/g, spirit("{", "royal-purple") + spiritBegin("denim"))
    .replace(/(\})/g, spiritEnd() + spirit("}", "royal-purple"))

    .replace(/(\")/g, spirit("&#34;", "royal-purple"))
    .replace(/\&nbsp\;\=\&nbsp\;/g, spirit(" = ", "gold-tips"))
    .replace(/\&nbsp\;\=\=\=\&nbsp\;/g, spirit(" === ", "gold-tips"))
    .replace(/\&nbsp\;\!\=\=\&nbsp\;/g, spirit(" !== ", "gold-tips"))
    .replace(/\&nbsp\;\?\&nbsp\;/g, spirit(" ? ", "gold-tips"))
    .replace(/\&nbsp\;\:\&nbsp\;/g, spirit(" : ", "gold-tips"))
    .replace(/\&nbsp\;\+\&nbsp\;/g, spirit(" + ", "gold-tips"))
    .replace(/\&nbsp\;\-\&nbsp\;/g, spirit(" - ", "gold-tips"))
    .replace(/\&nbsp\;\*\&nbsp\;/g, spirit(" * ", "gold-tips"))
    .replace(/\&nbsp\;\&\&\&nbsp\;/g, spirit(" && ", "gold-tips"))
    
    .replace(/(\()/g, spirit("(", "blush"))
    .replace(/(\))/g, spirit(")", "blush"))

    .replace(/\&lt\;/g, spirit("&lt;", "blush"))
    .replace(/\&gt\;/g, spirit("&gt;", "blush"))

    .replace(/(\[)/g, spirit("[", "blush"))
    .replace(/(\])/g, spirit("]", "blush"));
}