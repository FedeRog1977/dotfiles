import { AlignProps } from '..'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    dense?: boolean
    outline?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
