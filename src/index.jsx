import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./index.css";

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
