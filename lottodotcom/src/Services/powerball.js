import axios from 'axios'

export const getPowerBallResults = async () => {
    try {
        const dataGet = await axios.get("http://localhost:8010/proxy/nyl-api/games/powerball/draws", {
            headers:  {
                "Accept": "application/json",
                "X-APP-TOKEN": "6MJZZmkRcwLfIHPJMelnW2Ido",
                "Access-Control-Allow-Origin": "*"
            }
        });
        console.log(dataGet.data);
        return dataGet.data
    } catch(error) {
        console.error(error);
    }
}