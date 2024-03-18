import {
    ArticleTileProps,
    BackgroundProps,
    TitleTileProps,
} from '../../../bash-blocks'

type EmploymentProps = {
    background: BackgroundProps
    tileOne: TitleTileProps
    tileTwo: ArticleTileProps
}

export const academiaContent: EmploymentProps = {
    background: { content: 'Academia' },
    tileOne: {
        titleItems: [
            {
                content: 'View / Download',
                subContent: {
                    content: 'Curriculum Vitæ',
                    link: { url: 'https://lewisbritton.com/', newTab: true },
                },
            },
        ],
    },
    tileTwo: {
        type: 'solid',
        margins: true,
        heading: 'Employment',
        subHeading: 'All the wage’ing',
        body: [
            { type: 'h3', content: '' },
            { content: '' },
            { type: 'h3', content: '' },
            { content: '' },
            { type: 'h3', content: '' },
            { content: '' },
            { type: 'h3', content: '' },
            { content: '' },
            { type: 'h3', content: '' },
            { content: '' },
            { type: 'h3', content: '' },
            { content: '' },
        ],
    },
}
