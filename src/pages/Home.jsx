import React, { useEffect , useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

const Homepage = () => {
    const [ data , SetData] = useState([]);
    useEffect(() => {
        // Call the function and handle the returned promise
        getAllMemes().then((memes) => 
            SetData(memes.data.memes));// You can set state here if you want to display memes
        
    }, []);

    return (
        <div className='row'>
            {
                data.map(el => <MemeCard img = {el.url } title={el.name}/>)
            }
        </div>
    );
};

export default Homepage;
