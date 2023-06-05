import PropTypes from 'prop-types'
const Button = ({text, onClick, color}) => {
    return (
        <button
        onClick = {onClick}
        style={{ backgroundColor : color }} 
        className="btn">
            {text}
        </button>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
}

export default Button