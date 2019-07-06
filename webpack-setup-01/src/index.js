import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer.jsx";



const wrapper = document.getElementById("create-article-form");
console.log(wrapper);
ReactDOM.render(<FormContainer />, wrapper);