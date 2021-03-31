const positionToObject = ({ coords }) => ({
  // from: https://github.com/SkyaTura/vue-geolocation-api/blob/master/src/helpers.js
  coords: {
    latitude: coords.latitude,
    longitude: coords.longitude,
    altitude: coords.altitude,
    accuracy: coords.accuracy,
    altitudeAccuracy: coords.altitudeAccuracy,
    heading: coords.heading,
    speed: coords.speed
  }
})

export const geolocate = (options) => {
  return new Promise((resolve, reject) => {
    const hasGeolocation = 'geolocation' in navigator

    if (!hasGeolocation) {
      reject(new Error('Geolocation is not available.'))
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(positionToObject({ coords: position.coords }))
      },
      (err) => {
        reject(err)
      },
      options
    )
  })
}
