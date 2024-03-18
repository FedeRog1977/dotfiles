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
    tileTwo: {
        type: 'clear',
        heading: 'Overview',
        body: 'I’m a Master of Science with Distinction graduate of Software Development and Bachelor of Arts with First Class Honours graduate of Finance from the University of Strathclyde. In first and second year, my additional studies in my BA included Business Law, Business Analysis & Technology, Management, Marketing, and Mathematics (Algebra & Calculus). I achieved distinction in third year when my course was spread across just Finance and Economics. Honours year Finance study focused on asset pricing, quantitative methods, corporate investment, and corporate financing. In fifth year, my MSc, topics focussed on database development, object oriented programming, software engineering, and cyber security and ethics.',
    },
    tileThree: {},
    tileFour: {},
    tileFive: {},
    tileSix: {},
}
