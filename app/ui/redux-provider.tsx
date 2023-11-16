import React from "react";
import {Provider} from 'react-redux'
import {reduxStore} from "@/lib/redux/store";
import Providers from "@/app/ui/provider";


export function ReduxProvider({children}: { children: React.ReactNode }) {
  return (
    <Provider store={reduxStore}>
      <Providers>
        {children}
      </Providers>
    </Provider>
  )
}

