import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Search } from '../../basics'
import { Button } from '../button'
import { BigSearchProps } from './big-search.types'

export const BigSearch: React.FC<BigSearchProps> = () => {
    return (
        <Grid alignColumns="3fr 1fr" columnGap={15}>
            <Grid columnItem={[1, 2]}>
                <Search func={props.funcInput} placeholder="Search Events" />
            </Grid>
            <Grid columnItem={[2, 2]}>
                <Button
                    type="search"
                    func={props.funcButton}
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
    )
}
