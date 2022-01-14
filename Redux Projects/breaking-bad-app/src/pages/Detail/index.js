import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

import './styles.css'


function Detail() {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);
    const { char_id } = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
        .then((res) => res.data,)
        .then((data) => setChar(data[0]))
        .finally(() => setLoading(false));
    }, [char_id]);

    return (
        <div>
            {
                loading && <Loading />
            }
            {
                char && <div>
                    <table id="characterInfo">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Nickname</th>
                                <th>Birthday</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>{char.char_id}</td>
                                <td>{char.name}</td>
                                <td>{char.nickname}</td>
                                <td>{char.birthday}</td>
                                <td>{char.status}</td>
                            </tr>
                        </tbody>
                    </table>
                    <img src={char.img} alt={char.name} style={{ width: '50%' }}/>
                </div>
            }
            {/* {
                char && <pre>{ JSON.stringify(char) }</pre>
            } */}
        </div>
    )
}

export default Detail
