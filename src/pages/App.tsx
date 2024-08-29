import React from 'react';
import { IProduct } from '../model/IProduct';

function App() {

    const products: IProduct[] = [
        { id: 1, name: 'Arctic MX-6', price: 249, description: 'Termal macun' },
        { id: 2, name: 'AMD Ryzen 5800x3d', price: 10500, description: 'Islemci' },
        { id: 3, name: 'Synthe Mugen 5', price: 5400, description: 'CPU sogutucu' },
        { id: 4, name: 'Windows 11', price: 11000, description: 'Isletim Sistemi' },
        { id: 5, name: 'Mad Catz DWS', price: 1750, description: 'Gaming Mouse' },
    ];

    return (
        <>
            <h1>Product List</h1>
            {products.map(data => (
                <div key={data.id}>
                    <h2>{data.name}</h2>
                    <p>Price: {data.price} TL</p>
                    <p>Description: {data.description}</p>
                </div>
            ))}
        </>
    );
}

export default App;