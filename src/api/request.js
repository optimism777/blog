
export function getArticle () {
  return this.$axios.get('/api/getArticle').then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
