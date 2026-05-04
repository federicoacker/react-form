import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import BlogCardList from "./BlogCardList.jsx"
import articleList from "../../utils/data.js"

function Main() {
  return (
    <main>
        <Container>
            <Row>
                <BlogCardList articleList={articleList}/>
            </Row>
        </Container>
    </main>
  )
}

export default Main