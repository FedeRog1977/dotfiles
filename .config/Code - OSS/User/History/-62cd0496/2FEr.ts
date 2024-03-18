import { ArticleTileProps, BackgroundProps } from '../../../bash-blocks'

type LibraryProps = {
    background: BackgroundProps
    tileOne: ArticleTileProps
}

export const libraryContent: LibraryProps = {
    background: { content: 'Library' },
    tileOne: {
        type: 'solid',
        heading: 'All the links you need',
        subHeading: 'Quick links',
        bookShelves: [
            {
                heading: 'My pages',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'My pages',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'My pages',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'My pages',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
            {
                heading: 'My pages',
                items: [
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                    {
                        content: 'Lewis Britton',
                        url: 'https://lewisbritton.com/',
                    },
                ],
            },
        ],
    },
}
