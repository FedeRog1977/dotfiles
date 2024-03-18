import '../../App.css';
import InstantGramTile from '../../bashBlocks/components/InstantGramTile';
import Background from '../../elements/page/Background';

function InstantGram() {
    // for (var i in eventData[2022]) {
    //     for (var k in eventData[2022][i].routeNames) {
    //         for (var j in sportData[2022].projects) {
    //             if (eventData[2022][i].routeNames[k] === sportData[2022].projects[j].routeName) {
    //                 setEvent(eventData[2022][i]);
    //                 setSport(sportData[2022].projects[j]);
    //             }
    //         }
    //     }
    // }

    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            <InstantGramTile event={event} sportEvent={sport} />
        </div>
    );
}

export default InstantGram;