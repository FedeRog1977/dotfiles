import { ArticleStories } from '../../bashBlocks'
import { DropDownStories } from '../../bashBlocks'
import { FootnoteStories } from '../../bashBlocks'
import { ImageSliderStories } from '../../bashBlocks'
import { TypographyStories } from '../../bashBlocks'
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
