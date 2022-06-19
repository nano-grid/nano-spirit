export function spirit(word, klaso) {
  return `<span class='nn-sp-${klaso}'>${word}</span>`;
}

export function spiritBegin(klaso) {
  return `<span class='nn-sp-${klaso}'>`;
}

export function spiritEnd() {
  return `</span>`;
}