import React, { useState } from 'react';

function SearchUser() {
    const [query, setQuery] = useState(''); // Arama sorgusunu tutmak için
    const [userList, setUserList] = useState<any[]>([]); // Kullanıcı listesini tutmak için

    const getUsers = () => {
        fetch(`https://randomuser.me/api/?results=20&nat=tr`)
            .then(data => data.json())
            .then(res => {
                const filteredResults = res.results.filter((user: any) => 
                    `${user.name.first} ${user.name.last}`
                        .toLowerCase()
                        .includes(query.toLowerCase())
                );
                const results = filteredResults.map((user: any) => ({
                    name: `${user.name.first}`,
                    email: user.email,
                }));
                setUserList(results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <>
         <div className="container mt-5 d-flex justify-content-center">
            <div className="col-md-10">
                <h3 className="text-center mb-4">User Search</h3>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a username..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={getUsers}>
                        Search
                    </button>
                </div>
                <ul className="list-group">
                    {userList.length === 0 ? (
                        <li className="list-group-item">No users found.</li>
                    ) : (
                        userList.map((user, index) => (
                            <li key={index} className="list-group-item">
                                {user.name} - {user.email}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
        </>
       
    );
}

export default SearchUser;
