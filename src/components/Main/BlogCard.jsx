import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function BlogCard({title = "Default Title", text = "Lorem", image = "https://placehold.co/600x400", click }) {

    return (
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <Card className="blog-card h-100">
                <Card.Img className="blog-image" variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="flex-grow-1 my-card-text">
                        {text}
                    </Card.Text>
                    <button className="btn btn-primary" onClick={click}>Delete</button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BlogCard