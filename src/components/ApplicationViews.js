import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { UserDetail } from "./users/UserDetail"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <UserProvider>
        <Route exact path="/users">
          <UserList />
        </Route>

        <Route exact path="/users/detail/:userId(\d+)">
          <UserDetail />
        </Route>
      </UserProvider>
    </>
  )
}
