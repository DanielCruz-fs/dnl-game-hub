import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6ff559dfe7d0461eaed664efae8fc2bb',
    },
});
