import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = { body: string | ArticleProps['sections'] }
export type ArticleTileBookShelfProps = { items: BookshelfProps[] }
export type ArticleTileImageMatrixProps = { items: ImageMatrixProps['items'] }

type OrderedContent<T extends string, P extends object> = {
    order: number
    component: T
    content: P
}

type Content =
    | OrderedContent<'body', ArticleTileBodyProps>
    | OrderedContent<'bookShelf', ArticleTileBookShelfProps>
    | OrderedContent<'imageMatrix', ArticleTileImageMatrixProps>

export type Section = {
    component: Content['component']
    content: Content['content']
}

export type ArticleTileProps = {
    type?: TileProps['type']
    top?: boolean
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    margins?: boolean
    sections: Section[]
}
