import { AlignProps } from '../../reference'

export type TileProps = {
    type: 'clear' | 'solid'
    top?: boolean
    outline?: boolean
    margins?: boolean
    stacked?: boolean
    img?: string
    gradient?: {
        value: 'light' | 'dark'
        opacity: 60 | 40 | 20
        start: 'left' | 'right' | 'center'
        fill: boolean
        hide: boolean
    }
    textAlign?: AlignProps
    children: React.ReactNode
    anchor?: string
}
