import { FC, ReactElement } from "react";
import Article from "./Article";
import "./styles/Tile.css";

interface TileProps {
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { hasArticle, sections, fontFamily, textAlign, content }: any
) => {
    return (
        <div className='tile'>
            {content}
        </div>
    )
}

export default Tile;