import { Provider } from 'react-redux';
import Intro from './components/introduction';
import { store } from './app/store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Intro />
      </Provider>
    </div>
  );
}
