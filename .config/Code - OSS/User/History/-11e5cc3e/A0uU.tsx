import { Tile, Typography } from '../../basics'
import { ArticleTileBodyProps, ArticleTileProps } from './article-tile.types'
import { ArticleTileBody } from './components'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    sections,
}: ArticleTileProps) => (
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
        {/* {sections.map(({ Component, content }, index) => (
            <Component key={index} {...content} />
        ))} */}
        {sections.map(({ component, content }, index) => {
            component === 'body' && (
                <ArticleTileBody
                    key={index}
                    {...(content as ArticleTileBodyProps)}
                />
            )
        })}
    </Tile>
)
