import '../../App.css';
import Background from '../../elements/Background';
import InstantGramSearch from '../../components/blog/instant-gram/InstantGramSearch';
import Tile from '../../bashBlocks/components/Tile';
import Typography from '../../bashBlocks/elements/Typography';

function InstantGram() {
    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            <InstantGramSearch />
            <Tile
                type='clear-condensed'
                content={
                    <Typography
                        type='footnote'
                        content='*All ...'
            }
            />
        </div>
    );
}

export default InstantGram;