import { BackgroundProps } from '..'
import styles from './background.module.scss'

export const Background: React.FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => {
    return (
        <div className={styles.background}>
            <span className={props.className}>{props.content}</span>
        </div>
    )
}
