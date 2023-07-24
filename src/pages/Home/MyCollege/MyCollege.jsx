import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const MyCollege = () => {
    const { user } = useContext(AuthContext)
    const [datas, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mycollege/${user?.email}`)
            .then(res => res.json()).then(data => console.log(data))
    }, [user])

    return (
        <div>

        </div>
    );
};

export default MyCollege;