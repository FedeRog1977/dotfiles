import { ArticleTile, Background, ImageTile } from '../bash-blocks'
import { Layout } from '../bash-blocks/templates'
import { homeContent } from '../compounds'

export const Home = () => (
    // <>
    //     <Background {...homeContent.background} />
    //     <ImageTile {...homeContent.tileOne} />
    //     <ArticleTile {...homeContent.tileTwo} />
    //     <ArticleTile {...homeContent.tileThree} />
    // </>
    <Layout background={homeContent.background}>
        <ImageTile {...homeContent.tileOne} />
        <ArticleTile {...homeContent.tileTwo} />
        <ArticleTile {...homeContent.tileThree} />
    </Layout>
)
