import request from '~/utils/httpRequest';

function findCustomerById(path, userName) {
    request
        .getCustomerById(path, userName)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((res) => console.log(res));
}

export default findCustomerById;
