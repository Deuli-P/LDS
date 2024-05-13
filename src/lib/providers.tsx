// Mettre tout les providers ici pour avoir un seul provider global dans l'app
// Importer les providers ici exemple Theme/ i18n / etc


import { ChildrenType } from './types';


const Providers = ({children}:ChildrenType) => {
  return (
    <>
        {children}
    </>
  )
}

export default Providers;

