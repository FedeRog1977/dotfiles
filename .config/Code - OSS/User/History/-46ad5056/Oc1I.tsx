import '../../App.css';
import InstantGramTile from '../../bashBlocks/components/InstantGramTile';
import Background from '../../elements/page/Background';
import { eventData } from '../../data/Events';

function InstantGram() {
    return (
        <div>
            <Background text={"Instant Gram"} />
            {/* Testing */}
            <InstantGramTile event={eventData[2023][3]} />
        </div>
    );
}

export default InstantGram;