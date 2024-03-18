import { Tile } from '../../basics'
import { VideoTileProps } from './video-tile.types'

export const VideoTIle: React.FC<VideoTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    video,
    textAlign = 'center',
    margins = false,
}: VideoTileProps) => (
    <Tile type={type} margins={margins}>
        <iframe></iframe>
    </Tile>
)
