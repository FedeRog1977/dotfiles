import Article from '../bash-blocks/compounds/components/article.component'
import Tile from '../bash-blocks/compounds/tile.component'
import { articleTestData } from '../data/test/ArticleTestData'
import Background from '../elements/Background'

export const Home = () => (
    <div>
        <Background text="BrittonsBashRC" />
        <Tile type="solid">
            <Article
                sections={articleTestData}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </div>
)
