/* eslint-disable react/prop-types */


function Badge({ text }) {

  return (
    <div className={`badge ${text}`}>
        <p>
            {text}
        </p>
    </div>
  )
}

export default Badge