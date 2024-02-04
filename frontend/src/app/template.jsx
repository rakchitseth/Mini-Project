'use client';
import { SnackbarProvider } from 'notistack';
  import { useEffect } from 'react'
import { AppProvider } from './AppContext';
import Navbar from './navbar';

  export default function Template({ children }) {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.min.js')
    }, [])
      return <SnackbarProvider maxSnack={3}
      anchorOrigin={{vertical:'top',horizontal:'right'}}>
        <AppProvider>
        <Navbar />
        {children}
        </AppProvider>
      </SnackbarProvider>
    }