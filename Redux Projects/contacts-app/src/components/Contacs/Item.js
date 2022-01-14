import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import { Link } from 'react-router-dom';

function Item({ item }) {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch(deleteContact(id));
        }
    };

    return (
        <li>
            <span>{item.name}</span>
            <span>{item.phoneNumber}</span>
            <div>
                <span className="editBtn"><Link className="text" to={`/edit/${item.id}`}>Edit</Link></span>
                <span className="deleteBtn" onClick={() => handleDelete(item.id)}><Link to='/' className="text">Remove</Link></span>
            </div>   
        </li>
    )
}

export default Item
