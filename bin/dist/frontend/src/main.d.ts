import { Store } from "vuex";
import { MbState } from "./store";
import "./styles/app.scss";
import "./styles/guidebook.scss";
declare global {
    interface Window {
        store: Store<MbState>;
    }
}
