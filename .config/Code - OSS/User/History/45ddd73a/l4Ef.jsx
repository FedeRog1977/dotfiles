import WeatherIcon from "../../../atoms/weather/WeatherIcon";
import WeatherDate from "../../../atoms/weather/WeatherDate";
import WeatherDay from "../../../atoms/weather/WeatherDay";
import WeatherTemp from "../../../atoms/weather/WeatherTemp";
import WeatherPop from "../../../atoms/weather/WeatherPop";
import WeatherDesc from "../../../atoms/weather/WeatherDesc";
import WeatherSrSs from "../../../atoms/weather/WeatherSrSs";

const WeatherIntro = ({ dt, icon, temp, pop, main, desc, sr, ss }) => {
    return (
        <div
            data-testId={"weatherIntro"}
            className={"weatherIntro"}
        >
            <WeatherDay dt={dt} />
            <WeatherDate dt={dt} />
            <WeatherIcon icon={icon} />
            <WeatherTemp temp={temp} />
            <WeatherPop pop={pop} />
            <WeatherDesc main={main} desc={desc} />
            <WeatherSrSs sr={sr} ss={ss} />
        </div >
    )
};

export default WeatherIntro;