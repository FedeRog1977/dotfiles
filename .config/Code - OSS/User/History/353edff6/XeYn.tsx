import { FC } from "react";
import Typography from "../elements/Typography";
import './styles/Typography.css';

interface ArticleProps {
    sections: Array<{
        title: string;
        header: string;
        subHeader: string;
        paragraph: string;
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
    // const sectionsSample = [
    //     {
    //         header: "...",
    //         subheader: "...",
    //         paragraph: "...",
    //         subheader: "",
    //         paragraph: "...",
    //     },
    //     {
    //         header: "...",
    //         subheader: "...",
    //         paragraph: "...",
    //         subheader: "",
    //         paragraph: "...",
    //     },
    // ]

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
                ({ title, header, subHeader, paragraph }: any) => {
                    <div>
                        {title &&
                            <Typography type="t1" content={title} fontFamily={fontFamily} textAlign={textAlign} />
                        }
                    </div>
                }
            )}
        </div>
    )
}

export default Article;