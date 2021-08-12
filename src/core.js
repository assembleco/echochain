export function ask(path, body) {
  return fetch(path + "?" + new URLSearchParams(body))
}

export function push(path, body) {
  return fetch(path, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}
