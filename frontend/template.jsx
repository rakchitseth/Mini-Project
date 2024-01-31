'use client';
import { SnackbarProvider } from 'notistack';
  import { useEffect } from 'react'

  export default function Template({ children }) {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.min.js')
    }, [])
      return <SnackbarProvider maxSnack={3}
      anchorOrigin={{vertical:'top',horizontal:'right'}}
      >{children}</SnackbarProvider>
    }