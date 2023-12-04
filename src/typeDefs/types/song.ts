import {gql} from 'apollo-server'

export const Song = gql`
  type Song {
    trackId: Int
    trackName: String
    collectionName: String
    artistName: String
    primaryGenreName: String
    releaseDate: String
  }
`

/*
Sample response format
{
      wrapperType: 'track',
      kind: 'song',
      artistId: 909253,
      collectionId: 1440851963,
      trackId: 1440851968,
      artistName: 'Jack Johnson',
      collectionName: 'To the Sea (Bonus Track Version)',
      trackName: 'You and Your Heart',
      collectionCensoredName: 'To the Sea (Bonus Track Version)',
      trackCensoredName: 'You and Your Heart',
      artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/you-and-your-heart/1440851963?i=1440851968&uo=4',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/16/10/ff/1610fffd-afb3-c914-ab3c-b58ba93d06b1/mzaf_356097296229876349.plus.aac.p.m4a',
      artworkUrl30: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/2a/ee/04/2aee045d-12b0-84f2-56df-1c357118c63f/source/30x30bb.jpg',
      artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/2a/ee/04/2aee045d-12b0-84f2-56df-1c357118c63f/source/60x60bb.jpg',
      artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/2a/ee/04/2aee045d-12b0-84f2-56df-1c357118c63f/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2010-04-06T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 1,
      trackTimeMillis: 192853,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true
    }
 */
