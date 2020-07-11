import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

const LogDetailsView = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  return (
    <div>
      <h2>Log details view: id={id}</h2>
      <button type="button" onClick={history.goBack}>
        go back
      </button>
    </div>
  )
}
export default LogDetailsView
