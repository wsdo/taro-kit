import { init, RematchRootState } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
// import * as models from './loader_manual';
import models from './loader';

const loadingPlugin = createLoadingPlugin({ asNumber: true });
const store = init({
  plugins: [loadingPlugin],
  models,
});
export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
interface ILoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: Dispatch;
  };
}
export type iRootState = RematchRootState<typeof models> & ILoadingPlugin;

const configureStore = () => {
  return store;
};

export default configureStore;
