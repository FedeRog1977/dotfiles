import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { content }: any
) => {
    return (
        <div className='tile'>
            {content}
        </div>
    )
}

export default Tile;