import {
    BackgroundProps,
    FootnoteTileProps,
    VideoTileProps,
} from '../../../../bash-blocks'

type MiamiViceProps = {
    background: BackgroundProps
    tileOne: {
        season1: VideoTileProps[]
        season2: VideoTileProps[]
        season3: VideoTileProps[]
        season4: VideoTileProps[]
        season5: VideoTileProps[]
    }
    tileTwo: FootnoteTileProps
}

export const miamiViceContent: MiamiViceProps = {
    background: { type: 'miami', content: 'MIAMI VICE' },
    tileOne: {
        season1: [
            {
                heading: 'Miss You - The Rolling Stones',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: '-00smlSOaDE',
            },
            {
                heading: 'Body Talk - The Deele',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: 'qrk9zYyBvwo',
            },
            {
                heading: 'Miami Vice Theme (Pilot) - Jan Hammer',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: 'Zh-SfszJd5I',
            },
            {
                heading: 'Somebody&rsquo;s Watching Me - Rockwell',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: 'eMwkT3SNGFo',
            },
            {
                heading: 'All Night Long - Lionel Richie',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: 'qEtj2zTRGHk',
            },
            {
                heading: 'In The Air Tonight - Phil Collins',
                subHeading: 'Season 1 - Brother’s Keeper',
                video: '05TRO9JlnI4',
            },
        ],
    },
    tileTwo: {
        content:
            'Filmed with Panavision® Panaflex® Cameras and Lenses (1972). Dolby Stereo® in selected theatres',
    },
}
