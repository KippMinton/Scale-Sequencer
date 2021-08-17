import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserList = () => {

  const { getUsers, users } = useContext(UserContext)

  // Initialization effect hook -> Go get User data
  useEffect(() => {
    getUsers()
    .then(console.log(users))
  }, [])

  return (
    <>
      <div className="title__div">
      <h1>Users</h1>
      </div>
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
