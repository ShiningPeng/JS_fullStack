export function debounce (func, delay) {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function fingIndex (list, song) {
  return list.fingIndex ((item) => {
    return item.id === song.id
  })
}