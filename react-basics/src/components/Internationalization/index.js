import { FormattedMessage } from "react-intl";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AppContextProvider } from "./context";
import Provider from "./Provider";

const Internationalization = () => {
  return (
    <AppContextProvider>
      <Provider>
        <Header />
        <Footer />
      </Provider>
    </AppContextProvider>
  );
};
export default Internationalization;
