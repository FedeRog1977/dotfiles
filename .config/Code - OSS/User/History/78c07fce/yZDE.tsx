import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScreenWidth } from '../../../../scripts'
import { Grid, Search, SearchList } from '../../basics'
import { Button } from '../button'
import { BigSearchProps } from './big-search.types'

export const BigSearch: React.FC<BigSearchProps> = ({
    funcInput,
    funcButton,
    placeholder = 'Search',
    selects,
}: BigSearchProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            <Grid alignColumns="3fr 1fr" columnGap={15}>
                <Grid columnItem={[1, 2]}>
                    <Search
                        func={funcInput}
                        placeholder={placeholder ?? undefined}
                    />
                </Grid>
                <Grid columnItem={[2, 2]}>
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
                        coarsePadding={!isMobile}
                    />
                </Grid>
            </Grid>
            {selects.map(() => (
                <Grid>
                    <SearchList
                        func={funcSelect}
                        content={hillData.munros}
                        placeholder={selects}
                    />
                </Grid>
            ))}
        </>
    )
}
