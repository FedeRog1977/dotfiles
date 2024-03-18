import { Tile, Typography } from '../../basics'
import { VideoTileProps } from './video-tile.types'

export const VideoTile: React.FC<VideoTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    video,
    margins = false,
}: VideoTileProps) => (
    <Tile type={type} margins={margins} textAlign="center">
        {subHeading && (
            <Typography
                type="h2"
                textAlign="center"
                content={subHeading}
                light
            />
        )}
        {heading && (
            <Typography
                type="h1"
                textAlign="left"
                content={heading}
                light
                paragraphMargins
            />
        )}
        <iframe
            width="800"
            height="500px"
            src={`https://www.youtube.com/embed/${video}`}
        ></iframe>
    </Tile>
)
