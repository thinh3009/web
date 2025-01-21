type Mycom={
    myName:string
    // children:React.ReactNode
}

function MyProps(props:Mycom){
    return(
        <div>
            <h1>{props.myName}</h1>
            {/* {props.children} */}
        </div>
    )
}
export default MyProps