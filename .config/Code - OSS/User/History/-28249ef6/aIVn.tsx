import './styles/Background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className='background'>
            <span
                className={className}
                style={{
                    padding: '0px 25px 0px 25px',
                    border: '1px solid black'
                }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;