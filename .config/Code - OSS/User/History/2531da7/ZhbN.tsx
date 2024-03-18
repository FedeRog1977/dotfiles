import { TileProps } from '..'
import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../scripts'
import img from '../../../media/images/pages/intro-tile.jpg'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => {
    const classNames = cx(
        ...(props.textAlign
            ? [styles[`align${toSentenceCase(props.textAlign)}`]]
            : []),
        {
            [styles.clear]: props.type === 'clear',
            [styles.solid]: props.type === 'solid',
            [styles.top]: props.top,
            [styles.outline]: props.outline,
            [styles.margins]: props.margins,
        }
    )

    return (
        <div
            className={classNames}
            style={{
                backgroundImage: 'url(img)',
                backgroundSize: '100%',
            }}
        >
            {props.children}
        </div>
    )
}
