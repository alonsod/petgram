import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

// withPhotos  se inyecta al componente ListOfPhotoCardsComponent, 
// y nos regresa otro componente con los datos inyectados.
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)