import { ArticleProps } from '../../partials'
import { AlignProps, CtaProps, ImageProps } from '../../reference'

export type ImageTileProps = {
    img?: ImageProps
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    ctas: CtaProps[]
    textAlign?: AlignProps
}
