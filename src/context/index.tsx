import React from 'react'
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactNode} from 'react'
import {AuthProvider} from "context/auth-context"


export const AppProviders = ({children}:{children:ReactNode})=>{
    return (
        <QueryClientProvider client={new QueryClient()}>
            <AuthProvider> 
                {children}
            </AuthProvider>
        </QueryClientProvider>

         
    )   
}