import cx from 'classnames'
import { toUpperCase } from '../../../../scripts'
import styles from './gradient.module.scss'
import { GradientProps } from './gradient.types'

export const Gradient: React.FC<GradientProps> = ({
    value = 'dark',
    opacity = 60,
    start = 'left',
    fill = false,
    hide = false,
}: GradientProps) => {
    const classNames = cx(styles.gradient, {
        [styles[`${value}${opacity}${toUpperCase(start)}`]]: !fill,
        [styles[`${value}Fill${opacity}`]]: fill,
    })

    if (hide) {
        return null
    }

    return <div className={classNames} />
}
