import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, Fragment} from 'react';
import {mainActions} from './store/MainSlice';
import StatusBarMessage from './components/UI/StatusBarMessage';

let isInitialRunning = true;

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatchFunction = useDispatch()

  useEffect(() => {

    const sendCartData = async () => {
      dispatchFunction(mainActions.showStatusMessage({
        status: 'pending',
        title: 'отправка данных',
        message: 'данные корзины отправляются на сервер...',
      }));

      const response = await fetch(
        'https://react-lesson-d3b03-default-rtdb.firebaseio.com/cart.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if(!response.ok){
        throw new Error('Ошибка при отправке данных корзины');
      }

      dispatchFunction(mainActions.showStatusMessage({
        status: 'success',
        title: 'отправка данных успешно',
        message: 'данные корзины успешно отправлены на сервер',
      }));
    }

    if(isInitialRunning){
      isInitialRunning = false;
      return;
    }

    sendCartData().catch(e => {
      dispatchFunction(mainActions.showStatusMessage({
        status: 'error',
        title: 'ошибка запроса ',
        message: 'Ошибка при отправке данных корзины',
      }));
    })
  }, [cart]);

  return (
    <Fragment>
      {statusMessage && 
        <StatusBarMessage statusMessage={statusMessage}
        status={statusMessage.status}
        title={statusMessage.title}
        message={statusMessage.message}
        />
      }
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
