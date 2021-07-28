import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserList = () => {

  const { getUsers, users } = useContext(UserContext)

  // Initialization effect hook -> Go get User data
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Users</h1>
      <div className="users">
        {
          users.map(user => {
            return <UserCard key={user.id} user={user} />
          })
        }
      </div>
    </>
  )
}