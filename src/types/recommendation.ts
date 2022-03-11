import { Image, Track } from 'types'

export type Recommendation = {
  id: string
  images: Array<Image>
  type: string
  name: string
  track: Track
}
