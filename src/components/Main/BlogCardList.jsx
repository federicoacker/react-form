import BlogCard from "./BlogCard"


function BlogCardList({ articleList, setStateArticleList, newArticle, setNewArticle, templateArticle }) {
    return (
        <>
            {
                articleList.map(article => {
                    const cardId = article.id;
                    return <BlogCard
                        articleList={articleList}
                        key={cardId}
                        id={cardId}
                        title={article.title}
                        text={article.text}
                        image={article.image}
                        setStateArticleList={setStateArticleList}
                        newArticle={newArticle}
                        setNewArticle={setNewArticle}
                        templateArticle={templateArticle}
                        deleteFunction={() => {
                            console.log("click", cardId);
                            const newArray = articleList.filter(article => article.id !== cardId);
                            setStateArticleList(newArray);
                        }

                        } />
                })
            }

        </>
    )
}

export default BlogCardList