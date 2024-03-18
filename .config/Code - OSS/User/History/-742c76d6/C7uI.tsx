import {
    Section,
    ArticleTileBodyProps,
    ArticleTileBookShelfProps,
    ArticleTileImageMatrixProps,
} from '../article-tile.types'
import {
    ArticleTileBody,
    ArticleTileBookShelf,
    ArticleTileImageMatrix,
} from '../components'

export const getContent = (section: Section) => (
    <>
        {section.component === 'body' && (
            <ArticleTileBody {...section.content} />
        )}
        {component === 'bookShelf' && (
            <ArticleTileBookShelf {...(content as ArticleTileBookShelfProps)} />
        )}
        {component === 'imageMatrix' && (
            <ArticleTileImageMatrix
                {...(content as ArticleTileImageMatrixProps)}
            />
        )}
    </>
)
