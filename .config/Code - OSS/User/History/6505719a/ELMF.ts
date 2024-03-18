import { TileProps } from '../../basics'
import { ArticleProps } from '../../partials'
import { AlignProps } from '../../reference'
import { ArticleTileImageProps } from '../article-tile/article-tile.types'

export type LibraryBlockProps = {
    type?: TileProps['type']
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    bookShelves?: ArticleTileImageProps[]
    textAlign?: AlignProps
    margins?: boolean
}
