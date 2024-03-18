import { formatArticle, formatItems, useScreenWidth } from '../../../../scripts'
import { Flex, Spacing, Tile, Typography } from '../../basics'
import { Article, Bookshelf, BookshelfProps, ImageMatrix } from '../../partials'
import { ArticleTileImageProps, ArticleTileProps } from './article-tile.types'

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    ...props
}: ArticleTileProps) => {
    const { isMobile } = useScreenWidth()

    const { formattedBookItems } = formatItems(
        3,
        undefined,
        bookShelves ? bookShelves : []
    )

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
            {formattedBookItems.map((row: BookshelfProps[]) => (
                <Flex>
                    {row.map(({ heading, items }: BookshelfProps, index) => (
                        <Flex item key={index}>
                            <Bookshelf heading={heading} items={items} />
                        </Flex>
                    ))}
                </Flex>
            ))}
        </Tile>
    )
}
