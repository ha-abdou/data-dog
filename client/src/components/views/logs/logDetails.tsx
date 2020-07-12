import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useTypedTranslation from '../../../hooks/i18n/useTypedTranslation'

const LogDetailsView = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const { t } = useTypedTranslation()

  return (
    <div>
      <h2>Log details view: id={id}</h2>
      <button type="button" onClick={history.goBack}>
        {t('goBack')}
      </button>
    </div>
  )
}
export default LogDetailsView
