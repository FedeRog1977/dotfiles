import { useScreenWidth } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { ArticleTileProps } from './article-tile.types'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    ...props
}: ArticleTileProps) => {
    const { isMobile } = useScreenWidth()
    return (
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
        </Tile>
    )
}
