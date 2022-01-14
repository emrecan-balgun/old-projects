import './styles.css';

import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <div className="quoteItem">
            <Link to={`/quotes/${item.quote_id}`}>
                <q>{item.quote}</q>
            </Link>{' '}
            <strong>{item.author}</strong>
        </div>
    )
}

export default Item
