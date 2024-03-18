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
}

const Tile: FC<TileProps> = (
    { sections, fontFamily, textAlign }: any
) => {
    return (
        <div className='tile'>
            {hasArticle ?
                <Article sections={sections} fontFamily={fontFamily} textAlign={textAlign} />
            }
        </div>
    )
}

export default Tile;