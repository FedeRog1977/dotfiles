import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileImageProps = {
    items: ImageMatrixProps['items']
    body?: string | ArticleProps['sections']
}

export type ArticleTileProps = {
    type?: TileProps['type']
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    imageMatrices?: ArticleTileImageProps[]
    textAlign?: AlignProps
    margins?: boolean
}
