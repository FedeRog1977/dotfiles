import Button from '../../../bash-blocks/elements/components/button.component'
import Search from '../../../bash-blocks/elements/Search'
import WeatherSearchList from '../../../elements/utils/weather/WeatherSearchList'

const WeatherSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div>
            <WeatherSearchList className={'searchLocation'} func={funcSelect} />
            <Search
                className={'searchLocation'}
                func={funcInput}
                content={'Search Munro'}
            />
            <Button
                className={'searchLocation'}
                func={funcButton}
                content={'Search'}
            />
        </div>
    )
}

export default WeatherSearchBar
