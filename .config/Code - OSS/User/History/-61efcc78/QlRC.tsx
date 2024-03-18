import './styles/background.css';

const Background = ({ content, fontFamily }: any) => {
    return (
        <div className={"background"}>
            <h1 className={"backgroundText"}>{content}</h1>
            <h1 style={{ fontFamily: 'Instagram' }}>Instant Gram</h1>
        </div>
    )
}

export default Background;