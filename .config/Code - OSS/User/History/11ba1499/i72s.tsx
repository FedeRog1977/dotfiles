import '../../App.css';
import ArticleStories from '../../bashBlocks/components/stories/ArticleStories';
import FootnoteStories from '../../bashBlocks/components/stories/FootnoteStories';
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories';
import Background from '../../elements/Background';

function BashBlocks() {
    return (
        <>
            <Background />
            <TypographyStories />
            <FootnoteStories />
            <ArticleStories />
        </>
    );
}

export default BashBlocks;