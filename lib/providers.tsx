'use client'

/* Core */
import {Provider} from 'react-redux'
import {reduxStore} from "@/lib/redux/store";
import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import Layout from "@/app/ui/layouts";

/* Instruments */

export const Providers = ({children}:{children:React.ReactNode}) => {
  return <Provider store={reduxStore}>
    <ChakraProvider>
      <Layout>
        {children}
      </Layout>
    </ChakraProvider>
  </Provider>
}