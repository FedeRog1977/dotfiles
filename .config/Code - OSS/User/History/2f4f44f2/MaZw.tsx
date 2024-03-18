import { useShowElement } from '../../../../scripts'
import { Typography } from '../../basics'
import { Button } from '../button'

type BookProps = {
    content: string
    url: string
}

export type BookshelfProps = {
    heading: string
    items: BookProps[]
}

export const Bookshelf: React.FC<BookshelfProps> = ({
    ...props
}: BookshelfProps) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            <Button
                type="regularClear"
                fill
                transition
                func={() => setShowElement(!showElement)}
                funcResp={showElement}
                content={props.heading}
            />
            {showElement &&
                props.items.map(({ content, url }: BookProps, index) => (
                    <Typography
                        key={index}
                        type="body"
                        content={content}
                        link={{ url: url, newTab: true }}
                    />
                ))}
        </>
    )
}
