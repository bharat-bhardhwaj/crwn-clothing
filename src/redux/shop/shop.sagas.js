import { takeLatest, call, put } from 'redux-saga/effects'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import { fetchCollectionFailure, fetchCollectionsSuccess } from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
  yield console.log('i am fired')

  try {
    const collectionRef = firestore.collection('collections')
    const snapShot = yield collectionRef.get()

    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot)
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
