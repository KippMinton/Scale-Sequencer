import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './Home'
import { UserProfile } from './users/UserProfile'
import { UserList } from './users/UserList'
import { UserDetail } from './users/UserDetail'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { SequenceProvider } from './sequences/SequenceProvider'
import { SequenceForm } from './sequences/SequenceForm'
import { InstrumentProvider } from './instruments/InstrumentProvider'

export const ApplicationViews = () => {
  return (
    <>
      <InstrumentProvider>
        <SequenceProvider>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route exact path="/sequences/edit/:sequenceId(\d+)">
            <SequenceForm />
          </Route>
        
          <Route exact path="/users">
            <UserList />
          </Route>

          <Route exact path="/users/detail/:userId(\d+)">
            <UserDetail />
          </Route>
        </SequenceProvider>
      </InstrumentProvider>

      <Route path="/login">
        <Login />
      </Route>

      <InstrumentProvider>
        <Route path="/register">
          <Register />
        </Route>
      </InstrumentProvider>

    </>
  )
}
