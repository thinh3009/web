import { useLocation, useParams } from "react-router"

const Home =()=>{
    //lam cho link động su dung param
    // const param=useParams()

    const location=useLocation();
    const isEditMode=location.pathname.includes('./edit')
    return (
        <>
        <div>home:{isEditMode?"dang edit":'dang xem'}</div>
        <p>ma san pham ne:{isEditMode.masanpham}</p>
        </>
            
    
    )
}
export default Home