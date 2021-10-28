import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getLocationsData = async (sw, ne) => {
    try {
        const { data : { data }} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '84faa202ccmsh78a11dff77eede0p12b58djsn416606a4eb8b'
            },
        });

        return data;
    } catch (error) {
      console.log(error);
    }
}