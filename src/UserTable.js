import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination';

import './UserTable.css';

const UserTable = () => {
    const users = useSelector(state => state);

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexofFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexofFirstUser, indexOfLastUser)

    const dispatch = useDispatch();

    const handleDelete = (users) => {
        dispatch({ type: 'DELETE', payload: users.name})
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(users);
    // console.log(usersState.[1].name);

    return(
        <div className="table-container">
            <div className="row">
                <div className="column-checkbox">
                    <input type="checkbox" />
                </div>
                <div className="column-pagination">
                    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
                </div>
            </div>
            <table id="userTable">
                <thead>
                <tr>
                    <th>
                    </th>
                    <th>
                        Name:
                    </th>
                    <th>
                        Gender:
                    </th>
                    <th>
                        Mobile Phone
                    </th>
                    <th>
                        Nationality
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td >
                                <input type="checkbox" />            
                            </td>                      
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.gender}</td>
                            <td>{user.mobile}</td>
                            <td>{user.nationality}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button 
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan={3}>No users</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable