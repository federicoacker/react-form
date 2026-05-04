import BlogCard from "./BlogCard"


function BlogCardList({articleList}) {
  return (
    <>
        {articleList.map(article => <BlogCard key={ article.id } title={ article.title } text={ article.text } image={ article.image }/>)}
    </>
  )
}

export default BlogCardList