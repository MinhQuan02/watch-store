import Home from '~/pages/Home'
import Following from '~/pages/Following'


// public
const publicRouter = [
    { path: '/', component: Home},
    { path: '/following', component: Following }
]

const privateRouter = [

]


export {publicRouter, privateRouter} 
