import { TileProps } from '../../basics'
import { ImageMatrixProps, ArticleProps } from '../../partials'
import { AlignProps } from '../../reference'

export type ArticleTileImageProps = {
    images: ImageMatrixProps
    body?: string | ArticleProps['sections']
}

export type ArticleTileProps = {
    type?: TileProps['type']
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    imageMatrices?: ArticleTileImageProps[]
    textAlign?: AlignProps
}
