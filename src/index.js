import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./wrapper/Layout";
import { HomeProvider } from "./state/OnLandingContext";
import { BlogProvider } from "./state/OnBlogContext";
import { ShopProvider } from "./state/OnShopContext";
import { AboutProvider } from "./state/OnAboutContext";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <HomeProvider>
            <AboutProvider>
              <BlogProvider>
                <ShopProvider>
                  <Toaster /> <App />
                </ShopProvider>
              </BlogProvider>
            </AboutProvider>
          </HomeProvider>
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
