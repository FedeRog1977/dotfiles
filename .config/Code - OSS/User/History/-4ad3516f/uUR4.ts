import { BackgroundProps, FootnoteTileProps, VideoTileProps } from '../../../../bash-blocks'

type MiamiViceProps = {
    background: BackgroundProps
    tileOne: VideoTileProps[]
    tileTwo: FootnoteTileProps
}

export const instantGramContent: InstantGramProps = {
    background: { type: 'ig', content: 'Instant Gram' },
    tileOne: []
    tileTwo: {
        content: 'Panavision Panaflex 1972',
    },
}
