import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Product from '~/pages/Product';
import Register from '~/pages/Register/';
import Login from '~/pages/Login/';

// public
const publicRouter = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/following', component: Following },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

const privateRouter = [];

export { publicRouter, privateRouter };
