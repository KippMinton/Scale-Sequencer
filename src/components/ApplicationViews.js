import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './Home'
import { UserProfile } from './users/UserProfile'
import { UserList } from './users/UserList'
import { UserDetail } from './users/UserDetail'
import { Login } from './auth/Login'
import { Register } from './auth/Register'


export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/profile">
        <UserProfile />
      </Route>

      <Route exact path="/users">
        <UserList />
      </Route>

      <Route exact path="/users/detail/:userId(\d+)">
        <UserDetail />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

    </>
  )
}
