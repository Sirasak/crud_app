import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination';

import './UserTable.css';

const UserTable = () => {
    const users = useSelector(state => state);

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [selectedUsers, setSelectedUsers] = useState();

    console.log(currentUsers);

    const dispatch = useDispatch();

    const handleEdit = (user) => {
        dispatch({ type: 'EDIT', payload: user})
    };

    const handleDelete = (user) => {
        dispatch({ type: 'DELETE', payload: user})
    };

    const handleCheckboxSelect = (user) => {
        const selectedUser = {
            select: true,
            ...user
        }
        // users[user] = selectedUser
        // console.log(selectedUsersList)
        console.log(users)
        console.log(selectedUser)
    };

    const handleDeleteCheckbox = () => {
        // dispatch({ type: 'DELETE_CHECKBOX', payload: selectedUser})
        console.log("DELETEEEEEEE")
    }

    console.log(users);

    return(
        <div className="table-container">
            <div className="row">
                <div className="column-checkbox">
                    <input type="checkbox" />
                    <button
                    onClick={handleDeleteCheckbox}
                    >
                    DELETE
                    </button>
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
                                <input 
                                    type="checkbox"
                                    onClick={() => handleCheckboxSelect(user)}
                                />            
                            </td>                      
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.gender}</td>
                            <td>{user.mobile}</td>
                            <td>{user.nationality}</td>
                            <td>
                                <button
                                    onClick={() => handleEdit(user)}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(user)}
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