import { useState } from "react";

const templateArticle =
{
    id: crypto.randomUUID(),
    title: "",
    text: "",
    image: null
}


function AddArticleForm({ articleList, setter }) {
    const [newArticle, setNewArticle] = useState(templateArticle);
    const [inputKey, setInputKey] = useState(-1);

    const resetInput = () => {
        let randomKey = crypto.randomUUID();
        setInputKey(randomKey);
    }

    const changeHandler = (event) => {
        const inputField = event.target;
        let submitValue = inputField.value;

        if (inputField.name === "image") {
            const filesArray = inputField.files;
            if (filesArray.length === 1) {
                submitValue = URL.createObjectURL(filesArray[0]);
            }
            else {
                submitValue = null;
            }
        }

        const modifiedArticle = {
            ...newArticle,
            id: crypto.randomUUID(),
            [inputField.name]: submitValue
        }

        setNewArticle(modifiedArticle);

    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newArticleList = [
            ...articleList,
            newArticle
        ]
        setter(newArticleList);
        setNewArticle(templateArticle);
    }

    return (
            <form className="form-control d-flex flex-column gap-2 py-3" onSubmit={submitHandler}>
                <h2 className="form-title">Aggiungi un nuovo Articolo!</h2>
                <label htmlFor="title">Titolo dell'Articolo</label>
                <input className="form-control" type="text" onChange={changeHandler} value={newArticle.title} name="title" required />
                <label htmlFor="text">Testo dell'Articolo</label>
                <textarea className="form-control" onChange={changeHandler} value={newArticle.text} name="text" required />
                <label htmlFor="image">Immagine associata (opzionale)</label>
                <input key={inputKey} className="form-control" type="file" onChange={changeHandler} name="image" />
                <button className="btn btn-primary" type="submit" onClick={resetInput}>Crea nuovo articolo!</button>
                <img className="img-fluid" src={newArticle.image} />
            </form>
    )
}

export default AddArticleForm