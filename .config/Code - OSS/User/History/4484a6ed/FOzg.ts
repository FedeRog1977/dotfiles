import { AlignProps } from '.'
import {
    MarginProps,
    PaddingProps,
} from '../reference/types/margin-padding.types'

export type SpacingProps = {
    mX?: number
    mY?: number
    pX?: number
    pY?: number
    children?: React.ReactNode
    textAlign?: AlignProps
    ruleTop?: boolean
    ruleBottom?: boolean
    backgroundColor?: string
    width?: number
    border?: string
    borderRadius?: string
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
} & MarginProps &
    PaddingProps
