import { Tile } from '../../basics'
import { VideoTileProps } from './video-tile.types'

export const VideoTile: React.FC<VideoTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    video,
    textAlign = 'center',
    margins = false,
}: VideoTileProps) => (
    <Tile type={type} margins={margins}>
        <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
        ></iframe>
    </Tile>
)
