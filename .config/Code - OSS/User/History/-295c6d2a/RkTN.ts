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
        heading: 'Those who know, those who fear',
        subHeading: 'Let us begin',
        body: 'Those who know me know there’s a bunch of random nonsense I could start spewing out here already, but let’s keep it high level right now and you can dive into the l’autisme as much as you want at your leisure. There are eight focuses of this website really, meaning there are eight things that sum up my effed-up personality: sport, exploration and travel, computers, academic crap, cooking, design, automotive interests, and other media. I have some trademarks, too many to get into here but you will be seeing a lot of hill Projects, including my greatest achievement of The Playground, and many more around my greatest love: the Scottish Highlands; Roadie Miles, including my century and various Strathavens and Fenwick + Wind Farms; Miles Miles, which these days tends to only extend to my never-ending Waterfoot streak; and, my (unfortunately) decaying obsession with Roger Federer’s tennis game. You can also browse all of my travel and explorations, shall we call them, on my rebellion against Instagram: Instant Gram. And feel free to steal any of the recipes you find in BrittonsFoodRC too. You may at some point find yourself caught in some obscure exploration of interiors, design, typography, stationery, classic goods collection, and media collection, etc. There’s also plenty of v-gin dev stuff in Linux, LaTeX, and web development. Also, not to forget the ThinkPads. If you are to venture into the unknown, check out Conquest (Burning Roots) and get a proj on the go in my experimental Ordnance-Survey-based mapping app. So yeah, good luck, have fun.',
        imageMatrices: [
            {
                heading: 'Lorem ipsum',
                bodyOne:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                items: imageTestData.slice(0, 3),
                bodyTwo:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
    },
    tileThree: {
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
    tileFour: {},
    tileFive: {},
    tileSix: {},
}
