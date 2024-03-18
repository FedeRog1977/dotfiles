import { FC } from "react";
import './styles/Typography.css';

interface ArticleProps {
    sections: Array<{
        title: string;
        header: string;
        subHeader: string;
        paragraph: string;
    }>;
    mT: string;
    mB: string;
}

const Article: FC<ArticleProps> = (
    {
        sections,
        mT,
        mB,
    }: any
) => {
    const hills = hillData.munros.map(
        ({ lat, name }) =>
            <option key={lat} value={name}>{name}</option>
    );

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
                ({ header, subHeader }) => {
                    <div>

                    </div>
                }
            )}
        </div>
    )
}

export default Article;