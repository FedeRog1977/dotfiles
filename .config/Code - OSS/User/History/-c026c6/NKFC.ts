import { LinkProps } from '../../reference'

type TitleTileLinkProps = {
    content: string
    link?: LinkProps
}

export type TitleTileItemsProps = {
    content: TitleTileLinkProps
    subContent: TitleTileLinkProps
}

export type TitleTileProps = {
    heading?: string
    titleItems?: TitleTileItemsProps[]
    bodyItems?: TitleTileItemsProps[]
}
