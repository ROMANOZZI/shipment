import { useEffect } from "react";
import store from "./state/store";
import { useSelector,useDispatch } from "react-redux";
import cookies from "js-cookie";
import Header from "./components/Header";
import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import Load from "./assets/Pictures/Laoading.gif";
import {fetchShipment} from "./state/middleWare/shipmentThunk";
import General from "./components/General";
import Address from "./components/Address";
import Table from "./components/table";
export default function App() {
  const lang = useSelector((state) => state.language);
  const [Loading,setLoading]=React.useState(false);
  const {shipment,loading,error}=useSelector((state)=>state.shipment);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchShipment());
  }, [dispatch]);
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    cookies.set("lang", lang);

  }, [lang]);
  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: { "global": en },
      ar: { "global": ar },
    },
    lng: lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
 // ... existing code ...

 return (
  <>
   
    {!loading  ? (
      <>
      <Header />
      <General/>
      <div className="h-50 w-3/4 mx-auto mt-10 flex flex-col 2xl:flex-row">
      <Table/>
        <Address/>
        
      </div>
      </>
  ):(
      <div className="bg-white h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50">
        <img src={Load} alt="Loading..."  />
      </div>
    )}
    {/* Your main app content goes here */}
  </>
);

// ... existing code ...
}
