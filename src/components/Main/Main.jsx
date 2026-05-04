import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import BlogCardList from "./BlogCardList.jsx"
import articleList from "../../utils/data.js"
import { useState } from "react"

function Main() {
    const [stateArticleList, setStateArticleList] = useState(articleList);
    return (
        <main className="bg-dark-subtle">
            <Container className="py-5">
                <Row className="g-3 align-items-stretch">
                    <BlogCardList articleList={stateArticleList} setter={setStateArticleList}/>
                </Row>
                
            </Container>
        </main>
    )
}

export default Main