import { formatItems } from '../../../../../scripts'
import { Flex } from '../../../basics'
import { BookshelfProps, Bookshelf } from '../../../partials'
import { ArticleTileBookShelfProps } from '../article-tile.types'

export const ArticleTileBookShelf: React.FC<ArticleTileBookShelfProps> = ({
    body,
}: ArticleTileBookShelfProps) => {
    const { formattedBookItems } = formatItems(3, undefined, body ? body : [])

    return (
        <>
            {formattedBookItems.map((row: BookshelfProps[]) => (
                <Flex>
                    {row.map(({ heading, items }: BookshelfProps, index) => (
                        <Flex item key={index}>
                            <Bookshelf heading={heading} items={items} />
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
