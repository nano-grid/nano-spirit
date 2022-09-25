export function spirit(word, klaso) {
  return `<nn-crayon nn-color='${klaso}'>${word}</nn-crayon>`;
}

export function spiritBegin(klaso) {
  return `<nn-crayon nn-color='${klaso}'>`;
}

export function spiritEnd() {
  return `</nn-crayon>`;
}