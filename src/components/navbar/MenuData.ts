import { ROUTES } from "../../common/routes/routes";

const menuList = [
  { menu: "Dashboard", route: ROUTES.DASHBOARD, showInNavbar: true },

  {
    menu: "Operasional",
    children: [
      { menu: "Pembayaran", route: ROUTES.OPERASIONAL.PEMBAYARAN, showInNavbar: true },
      { menu: "Pembayaran Formulir", route: ROUTES.OPERASIONAL.PEMBAYARAN_FORMULIR, showInNavbar: true },
      { menu: "UKT Mahasiswa / Pendaftar", route: ROUTES.OPERASIONAL.UKT_MAHASISWA, showInNavbar: true },
      { menu: "Monitoring Tarif", route: ROUTES.OPERASIONAL.MONITORING_TARIF, showInNavbar: true },
      { menu: "Monitoring Tagihan Mahasiswa", route: ROUTES.OPERASIONAL.MONITORING_TAGIHAN, showInNavbar: true },
      { menu: "Monitoring Aturan Akademik", route: ROUTES.OPERASIONAL.MONITORING_ATURAN, showInNavbar: true },
      { menu: "Monitoring UKT", route: ROUTES.OPERASIONAL.MONITORING_UKT, showInNavbar: true },
    ],
  },
  {
    menu: "Transaksi",
    children: [
      { menu: "Keuangan", route: ROUTES.TRANSAKSI.KEUANGAN, showInNavbar: true },
      { menu: "Tagihan", route: ROUTES.TRANSAKSI.TAGIHAN, showInNavbar: true },
      { menu: "Pembayaran", route: ROUTES.TRANSAKSI.PEMBAYARAN, showInNavbar: true },
      { menu: "Deposit", route: ROUTES.TRANSAKSI.DEPOSIT, showInNavbar: true },
      { menu: "Virtual Account", route: ROUTES.TRANSAKSI.VIRTUAL_ACCOUNT, showInNavbar: true },
      { menu: "Potongan & Beasiswa", route: ROUTES.TRANSAKSI.POTONGAN_BEASISWA, showInNavbar: true },
      { menu: "Voucher", route: ROUTES.TRANSAKSI.VOUCHER, showInNavbar: true },
    ],
  },
  {
    menu: "Generate",
    children: [
      { menu: "Tagihan Mahasiswa", route: ROUTES.GENERATE.TAGIHAN_MAHASISWA, showInNavbar: true },
      { menu: "Tagihan Pendaftar", route: ROUTES.GENERATE.TAGIHAN_PENDAFTAR, showInNavbar: true },
    ],
  },

  {
    menu: "Tarif",
    children: [
      { menu: "Tagihan", route: ROUTES.TARIF.TAGIHAN, showInNavbar: true },
      { menu: "Mata Kuliah", route: ROUTES.TARIF.MATA_KULIAH, showInNavbar: true },
      { menu: "Denda", route: ROUTES.TARIF.DENDA, showInNavbar: true },
      { menu: "Formulir", route: ROUTES.TARIF.FORMULIR, showInNavbar: true },
      { menu: "UKT", route: ROUTES.TARIF.UKT, showInNavbar: true },
      { menu: "Potongan", route: ROUTES.TARIF.POTONGAN, showInNavbar: true },
    ],
  },

  {
    menu: "Referensi",
    children: [
      {
        menu: "Transaksi",
        children: [
          { menu: "Jenis Transaksi", route: ROUTES.REFERENSI.TRANSAKSI.JENIS_TRANSAKSI, showInNavbar: true },
          { menu: "Kelompok", route: ROUTES.REFERENSI.TRANSAKSI.KELOMPOK, showInNavbar: true },
          { menu: "Frekuensi", route: ROUTES.REFERENSI.TRANSAKSI.FREKUENSI, showInNavbar: true },
          { menu: "Akun Transaksi", route: ROUTES.REFERENSI.TRANSAKSI.AKUN_TRANSAKSI, showInNavbar: true },
        ],
      },
      {
        menu: "Pembayaran",
        children: [
          { menu: "Switching", route: ROUTES.REFERENSI.PEMBAYARAN.SWITCHING, showInNavbar: true },
          { menu: "Bank", route: ROUTES.REFERENSI.PEMBAYARAN.BANK, showInNavbar: true },
          { menu: "Switching Bank", route: ROUTES.REFERENSI.PEMBAYARAN.SWITCHING_BANK, showInNavbar: true },
          { menu: "Channel", route: ROUTES.REFERENSI.PEMBAYARAN.CHANNEL, showInNavbar: true },
          { menu: "Promo Switching Bank", route: ROUTES.REFERENSI.PEMBAYARAN.PROMO_SWITCHING_BANK, showInNavbar: true },
        ],
      },
      {
        menu: "Tarif",
        children: [{ menu: "Kelompok UKT", route: ROUTES.REFERENSI.TARIF.KELOMPOK_UKT, showInNavbar: true }],
      },
      {
        menu: "Potongan",
        children: [
          { menu: "Potongan", route: ROUTES.REFERENSI.POTONGAN.POTONGAN, showInNavbar: true },
          { menu: "Aturan Potongan", route: ROUTES.REFERENSI.POTONGAN.ATURAN_POTONGAN, showInNavbar: true },
        ],
      },
      {
        menu: "Pelengkap",
        children: [
          { menu: "Aturan Akademik", route: ROUTES.REFERENSI.PELENGKAP.ATURAN_AKADEMIK, showInNavbar: true },
          { menu: "Rekanan", route: ROUTES.REFERENSI.PELENGKAP.REKANAN, showInNavbar: true },
        ],
      },
      {
        menu: "Voucher",
        children: [
          { menu: "Voucher", route: ROUTES.REFERENSI.VOUCHER.VOUCHER, showInNavbar: true },
          { menu: "Aturan Voucher", route: ROUTES.REFERENSI.VOUCHER.ATURAN_VOUCHER, showInNavbar: true },
        ],
      },
    ],
  },

  {
    menu: "Pengaturan",
    children: [
      { menu: "Tagihan", route: ROUTES.PENGATURAN.TAGIHAN, showInNavbar: true },
      { menu: "Aturan Akademik", route: ROUTES.PENGATURAN.ATURAN_AKADEMIK, showInNavbar: true },
      { menu: "Aturan Switching Bank", route: ROUTES.PENGATURAN.ATURAN_SWITCHING_BANK, showInNavbar: true },
      { menu: "Jenis Tagihan", route: ROUTES.PENGATURAN.JENIS_TAGIHAN, showInNavbar: true },
      { menu: "Periode Pembayaran", route: ROUTES.PENGATURAN.PERIODE_PEMBAYARAN, showInNavbar: true },
      { menu: "Setting Aplikasi", route: ROUTES.PENGATURAN.SETTING_APLIKASI, showInNavbar: true },
    ],
  },

  {
    menu: "Laporan",
    children: [
      {
        menu: "Tagihan",
        children: [
          { menu: "Laporan Tagihan", route: ROUTES.LAPORAN.TAGIHAN.LAPORAN_TAGIHAN, showInNavbar: true },
          { menu: "Laporan Rekap Tagihan", route: ROUTES.LAPORAN.TAGIHAN.LAPORAN_REKAP_TAGIHAN, showInNavbar: true },
          { menu: "Tagihan Perwalian", route: ROUTES.LAPORAN.TAGIHAN.TAGIHAN_PERWALIAN, showInNavbar: true },
          { menu: "Pivot Tagihan", route: ROUTES.LAPORAN.TAGIHAN.PIVOT_TAGIHAN, showInNavbar: true },
        ],
      },
      {
        menu: "Pembayaran",
        children: [
          { menu: "Laporan Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.LAPORAN_PEMBAYARAN, showInNavbar: true },
          { menu: "Laporan Rekap Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.LAPORAN_REKAP_PEMBAYARAN, showInNavbar: true },
          { menu: "Pembayaran Per Mahasiswa", route: ROUTES.LAPORAN.PEMBAYARAN.PEMBAYARAN_PER_MAHASISWA, showInNavbar: true },
          { menu: "Distribusi Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_PEMBAYARAN, showInNavbar: true },
          { menu: "Distribusi Jenis Tagihan Per Tanggal", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_JENIS_TAGIHAN_PER_TANGGAL, showInNavbar: true },
          { menu: "Distribusi Pembayaran Per Tanggal", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_PEMBAYARAN_PER_TANGGAL, showInNavbar: true },
          { menu: "Pivot Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.PIVOT_PEMBAYARAN, showInNavbar: true },
        ],
      },
      {
        menu: "UKT Mahasiswa / Pendaftar",
        children: [
          { menu: "Laporan Penerima UKT", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_PENERIMA_UKT, showInNavbar: true },
          { menu: "Laporan Tarif UKT", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_TARIF_UKT, showInNavbar: true },
          { menu: "Laporan Tarif", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_TARIF, showInNavbar: true },
        ],
      },
      {
        menu: "Deposit",
        children: [
          { menu: "Laporan Deposit", route: ROUTES.LAPORAN.DEPOSIT.LAPORAN_DEPOSIT, showInNavbar: true },
          { menu: "Laporan Rekap Deposit", route: ROUTES.LAPORAN.DEPOSIT.LAPORAN_REKAP_DEPOSIT, showInNavbar: true },
        ],
      },
      {
        menu: "Potongan",
        children: [
          { menu: "Laporan Penerima Potongan", route: ROUTES.LAPORAN.POTONGAN.LAPORAN_PENERIMA_POTONGAN, showInNavbar: true },
          { menu: "Rekap Potongan / Beasiswa", route: ROUTES.LAPORAN.POTONGAN.REKAP_POTONGAN_BEASISWA, showInNavbar: true },
        ],
      },
      {
        menu: "Laporan Manual",
        children: [{ menu: "Cetak Laporan Manual", route: ROUTES.LAPORAN.MANUAL.CETAK_LAPORAN_MANUAL, showInNavbar: true }],
      },
      {
        menu: "Monitoring Keuangan",
        children: [{ menu: "Laporan Mahasiswa Tercekal", route: ROUTES.LAPORAN.MONITORING_KEUANGAN.LAPORAN_MAHASISWA_TERCEKAL, showInNavbar: true }],
      },
    ],
  },
];

type MenuItem = {
  menu: string;
  route?: string;
  showInNavbar?: boolean;
  children?: MenuItem[];
};

export { menuList };
export type { MenuItem };
