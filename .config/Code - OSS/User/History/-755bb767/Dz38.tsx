import '../../App.css';
import Background from '../../atoms/Background';
import WeatherSearch from '../../organisms/WeatherSearch';

function Weather() {
    return (
        <div>
            <Background text={"Weather Forecast"} />
            <div className={"body"}>
                <WeatherSearch />
            </div>
        </div>
    );
}

export default Weather;