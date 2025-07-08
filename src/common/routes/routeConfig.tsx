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
  // Operasional Routes
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
  // Transaksi Routes
  {
    path: ROUTES.TRANSAKSI.KEUANGAN,
    element: withSuspense(lazy(() => import("../../pages/transaksi/KeuanganPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.TAGIHAN.TAGIHAN,
    element: withSuspense(lazy(() => import("../../pages/transaksi/TagihanPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.TAGIHAN.DETAIL_TAGIHAN,
    element: withSuspense(lazy(() => import("../../pages/transaksi/DetailTagihanPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.PEMBAYARAN,
    element: withSuspense(lazy(() => import("../../pages/transaksi/PembayaranPage"))),
  },
  {
    path: ROUTES.TRANSAKSI.DEPOSIT,
    element: withSuspense(lazy(() => import("../../pages/transaksi/DepositPage"))),
  },
];
