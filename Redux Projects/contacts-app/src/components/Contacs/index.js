import Form from './Form';
import List from './List';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';

function Contacts() {
    const total = useSelector(contactSelectors.selectTotal);

    return (
        <>
            <h1>Contacts ({total})</h1>
            <Form />
            <List />
        </>
    )
}

export default Contacts
