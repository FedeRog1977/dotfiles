import { articleTestData } from '../../../data'
import { Article, ArticleProps, Background, Tile } from '../../bash-blocks'

export const MiamiVice = () => (
    <PageLayout background={{ ctype: 'miami', ontent: 'MIAMI VICE' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
