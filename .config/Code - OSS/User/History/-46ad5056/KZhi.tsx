import '../../App.css';
import InstantGramTile from '../../bashBlocks/components/InstantGramTile';
import Background from '../../elements/page/Background';
import { eventData } from '../../data/Events';

function InstantGram() {
    return (
        <div>
            <Background content={"Instant Gram"} fontFamily='Instagram' />
            {/* Testing */}
            <InstantGramTile event={eventData[2022][42]} />
        </div>
    );
}

export default InstantGram;