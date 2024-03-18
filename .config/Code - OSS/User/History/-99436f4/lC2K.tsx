import { useState } from 'react'
import ImageSlider from '../../../bashBlocks/compounds/image-slider.component'
import Typography from '../../../bashBlocks/elements/Typography'
import './styles/InstantGramTile.css'
import Article from '../../../bashBlocks/compounds/components/article.component'
import Tile from '../../../bashBlocks/compounds/tile.component'
import refactorEvent from '../../../scripts/compilers/refactorEvent'
import DropDown from '../../../bashBlocks/compounds/drop-down.component'
import { useMobile } from '../../../scripts/display/use-mobile'

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
                                    <div key={refKey}>
                                        <Typography
                                            type="h2"
                                            content={
                                                <>
                                                    Part&nbsp;{refKey}
                                                    &nbsp;&#8212;&nbsp;
                                                </>
                                            }
                                            color="var(--font-5)"
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
                        color="var(--font-5)"
                        inline
                    />
                    {refactoredEvent.endDate && (
                        <>
                            <Typography
                                type="h3"
                                content={<>&nbsp;&#8212;&nbsp;</>}
                                textAlign="left"
                                color="var(--font-5)"
                                inline
                            />
                            <Typography
                                type="h3"
                                content={refactoredEvent.endDate}
                                textAlign="left"
                                color="var(--font-5)"
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
                                    content={refactoredEvent.distance}
                                    boldFace
                                    inline
                                    mR="5px"
                                />
                                <Typography
                                    type="body"
                                    content={refactoredEvent.elevation}
                                    boldFace
                                    inline
                                    mL="5px"
                                />
                            </div>
                            <div className="instant-gram-tile-sport-sub-element right">
                                <Typography
                                    type="body"
                                    content={<>[{refactoredEvent.time}]</>}
                                    boldFace
                                    inline
                                />
                            </div>
                        </div>
                        {refactoredEvent.islands && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Island(s)"
                                        textAlign="center"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent.islands}
                                        textAlign="center"
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.munros && (
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
                                        content={refactoredEvent.munros}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.munroTops && (
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
                                        content={refactoredEvent.munroTops}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.corbetts && (
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
                                        content={refactoredEvent.corbetts}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.corbettTops && (
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
                                        content={refactoredEvent.corbettTops}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.grahams && (
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
                                        content={refactoredEvent.grahams}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.subTwos && (
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
                                        content={refactoredEvent.subTwos}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.donalds && (
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
                                        content={refactoredEvent.donalds}
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
                        backgroundType="regular-clear"
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
