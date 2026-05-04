import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function BlogCard({ id, articleList, title = "Default Title", text = "Lorem", image = "https://placehold.co/600x400", deleteFunction, setStateArticleList, newArticle, templateArticle, setNewArticle }) {
    const [isEdit, setIsEdit] = useState(false);

    const editFunction = () => {
        setIsEdit(!isEdit);
        setNewArticle(
            {
                ...newArticle,
                title,
                text,
                image

            }
        )
    }

    const changeHandler = (event) => {
        const inputField = event.target;
        let submitValue = inputField.value;

        const modifiedArticle = {
            ...newArticle,
            id: id,
            [inputField.name]: submitValue

        }

        setNewArticle(modifiedArticle);

    }

    const submitEditHandler = (event) => {
        event.preventDefault();
        let newArticleList = articleList.filter(article => article.id !== id);
        newArticleList = [
            newArticle,
            ...newArticleList
        ]
        console.log(newArticle);
        setStateArticleList(newArticleList);
        setNewArticle(templateArticle);
        setIsEdit(false);

    }

    return (
        <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <Card className="blog-card h-100">
                <Card.Img className="blog-image" variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="flex-grow-1 my-card-text">
                        {text}
                    </Card.Text>
                    <div className="d-flex align-self-end gap-2">
                        <button className="btn btn-warning" onClick={editFunction}><i className="bi bi-pencil"></i></button>
                        <button className="btn btn-danger" onClick={deleteFunction}><i className="bi bi-trash"></i></button>
                    </div>
                </Card.Body>
                {
                    isEdit && (
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <form className="form-control d-flex flex-column gap-3" onSubmit={submitEditHandler}>
                                <input onChange={changeHandler} type="text" name="title" value={newArticle.title} className="form-control" />
                                <textarea onChange={changeHandler} name="text" value={newArticle.text} className="flex-grow-1 my-card-text form-control" >
                                    {newArticle.text}
                                </textarea>
                                <button type="submit" className="btn btn-primary">Effettua Modifiche</button>
                            </form>
                        </Card.Body>
                    )
                }
            </Card>
        </Col>
    )
}

export default BlogCard