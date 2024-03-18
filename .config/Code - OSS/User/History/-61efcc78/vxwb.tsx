import './styles/background.css';

const Background = ({ content, fontFamily }: any) => {
    return (
        <div className={"background"}>
            <span
                className={"backgroundText"}
                style={{ fontFamily: fontFamily }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;