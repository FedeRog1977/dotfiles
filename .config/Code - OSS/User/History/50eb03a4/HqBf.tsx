import { FC, ReactElement } from "react";
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
    content?: ReactElement;
}

const Tile: FC<TileProps> = (
    { hasArticle, sections, fontFamily, textAlign, content }: any
) => {
    return (
        <div className='tile'>
            {hasArticle ?
                <Article sections={sections} fontFamily={fontFamily} textAlign={textAlign} />
                :
                <>{content}</>
            }
        </div>
    )
}

export default Tile;