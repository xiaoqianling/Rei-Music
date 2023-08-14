'use client'
import React from 'react';
import {useOnlineStatus} from "@/app/hooks";

function Network() {
    const online = useOnlineStatus();
    return (
        <div>
            {online ? '✅Online' : '❌Disconnected'}
        </div>
    );
}

export default Network;