import "./index.css";
import App from "./App";
import reactToWebComponent from "@r2wc/react-to-web-component";

const wcChecklist = reactToWebComponent(App);

customElements.define("feedback-widget", wcChecklist);
