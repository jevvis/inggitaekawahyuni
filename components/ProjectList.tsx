'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Asisten Laboratorium Akuntansi Keuangan Menengah II", en: "Intermediate Financial Accounting II Laboratory Assistant" },
    description: { id: "Memfasilitasi sesi laboratorium dan membimbing 99+ mahasiswa pada kasus akuntansi dan standar yang relevan.", en: "Facilitated laboratory sessions and guided 99+ students on accounting cases and relevant standards." },
    framework: "UPN “VETERAN” JAKARTA",
    techStack: ["Asisten Lab", "99+ Mahasiswa"],
  },
  {
    number: '02',
    title: { id: "Asisten Laboratorium Praktikum Akuntansi Keuangan I", en: "Financial Accounting Practicum I Laboratory Assistant" },
    description: { id: "Memandu praktik laporan keuangan dan arus kas serta membimbing 39+ mahasiswa.", en: "Conducted financial statement and cash flow practice and guided 39+ students." },
    framework: "UPN “VETERAN” JAKARTA",
    techStack: ["Laporan Keuangan", "39+ Mahasiswa"],
  },
  {
    number: '03',
    title: { id: "Tutor Pengantar Akuntansi", en: "Introduction to Accounting Tutor" },
    description: { id: "Tutorial siklus akuntansi, jurnal, dan laporan keuangan untuk 21+ mahasiswa.", en: "Tutorials on the accounting cycle, journal entries, and financial statements for 21+ students." },
    framework: "ACCOUNTING STUDY CLUB",
    techStack: ["Tutor", "Siklus Akuntansi"],
  },
  {
    number: '04',
    title: { id: "Penjualan Merchandise Acara", en: "Event Merchandise Sales" },
    description: { id: "Penjualan harian sekitar Rp16 juta melalui promosi dan interaksi pelanggan.", en: "Approximately IDR 16 million in daily sales through promotion and customer engagement." },
    framework: "PT JAKARTA INTERNATIONAL EXPO",
    techStack: ["Penjualan", "Acara"],
  },
  {
    number: '05',
    title: { id: "Administrasi Dokumen & Basis Data BPKB", en: "Document Administration & BPKB Records" },
    description: { id: "Mengelola 50–100 dokumen asuransi dan pembiayaan serta memperbarui catatan BPKB.", en: "Processed 50–100 insurance and financing documents and updated BPKB records." },
    framework: "PT MAYBANK INDONESIA FINANCE",
    techStack: ["Dokumen", "Confins"],
  },
  {
    number: '06',
    title: { id: "Publikasi & Dokumentasi untuk 6 Acara Organisasi", en: "Publication & Documentation for 6 Organizational Events" },
    description: { id: "Distribusi konten tepat waktu dan liputan acara yang menyeluruh.", en: "Timely content distribution and comprehensive event coverage." },
    framework: "IAI MUDA WILAYAH DKI JAKARTA",
    techStack: ["Publikasi", "Dokumentasi"],
  },
  {
    number: '07',
    title: { id: "Program Akademik & Mentoring Lomba", en: "Academic Programs & Competition Mentoring" },
    description: { id: "Program akademik, serta ketua divisi publikasi (SILABUS, CLEANERAKSI) dan acara (GREEN AKSI).", en: "Academic programs, plus division head roles for publication (SILABUS, CLEANERAKSI) and events (GREEN AKSI)." },
    framework: "HIMA S1 AKUNTANSI UPNVJ",
    techStack: ["Keilmuan", "Ketua Divisi"],
  },
  {
    number: '08',
    title: { id: "Program & Acara Komunitas Girl Up", en: "Girl Up Community Programs & Events" },
    description: { id: "Konsep acara, run sheet, webinar International Women’s Day, dan Workshop x FGD 16HAKTP.", en: "Event concepts, run sheets, the International Women’s Day webinar, and the Workshop x FGD 16HAKTP." },
    framework: "KOMUNITAS GIRL UP UPNVJ",
    techStack: ["Acara", "Webinar"],
  },
  {
    number: '09',
    title: { id: "Analisis Akuntansi Biaya House of Kain", en: "House of Kain Cost Accounting Analysis" },
    description: { id: "COGM, COGS, laba rugi, dan analisis profitabilitas.", en: "COGM, COGS, income statements, and profitability analysis." },
    framework: "PROYEK STUDI KASUS",
    techStack: ["Akuntansi Biaya", "Ketua Tim"],
  },
  {
    number: '10',
    title: { id: "Perancangan SIA PT Kimia Farma", en: "PT Kimia Farma AIS Design" },
    description: { id: "Flowchart transaksi, pengendalian internal, dan usulan pengendalian berbasis ERP.", en: "Transaction flowcharts, internal controls, and ERP-based control proposals." },
    framework: "PROYEK STUDI KASUS",
    techStack: ["SIA", "ERP"],
  },
  {
    number: '11',
    title: { id: "Roleplay Keuangan & Pembelian Terintegrasi", en: "Integrated Finance & Purchasing Roleplay" },
    description: { id: "Memimpin departemen keuangan dan pembelian dalam simulasi bisnis.", en: "Led the finance and purchasing department in a business simulation." },
    framework: "PROGRAM ROLEPLAY PRAKTIKUM",
    techStack: ["Keuangan", "Pembelian"],
  },
  {
    number: '12',
    title: { id: "Simulasi Audit sebagai Senior in Charge", en: "Audit Simulation as Senior in Charge" },
    description: { id: "Memimpin tim audit satu bulan dengan ATLAS dan kertas kerja audit.", en: "Led a one-month audit team using ATLAS and audit working papers." },
    framework: "PRAKTIKUM AUDIT",
    techStack: ["Audit", "ATLAS"],
  },
  {
    number: '13',
    title: { id: "Perencanaan Pajak PT Republika Media Mandiri", en: "PT Republika Media Mandiri Tax Planning" },
    description: { id: "Analisis pajak dan strategi kepatuhan untuk perusahaan media.", en: "Tax analysis and compliance strategy for a media company." },
    framework: "PROYEK STUDI KASUS",
    techStack: ["Pajak", "Kepatuhan"],
  },
  {
    number: '14',
    title: { id: "Sertifikasi MOS, CAP, dan Pelatihan Brevet A & B", en: "MOS, CAP Certifications and Brevet A & B Training" },
    description: { id: "Excel 2019 Associate, Accurate Online, serta pelatihan akuntansi dan perpajakan ATPI.", en: "Excel 2019 Associate, Accurate Online, and ATPI accounting and taxation training." },
    framework: "SERTIFIKASI & PELATIHAN",
    techStack: ["Excel", "Accurate", "Brevet"],
  },
  {
    number: '15',
    title: { id: "Juara Lomba Akuntansi Nasional 2026", en: "National Accounting Competition Winner 2026" },
    description: { id: "Juara 1 (UNJ), Juara 2 (Universitas Brawijaya), Juara 3 (UIN Pekalongan), Juara 4 (UIN Jakarta).", en: "1st (UNJ), 2nd (Universitas Brawijaya), 3rd (UIN Pekalongan), and 4th (UIN Jakarta) places." },
    framework: "PRESTASI",
    techStack: ["Juara", "Akuntansi"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'ACCOUNTING PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO AKUNTANSI & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Accounting, Tax & Audit Experience' : 'Pengalaman Akuntansi, Pajak & Audit'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of teaching, work, organizational, project, and competition experience in accounting.'
              : 'Rekam jejak pengalaman mengajar, kerja, organisasi, proyek, dan lomba di bidang akuntansi.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
