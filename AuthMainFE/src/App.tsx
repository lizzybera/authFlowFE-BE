import { RouterProvider } from 'react-router-dom'
import { mainRoutes } from './router/mainRoutes'
import { persistStore, } from 'redux-persist'
import { store } from './global/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const persistor = persistStore(store)
const App = () => {
  return (
    <div className='font-main'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

  

          <RouterProvider router={mainRoutes} />

        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
