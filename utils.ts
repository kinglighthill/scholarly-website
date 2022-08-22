export function capitalize(word: string) {
  const firstLetter = word[0].toUpperCase();
  const otherLetters = word.slice(1);
  
  return firstLetter.concat(otherLetters);
}