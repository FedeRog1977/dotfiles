import { ItemsPropsAdv, ItemsProps, AlignProps } from '../../reference'

export type GridProps = {
    alignColumns?: string
    alignRows?: string
    columnGap?: number
    rowGap?: number
    justifyContent?: ItemsPropsAdv
    alignContent?: ItemsPropsAdv
    justifyItems?: ItemsProps
    alignItems?: ItemsProps

    columnItem?: number[]
    rowItem?: number[]
    colSpan?: boolean
    rowSpan?: boolean
    textAlign?: AlignProps
    children: React.ReactNode
}
