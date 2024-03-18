import { useShowElement } from '../../../../scripts'

type BookProps = {}

export type BookshelfProps = {
    heading: string
    items: {
        content: string
        url: string
        // typeType?: TypographyProps['type']
        // light?: boolean
        // type: 'regularClear' | 'regularSolid' | 'search' | 'inverse'
        // fill?: boolean
        // forceWidth?: number
        // transition?: boolean
        // value?: string
        // func: (() => void) | ((e: any) => void)
        // funcResp?: boolean
        // link?: LinkProps['link']
        // content?: string | React.ReactElement
        // subContent?: string | React.ReactElement
        // subContentTop?: boolean
        // color?: ColorProps
        // dense?: boolean
        // coarsePadding?: boolean
        // removePadding?: boolean
    }[]
}

export const Bookshelf: BookshelfProps = ({ ...props }: BookshelfProps) => {
    const { showElement, setShowElement } = useShowElement()

    return <>{}</>
}
