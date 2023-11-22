'use client'
import React from "react";
import {Provider} from "react-redux";
import {reduxStore} from "@/lib/redux/store";
import Providers from "@/app/ui/providers";
import {ChakraProvider} from "@chakra-ui/react";

const ReduxProvider = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <Provider store={reduxStore}>
      <ChakraProvider>
        <Providers>
          {children}
        </Providers>
      </ChakraProvider>
    </Provider>
  )

}

export default ReduxProvider;

