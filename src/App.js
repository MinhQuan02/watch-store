import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import { publicRouter } from '~/routes';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Routes>
                    {publicRouter.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
