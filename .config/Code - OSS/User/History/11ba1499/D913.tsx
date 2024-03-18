import '../../App.css';
import ArticleStories from '../../bashBlocks/components/stories/ArticleStories';
import ArticleTileStories from '../../bashBlocks/components/stories/ArticleTileStories';
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories';
import Background from '../../elements/page/Background';

function BashBlocks() {
    return (
        <div>
            <Background />
            <TypographyStories />
            <hr />
            <ArticleStories />
            <hr />
            <ArticleTileStories />
        </div>
    );
}

export default BashBlocks;