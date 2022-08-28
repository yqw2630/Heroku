import React from 'react'

export default function Error () {
  return (
    <div className="App-homepage error-page">
        <div className="error-code-wrapper">
			<p className="error-code"><span className="error-code-digit">4</span><span className="error-code-digit">0</span><span className="error-code-digit">4</span></p>
		</div>
		<h4 className="error-heading">Oops, Sorry We Can’t Find That Page!</h4>
		<p className="error-sub-heading">(Either something went wrong or the page doesn’t exist anymore.)</p>
    </div>
  )
}
