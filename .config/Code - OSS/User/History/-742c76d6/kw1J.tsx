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

export const getContent = (
    component: Section['component'],
    content: Section['content']
) => (
    <>
        {component === 'body' && (
            <ArticleTileBody {...(content as ArticleTileBodyProps)} />
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
