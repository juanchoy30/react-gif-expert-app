import React, { useState } from 'react'

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {

        const Addition = 'Banjo & Kazooie'

        //setCategories( [...categories, Addition] ); // Primera solución
        setCategories( cats => [ ...cats, Addition] );  // cats is the previous value


        console.log(categories);
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Add</button>

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