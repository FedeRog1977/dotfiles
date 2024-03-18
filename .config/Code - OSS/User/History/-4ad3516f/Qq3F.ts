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
                heading: 'Airport Swap – Jan Hammer',
                subHeading: 'No Exit',
                video: '0DYJnwWqpbs',
            },
            {
                heading: 'I Don’t Care Anymore – Phil Collins',
                subHeading: 'No Exit',
                video: 'pTZzqGd0ZiE',
            },
            {
                heading: 'Go Insane – Lindsay Buckingham',
                subHeading: 'The Great McCarthy',
                video: 'aAV0369kFMU',
            },
            {
                heading: 'Girls With Guns – Tommy Shaw',
                subHeading: 'Glades',
                video: '7wepKw4u2VA',
            },
            {
                heading: 'Relax – Frankie Goes To Hollywood',
                subHeading: 'Little Prince',
                video: 'e6D_SRRQQao',
            },
            {
                heading: 'Heartbeat – Red 7',
                subHeading: 'Nobody Lives Forever',
                video: 'SMpBTUJAR34',
            },
            {
                heading: 'The Rhythm Of The Heat – Peter Gabriel',
                subHeading: 'Evan',
                video: 'SOtRCtN3LP4',
            },
            {
                heading: 'The Talk – Jan Hammer',
                subHeading: 'Evan',
                video: '42ypLA0AP8M',
            },
            {
                heading: 'Biko – Peter Gabriel',
                subHeading: 'Evan',
                video: 'q7-N-TCo60M',
            },
        ],
        season2: [
            {
                heading: 'New York Theme – Jan Hammer',
                subHeading: 'The Prodigal Son',
                video: 'ckHLLJz-ElI',
            },
            {
                heading: 'You Belong To The City – Glenn Frey',
                subHeading: 'The Prodigal Son',
                video: 'ZTZKu5VAWKc',
            },
            {
                heading: 'Tubbs And Valerie – Jan Hammer',
                subHeading: 'The Prodigal Son',
                video: '23IlK__yW7I',
            },
            {
                heading: 'Take Me Home – Phil Collins',
                subHeading: 'The Prodigal Son',
                video: 'MzzanypJ4qs',
            },
            {
                heading: 'Baba O’Riley – The Who',
                subHeading: 'Out Where the Buses Don’t Run',
                video: 'UsVxjqaf31Y',
            },
            {
                heading: 'Brothers In Arms – Dire Straits',
                subHeading: 'Out Where the Buses Don’t Run',
                video: 'zgTpW9wJGVg',
            },
            {
                heading: 'No Guarantees – The Nobodys',
                subHeading: 'Buddies',
                video: '9KgtY9HgzrA',
            },
            {
                heading: 'Castillo’s Theme – Jan Hammer',
                subHeading: 'Bushido',
                video: 'BqAPaLwY0Rk',
            },
            {
                heading: 'Hello Earth – Kate Bush',
                subHeading: 'Bushido',
                video: 'VbzWnU8sEX0',
            },
            {
                heading: 'Cry – Godley & Creme',
                subHeading: 'Definitely Miami',
                video: '3eqAjuYmhp0',
            },
            {
                heading: 'Face The Face – The Who',
                subHeading: 'One Way Ticket',
                video: 'HZnd1L0NgeM',
            },
            {
                heading: 'Sagot’s Theme – Jan Hammer',
                subHeading: 'One Way Ticket',
                video: 'YTHOSV5AkgI',
            },
            {
                heading: 'Little Miss Dangerous – Ted Nugent',
                subHeading: 'Little Miss Dangerous',
                video: 'CuP9fW5WQd8',
            },
            {
                heading: 'The Order of Death – Public Image Ltd',
                subHeading: 'Little Miss Dangerous',
                video: '_n79qx4Igpw',
            },
            {
                heading: 'Long Long Way To Go – Phil Collins and Sting',
                subHeading: 'Sons And Lovers',
                video: 'hzziH39B2aY',
            },
        ],
        season3: [
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
        ],
        season4: [
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
        ],
        season5: [
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
            {
                heading: '',
                subHeading: '',
                video: '',
            },
        ],
    },
    tileTwo: {
        content:
            'Filmed with Panavision® Panaflex® Cameras and Lenses (1972). Dolby Stereo® in selected theatres',
    },
}
