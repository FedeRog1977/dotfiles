import Article from '../Article';

function ArticleStories() {
    const sectionsSample = [
        {
            typeg: "h1",
            content: "Header",
        },
        {
            typeg: "h2",
            content: "Header",
        },
        {
            typeg: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            typeg: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            typeg: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            typeg: "h2",
            content: "Header",
        },
        {
            typeg: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            typeg: "body",
            content: "This is a test body paragraph of text.",
        },
    ]

    return (
        <>
            <Article sections={sectionsSample} fontFamily="sans-serif" textAlign="justify" />
            {/* ... */}
        </>
    );
}

export default ArticleStories;