export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=u7Yrmgn9RUtwW7p01x77dAjVvIUHB1md&q=${category}&limit=10`;
    const request = await fetch( url )
    const { data } = await request.json()
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
  }
  