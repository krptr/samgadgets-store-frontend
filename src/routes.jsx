import { App } from "./App";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/dashboard/Dashboard";
import { SubscribersList } from "./pages/admin/subscriptions/Subscription";
import { Orders } from "./pages/admin/orders/Orders";
import { Inventory } from "./pages/admin/inventory/Inventory";
import { HomePage } from "./pages/home/HomePage";
import { ProductsPage } from "./pages/shop/ProductsPage";
import { CartPage } from "./pages/cart/CartPage";
import { ProductDetailPage } from "./pages/products-details/ProductDetailPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { SubscriptionPage } from "./pages/subscription/SubscriptionPage";
import { ThankYouPage } from "./pages/thank-you/ThankYouPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { ErrorPage } from "./pages/error/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "yoursubscription", element: <SubscriptionPage /> },
      { path: "thankyou", element: <ThankYouPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "subscriberslist", element: <SubscribersList /> },
      { path: "orders", element: <Orders /> },
      { path: "inventory", element: <Inventory /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export { routes };
