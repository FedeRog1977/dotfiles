import { ArticleProps } from '../../partials'
import { AlignProps, ImageProps } from '../../reference'
import { CtaProps } from '../../reference/types/cta.types'

export type ImageTileProps = {
    img?: ImageProps
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    ctas: CtaProps[]
    textAlign?: AlignProps
}
