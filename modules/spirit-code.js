export function spirit(word, klaso) {
  return `<span class='nn-crayon nn-${klaso}'>${word}</span>`;
}

export function spiritBegin(klaso) {
  return `<span class='nn-crayon nn-${klaso}'>`;
}

export function spiritEnd() {
  return `</span>`;
}