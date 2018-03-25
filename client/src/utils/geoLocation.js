import {APP_TYPES} from '../features/app/app.types';

export function getUserLocation(){
    return function(dispatch){
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition((position) => {
          dispatch({
              type: APP_TYPES.getUserLocationSuccess,
              payload: position.coords
      })
    })
  }}