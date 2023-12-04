import {SongService} from 'services/songService'

const songService = new SongService()

export const songResolvers = {
  Query: {
    songs: (_parent: {}, args: {artistName: string}) => {
      const response = songService.searchSongs(args)
      // TODO here is where to chain up multiple sequence call to downstream APIs
      return response
    },
  },
}
