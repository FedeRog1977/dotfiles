import { formatArticle, formatItems } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { Article } from '../../partials'
import { LibraryTileProps } from './library-tile.types'

export const LibraryTile: React.FC<LibraryTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    body,
    bookShelves,
    textAlign = 'center',
    margins = false,
}: LibraryTileProps) => {
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
            <Typography
                type="h1"
                textAlign={textAlign}
                content={heading}
                light
                paragraphMargins
            />
            {Array.isArray(body) ? (
                <Article
                    sections={formatArticle(
                        body,
                        'body',
                        'darkerGrey',
                        false,
                        false,
                        false,
                        'none',
                        true,
                        false
                    )}
                    textAlign="justify"
                    extendParagraphMargins
                />
            ) : (
                <Typography
                    type="body"
                    content={body}
                    textAlign="justify"
                    light
                    paragraphMargins
                />
            )}
            {formattedItems.map((heading, items) => {})}
        </Tile>
    )
}
