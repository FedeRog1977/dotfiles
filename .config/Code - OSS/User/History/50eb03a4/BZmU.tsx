import { FC } from "react";
import Article from "./Article";
import "./styles/Tile.css";

interface TileProps {
    hasArticle?: boolean;
    sections?: Array<{
        type:
        | string
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body'
        | 'caption'
        | 'footnote';
        content: string;
    }>;
    fontFamily?:
    | 'serif'
    | 'sans-serif';
    textAlign?:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    mT?: string;
    mB?: string;
}

const Tile: FC<TileProps> = (
    { sections }: any
) => {
    return (
        <div className='tile'>
            <Article sections={sections} fontFamily="serif" textAlign="justify" />
        </div>
    )
}

export default Tile;