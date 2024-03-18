import { Tile, Typography } from '../../basics'
import { FootnoteTileProps } from '.'

export const FootnoteTile: React.FC<FootnoteTileProps> = ({
    content,
}: FootnoteTileProps) => (
    <Tile type="clear">
        <Typography type="footnote" textAlign="justify" content={content} />
    </Tile>
)
