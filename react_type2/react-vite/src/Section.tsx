import { Context } from "./Context";

export default function Selection({level,children}){
    const value='My context value';
    return(
        <Context.Provider value={value}>
            <MyComponent/>

            

        </Context.Provider>
    )
}