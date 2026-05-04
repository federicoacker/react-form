import { useState } from "react";

const templateArticle =
{
    id: crypto.randomUUID(),
    title: "Inserisci un titolo",
    text: "Inserisci una descrizione",
    image: "https://placehold.co/600x400"
}


function AddArticleForm({ articleList, setter }) {
    const [newArticle, setNewArticle] = useState(templateArticle);

    const changeHandler = (event) => {
        const inputField = event.target;
        let submitValue = inputField.value;

        if(inputField.name === "image"){
            const filesArray = inputField.files;
            if(filesArray.length === 1){
                submitValue = URL.createObjectURL(filesArray[0]);
            }
        }
        
        const modifiedArticle = {
            ...newArticle,
            [inputField.name]:submitValue
        }

        setNewArticle(modifiedArticle);

    }

    return (
        <>
        
        <form className="form-control d-flex flex-column gap-2 py-3">
            <h2 className="form-title">Aggiungi un nuovo Articolo!</h2>
            <label for="title">Titolo dell'Articolo</label>
            <input className="form-control" type="text" onChange={changeHandler} value={newArticle.title} name="title" required/>
            <label for="text">Testo dell'Articolo</label>
            <textarea className="form-control" onChange={changeHandler} value={newArticle.text} name="text" required/>
            <label for="image">Immagine associata (opzionale)</label>
            <input className="form-control" type="file" onChange={changeHandler} name="image"/>
            <img className="img-fluid" src={newArticle.image}/>
        </form>
        </>
    )
}

export default AddArticleForm