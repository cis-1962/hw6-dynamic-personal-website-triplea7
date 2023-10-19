import { Provider } from 'react-redux';
import { store } from './app/store';

import Intro from './components/introduction';
import NewPost from './components/post';
import GetAllPosts from './components/allPosts';

export default function App() {
  return (
    <div className="text-3xl font-bold text-red-500 underline text-center">
      Hello world!
      <Provider store={store}>
        <Intro />
        <NewPost />
        <GetAllPosts />
      </Provider>
    </div>
  );
}
