import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import BlogCardList from "./BlogCardList.jsx"
import articleList from "../../utils/data.js"
import { useState } from "react"
import AddArticleForm from "./AddArticleForm.jsx"

const templateArticle =
{
    id: crypto.randomUUID(),
    title: "",
    text: "",
    image: null
}

function Main() {
    const [stateArticleList, setStateArticleList] = useState(articleList);
    const [newArticle, setNewArticle] = useState(templateArticle);
    return (
        <main className="bg-dark-subtle">
            <Container className="py-5">
                <Row className="g-3 align-items-stretch my-3">
                    <BlogCardList articleList={stateArticleList} setStateArticleList={setStateArticleList} templateArticle={templateArticle} newArticle={newArticle} setNewArticle={setNewArticle}/>
                </Row>
                <AddArticleForm articleList={stateArticleList} setStateArticleList={setStateArticleList} templateArticle={templateArticle} newArticle={newArticle} setNewArticle={setNewArticle}/>
            </Container>
        </main>
    )
}

export default Main