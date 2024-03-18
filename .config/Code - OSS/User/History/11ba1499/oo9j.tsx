import ArticleStories from '../../bashBlocks/compounds/stories/article.stories'
import DropDownStories from '../../bashBlocks/compounds/stories/drop-down.stories'
import FootnoteStories from '../../bashBlocks/compounds/stories/footnote.stories'
import ImageSliderStories from '../../bashBlocks/compounds/stories/image-slider.stories'
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories'
import Background from '../../elements/Background'

function BashBlocks() {
    return (
        <>
            <Background />
            <TypographyStories />
            <FootnoteStories />
            <ArticleStories />
            <ImageSliderStories />
            <DropDownStories />
        </>
    )
}

export default BashBlocks
