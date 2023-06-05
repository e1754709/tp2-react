import PropTypes from "prop-types"
import Button from "./Button"
import {useLocation} from "react-router-dom"

const Header = ({title, showAdd, onAdd}) => {

    const location = useLocation()
    return(
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button 
                    text={showAdd ? "Close" : "Open"} 
                    color={showAdd ? "Blue" : "red"}
                    onClick={onAdd}/>
            )}
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}


export default Header