import '../../App.css';
import Background from '../../elements/page/Background';
import InstantGramSearch from '../../components/blog/instant-gram/InstantGramSearch';

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
            <InstantGramSearch />
        </div>
    );
}

export default InstantGram;