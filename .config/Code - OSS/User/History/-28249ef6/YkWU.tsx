import './styles/Background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className='background'>
            <span
                className={className}
                style={{
                    padding: '0px 100px 0px 100px'
                }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;