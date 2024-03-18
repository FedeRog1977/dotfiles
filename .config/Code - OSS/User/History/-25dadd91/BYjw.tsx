import Article from '../Article';
import Tile from '../Tile';

function ArticleStories() {
    const sectionsSample = [
        {
            type: "h1",
            content: "Header",
        },
        {
            type: "h2",
            content: "Header",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "h2",
            content: "Header",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
    ]

    return (
        <>
            <Tile
                type='solid'
                content={
                    <Article
                        sections={sectionsSample}
                        fontFamily='serif'
                        textAlign='justify'
                    />
                }
            />
        </>
    );
}

export default ArticleStories;