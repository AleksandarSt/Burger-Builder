import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b3126.firebaseio.com/'
});

export default instance;