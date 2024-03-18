import { ArticleTileProps, BackgroundProps } from '../../../bash-blocks'

type LibraryProps = {
    background: BackgroundProps
    tileOne: ArticleTileProps
    tileTwo: ArticleTileProps
    tileThree: ArticleTileProps
}

export const libraryContent: LibraryProps = {
    background: { content: 'Library' },
    tileOne: {
        type: 'solid',
        margins: true,
        heading: 'Computer Science and Mathematics',
        subHeading: 'Writings',
        bookShelves: [
            {
                heading: 'LaTeX and Markdown',
                items: [
                    {
                        content: '',
                        url: '',
                    },
                    {
                        content: '',
                        url: '',
                    },
                    {
                        content: '',
                        url: '',
                    },
                    {
                        content: '',
                        url: '',
                    },
                ],
            },
            {
                heading: 'HTML, CSS, and JavaScript',
                items: [
                    {
                        content: 'TBW',
                        url: '',
                    },
                ],
            },
            {
                heading: 'React and Typescript',
                items: [
                    {
                        content: 'TBW',
                        url: '',
                    },
                ],
            },
        ],
    },
    tileTwo: {
        type: 'solid',
        margins: true,
        heading: 'M.Sc. Software Development',
        subHeading: 'Writings',
        bookShelves: [
            {
                heading: 'CS958 (Project)',
                items: [
                    {
                        content: 'Assignment',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS995',
                items: [
                    {
                        content: 'Assignment (Code)',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS994',
                items: [
                    {
                        content: 'Assignment (Code)',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS993',
                items: [
                    {
                        content: 'Assignment I',
                        url: '',
                    },
                    {
                        content: 'Assignment I (Code)',
                        url: '',
                    },
                    {
                        content: 'Assignment II',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS992',
                items: [
                    {
                        content: 'Assignment',
                        url: '',
                    },
                    {
                        content: 'Labs',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS991',
                items: [
                    {
                        content: 'Assignment I',
                        url: '',
                    },
                    {
                        content: 'Assignment I (Code)',
                        url: '',
                    },
                    {
                        content: 'Assignment II (Code)',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS990',
                items: [
                    {
                        content: 'Assignment I',
                        url: '',
                    },
                    {
                        content: 'Assignment II',
                        url: '',
                    },
                    {
                        content: 'Assignment II (Code)',
                        url: '',
                    },
                    {
                        content: 'Labs',
                        url: '',
                    },
                    {
                        content: 'Lectures',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS978',
                items: [
                    {
                        content: 'Assignment',
                        url: '',
                    },
                ],
            },
            {
                heading: 'CS808',
                items: [
                    {
                        content: 'Assignment',
                        url: '',
                    },
                    {
                        content: 'Assignment (Code)',
                        url: '',
                    },
                    {
                        content: 'Examination',
                        url: '',
                    },
                ],
            },
        ],
    },
    tileThree: {
        type: 'solid',
        margins: true,
        heading: 'B.A. Finance',
        subHeading: 'Writings',
        bookShelves: [
            {
                heading: 'AG436 (Dissertation)',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG432',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG431',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG430',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG428',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG313',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG312',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG217',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'AG215',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'EC315',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'EC216',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'BF303 and BF201',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
        ],
    },
}
