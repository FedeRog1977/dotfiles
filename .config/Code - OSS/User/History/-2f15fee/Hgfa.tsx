import { imageTestData } from '../../../../data'
import { Tile, Typography } from '../../basics'
import { ImageMatrix } from './image-matrix.component'

export const ImageMatrixStories = () => (
    <>
        <Tile type="clear">
            <Typography
                type="t1"
                fontFamily="sansSerif"
                content="Image Matrix"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sansSerif"
                content="Default"
                textAlign="center"
                paragraphMargins
            />
            <ImageMatrix items={imageTestData} />
        </Tile>
        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sansSerif"
                content="Custom Columns"
                textAlign="center"
                paragraphMargins
            />
            <ImageMatrix items={imageTestData} columns={5} />
        </Tile>
    </>
)
