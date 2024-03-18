import { ReactElement } from 'react';
import './styles/Button.css'

const Button = ({ className, func, content, contentAffix }: any | ReactElement) => {
    return (
        <button
            className={className}
            onClick={func}
        >
            {contentAffix &&
                <span style={{ float: 'left' }}>
                    {contentAffix}
                </span>
            }
            <span>
                {content}
            </span>
        </button>
    )
}

export default Button;