import Article from '../Article';

function ArticleStories() {
    const sectionsSample = [
        {
            title: "Title 1",
            header: "Header 1",
            subHeader: "Sub-Header 1",
            paragraph: "Paragraph 1",
        },
        {
            title: "Title 2",
            header: "Header 2",
            subHeader: "Sub-Header 2",
            paragraph: "Paragraph 2",
        },
    ]

    return (
        <>
            <Article sections={sectionsSample} fontFamily="sans-serif" textAlign="justify" />
        </>
    );
}

export default ArticleStories;