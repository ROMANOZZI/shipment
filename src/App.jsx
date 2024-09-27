import { useEffect } from "react";
import store from "./state/store";
import { useSelector } from "react-redux";
import cookies from "js-cookie";
import Header from "./components/Header";
export default function App() {
  const lang = useSelector((state) => state.language);
  useEffect(() => {
    cookies.set("lang", lang);
  }, [lang]);
  return (
    <>
    <Header />
    </>
  );
}
