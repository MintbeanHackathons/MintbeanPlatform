import Vuex, { MutationTree, ActionTree } from "vuex";

import { VersionService } from "./services/versionService";
import { AuthService } from "./services/authService";

export type MbUser = {
  firstName: string;
  lastName: string;
};

export type MbState = {
  user?: MbUser;
  frontendVersion: string;
  backendVersion: string;
  loginUrl?: string;
  logoutUrl?: string;
  registerUrl?: string;
};

const state: MbState = {
  user: undefined,
  frontendVersion: "Loading",
  backendVersion: "Loading",
  loginUrl: undefined,
  logoutUrl: undefined,
  registerUrl: undefined
};

const mutations: MutationTree<MbState> = {
  setProperty(state, arr) {
    console.log("Trying to set properties", arr);
    const key: keyof MbState = arr[0];
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const value: any = arr[1];
    /* eslint-enable  @typescript-eslint/no-explicit-any */
    state[key] = value;
  }
};

const createActions: (authservice: AuthService) => ActionTree<MbState, MbState> = authService => ({
  async checkAuth({ commit }) {
    let isAuthenticated;
    let user;

    try {
      isAuthenticated = await authService.checkAuth();
    } catch (e) {
      console.error("Failed to initialize Auth Service", e);
    }

    if (isAuthenticated) {
      try {
        user = await authService.getUser();
      } catch (e) {
        console.error("Auth passed, but failed to fetch user data.", e);
      }
    }

    if (user) {
      commit("setProperty", ["user", user]);
    } else {
      commit("setProperty", ["user", undefined]);
    }
  },

  async setVersions({ commit }) {
    const versionService = new VersionService();

    versionService
      .frontendVersion()
      .then(version => commit("setProperty", ["frontendVersion", version]))
      .catch(err => {
        console.error("Failed to set frontendVersion", err);
        commit("setProperty", ["frontendVersion", "Unknown"]);
      });

    versionService
      .backendVersion()
      .then(version => commit("setProperty", ["backendVersion", version]))
      .catch(err => {
        console.error("Failed to set backendVersion", err);
        commit("setProperty", ["backendVersion", "Unknown"]);
      });
  }
})

export const createStore = (authService: AuthService) =>
  new Vuex.Store({
    state,
    mutations,
    actions: createActions(authService)
  });
