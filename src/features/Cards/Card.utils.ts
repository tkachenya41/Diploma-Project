export function getRatingClass(rate: number) {
  if (rate > 7) {
    return 'goodRating';
  }
  return rate < 5 ? 'badRating' : 'usualRating';
}
