import { TileProps } from '..'
import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase, toUpperCase } from '../../../scripts'

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

    const classNamesGradient = cx(styles.gradient, {
        [styles[
            `gradient${toUpperCase(
                props.gradient?.start ? props.gradient.start : ''
            )}`
        ]]: props.gradient,
    })

    return (
        <>
            <div
                className={classNames}
                style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: '100%',
                }}
            >
                <div style={{ zIndex: 1000 }}>{props.children}</div>
            </div>
            <div className={classNamesGradient}></div>
        </>
    )
}
