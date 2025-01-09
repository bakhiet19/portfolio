import { Link } from "react-router-dom";

export default function Button({link}){
    return(
        <button><Link to={link}>Code</Link></button>
    )
}