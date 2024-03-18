import './styles/Background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className='background'>
            <span
                className={className}
                style={{
                    padding: '0px 50px 0px 50px',
                    border: '1px solid black'
                }}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;