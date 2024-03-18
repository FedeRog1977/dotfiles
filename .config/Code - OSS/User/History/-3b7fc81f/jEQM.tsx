import Button from '../../../bash-blocks/elements/components/button.component'
import Search from '../../../bash-blocks/elements/Search'
import InstantGramSearchList from '../../../elements/blog/instant-gram/InstantGramSearchList'
import { eventData } from '../../../data/general/events'
import './styles/InstantGramTile.css'
import Tile from '../../../bash-blocks/compounds/tile.component'
import Typography from '../../../bash-blocks/elements/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useMobile } from '../../../scripts/display/use-mobile'

const InstantGramSearchTile = ({ funcInput, funcButton, funcSelect }: any) => {
    const isMobile = useMobile()

    return (
        <Tile type="solid" top>
            <>
                <div className="instant-gram-tile-body">
                    <Search
                        className="instant-gram-search"
                        func={funcInput}
                        content="Search Events"
                    />
                    <Button
                        className="instant-gram-search"
                        func={funcButton}
                        content={
                            <>
                                {isMobile ? (
                                    <Typography
                                        type="h4"
                                        content={
                                            <FontAwesomeIcon icon={faSearch} />
                                        }
                                        color="#FFFFFF"
                                    />
                                ) : (
                                    <Typography
                                        type="h4"
                                        content="Search"
                                        color="#FFFFFF"
                                    />
                                )}
                            </>
                        }
                    />
                </div>
                <div className="instant-gram-tile-body">
                    <InstantGramSearchList
                        func={funcSelect}
                        items={eventData[2023]}
                        year="2023"
                        position="left"
                    />
                    <InstantGramSearchList
                        func={funcSelect}
                        items={eventData[2022]}
                        year="2022"
                    />
                    <InstantGramSearchList
                        func={funcSelect}
                        items={eventData[2021]}
                        year="2021"
                    />
                    <InstantGramSearchList
                        func={funcSelect}
                        items={eventData[2020]}
                        year="2020"
                        position="right"
                    />
                </div>
            </>
        </Tile>
    )
}

export default InstantGramSearchTile
