import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../../scripts'
import { Gradient } from '../gradient'
import { TileProps } from './tile.types'
import { Image } from '../image'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => {
    const classNames = cx(
        ...(props.textAlign
            ? [styles[`align${toSentenceCase(props.textAlign)}`]]
            : []),
        {
            [styles.clear]: props.type === 'clear',
            [styles.solid]: props.type === 'solid',
            [styles[`contain${props.dense ? 'Dense' : ''}`]]: !props.stacked,
            [styles.top]: props.top,
            [styles.stacked]: props.stacked,
        }
    )

    const classNamesText = cx({
        [styles.text]: props.stacked,
        [styles.contain]: props.stacked,
    })

    const content = (
        <>
            {props.img && <Image {...props.img} />}
            {props.gradient && <Gradient {...props.gradient} />}
            <div className={classNamesText}>{props.children}</div>
        </>
    )

    return (
        <div id={props.anchor} className={classNames}>
            <div className={styles.constrain}>
                {props.stacked ? (
                    <div className={styles.stacked}>{content}</div>
                ) : (
                    content
                )}
            </div>
        </div>
    )
}
