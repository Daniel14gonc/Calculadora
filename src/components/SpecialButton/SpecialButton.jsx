import React from 'react'
import PropTypes from 'prop-types'

const SpecialButton = ({ change }) => (
  <div role="button" tabIndex={0} onKeyDown={() => {}} className="special-button" style={{ color: 'white' }} onClick={() => change(0)}>0</div>
)

SpecialButton.propTypes = {
  change: PropTypes.func.isRequired,
}

export default SpecialButton
