import { Tile, Typography } from '../../basics'
import {
    ArticleTileBodyProps,
    ArticleTileBookShelfProps,
    ArticleTileImageMatrixProps,
    ArticleTileProps,
    Sections,
} from './article-tile.types'
import {
    ArticleTileBody,
    ArticleTileBookShelf,
    ArticleTileImageMatrix,
} from './components'

const getContent = (sections: Sections) => {
    sections.map(({ component, content }, index) => (
        <>
            {component === 'body' && (
                <ArticleTileBody
                    key={index}
                    {...(content as ArticleTileBodyProps)}
                />
            )}
            {component === 'bookShelf' && (
                <ArticleTileBookShelf
                    key={index}
                    {...(content as ArticleTileBookShelfProps)}
                />
            )}
            {component === 'imageMatrix' && (
                <ArticleTileImageMatrix
                    key={index}
                    {...(content as ArticleTileImageMatrixProps)}
                />
            )}
        </>
    ))
}

export const ArticleTile: React.FC<ArticleTileProps> = ({
    type = 'clear',
    top = false,
    heading,
    subHeading,
    textAlign = 'center',
    margins = false,
    sections,
}: ArticleTileProps) => (
    <Tile type={type} margins={margins} top={top}>
        {subHeading && (
            <Typography
                type="h2"
                textAlign={textAlign}
                content={subHeading}
                light
            />
        )}
        {heading && (
            <Typography
                type="h1"
                textAlign={textAlign}
                content={heading}
                light
                paragraphMargins
            />
        )}

        {sections.map(({ component, content }, index) => (
            <>
                {component === 'body' && (
                    <ArticleTileBody
                        key={index}
                        {...(content as ArticleTileBodyProps)}
                    />
                )}
                {component === 'bookShelf' && (
                    <ArticleTileBookShelf
                        key={index}
                        {...(content as ArticleTileBookShelfProps)}
                    />
                )}
                {component === 'imageMatrix' && (
                    <ArticleTileImageMatrix
                        key={index}
                        {...(content as ArticleTileImageMatrixProps)}
                    />
                )}
            </>
        ))}
    </Tile>
)
