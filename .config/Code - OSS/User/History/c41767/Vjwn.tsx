import { FC, ReactElement } from 'react'
import './styles/Button.css'

type ButtonProps = {
    className: string
    func: () => void
    value?: string
    content: string | ReactElement
    position?: 'left' | 'center' | 'right'
}

const Button: FC<ButtonProps> = ({
    className,
    func,
    value,
    content,
    position,
}: any) => {
    return (
        <button
            className={className}
            style={{
                marginLeft: position === 'right' ? '15px' : 0,
                marginRight: mR ? mR : 0,
            }}
            onClick={func}
            value={value}
        >
            {content}
        </button>
    )
}

export default Button
