import axios from 'axios'
import url from 'url'

export class ITunesService {
  async searchSongs(artistName: string) {
    const payload = {limit: '10', term: ''}
    if (artistName) {
      payload.term = artistName
    }
    const params = new url.URLSearchParams(payload)
    const res = await axios.get(`https://itunes.apple.com/search?${params}`)
    const data = res.data
    console.log(data)
    // TODO instead of trust the BE response, here need to validate the response format against a model and map it
    return data.results
  }
}
