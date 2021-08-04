import React from 'react'
import { NavBar } from './nav/NavBar'
import { UserProvider } from './users/UserProvider'
import { ApplicationViews } from './ApplicationViews'

export const ScaleSequencer = () => {
  return (
    <>
    <UserProvider>
        <NavBar />
        <ApplicationViews />
    </UserProvider>
    </>
  );
}
