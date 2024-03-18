import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = string | ArticleProps['sections']
export type ArticleTileImageMatrixProps = ImageMatrixProps['items']

export type ArticleTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    margins?: boolean

    body?: string | ArticleProps['sections']
    imageMatrices?: ArticleTileImageProps[]
    bookShelves?: BookshelfProps[]
}
