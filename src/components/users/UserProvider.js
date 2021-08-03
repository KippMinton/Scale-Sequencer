import React, { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {

  const currentUser = window.sessionStorage.getItem("sequence_user")
  const [users, setUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(currentUser)
  const [userObj, setUserObj] = useState({})

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then(res => res.json())
      .then(setUsers)
  };

  const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
      .then(res => res.json())
  }

  const addUser = userObj => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(getUsers)
  }

  const updateUser = user => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(getUsers)
  }

  return (
    <UserContext.Provider value={{
      users, getUsers, getUserById, addUser, updateUser, isLoggedIn, setIsLoggedIn, userObj, setUserObj
    }}>
      {props.children}
    </UserContext.Provider>
  )
};


