import { AlignProps } from '..'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
