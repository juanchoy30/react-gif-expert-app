import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    /*
    const handleAdd = () => {
        const Addition = 'Banjo & Kazooie'

        setCategories( cats => [ ...cats, Addition] );  // cats is the previous value

    };
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li> // The key is what tells react the position of the index
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp