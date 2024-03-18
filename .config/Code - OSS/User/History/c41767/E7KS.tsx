import { ReactElement } from 'react';
import './styles/Button.css'

const Button = ({ className, func, content }: any | ReactElement) => {
    return (
        <button
            className={className}
            onClick={func}
        >
            <span style={{ float: 'left' }}>{content}</span>
            <span>
                {content}
            </span>
        </button>
    )
}

export default Button;