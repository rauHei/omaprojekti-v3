import { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'

//sets visibility to places where its needed/ eli komponentti jonka avulla voi vaihdella mikä komponentti milloinkin näkyy

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <button className="btn btn-outline-primary" onClick={toggleVisibility}>{props.buttonLabel} </button>

            </div>
            <div style={showWhenVisible} >

                {props.children}

                <button id="togslebut" className="btn btn-outline-primary" onClick={toggleVisibility}>Peruuta</button>
            </div>
        </div>
    )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglable