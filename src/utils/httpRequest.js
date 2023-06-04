import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/',
});

const postRegister = async (path, data) => {
    const response = await request.post(path, data);
    return response.data;
};

const getCustomerById = async (path, userName) => {
    const response = await request.get(path, {
        params: {
            userName,
        },
    });
    return response.data;
};

export default { postRegister, getCustomerById };
