import axios from 'axios';

const baseURL = "https://crunch-api-c1.herokuapp.com/api";

const getWinningRestaurant = async (roomId) => {
    const res = await axios.get(`${baseURL}/room`, {
        params: { roomId: roomId }
    });
    return res.data.winning_restaurant;
}

const fetchCategories = async (roomId) => {
    const restID = await getWinningRestaurant(roomId);
    let categories = [];
    if(restID) {
        const res = await axios.get(`${baseURL}/restaurant`, {
            params: {restId: restID}
        });
        if(res.data) {
            categories = res.data.menus[0].subsections;
        }
    }
    return categories;
}

export {fetchCategories};