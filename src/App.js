import { Provider } from 'react-redux';
import GlobalStyles from 'globalStyles';
import Layout from 'pages/Layout';
import store from './store';

const App = () => (
    <Provider store={store}>
        <GlobalStyles />
        <Layout />
    </Provider>
);

export default App;
