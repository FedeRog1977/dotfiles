import { FC } from "react";
import ImageSlider from "../elements/ImageSlider";
import Typography from "../elements/Typography";
import "./styles/InstantGramTile.css";

interface InstantGramTileSportProps {
    sportEvent: {
        id: string;
        routeName: string;
        dist: number;
        elev: number;
        time: string;
        companionship: number,
        islands: [],
        munros?: [];
        munroTops?: [],
        corbetts?: [],
        corbettTops?: [],
        grahams?: [],
        subTwos?: [],
        donalds?: [],
    },
}

const InstantGramTileSport: FC<InstantGramTileSportProps> = (
    { sportEvent }: any
) => {

    return (
        <div className='instant-gram-tile-sport'>
            <div style={{ textAlign: 'center' }}>
                {event.namePrefix &&
                    <>
                        <Typography type='h1' content={event.namePrefix} textAlign='left' inline />
                        {': '}
                    </>
                }
                <Typography type='h1' content={event.nameSuffix} textAlign='left' inline />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Typography type='h3' content={event.startDate} textAlign='left' inline />
                {event.endDate &&
                    <>
                        <Typography type='h3' content={<>{' '}&#8212;{' '}</>} textAlign='left' inline />
                        <Typography type='h3' content={event.endDate} textAlign='left' inline />
                    </>
                }
            </div>
            <div className='instant-gram-tile-body'>
                {/* Incomplete */}
                {event.youthHostels.length > 0 &&
                    <>
                        <Typography type='body' content='Youth Hostels: ' textAlign='left' boldFace inline />
                        {event.youthHostels.map(({ hostel, idx }: any) => {
                            return (
                                <div key={idx}>
                                    <Typography type='body' content={hostel} textAlign='left' boldFace inline />
                                </div>
                            )
                        })}
                    </>
                }
                <Typography type='body' content={event.description} textAlign='justify' />
            </div>
            <ImageSlider slides={event.images} />
        </div>
    )
}

export default InstantGramTileSport;