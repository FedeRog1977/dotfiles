import {
    BackgroundProps,
    FootnoteTileProps,
    VideoTileProps,
} from '../../../../bash-blocks'

type MiamiViceProps = {
    background: BackgroundProps
    tileOne: VideoTileProps[]
    tileTwo: FootnoteTileProps
}

export const miamiViceContent: MiamiViceProps = {
    background: { type: 'miami', content: 'MIAMI VICE' },
    tileOne: [
        {
            heading: 'Season 1',
            subHeading: 'Miss You - The Rolling Stones',
            video: '00smlSOaDE',
        },
    ],
    tileTwo: {
        content: 'Filmed with Panavision® Panaflex Lenses (1972)',
    },
}
