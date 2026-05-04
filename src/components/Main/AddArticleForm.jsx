import useState from "react";

const templateArticle =
{
    id: crypto.randomUUID(),
    title: "Inserisci un titolo",
    text: "Inserisci una descrizione",
    image: "https://placehold.co/600x400"
}


function AddArticleForm({ articleList, setter }) {
    const [newArticle, setNewArticle] = useState(templateArticle);
    return (
        <form>
            <input type="text" value={newArticle.title} name="input-titolo" required/>
            <input type="text" value={newArticle.text} name="input-text" required/>
            <input type="file" value={newArticle.image} name="input-image"/>
            <img src={newArticle.image}/>
        </form>
    )
}

export default AddArticleForm