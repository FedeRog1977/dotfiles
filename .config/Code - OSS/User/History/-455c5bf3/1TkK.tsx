import { useScreenWidth } from '../../../../../scripts'
import { BigSearch, Tile } from '../../../../bash-blocks'
import { hillData } from '../../../../../data'

export const WeatherSearchTile = ({
    funcSelect,
    funcInput,
    funcButton,
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <BigSearch
                funcInput={funcInput}
                funcButton={funcButton}
                placeholder="Search Hills"
                selects={[
                    {
                        funcSelect: funcSelect,
                        content: hillData.munros,
                        placeholder: 'Munros',
                    },
                    {
                        funcSelect: funcSelect,
                        content: hillData.corbetts,
                        placeholder: 'Corbetts',
                    },
                ]}
            />
        </Tile>
    )
}
