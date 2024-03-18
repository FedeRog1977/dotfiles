import { TileProps } from '../../basics'
import { AlignProps } from '../../reference'

export type VideoTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    video: string
    textAlign?: AlignProps
    margins?: boolean
}

export const VideoTIle: React.FC<VideoTileProps> = () => (
    <Tile type={type} margins={margins}></Tile>
)
