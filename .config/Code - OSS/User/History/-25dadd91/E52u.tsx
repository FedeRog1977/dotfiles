import Article from '../Article';

function ArticleStories() {
    const sectionsSample = [
        {
            type: "h2",
            content: "Header",
        },
        {
            type: "body",
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