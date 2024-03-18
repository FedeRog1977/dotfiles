import { ArticleStories } from '../../bash-blocks'
import { DropDownStories } from '../../bash-blocks'
import { FootnoteStories } from '../../bash-blocks'
import { ImageSliderStories } from '../../bash-blocks'
import { TypographyStories } from '../../bash-blocks'
import Background from '../../elements/Background'

export const BashBlocks = () => (
    <>
        <Background />
        <TypographyStories />
        <FootnoteStories />
        <ArticleStories />
        <ImageSliderStories />
        <DropDownStories />
    </>
)
