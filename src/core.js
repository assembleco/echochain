export default function ask(path, body) {
  return fetch(path + "?" + new URLSearchParams(body))
}
