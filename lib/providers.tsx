'use client'

import React from "react";
import { Provider } from 'react-redux'
import {reduxStore} from "@/lib/redux/store";

export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={reduxStore}>
        {props.children}
    </Provider>
}