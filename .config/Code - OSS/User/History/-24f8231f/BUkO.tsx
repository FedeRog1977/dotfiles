import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../../scripts'
import { Gradient } from '../gradient'
import { TileProps } from './tile.types'
import { Image } from '../image'

export const Tile: React.FC<TileProps> = ({
    type,
    dense,
    stacked,
    img,
    gradient,
    textAlign,
    children,
    anchor,
}: TileProps) => {
    const classNames = cx(
        ...(textAlign ? [styles[`align${toSentenceCase(textAlign)}`]] : []),
        {
            [styles.clear]: type === 'clear',
            [styles.solid]: type === 'solid',
            [styles[`marginsY${dense ? 'Dense' : ''}`]]: !stacked,
        }
    )

    const classNamesText = cx({
        [styles.text]: stacked,
        [styles.marginsX]: stacked,
    })

    return (
        <div id={anchor} className={classNames}>
            <div
                className={cx(styles.constrain, { [styles.stacked]: stacked })}
            >
                {img && <Image {...img} />}
                {gradient && <Gradient {...gradient} />}
                <div className={classNamesText}>{children}</div>
            </div>
        </div>
    )
}
