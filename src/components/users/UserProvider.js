import React, { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then(res => res.json())
      .then(setUsers)
  };

  const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
      .then(res => res.json()) // note we don't set anything on state here. Why?
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

  const setLoggedInState = (bool) => {
    setIsLoggedIn(bool)
  }


  return (
    <UserContext.Provider value={{
      users, getUsers, getUserById, addUser, updateUser, isLoggedIn, setLoggedInState
    }}>
      {props.children}
    </UserContext.Provider>
  )
};


