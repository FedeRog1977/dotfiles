import '../../App.css';
import Background from '../../elements/Background';
import InstantGramSearch from '../../components/blog/instant-gram/InstantGramSearch';
import Tile from '../../bashBlocks/components/Tile';
import Typography from '../../bashBlocks/elements/Typography';
import { instantGramContent } from '../../data/page-content/blog/instant-gram/instantGramContent';

function InstantGram() {
    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            <InstantGramSearch />
            <Tile
                type='clear'
                content={
                    <Typography
                        type={instantGramContent[0].type}
                        content={instantGramContent[0].content}
                    />
                }
            />
        </div>
    );
}

export default InstantGram;