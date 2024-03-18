import { articleTestData } from '../../../data'
import { Article, ArticleProps, Background, Tile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'

export const GraphicDesign = () => (
    <PageLayout background={{ content: 'Graphic Design' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
