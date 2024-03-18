import './styles/background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className={"background"}>
            <span
                className={className}
                style={{
                    fontFamily: fontFamily
                }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;