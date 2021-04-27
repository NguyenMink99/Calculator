export default function isNumber(item) {
  return /[0-9]+/.test(item);//Use RegEx, method test use search and match
}
