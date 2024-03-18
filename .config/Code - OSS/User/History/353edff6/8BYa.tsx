import { FC } from "react";
import Typography from "../elements/Typography";

interface ArticleProps {
    sections: Array<{
        type: string;
        content: string;
    }>;
    fontFamily?:
    | 'serif'
    | 'sans-serif';
    textAlign:
    | 'left'
    | 'center'
    | 'justify'
    | 'right';
    mT?: string;
    mB?: string;
}

const Article: FC<ArticleProps> = (
    {
        sections,
        fontFamily,
        textAlign,
        mT,
        mB,
    }: any
) => {
    return (
        <div
            // className={
            //     (fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`)
            // }
            style={{
                marginTop: mT,
                marginBottom: mB,
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
            }}
        >
            {sections.map(
                ({ type, content }: any) => {
                    <div>
                        <Typography type={type} content={content} fontFamily={fontFamily} textAlign={textAlign} />
                    </div>
                }
            )}
        </div>
    )
}

export default Article;