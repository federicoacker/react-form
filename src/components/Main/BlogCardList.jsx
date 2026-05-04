import BlogCard from "./BlogCard"


function BlogCardList({ articleList, setStateArticleList }) {
    return (
        <>
            {
                articleList.map(article => {
                    const cardId = article.id;
                    return <BlogCard
                        articleList={articleList}
                        key={ cardId }
                        title={article.title}
                        text={article.text}
                        image={article.image}
                        deleteFunction={() => {
                            console.log("click", cardId);
                            const newArray = articleList.filter(article => article.id !== cardId);
                            setStateArticleList(newArray);
                        }}/>
                })
            }
            
        </>
    )
}

export default BlogCardList