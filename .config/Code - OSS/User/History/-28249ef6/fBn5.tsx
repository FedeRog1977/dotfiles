import './styles/Background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className='background'>
            <span
                className={className}
                style={{
                    padding: '0px 10px 0px 10px'
                }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;