const Button = ({ className, func, content }: any) => {
    if (typeof id !== "undefined") {
        return (
            <button
                id={id}
                onClick={func}
            >
                {text}
            </button>
        )
    }
    return (
        <button
            className={className}
            onClick={func}
        >
            {text}
        </button>
    )
}

export default Button;