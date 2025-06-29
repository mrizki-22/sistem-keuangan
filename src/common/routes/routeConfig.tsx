import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import { ROUTES } from "./routes";
import { withSuspense } from "../pages/LazyWrapper";

// Lazy load pages
const Dashboard = lazy(() => import("../../pages/dashboard/DashboardPage"));
//halaman menu operasional
const Pembayaran = lazy(() => import("../../pages/operasional/PembayaranPage"));
const PembayaranFormulir = lazy(() => import("../../pages/operasional/PembayaranFormulirPage"));

// Route configuration
export const routeConfig: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: withSuspense(Dashboard),
  },
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN,
    element: withSuspense(Pembayaran),
  },
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN_FORMULIR,
    element: withSuspense(PembayaranFormulir),
  },
];
