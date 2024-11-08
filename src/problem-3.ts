{
  // Problem-3
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    return lowerSentence.includes(lowerWord) ? 1 : 0;
  }

  console.log(countWordOccurrences("I love Typescript", "typescript"));;

  //
}
