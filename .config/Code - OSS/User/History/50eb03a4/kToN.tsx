import { FC, useState } from "react";
import "./styles/Article.css";

interface InstantGramTileProps {
    event: {
        id: string;
        namePrefix?: string;
        nameSuffix: string;
        startDate: string;
        endDate?: string;
        description:
        | string
        | {
            type: string;
            content: string;
        }[];
        images: {
            url: string;
            alt: string;
            description: string;
        }[];
        routeNames?: string[];
        youthHostels?: string[];
    };
    sportEvent?: Array<{
        id: string;
        routeName: string;
        dist: number;
        elev: number;
        time: string;
        companionship: number;
        islands?: string[];
        munros?: string[];
        munroTops?: string[];
        corbetts?: string[];
        corbettTops?: string[];
        grahams?: string[];
        subTwos?: string[];
        donalds?: string[];
    }>;
    showSportEvent?: boolean;
}

const ArticleTile: FC<InstantGramTileProps> = (
    { event, sportEvent, showSportEvent }: any
) => {
    return (
        <div className='article-tile'>
            <div className='instant-gram-tile-title'>
                {event.namePrefix &&
                    <>
                        <Typography type='h1' content={event.namePrefix} textAlign='left' inline />
                        <Typography type='h1' content=': ' textAlign='left' inline />
                    </>
                }
                <Typography type='h1' content={event.nameSuffix} textAlign='left' inline />
            </div>
            <div className='instant-gram-tile-title'>
                <Typography type='h3' content={event.startDate} textAlign='left' inline />
                {event.endDate &&
                    <>
                        <Typography type='h3' content={<>{' '}&#8212;{' '}</>} textAlign='left' inline />
                        <Typography type='h3' content={event.endDate} textAlign='left' inline />
                    </>
                }
            </div>
            {showSportEvent &&
                <div className='instant-gram-tile-sport'>
                    <div>
                        <Typography type='body' fontFamily='sans-serif' content='Distance: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportDist} textAlign='center' inline />
                        <Typography type='body' fontFamily='sans-serif' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                        <Typography type='body' fontFamily='sans-serif' content='Elevation: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportElev} textAlign='center' inline />
                        <Typography type='body' fontFamily='sans-serif' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                        <Typography type='body' fontFamily='sans-serif' content='Time: ' textAlign='center' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content={sportTime} textAlign='center' inline />
                    </div>
                    {sportIslands &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Island(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportIslands} textAlign='center' inline />
                        </div>
                    }
                    {sportMunros &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Munro(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunros} textAlign='center' inline />
                        </div>
                    }
                    {sportMunroTops &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Munro Top(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportMunroTops} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbetts &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Corbett(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbetts} textAlign='center' inline />
                        </div>
                    }
                    {sportCorbettTops &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Corbett Top(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportCorbettTops} textAlign='center' inline />
                        </div>
                    }
                    {sportGrahams &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Graham(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportGrahams} textAlign='center' inline />
                        </div>
                    }
                    {sportSubTwos &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Sub 2000(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportSubTwos} textAlign='center' inline />
                        </div>
                    }
                    {sportDonalds &&
                        <div className='instant-gram-tile-sport-element'>
                            <Typography type='body' fontFamily='sans-serif' content='Donald(s): ' textAlign='center' boldFace inline />
                            <Typography type='body' fontFamily='sans-serif' content={sportDonalds} textAlign='center' inline />
                        </div>
                    }
                </div>
            }
            {youthHostels &&
                <div className='instant-gram-tile-body'>
                    <Typography
                        type='body'
                        content={
                            <>
                                <Typography type='body' content='Youth Hostel(s): ' textAlign='left' boldFace inline />
                                <Typography type='body' content={youthHostels} textAlign='left' inline />
                            </>
                        }
                        textAlign='center'
                    />
                </div>
            }
            <div className='instant-gram-tile-body'>
                <Button
                    className='instant-gram-expand'
                    func={handleClick}
                    content={<FontAwesomeIcon icon={faChevronDown} />}
                />
            </div>
            {showDescription &&
                <div className='instant-gram-tile-body'>
                    {Array.isArray(event.description) ?
                        <>
                            {event.description.map(
                                ({ type, content }: any) => (
                                    <Typography type={type} content={content} textAlign='justify' paragraphMargins />
                                )
                            )}
                        </>
                        :
                        <>
                            <Typography type='body' content={event.description} textAlign='justify' />
                        </>
                    }
                </div>
            }
            <div className='instant-gram-tile-body'>
                <ImageSlider slides={event.images} />
            </div>
        </div>
    )
}

export default ArticleTile;