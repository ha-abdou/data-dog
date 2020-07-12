import { useTranslation } from 'react-i18next'
import { TTranslation } from '../../locals/i18n'

type Dictionary = string | DictionaryObject
type DictionaryObject = { [K: string]: Dictionary }

interface TypedTFunction<D extends Dictionary> {
  <K extends keyof D>(args: K): D[K]
  <K extends keyof D, K1 extends keyof D[K]>(...args: [K, K1]): D[K][K1]
  <K extends keyof D, K1 extends keyof D[K], K2 extends keyof D[K][K1]>(...args: [K, K1, K2]): D[K][K1][K2]
}

export default function useTypedTranslation(): { t: TypedTFunction<TTranslation> } {
  const { t } = useTranslation()
  return {
    t(...keys: string[]) {
      return t(keys.join('.'))
    },
  }
}
