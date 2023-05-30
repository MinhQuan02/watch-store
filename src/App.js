import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "~/layouts/Header";
import Footer from "~/layouts/Footer";
import {publicRouter} from '~/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
