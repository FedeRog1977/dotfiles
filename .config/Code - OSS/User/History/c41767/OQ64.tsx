import { ReactElement } from 'react';
import './styles/Button.css'

const Button = ({ className, func, value, content }: any | ReactElement) => {
    return (
        <button
            className={className}
            onClick={func}
            value={value}
        >
            {content}
        </button>
    )
}

export default Button;