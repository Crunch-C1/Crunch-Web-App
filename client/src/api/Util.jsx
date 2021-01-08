import axios from 'axios';

const baseURL = "https://crunch-api-c1.herokuapp.com/api";

const login = async (username) => {

}

const createUser = async (username, phone) => {

}

const findRestaurantsByName = async (selections) => {
    const restaurants = [];
    for(const selection of selections) {
        const res = await axios.get(`${baseURL}/restaurant/name`, {
            params: {name: selection}
        });
        restaurants.push(res.data);
    }
    console.log(restaurants);
    return restaurants;
}

const createRoom = async (username, phone, roomname, restrictions) => {

    const res = await axios.post(`${baseURL}/room`, {
        
        name: username,
        phoneNumber: phone,
        title: roomname,
        restrictions: restrictions
        
    });

    return res.data;

}

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

export {fetchCategories, createRoom, findRestaurantsByName};