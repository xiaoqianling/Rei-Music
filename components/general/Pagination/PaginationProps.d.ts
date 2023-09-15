import React from "react";

namespace PaginationTypes {
    interface PaginationItemProps {
        id?: number,
        active?: boolean,
        title:string,
        onClick?:(e:React.MouseEvent)=>void
    }
}