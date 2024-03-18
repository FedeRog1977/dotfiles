import { BackgroundProps } from '../..'
import { toUpperCase } from '../../../../scripts'
import styles from './background.module.scss'
import cx from 'classnames'

export const Background: React.FC<BackgroundProps> = ({
    type = 'logo',
    content,
}: BackgroundProps) => {
    const classNamesText = cx(
        styles.backgroundText,
        styles[`backgroundText${toUpperCase(type)}`]
    )

    return (
        <div className={styles.background}>
            <span className={classNamesText}>{content}</span>
        </div>
    )
}
