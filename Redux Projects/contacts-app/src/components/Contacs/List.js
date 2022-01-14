import { contactSelectors, removeAllContacts } from '../../redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';

function List() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactSelectors.selectAll);
    const total = useSelector(contactSelectors.selectTotal);

    const handleRemoveAll = () => {
        if(window.confirm('Are you sure?')) {
            dispatch(removeAllContacts());
        } 
    }

    return (
        <div>
            {
                total > 0 && 
                <div className="removeAllBtn" onClick={handleRemoveAll}>
                    Remove All
                </div>
            }
            <ul className="list">
            {
                contacts.map((contact) => (
                    <Item key={contact.id} item={contact} />)
                )
            }
            </ul>
        </div>
    )
}

export default List
