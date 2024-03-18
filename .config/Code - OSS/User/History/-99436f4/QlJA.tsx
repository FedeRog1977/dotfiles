import { useState } from 'react'
import ImageSlider from '../../../bashBlocks/components/ImageSlider'
import Typography from '../../../bashBlocks/elements/Typography'
import './styles/InstantGramTile.css'
import Article from '../../../bashBlocks/components/Article'
import Tile from '../../../bashBlocks/components/Tile'
import refactorEvent from '../../../scripts/compilers/refactorEvent'
import DropDown from '../../../bashBlocks/components/DropDown'
import { useMobile } from '../../../scripts/display/useMobile'

const InstantGramResultTile = ({ event, sportEvent, showSportEvent }: any) => {
    const isMobile = useMobile()

    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent })

    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    return (
        <Tile type="solid" dense={isMobile && true}>
            <>
                <div className="instant-gram-tile-title">
                    {refactoredEvent.prefix && (
                        <>
                            <Typography
                                type="h1"
                                content={refactoredEvent.prefix}
                                inline
                            />
                            <Typography type="h1" content=":" inline />
                        </>
                    )}
                    {refactoredEvent.names.length > 1 ? (
                        <>
                            {refactoredEvent.names.map(
                                ({ name, refKey }: any) => (
                                    <div>
                                        <Typography
                                            type="h2"
                                            content={
                                                <>
                                                    Part{refKey}
                                                    &nbsp;&#8212;&nbsp;
                                                </>
                                            }
                                            color="#585858"
                                            inline
                                            refKey={refKey}
                                        />
                                        <Typography
                                            type="h2"
                                            content={<>{name}</>}
                                            inline
                                            refKey={refKey}
                                        />
                                    </div>
                                )
                            )}
                        </>
                    ) : (
                        <Typography
                            type={refactoredEvent.prefix ? 'h2' : 'h1'}
                            content={refactoredEvent.names[0].name}
                            textAlign="center"
                        />
                    )}
                </div>
                <div className="instant-gram-tile-title">
                    <Typography
                        type="h3"
                        content={refactoredEvent.startDate}
                        textAlign="left"
                        color="#585858"
                        inline
                    />
                    {refactoredEvent.endDate && (
                        <>
                            <Typography
                                type="h3"
                                content={<>&nbsp;&#8212;&nbsp;</>}
                                textAlign="left"
                                color="#585858"
                                inline
                            />
                            <Typography
                                type="h3"
                                content={refactoredEvent.endDate}
                                textAlign="left"
                                color="#585858"
                                inline
                            />
                        </>
                    )}
                </div>
                {refactoredEvent.showSportEvent && (
                    <div className="instant-gram-tile-sport">
                        <div>
                            <div className="instant-gram-tile-sport-sub-element left">
                                <Typography
                                    type="body"
                                    content={refactoredEvent.sportDist}
                                    boldFace
                                    inline
                                    mR="5px"
                                />
                                <Typography
                                    type="body"
                                    content={refactoredEvent.sportElev}
                                    boldFace
                                    inline
                                    mL="5px"
                                />
                            </div>
                            <div className="instant-gram-tile-sport-sub-element right">
                                <Typography
                                    type="body"
                                    content={<>[{refactoredEvent.sportTime}]</>}
                                    boldFace
                                    inline
                                />
                            </div>
                        </div>
                        {refactoredEvent.sportIslands && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Island(s): "
                                        textAlign="center"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportIslands}
                                        textAlign="center"
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportMunros && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportMunros}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportMunroTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro Top(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportMunroTops}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportCorbetts && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportCorbetts}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportCorbettTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett Top(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent.sportCorbettTops
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportGrahams && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Graham(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportGrahams}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportSubTwos && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Sub 2000(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportSubTwos}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.sportDonalds && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Donald(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.sportDonalds}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {refactoredEvent.youthHostels && (
                    <div className="instant-gram-tile-body">
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="body"
                                        content="Youth Hostel(s): "
                                        boldFace
                                        inline
                                    />
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.youthHostels}
                                        inline
                                    />
                                </>
                            }
                            textAlign="center"
                        />
                    </div>
                )}
                <div className="instant-gram-tile-body">
                    <DropDown
                        className="regular"
                        func={handleClick}
                        funcResp={showDropDown}
                    />
                </div>
                {showDropDown && (
                    <div className="instant-gram-tile-body">
                        {Array.isArray(refactoredEvent.description) ? (
                            <Article
                                sections={refactoredEvent.description}
                                textAlign="justify"
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={refactoredEvent.description}
                                textAlign="justify"
                                paragraphMargins
                            />
                        )}
                    </div>
                )}
                <div className="instant-gram-tile-image-slider">
                    <ImageSlider slides={refactoredEvent.images} />
                </div>
            </>
        </Tile>
    )
}

export default InstantGramResultTile
