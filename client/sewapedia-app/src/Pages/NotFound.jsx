import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <h1>
      404: Page Not Found <NavLink to='/'>Home</NavLink>
    </h1>
  )
}