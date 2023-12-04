import {ITunesService} from 'itunes/services/iTunesService'

const iTunesService = new ITunesService()

export class SongService {
  searchSongs(args: {artistName: string}) {
    const artistName = args.artistName
    return iTunesService.searchSongs(artistName)
  }
}
