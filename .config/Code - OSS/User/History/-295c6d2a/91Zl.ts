import { ArticleTileProps, TitleTileProps } from '../../../bash-blocks'
import { imageTestData } from '../../../../data'

type AcademiaProps = {
    tileOne: TitleTileProps
    tileTwo: ArticleTileProps
    tileThree: ArticleTileProps
    tileFour: ArticleTileProps
    tileFive: ArticleTileProps
    tileSix: ArticleTileProps
}

export const academiaContent: AcademiaProps = {
    tileOne: {
        titleItems: [
            {
                content: 'M.Sc. Software Development',
                subContent: 'Distinction 2022',
            },
            {
                content: 'B.A. Finance (Honours)',
                subContent: 'First Class 2021',
            },
        ],
    },
    tileTwo: {},
    tileThree: {},
    tileFour: {},
    tileFive: {},
    tileSix: {},
}
