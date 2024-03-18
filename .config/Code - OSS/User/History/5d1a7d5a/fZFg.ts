import { TileProps } from '../../basics'

export type VideoTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    video: string
    margins?: boolean
}
