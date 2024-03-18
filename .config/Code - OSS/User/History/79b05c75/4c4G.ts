import { AlignProps } from '..'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    img?: string
    gradientLeft?: boolean
    gradientRight?: boolean
    gradientCenter?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
