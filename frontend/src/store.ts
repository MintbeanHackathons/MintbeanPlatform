import Vuex, { MutationTree, ActionTree, ActionSubscriber } from "vuex"

import { VersionService } from "./services/versionService";
import { AuthService } from "./services/authService";

type MbUser = {
  firstName: string;
  lastName: string;
}

type MbState = {
  user?: MbUser,
  frontendVersion?: string,
  backendVersion?: string
}

const state: MbState = {
  user: undefined,
  frontendVersion: "Loading",
  backendVersion: "Loading"
}

const mutations: MutationTree<MbState> = {
  setProperty(state, arr) {
    console.log("Trying to set properties", arr)
    const key: keyof MbState = arr[0];
    const value: any = arr[1];
    state[key] = value;
  }
}

const actions: ActionTree<MbState, MbState> = {
  async checkAuth({ commit }) {
    const authService = new AuthService();

    let isAuthenticated;
    let user;

    try {
      isAuthenticated = await authService.checkAuth();
    } catch (e) {
      console.error('Failed to initialize Auth Service', e);
    }

    if (isAuthenticated) {
      try {
        user = await authService.getUser();
      } catch (e) {
        console.error("Auth passed, but failed to fetch user data.", e);
      }
    }

    if (user) {
      commit('setProperty', ['user', user]);
    } else {
      commit('setProperty', ['user', undefined]);
    }
  },

  async setVersions({ commit }) {
    const versionService = new VersionService();

    versionService.frontendVersion()
      .then(version => commit('setProperty', ['frontendVersion', version]))
      .catch(err => {
        console.error('Failed to set frontendVersion', err)
        commit('setProperty', ['frontendVersion', 'Unknown']);
      });

    versionService.backendVersion()
      .then(version => commit('setProperty', ['backendVersion', version]))
      .catch(err => {
        console.error('Failed to set backendVersion', err)
        commit('setProperty', ['backendVersion', 'Unknown']);
      });
  }
}

export const createStore = () => new Vuex.Store({
  state,
  mutations,
  actions
});
