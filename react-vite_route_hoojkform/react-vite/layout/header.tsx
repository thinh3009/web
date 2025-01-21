import React from "react"
import { NavLink,Link,Outlet } from "react-router"

const Header = () => {
    return (
        <div>
            return (
            <div>
                <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    {/* NavLink để tạo các liên kết có thể hiển thị trạng thái active */}
                    <NavLink
                        to="/link"
                        end
                        style={({ isActive }) => ({
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'black',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/link/about"
                        style={({ isActive }) => ({
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'black',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                    >
                        About
                    </NavLink>

                    {/* Link không có trạng thái active */}
                    <Link
                        to="/link/setting"
                        style={{
                            marginRight: '15px',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                    >
                        Settings
                    </Link>
                </nav>

                <Outlet />
            </div>
            )
        </div>
    )
}
export default Header