import React from "react"
import "./User.css"
import { Link } from "react-router-dom"

export const UserCard = ({ user }) => (
  <div className="user">
    <h3 className="user__name">
      <Link className="user__link" to={`/users/detail/${user.id}`}>
        {user.username}
      </Link>
    </h3>
  </div>
)
