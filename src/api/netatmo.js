import axios from 'axios';

const url = 'https://notman.herokuapp.com/api/netatmo/environment';

function getNetatmo(){
    return axios.get(url)
    .then(function(res){
        console.log('Environmental data is: ',res.data[0].modules[0].dashboard_data.Temperature)
			return res.data;
		});
}

module.exports = {
    environmental: getNetatmo
};