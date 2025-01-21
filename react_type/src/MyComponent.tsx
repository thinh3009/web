import { Fragment } from "react/jsx-runtime";

function MyComponent() {
    const name = ['nam', 'nu', 'bede'];
    const checkShow = false
    return (
        <Fragment>
            <div className="container">
                <h1>xinh chao,{checkShow && name}</h1>
            </div>
            <p>gioi tin</p>
            <ul>
                {/* dung map la phai gan key de xac dinh vi tri va sua lai */}
                {name.map((value,index)=>{
                    // cai key trong map la index cua element no se tu dong tim index de sua hoac them
                    //giong vong for
                    return (<li key={index}>thi is:{value}</li>)
                })}

                
                
            </ul>


        </Fragment>

    )

}
export default MyComponent