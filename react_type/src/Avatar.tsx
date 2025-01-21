export type AvatarProps={
    name:string;
    avartarUrl:string;
    note?:string;//note?:la cu phap co the co hoac khong co
    //children props
    children:React.ReactNode

}
//destructuring
const Avatar=({name,avartarUrl,note,children}:AvatarProps)=>{
    return(
        <div>
            <img src={avartarUrl} width={50} height={60} />
            <h3>{name}</h3>
            <p>{note}</p>
            
            {children}
        </div>

        
    )
}
export default Avatar;