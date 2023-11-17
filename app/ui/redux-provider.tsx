'use client'
import React from "react";
import {Provider} from "react-redux";
import {reduxStore} from "@/lib/redux/store";
import Providers from "@/app/ui/providers";

const ReduxProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <Provider store={reduxStore}>
      <Providers>
        {children}
      </Providers>
    </Provider>
  )

}

export default ReduxProvider;

