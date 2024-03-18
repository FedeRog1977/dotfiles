import { Tile, Typography } from '../../basics'
import { Article } from '../../partials'
import { FootnoteTileProps } from './footnote-tile.types'

export const FootnoteTile: React.FC<FootnoteTileProps> = ({
    content,
}: FootnoteTileProps) => (
    <Tile type="clear">
        {Array.isArray(content) ? (
            <Article sections={content} />
        ) : (
            <Typography type="footnote" textAlign="justify" content={content} />
        )}
    </Tile>
)
