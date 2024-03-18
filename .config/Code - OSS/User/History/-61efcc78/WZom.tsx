import './styles/Background.css';

const Background = ({ text }: any) => {
    return (
        <div className={"background"}>
            <h1 className={"backgroundText"}>{text}</h1>
            <h1 style={{ fontFamily: 'Instagram' }}>Instant Gram</h1>
        </div>
    )
}

export default Background;