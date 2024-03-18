import { BackgroundProps } from '..'
import { toUpperCase } from '../../../scripts'
import styles from './background.module.scss'
import cx from 'classnames'

export const Background: React.FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => {
    const classNamesText = cx(
        styles.backgroundText,
        styles[`align${toUpperCase(props.className)}`]
    )

    return (
        <div className={styles.background}>
            <span className={classNamesText}>{props.content}</span>
        </div>
    )
}
