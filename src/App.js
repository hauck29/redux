import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import {useDispatch} from 'react-redux';
import {populateProduce} from './store/produce';

function App() {

  const dispatch = useDispatch();
  //this triggers the POPULATE action upon the Application loading
  //so the produce is available as soon as a user logs on
  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
