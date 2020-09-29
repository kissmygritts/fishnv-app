const removeNullish = (obj) => {
  return Object.entries(obj)
    /* eslint-disable-next-line */
    .reduce((a, [k, v]) => (v ? (a[k] = v, a): a), {})
}

module.exports = {
  removeNullish
}
