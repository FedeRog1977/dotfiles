import { CompiledEventProps } from '../../../../../scripts'

export type MiamiViceSearchListProps = {
    func: (() => void) | ((e: any) => void)
    items: {
        id: string
        prefix?: string
        names: string[]
    }[]
}

export type MiamiViceSearchTileProps = {
    funcSelect: (e: any) => void
}

// export type InstantGramResultTileProps = CompiledEventProps
