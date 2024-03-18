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
        <Tile type="solid">
            {/* <Spacing
                mL={isMobile ? 0 : 70}
                mR={isMobile ? 0 : 70}
                mB={isMobile ? 7.5 : 15}
            >
                <Search func={funcInput} placeholder="Search Hills" />
                <Button
                    type="search"
                    func={funcButton}
                    funcResp={false}
                    content={
                        <>
                            {isMobile ? (
                                <FontAwesomeIcon icon={faSearch} />
                            ) : (
                                'Search'
                            )}
                        </>
                    }
                    color="white"
                />
            </Spacing>
            <Spacing mL={isMobile ? 0 : 70} mR={isMobile ? 0 : 70}>
                <SearchList
                    func={funcSelect}
                    content={hillData.munros}
                    placeholder="Munro"
                />
                <SearchList
                    func={funcSelect}
                    content={hillData.corbetts}
                    placeholder="Corbett"
                />
            </Spacing> */}
            <BigSearch
                funcInput={funcInput}
                funcButton={funcButton}
                placeholder="Search Hills"
            />
        </Tile>
    )
}
