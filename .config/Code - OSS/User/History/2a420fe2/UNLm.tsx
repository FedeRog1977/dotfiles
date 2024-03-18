import { formatArticle, getGridAlign } from '../../../../scripts'
import { Grid, Tile, Typography } from '../../basics'
import { Article, Button } from '../../partials'
import { CtaProps } from '../../reference'
import { ImageTileProps } from './image-tile.types'

export const ImageTile: React.FC<ImageTileProps> = ({
    img,
    gradient,
    heading,
    subHeading,
    body,
    ctas,
    textAlign = 'left',
    invert = false,
}: ImageTileProps) => {
    const handleInverseColor = invert ? 'white' : 'mediumGrey'

    const handleGridAlign = textAlign === 'left' ? '3fr 1fr' : '1fr 3fr'

    const handleGridText = [textAlign === 'left' ? 1 : 2, ctas ? 2 : 1]
    const handleGridCtas = [textAlign === 'left' ? 2 : 1, 2]

    const handleGridCtasAlignX =
        textAlign === 'left'
            ? 'end'
            : textAlign === 'right'
            ? 'center'
            : 'center'
    const handleGridCtasAlignY = getGridAlign(ctas ?? [])

    const handleCtas: React.ReactElement = (
        <Grid columnItem={handleGridCtas}>
            <Grid
                alignRows={handleGridCtasAlignY}
                rowGap={20}
                justifyItems={handleGridCtasAlignX}
            >
                {ctas?.map(({ content, href }: CtaProps, index) => (
                    <Grid rowItem={[index + 1, ctas.length + 1]}>
                        <Button
                            typeType="h3"
                            type="inverse"
                            func={() => (window.location.href = href)}
                            funcResp={false}
                            content={content}
                            color="white"
                            light
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )

    const handleJustifyBodyText = textAlign === 'right' ? 'right' : 'justify'

    return (
        <Tile type="clear" stacked margins img={img} gradient={gradient}>
            <Grid alignColumns={handleGridAlign} alignItems="center">
                {Boolean(ctas && textAlign === 'right') && handleCtas}
                <Grid columnItem={handleGridText}>
                    <Typography
                        type="h4"
                        content={subHeading}
                        textAlign={textAlign}
                        color={handleInverseColor}
                        light
                    />
                    <Typography
                        type="t1"
                        content={heading}
                        textAlign={textAlign}
                        color={handleInverseColor}
                        light
                        paragraphMargins
                    />
                    {Array.isArray(body) ? (
                        <Article
                            sections={formatArticle(
                                body,
                                'body',
                                handleInverseColor,
                                false,
                                false,
                                false,
                                'none',
                                true,
                                false
                            )}
                            textAlign={handleJustifyBodyText}
                            extendParagraphMargins
                        />
                    ) : (
                        <Typography
                            type="body"
                            content={body}
                            textAlign={handleJustifyBodyText}
                            color={handleInverseColor}
                            light
                            paragraphMargins
                        />
                    )}
                </Grid>
                {Boolean(ctas && textAlign === 'left') && handleCtas}
            </Grid>
        </Tile>
    )
}
