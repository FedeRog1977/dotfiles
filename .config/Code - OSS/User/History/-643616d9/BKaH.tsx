import { ActionTileProps } from '.'
import { Spacing, Tile, Typography } from '..'

export const ActionTile: React.FC<ActionTileProps> = ({
    ...props
}: ActionTileProps) => {
    return (
        <Tile type="solid" margins img={props.img}>
            <Spacing mY={100}>
                <Typography
                    type="t1"
                    fontFamily="sansSerif"
                    content={props.heading}
                    textAlign="center"
                    color="white"
                    paragraphMargins
                />
                <Typography type="body" content={props.body} color="white" />
            </Spacing>
            {props.children}
        </Tile>
    )
}
