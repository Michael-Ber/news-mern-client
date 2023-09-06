export const newsService = () => {
    // const apiUrlHeadlines = `https://news-24aj.onrender.com/`;
    // const apiUrlEverything = `https://news-24aj.onrender.com/search_result`;
    const apiUrlHeadlines = `http://localhost:3005/`;
    const apiUrlEverything = `http://localhost:3005/search_result`;

    return {
        apiUrlHeadlines,
        apiUrlEverything
    }
}
