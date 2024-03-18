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
                heading: 'Miss You – The Rolling Stones',
                subHeading: 'Brother’s Keeper',
                video: '-00smlSOaDE',
            },
            {
                heading: 'Body Talk – The Deele',
                subHeading: 'Brother’s Keeper',
                video: 'qrk9zYyBvwo',
            },
            {
                heading: 'Miami Vice Theme (Pilot) – Jan Hammer',
                subHeading: 'Brother’s Keeper',
                video: 'biRolWtDN-k',
            },
            {
                heading: 'Somebody’s Watching Me – Rockwell',
                subHeading: 'Brother’s Keeper',
                video: 'eMwkT3SNGFo',
            },
            {
                heading: 'All Night Long – Lionel Richie',
                subHeading: 'Brother’s Keeper',
                video: 'qEtj2zTRGHk',
            },
            {
                heading: 'In The Air Tonight – Phil Collins',
                subHeading: 'Brother’s Keeper',
                video: '05TRO9JlnI4',
            },
            {
                heading: 'I’m So Excited – The Pointer Sisters',
                subHeading: 'Calderone’s Return – Part I: The Hit List',
                video: 'V-6WfNORElM',
            },
            {
                heading: 'In the Night – Russ Ballard',
                subHeading: 'Calderone’s Return – Part I: The Hit List',
                video: 'ARiSJWjmFW4',
            },
            {
                heading: 'Voices – Russ Ballard',
                subHeading: 'Calderone’s Return – Part II: Calderone’s Demise',
                video: 'YaWVUhudI9I',
            },
            {
                heading: 'What’s Love Got To Do With It – Tina Turner',
                subHeading: 'Calderone’s Return – Part II: Calderone’s Demise',
                video: 'kee8MS-QK5E',
            },
            {
                heading: 'No Exit',
                subHeading: 'Airport Swap – Jan Hammer',
                video: '0DYJnwWqpbs',
            },
            {
                heading: 'No Exit',
                subHeading: 'I Don’t Care Anymore – Phil Collins',
                video: 'pTZzqGd0ZiE',
            },
            {
                heading: 'The Great McCarthy',
                subHeading: 'Go Insane – Lindsay Buckingham',
                video: 'aAV0369kFMU',
            },
            {
                heading: 'Glades',
                subHeading: 'Girls With Guns – Tommy Shaw',
                video: '7wepKw4u2VA',
            },
            {
                heading: 'Little Prince',
                subHeading: 'Relax – Frankie Goes To Hollywood',
                video: 'e6D_SRRQQao',
            },
            {
                heading: 'Nobody Lives Forever',
                subHeading: 'Heartbeat – Red 7',
                video: 'SMpBTUJAR34',
            },
            {
                heading: 'Evan',
                subHeading: 'The Rhythm Of The Heat – Peter Gabriel',
                video: 'SOtRCtN3LP4',
            },
            {
                heading: 'Evan',
                subHeading: 'The Talk – Jan Hammer',
                video: '42ypLA0AP8M',
            },
            {
                heading: 'Evan',
                subHeading: 'Biko – Peter Gabriel',
                video: 'q7-N-TCo60M',
            },
        ],
        season2: [],
        season3: [],
        season4: [],
        season5: [],
    },
    tileTwo: {
        content:
            'Filmed with Panavision® Panaflex® Cameras and Lenses (1972). Dolby Stereo® in selected theatres',
    },
}
