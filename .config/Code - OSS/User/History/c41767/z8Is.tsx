import './styles/Button.css'

const Button = ({ type, func, content }: any) => {
    return (
        <button
            className={type}
            onClick={func}
        >
            {content}
        </button>
    )
}

export default Button;