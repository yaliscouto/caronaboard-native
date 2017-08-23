import Firebase from 'firebase'
import { toArrayOfRides } from './Conversion'

const rideGroup = 'twpoa'

type rideOfferType = {
  origin: string,
  destination: string,
  days: string,
  hour: string
}

export const getAllRides = () => {
  return new Promise(resolve => {
    Firebase.database()
      .ref('rides')
      .child(rideGroup)
      .once('value')
      .then(snapshot => resolve(toArrayOfRides(snapshot.val())))
  })
}

export const saveRideOffer = (rideOffer: rideOfferType) => {
  const userId = Firebase.auth().currentUser.uid

  Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')
    .then(snapshot => {
      const profile = snapshot.val()
      return new Promise(resolve =>
        Firebase.database()
          .ref(`rides/${rideGroup}/${userId}`)
          .push({rideOffer, profile})
          .then(resolve)
      )
    })
}

export const saveRideRequest = (rideId) => {
  const profile = {
    name: 'TEST',
    contact: {
      kind: 'Whatsapp',
      value: '5566778899'
    }
  } // firebase.database().ref(`profiles/${userId}`).once("value")

  return new Promise(resolve => {
    Firebase.database()
      .ref(`rideRequests/${rideId}`)
      .push({profile})
      .then(resolve)
  })
}
