import { ElementType } from 'react'
import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps, BookshelfProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileBodyProps = string | ArticleProps['sections']
export type ArticleTileBookShelfProps = BookshelfProps[]
export type ArticleTileImageMatrixProps = ImageMatrixProps['items']

export type ArticleTileProps = {
    type?: TileProps['type']
    heading?: string
    subHeading?: string
    textAlign?: AlignProps
    margins?: boolean
    sections: {
        element: ElementType
        content:
            | ArticleTileBodyProps
            | ArticleTileBookShelfProps
            | ArticleTileImageMatrixProps
    }[]
}
