import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'globalStyles';
import Layout from 'pages/Layout';
import store from './store';

const App = () => (
    <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>
);

export default App;
