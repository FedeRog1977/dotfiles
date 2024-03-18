import { Grid, Spacing, Tile, Typography } from '../../basics'
import { TitleTileProps } from '.'

export const TitleTile: React.FC<TitleTileProps> = ({
    heading,
    items,
}: TitleTileProps) => (
    <Tile type="clear">
        {heading && (
            <>
                <Typography
                    type="h4"
                    textAlign="center"
                    content={heading}
                    // light
                />
                <Spacing mY={20} />
            </>
        )}
        <Grid alignColumns="auto auto" rowGap={10}>
            {items.map(
                (
                    { content, subContent }: TitleTileProps['items'][0],
                    index
                ) => (
                    <>
                        <Grid
                            columnItem={[1, 2]}
                            rowItem={[index + 1, items.length + 1]}
                            textAlign="right"
                        >
                            <Typography
                                type="h3"
                                textAlign="center"
                                content={content}
                                inline
                            />
                        </Grid>
                        <Grid
                            columnItem={[2, 2]}
                            rowItem={[index + 1, items.length + 1]}
                            textAlign="left"
                        >
                            <Typography
                                type="h3"
                                textAlign="center"
                                content={<>&nbsp;&#124;&nbsp;{subContent}</>}
                                light
                                inline
                            />
                        </Grid>
                    </>
                )
            )}
        </Grid>
    </Tile>
)
