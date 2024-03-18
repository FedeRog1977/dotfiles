import cx from 'classnames'
import styles from './gradient.module.scss'
import { GradientProps } from './gradient.types'

export const Gradient: React.FC<GradientProps> = ({
    value = 'dark',
    opacity = 60,
    rightAlign = false,
    fill = false,
    hide = false,
}: GradientProps) => {
    const classNames = cx(styles.gradient, {
        [styles[
            `${value}${opacity}${rightAlign ? 'RightAlign' : 'LeftAlign'}`
        ]]: !fill,
        [styles[`${value}Fill${opacity}`]]: fill,
    })

    if (hide) {
        return null
    }

    return <div data-testid="gradient" className={classNames} />
}
