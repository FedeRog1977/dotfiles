import { Tile, Typography } from '../../basics'
import { FootnoteTileProps } from '.'

export const FootnoteTile: React.FC<FootnoteTileProps> = ({
    ...props
}: FootnoteTileProps) => (
    <Tile type="clear">
        <Typography
            type="footnote"
            textAlign="justify"
            content={props.content}
        />
    </Tile>
)
