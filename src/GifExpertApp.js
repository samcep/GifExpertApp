import React ,{useState} from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['League of legend']);
    // const handleAdd = () => {
    //    setcategories([...categories , 'Naruto']);
    // }


    return (
        <div>


            <h2>GifExpertApp</h2>

            <CategoryAdd  setCategories={setCategories}/>
            <hr></hr>
            
            {
                categories.map(category => (
                    <GifGrid 
                            key={category}
                            category={category} 
                    
                    />
                ))
            
            }
        </div>
    )
}

export default GifExpertApp
