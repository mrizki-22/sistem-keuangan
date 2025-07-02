import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import { ROUTES } from "./routes";
import { withSuspense } from "../pages/LazyWrapper";

// Route configuration
export const routeConfig: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: withSuspense(lazy(() => import("../../pages/dashboard/DashboardPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN,
    element: withSuspense(lazy(() => import("../../pages/operasional/PembayaranPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN_FORMULIR,
    element: withSuspense(lazy(() => import("../../pages/operasional/PembayaranFormulirPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.UKT_MAHASISWA,
    element: withSuspense(lazy(() => import("../../pages/operasional/UktMahasiswaPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_TARIF,
    element: withSuspense(lazy(() => import("../../pages/operasional/MonitoringTarifPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_TAGIHAN,
    element: withSuspense(lazy(() => import("../../pages/operasional/MonitoringTagihanfMahasiswaPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_ATURAN,
    element: withSuspense(lazy(() => import("../../pages/operasional/MonitoringAturanAkademikPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_UKT,
    element: withSuspense(lazy(() => import("../../pages/operasional/MonitoringUktPage"))),
  },
];
