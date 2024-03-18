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

export const employmentContent: EmploymentProps = {
    background: { content: 'Employment' },
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
            {
                type: 'h3',
                content: '2022–Present | Company (Not Firm): WageSlave',
            },
            { content: '' },
            { type: 'h3', content: '2021 | Costa Coffee: Barista' },
            { content: '' },
            {
                type: 'h3',
                content: '2019–2021 | Virtuous Truffle Company: Sole Owner',
            },
            { content: '' },
            {
                type: 'h3',
                content: '2019–2020 | Lakeland PLC: Retail Assistant',
            },
            { content: '' },
            {
                type: 'h3',
                content: '2018 | J Sainsbury PLC: Customer Assistant',
            },
            { content: '' },
            {
                type: 'h3',
                content: '2018 | Sedgwick PLC: Customer Service Agent',
            },
            { content: '' },
        ],
    },
}
