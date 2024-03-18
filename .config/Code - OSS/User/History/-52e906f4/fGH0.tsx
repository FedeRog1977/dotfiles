import { ArticleTile, Background, ImageTile } from '../bash-blocks'
import { PageLayout } from '../bash-blocks/templates'
import { homeContent } from '../compounds'

export const Home = () => (
    <PageLayout background={homeContent.background}>
        <ImageTile {...homeContent.tileOne} />
        <ArticleTile {...homeContent.tileTwo} />
        <ArticleTile {...homeContent.tileThree} />
    </PageLayout>
)
