import { TileProps } from '..'
import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../scripts'

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

    const classNamesGradient = cx({
        [styles.gradientLeft]: props.gradientLeft,
        [styles.gradientRight]: props.gradientRight,
        [styles.gradientCenter]: props.gradientCenter,
    })

    return (
        <div
            className={classNames}
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: '100%',
            }}
        >
            <div
                style={{
                    zIndex: 1000,
                    background:
                        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)',
                }}
            ></div>
            <div style={{ zIndex: 1000 }}>{props.children}</div>
        </div>
    )
}
