import { formatArticle } from "../../../../../scripts";
import { Typography, Spacing } from "../../../basics";
import { Article, ImageMatrix } from "../../../partials";
import { ArticleTileImageProps } from "../../article-tile/article-tile.types";
import { ArticleTileImageMatrixProps } from "../article-tile.types";

export const ArticleTileImageMatrix: React.FC<ArticleTileImageMatrixProps> = (items: ArticleTileImageMatrixProps) => (
    items?.map(
    (
        
        index
    ) => (
        <div key={index}>
            {heading && (
                <Typography
                    type="h2"
                    textAlign={textAlign}
                    content={heading}
                    light
                    paragraphMargins
                />
            )}
            {bodyOne && Array.isArray(bodyOne) ? (
                <Article
                    sections={formatArticle(
                        bodyOne,
                        'body',
                        'darkerGrey',
                        false,
                        false,
                        false,
                        'none',
                        true,
                        false
                    )}
                    textAlign="justify"
                    extendParagraphMargins
                />
            ) : (
                <Typography
                    type="body"
                    content={bodyOne}
                    textAlign="justify"
                    light
                    paragraphMargins
                />
            )}
            <ImageMatrix items={items} />
            <Spacing mY={isMobile && bodyTwo ? 15 : 30} />
            {bodyTwo && Array.isArray(bodyTwo) ? (
                <Article
                    sections={formatArticle(
                        bodyTwo,
                        'body',
                        'darkerGrey',
                        false,
                        false,
                        false,
                        'none',
                        true,
                        false
                    )}
                    textAlign="justify"
                    extendParagraphMargins={
                        !Boolean(index + 1 === imageMatrices.length)
                    }
                />
            ) : (
                <Typography
                    type="body"
                    content={bodyTwo}
                    textAlign="justify"
                    light
                    paragraphMargins={
                        !Boolean(index + 1 === imageMatrices.length)
                    }
                />
            )}
        </div>
    )
)