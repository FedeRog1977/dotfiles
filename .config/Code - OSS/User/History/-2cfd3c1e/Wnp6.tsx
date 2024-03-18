import { Tile, Typography } from '../../basics'
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
        {subHeading && (
            <Typography
                type="h2"
                textAlign={textAlign}
                content={subHeading}
                light
            />
        )}
        {heading && (
            <Typography
                type="h1"
                textAlign={textAlign}
                content={heading}
                light
                paragraphMargins
            />
        )}
        <iframe
            width="%"
            height="500px"
            src={`https://www.youtube.com/embed/${video}`}
        ></iframe>
    </Tile>
)
