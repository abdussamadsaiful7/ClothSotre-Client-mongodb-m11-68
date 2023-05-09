/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ClothCard from './ClothCard';

const Home = () => {
    const loadedCloths = useLoaderData();
   // console.log(loadedCloths )
    const [cloths, setCloths] = useState(loadedCloths);
    //console.log(loadedCloths)
    return (
        <div>
            <h1 className='text-center text-2xl mt-10 font-extrabold'>Cloth Super Collection: {cloths.length}</h1>
            <div>
                {
                    cloths.map(cloth=><ClothCard key={cloth._id} cloth={cloth} cloths={cloths} setCloths={setCloths}></ClothCard>)
                }
            </div>
        </div>
    );
};

export default Home;