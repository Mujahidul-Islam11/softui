import { createBrowserRouter } from "react-router-dom";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Accordion from "./UIcomponents/Accordion/Accordion";
import Avatar from "./UIcomponents/Avatar/Avatar";
import Button from "./UIcomponents/Button/Button";
import Card from "./UIcomponents/Card/Card";
import Carousel from "./UIcomponents/Carousel/Carousel";
import Checkbox from "./UIcomponents/CheckBox/Checkbox";
import Footer from "./UIcomponents/Footer/Footer";
import Form from "./UIcomponents/Form/Form";
import Input from "./UIcomponents/Input/Input";

const Route = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/components",
    element: <ComponentsLayout />,
    children: [
      { path: "introduction", element: <NotFound /> },
      { path: "quickstart", element: <NotFound /> },
      { path: "avatar", element: <Avatar /> },
      { path: "accordion", element: <Accordion /> },
      { path: "button", element: <Button /> },
      { path: "carousel", element: <Carousel /> },
      { path: "checkbox", element: <Checkbox /> },
      { path: "Card", element: <Card /> },
      { path: "Form", element: <Form /> },
      { path: "Footer", element: <Footer /> },
      { path: "input", element: <Input /> },
      { path: "slider", element: <NotFound /> },
    ],
  },
]);
export default Route;
