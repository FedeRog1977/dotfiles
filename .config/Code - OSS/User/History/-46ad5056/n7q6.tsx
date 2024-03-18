import '../../App.css';
import InstantGramTile from '../../bashBlocks/components/InstantGramTile';
import Background from '../../elements/page/Background';
import { eventData } from '../../data/Events';
import { sportData } from '../../data/Sport';

function InstantGram() {
    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            {/* Testing */}
            <InstantGramTile event={eventData[2022][42]} sport={sportData[2022].projects[0]} />
        </div>
    );
}

export default InstantGram;