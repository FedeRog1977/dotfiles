import { FC } from 'react'
import { Typography } from '../../elements'
import Tile from './tile.component'

interface FootnoteProps {
    content: string
}

export const Footnote: FC<FootnoteProps> = ({ content }: any) => {
    return (
        <Tile type="clear">
            <Typography type="footnote" textAlign="justify" content={content} />
        </Tile>
    )
}
