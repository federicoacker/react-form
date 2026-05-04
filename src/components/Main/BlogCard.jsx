import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogCard({title = "Default Title", text = "Lorem", image = "https://placehold.co/600x400"}) {
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default BlogCard