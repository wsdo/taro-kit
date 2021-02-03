import { createModel } from '@rematch/core';
import { getLogin } from '../../services/demo';

export default createModel({
  state: {
    num: 0,
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: dispatch => ({
    async login(payload) {
      const res = await getLogin(payload);
      return res;
    },
    async increment(payload, rootState) {
      this.updateState({
        num: rootState.common.num + 1,
      });
    },
    async dec(payload, rootState) {
      this.updateState({
        num: rootState.common.num - 1,
      });
    },
  }),
});
