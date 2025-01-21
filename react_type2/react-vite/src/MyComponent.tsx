import {userContext} from "react";
import { Context } from "./Context";

export default function MyComponent({children}){
    const value=userContext(Context);

    return <span>{value}</span>
}