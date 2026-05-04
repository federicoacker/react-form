import BlogCard from "./BlogCard"


function BlogCardList({ articleList, setter }) {
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
                        click={() => {
                            console.log("click", cardId);
                            const newArray = articleList.filter(article => article.id !== cardId);
                            setter(newArray);
                        }}/>
                })
            }
            
        </>
    )
}

export default BlogCardList