import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactSlice';
import { useHistory } from 'react-router-dom';

function EditForm({ contact }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.phoneNumber);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !number) return false;

        dispatch(updateContact({ 
            id: contact.id,
            changes: {
                name,
                phoneNumber: number,
            }
         }))

         history.goBack();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" />
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
