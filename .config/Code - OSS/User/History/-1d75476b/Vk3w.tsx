import { FC, ReactElement } from 'react'
import { Typography } from '../../elements'
import { Tile } from '.'

interface FootnoteProps {
    content: string | ReactElement
}

export const Footnote: FC<FootnoteProps> = ({ content }: any) => {
    return (
        <Tile type="clear">
            <Typography type="footnote" textAlign="justify" content={content} />
        </Tile>
    )
}
