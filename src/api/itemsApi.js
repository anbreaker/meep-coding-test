import axios from 'axios';

const data = {
  method: 'get',
  url: 'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473',
  headers: {
    accept: 'application/json',
  },
};

export const items = axios(data)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
