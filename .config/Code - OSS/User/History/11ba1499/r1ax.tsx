import { ArticleStories } from '../../bash-blocks'
import { DropDownStories } from '../../bash-blocks'
import { FootnoteStories } from '../../bash-blocks'
import { ImageSliderStories } from '../../bash-blocks'
import { TypographyStories } from '../../bash-blocks'
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
