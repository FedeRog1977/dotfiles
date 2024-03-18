import { FC } from "react";
import Article from "./Article";
import "./styles/ArticleTile.css";

interface InstantGramTileProps {
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

const ArticleTile: FC<InstantGramTileProps> = (
    { sections }: any
) => {
    return (
        <div className='article-tile'>
            <Article sections={sections} fontFamily="serif" textAlign="justify" />
        </div>
    )
}

export default ArticleTile;