import { AlignProps } from '../../reference'

export type ContentTileProps = {
    img?: string
    heading: string
    subHeading?: string
    body?: string
    ctas?: {
        content: string
        href: string
    }[]
    children?: React.ReactNode
    textAlign?: AlignProps
}
