import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// Read it inside-out:

// document.getElementById("root") finds the <div id="root"> in your index.html.
// createRoot(...) tells React that this div is where the app lives.
// .render(...) says what to put there: StrictMode wrapping RouterProvider.

// End-to-end flow

// Suppose someone types yoursite.com/shop/5 and presses Enter:

// The browser loads index.html, which loads main.jsx.
// createBrowserRouter(routes) builds the router from your array.
// RouterProvider reads the URL and matches it: parent "/" plus child "shop/:id".
// It renders the parent's element, <App />. Promo, navbar, and footer appear.
// Inside App, <Outlet /> is replaced by the matched child's element, <ProductPage />.
// The user clicks a link to /cart. The router changes the URL without reloading the page,
// re-matches, and swaps only the Outlet content to <CartPage />. App, Navbar, and Footer do not unmount or reload.
