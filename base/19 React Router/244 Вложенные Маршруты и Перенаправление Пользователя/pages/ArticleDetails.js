import {useParams} from 'react-router-dom'

const ArticleDetails = () => {

    const params = useParams();
    return (
        <section>
            <h1>ArticleDetails page</h1>
            <p>{params.articleId}</p>
            <p>article detail page</p>
        </section>
    );
}

export default ArticleDetails;