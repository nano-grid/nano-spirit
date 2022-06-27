import { spirit, spiritBegin, spiritEnd } from "./spirit-code";

export function js(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\{)/g, spirit("{", "quote") + spiritBegin("attr"))
    .replace(/(\})/g, spiritEnd() + spirit("}", "quote"))
    
    .replace(/(\")/g, spirit("&#34;", "quote"))
    .replace(/\&nbsp\;\=\&nbsp\;/g, spirit(" = ", "value"))
    .replace(/\&nbsp\;\=\=\=\&nbsp\;/g, spirit(" === ", "value"))
    .replace(/\&nbsp\;\!\=\=\&nbsp\;/g, spirit(" !== ", "value"))
    .replace(/\&nbsp\;\?\&nbsp\;/g, spirit(" ? ", "value"))
    .replace(/\&nbsp\;\:\&nbsp\;/g, spirit(" : ", "value"))
    .replace(/\&nbsp\;\+\&nbsp\;/g, spirit(" + ", "value"))
    .replace(/\&nbsp\;\-\&nbsp\;/g, spirit(" - ", "value"))
    .replace(/\&nbsp\;\*\&nbsp\;/g, spirit(" * ", "value"))
    .replace(/\&nbsp\;\&\&\&nbsp\;/g, spirit(" && ", "value"))
    
    .replace(/(\()/g, spirit("(", "tag"))
    .replace(/(\))/g, spirit(")", "tag"))

    .replace(/(\[)/g, spirit("[", "tag"))
    .replace(/(\])/g, spirit("]", "tag"))
}