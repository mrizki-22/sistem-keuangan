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
    element: withSuspense(lazy(() => import("../../features/dashboard/pages/DashboardPage"))),
  },
  // Operasional Routes
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/PembayaranPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.PEMBAYARAN_FORMULIR,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/PembayaranFormulirPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.UKT_MAHASISWA,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/UktMahasiswaPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_TARIF,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/MonitoringTarifPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_TAGIHAN,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/MonitoringTagihanfMahasiswaPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_ATURAN,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/MonitoringAturanAkademikPage"))),
  },
  {
    path: ROUTES.OPERASIONAL.MONITORING_UKT,
    element: withSuspense(lazy(() => import("../../features/operasional/pages/MonitoringUktPage"))),
  },
  // Transaksi Routes
  {
    path: ROUTES.TRANSAKSI.KEUANGAN,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/KeuanganPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.TAGIHAN,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/TagihanPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.DETAIL_TAGIHAN,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/DetailTagihanPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.PEMBAYARAN,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/PembayaranPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.DEPOSIT,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/DepositPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.DETAIL_DEPOSIT,
    element: withSuspense(lazy(() => import("../../features/transaksi/pages/DetailDepositPage"))),
  },
];
