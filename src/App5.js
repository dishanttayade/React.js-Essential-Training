import React, {useState, useEffect} from 'react';
import './App.css';

function App5({login}){

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if(!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [login]);

    if(loading) return <h1>LOading ...</h1>;    
    if(error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    if(!data)
        return null;
    // if(data){
    //     return <div>{JSON.stringify(data)}</div>;
    // }
    
    if(data){
        return (
            <div>
                <h1>{data.name}</h1>
                <p>{data.location}</p>
                <img src={data.avatar_url} alt={data.login} />

            </div>
        );
    }

    return <h1>No User</h1>;
}

export default App5;








// Dishant Tayade
