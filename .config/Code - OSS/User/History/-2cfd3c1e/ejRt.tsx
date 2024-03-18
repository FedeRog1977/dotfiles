import { useScreenWidth } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { VideoTileProps } from './video-tile.types'

export const VideoTile: React.FC<VideoTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    video,
    controls = false,
    margins = false,
}: VideoTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type={type} margins={margins} textAlign="center">
            {subHeading && <Typography type="h2" content={subHeading} light />}
            {heading && (
                <Typography
                    type="h1"
                    content={heading}
                    light
                    paragraphMargins
                />
            )}
            <iframe
                width="100%"
                height={isMobile ? '100%' : '750px'}
                src={`https://www.youtube.com/embed/${video}${
                    controls ? '' : '?controls=0'
                }`}
            ></iframe>
        </Tile>
    )
}
