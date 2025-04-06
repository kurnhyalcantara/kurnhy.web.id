export function kebabCaseToPlainTxt(text: string): string {
  return text.replace(/-/g, ' ');
}

export function convertToTitleCase(text: string): string {
  const words = text.split(' ');

  const titledCaseWords = words.map((word) => {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase + word.slice(1).toLowerCase();
  });

  return titledCaseWords.join(' ');
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
