import { useShowElement } from '../../../../scripts'
import { Button } from '../button'

type BookProps = {
    content: string
    url: string
}

export type BookshelfProps = {
    heading: string
    items: BookProps[]
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
}

export const Bookshelf: React.FC<BookshelfProps> = ({
    ...props
}: BookshelfProps) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            {props.items.map(({ content, url }: BookProps, index) => (
                <div key={index}>
                    <Button
                        type="regularClear"
                        fill
                        transition
                        func={() => setShowElement(!showElement)}
                        funcResp={showElement}
                    />
                    {showElement && <>...</>}
                </div>
            ))}
        </>
    )
}
