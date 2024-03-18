import '../../App.css';
import InstantGramTile from '../../bashBlocks/components/InstantGramTile';
import Background from '../../elements/page/Background';
import { eventData } from '../../data/Events';
import { sportData } from '../../data/Sport';
import { useState } from 'react';

function InstantGram() {
    const [event, setEvent] = useState(eventData[2022][42])
    const [sport, setSport] = useState(sportData[2022].projects[0])

    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            {/* Testing */}
            <InstantGramTile event={event} sportEvent={sport} />
        </div>
    );
}

export default InstantGram;