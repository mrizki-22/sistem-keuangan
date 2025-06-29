import { ROUTES } from "../../common/routes/routes";

const menuList = [
  { menu: "Dashboard", route: ROUTES.DASHBOARD },

  {
    menu: "Operasional",
    children: [
      { menu: "Pembayaran", route: ROUTES.OPERASIONAL.PEMBAYARAN },
      { menu: "Pembayaran Formulir", route: ROUTES.OPERASIONAL.PEMBAYARAN_FORMULIR },
      { menu: "UKT Mahasiswa / Pendaftar", route: ROUTES.OPERASIONAL.UKT_MAHASISWA },
      { menu: "Monitoring Tarif", route: ROUTES.OPERASIONAL.MONITORING_TARIF },
      { menu: "Monitoring Tagihan Mahasiswa", route: ROUTES.OPERASIONAL.MONITORING_TAGIHAN },
      { menu: "Monitoring Aturan Akademik", route: ROUTES.OPERASIONAL.MONITORING_ATURAN },
      { menu: "Monitoring UKT", route: ROUTES.OPERASIONAL.MONITORING_UKT },
    ],
  },
  {
    menu: "Transaksi",
    children: [
      { menu: "Keuangan", route: ROUTES.TRANSAKSI.KEUANGAN },
      { menu: "Tagihan", route: ROUTES.TRANSAKSI.TAGIHAN },
      { menu: "Pembayaran", route: ROUTES.TRANSAKSI.PEMBAYARAN },
      { menu: "Deposit", route: ROUTES.TRANSAKSI.DEPOSIT },
      { menu: "Virtual Account", route: ROUTES.TRANSAKSI.VIRTUAL_ACCOUNT },
      { menu: "Potongan & Beasiswa", route: ROUTES.TRANSAKSI.POTONGAN_BEASISWA },
      { menu: "Voucher", route: ROUTES.TRANSAKSI.VOUCHER },
    ],
  },
  {
    menu: "Generate",
    children: [
      { menu: "Tagihan Mahasiswa", route: ROUTES.GENERATE.TAGIHAN_MAHASISWA },
      { menu: "Tagihan Pendaftar", route: ROUTES.GENERATE.TAGIHAN_PENDAFTAR },
    ],
  },

  {
    menu: "Tarif",
    children: [
      { menu: "Tagihan", route: ROUTES.TARIF.TAGIHAN },
      { menu: "Mata Kuliah", route: ROUTES.TARIF.MATA_KULIAH },
      { menu: "Denda", route: ROUTES.TARIF.DENDA },
      { menu: "Formulir", route: ROUTES.TARIF.FORMULIR },
      { menu: "UKT", route: ROUTES.TARIF.UKT },
      { menu: "Potongan", route: ROUTES.TARIF.POTONGAN },
    ],
  },

  {
    menu: "Referensi",
    children: [
      {
        menu: "Transaksi",
        children: [
          { menu: "Jenis Transaksi", route: ROUTES.REFERENSI.TRANSAKSI.JENIS_TRANSAKSI },
          { menu: "Kelompok", route: ROUTES.REFERENSI.TRANSAKSI.KELOMPOK },
          { menu: "Frekuensi", route: ROUTES.REFERENSI.TRANSAKSI.FREKUENSI },
          { menu: "Akun Transaksi", route: ROUTES.REFERENSI.TRANSAKSI.AKUN_TRANSAKSI },
        ],
      },
      {
        menu: "Pembayaran",
        children: [
          { menu: "Switching", route: ROUTES.REFERENSI.PEMBAYARAN.SWITCHING },
          { menu: "Bank", route: ROUTES.REFERENSI.PEMBAYARAN.BANK },
          { menu: "Switching Bank", route: ROUTES.REFERENSI.PEMBAYARAN.SWITCHING_BANK },
          { menu: "Channel", route: ROUTES.REFERENSI.PEMBAYARAN.CHANNEL },
          { menu: "Promo Switching Bank", route: ROUTES.REFERENSI.PEMBAYARAN.PROMO_SWITCHING_BANK },
        ],
      },
      {
        menu: "Tarif",
        children: [{ menu: "Kelompok UKT", route: ROUTES.REFERENSI.TARIF.KELOMPOK_UKT }],
      },
      {
        menu: "Potongan",
        children: [
          { menu: "Potongan", route: ROUTES.REFERENSI.POTONGAN.POTONGAN },
          { menu: "Aturan Potongan", route: ROUTES.REFERENSI.POTONGAN.ATURAN_POTONGAN },
        ],
      },
      {
        menu: "Pelengkap",
        children: [
          { menu: "Aturan Akademik", route: ROUTES.REFERENSI.PELENGKAP.ATURAN_AKADEMIK },
          { menu: "Rekanan", route: ROUTES.REFERENSI.PELENGKAP.REKANAN },
        ],
      },
      {
        menu: "Voucher",
        children: [
          { menu: "Voucher", route: ROUTES.REFERENSI.VOUCHER.VOUCHER },
          { menu: "Aturan Voucher", route: ROUTES.REFERENSI.VOUCHER.ATURAN_VOUCHER },
        ],
      },
    ],
  },

  {
    menu: "Pengaturan",
    children: [
      { menu: "Tagihan", route: ROUTES.PENGATURAN.TAGIHAN },
      { menu: "Aturan Akademik", route: ROUTES.PENGATURAN.ATURAN_AKADEMIK },
      { menu: "Aturan Switching Bank", route: ROUTES.PENGATURAN.ATURAN_SWITCHING_BANK },
      { menu: "Jenis Tagihan", route: ROUTES.PENGATURAN.JENIS_TAGIHAN },
      { menu: "Periode Pembayaran", route: ROUTES.PENGATURAN.PERIODE_PEMBAYARAN },
      { menu: "Setting Aplikasi", route: ROUTES.PENGATURAN.SETTING_APLIKASI },
    ],
  },

  {
    menu: "Laporan",
    children: [
      {
        menu: "Tagihan",
        children: [
          { menu: "Laporan Tagihan", route: ROUTES.LAPORAN.TAGIHAN.LAPORAN_TAGIHAN },
          { menu: "Laporan Rekap Tagihan", route: ROUTES.LAPORAN.TAGIHAN.LAPORAN_REKAP_TAGIHAN },
          { menu: "Tagihan Perwalian", route: ROUTES.LAPORAN.TAGIHAN.TAGIHAN_PERWALIAN },
          { menu: "Pivot Tagihan", route: ROUTES.LAPORAN.TAGIHAN.PIVOT_TAGIHAN },
        ],
      },
      {
        menu: "Pembayaran",
        children: [
          { menu: "Laporan Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.LAPORAN_PEMBAYARAN },
          { menu: "Laporan Rekap Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.LAPORAN_REKAP_PEMBAYARAN },
          { menu: "Pembayaran Per Mahasiswa", route: ROUTES.LAPORAN.PEMBAYARAN.PEMBAYARAN_PER_MAHASISWA },
          { menu: "Distribusi Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_PEMBAYARAN },
          { menu: "Distribusi Jenis Tagihan Per Tanggal", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_JENIS_TAGIHAN_PER_TANGGAL },
          { menu: "Distribusi Pembayaran Per Tanggal", route: ROUTES.LAPORAN.PEMBAYARAN.DISTRIBUSI_PEMBAYARAN_PER_TANGGAL },
          { menu: "Pivot Pembayaran", route: ROUTES.LAPORAN.PEMBAYARAN.PIVOT_PEMBAYARAN },
        ],
      },
      {
        menu: "UKT Mahasiswa / Pendaftar",
        children: [
          { menu: "Laporan Penerima UKT", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_PENERIMA_UKT },
          { menu: "Laporan Tarif UKT", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_TARIF_UKT },
          { menu: "Laporan Tarif", route: ROUTES.LAPORAN.UKT_MAHASISWA.LAPORAN_TARIF },
        ],
      },
      {
        menu: "Deposit",
        children: [
          { menu: "Laporan Deposit", route: ROUTES.LAPORAN.DEPOSIT.LAPORAN_DEPOSIT },
          { menu: "Laporan Rekap Deposit", route: ROUTES.LAPORAN.DEPOSIT.LAPORAN_REKAP_DEPOSIT },
        ],
      },
      {
        menu: "Potongan",
        children: [
          { menu: "Laporan Penerima Potongan", route: ROUTES.LAPORAN.POTONGAN.LAPORAN_PENERIMA_POTONGAN },
          { menu: "Rekap Potongan / Beasiswa", route: ROUTES.LAPORAN.POTONGAN.REKAP_POTONGAN_BEASISWA },
        ],
      },
      {
        menu: "Laporan Manual",
        children: [{ menu: "Cetak Laporan Manual", route: ROUTES.LAPORAN.MANUAL.CETAK_LAPORAN_MANUAL }],
      },
      {
        menu: "Monitoring Keuangan",
        children: [{ menu: "Laporan Mahasiswa Tercekal", route: ROUTES.LAPORAN.MONITORING_KEUANGAN.LAPORAN_MAHASISWA_TERCEKAL }],
      },
    ],
  },
];

type MenuItem = {
  menu: string;
  route?: string;
  children?: MenuItem[];
};

export { menuList };
export type { MenuItem };
