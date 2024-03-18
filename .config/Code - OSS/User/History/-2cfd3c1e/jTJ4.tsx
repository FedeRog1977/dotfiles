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
        <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
        ></iframe>
    </Tile>
)
