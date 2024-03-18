import { FC, ReactElement } from "react";
import "./styles/Tile.css";

interface TileProps {
    type:
    | 'clear'
    | 'clear-condensed'
    | 'solid';
    className?: string;
    content: ReactElement;
}

const Tile: FC<TileProps> = (
    { type, className, content }: any
) => {
    return (
        <div className={`tile-${type} ${className && className}`}>
            {content}
        </div>
    )
}

export default Tile;