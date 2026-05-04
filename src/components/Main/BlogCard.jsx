import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function BlogCard({id, title = "Default Title", text = "Lorem", image = "https://placehold.co/600x400", click }) {

    return (
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <Card className="blog-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <button className="btn btn-primary" onClick={click}>Delete</button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BlogCard