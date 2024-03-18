import { ColorProps, LinkProps, TypographyProps } from '..'

export type ButtonProps = {
    typeType?: TypographyProps['type']
    type:
        | 'search'
        | 'regularClear'
        | 'regularSolid'
        | 'denseClear'
        | 'denseSolid'
    value?: string
    func: (() => void) | ((e: any) => void)
    funcResp?: boolean
    link?: LinkProps['link']
    content?: string | React.ReactElement
    subContent?: string | React.ReactElement
    subContentTop?: boolean
    color?: ColorProps
    dense?: boolean
    removePadding?: boolean
}
