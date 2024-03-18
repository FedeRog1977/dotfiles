export const WeatherDesc = ({ main, desc }: any) => {
    return (
        <div>
            <small>
                <b>{main}</b>: {desc}
            </small>
        </div>
    )
}
