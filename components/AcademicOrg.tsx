'use client'

import TypewriterTitle from './TypewriterTitle'
import { InternshipImageStack } from './WorkGallery'
import { useLanguage } from '@/contexts/LanguageContext'

const imgs = (key: string, n: number) => Array.from({ length: n }, (_, i) => `/projects/act-${key}-${i + 1}.jpg`)

const DRIVE = 'https://drive.google.com/drive/folders/'
const SHEET = 'https://docs.google.com/spreadsheets/d/'

// Foto, sertifikat, dan tautan hasil kerja dari klien (folder "Organizational Experience").
const activities: Record<number, { images: string[]; link?: string }> = {
  1: { images: imgs('iai', 2), link: SHEET + '1-K-_wR9XYZDd6P8g5e8E7_iNMva8dlDUzRKl9It82_k/edit?usp=drivesdk' },
  2: { images: imgs('keilmuan', 4), link: DRIVE + '1lIiYO3F0lkbi_L_e_0jAtn257EkRPjjj' },
  3: { images: imgs('silabus', 2), link: DRIVE + '1poVs6HMVPd4rLaCsVdzi8M9Xlx8cW3hy' },
  4: { images: imgs('cleaner', 3), link: DRIVE + '1vSbJ61livbLzKTbcswBko1hXOUZ7ZcOB' },
  5: { images: imgs('green', 2), link: DRIVE + '1X2sc3FaMJw5U5_7cWUzLl9h2ddtxHAdX' },
  6: { images: imgs('comvisa', 2) },
  7: { images: imgs('dies', 3) },
  8: { images: imgs('abcd', 2) },
  9: { images: imgs('camp', 3) },
  10: { images: imgs('girlup', 3) },
  11: { images: imgs('iwd', 1) },
  12: { images: imgs('fgd', 2), link: SHEET + '1D0No4EOH3bRl_GIECfOagMBDUvvL0WtEeYHf2yY7rI8/edit?usp=drivesdk' },
}

const orgs: { n: number; acts: number[] }[] = [
  { n: 1, acts: [1] },
  { n: 2, acts: [2, 3, 4, 5, 6, 7, 8, 9] },
  { n: 3, acts: [10, 11, 12] },
]

function ActivityCard({ n, index }: { n: number; index: number }) {
  const { t } = useLanguage()
  const a = activities[n]
  return (
    <div className="group rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/50 transition-all duration-300 shadow-sm flex flex-col p-5 sm:p-6">
      <InternshipImageStack images={a.images} title={t(`act.${n}.title`)} align={index % 2 === 0 ? 'right' : 'left'} />
      <div className="px-2 sm:px-3 pt-4 flex flex-col grow">
        <h4 className="text-xl font-bold leading-snug mb-1 group-hover:text-emerald-500 transition-colors">{t(`act.${n}.title`)}</h4>
        <p className="text-sm font-semibold text-emerald-500 mb-3">{t(`act.${n}.role`)}</p>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 text-justify">{t(`act.${n}.desc`)}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {t(`act.${n}.tags`).split('|').map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>
        {a.link && (
          <a
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 w-max text-xs font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
          >
            {t('ui.output')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function AcademicOrg() {
  const { t } = useLanguage()

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-x-clip font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('trainings.label')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TypewriterTitle text={t('trainings.title')} />
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-semibold tracking-wider text-[var(--muted)] shrink-0 w-max">
            {t('trainings.campus')}
          </span>
        </div>

        <div className="flex flex-col gap-20">
          {orgs.map((org) => (
            <div key={org.n}>
              {/* Kepala organisasi */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 sm:p-8 mb-8 flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
                <div className="flex items-center gap-4 lg:w-5/12 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 text-2xl font-black shrink-0">{org.n}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-snug">{t(`org.${org.n}.inst`)}</h3>
                    <p className="text-sm font-semibold text-emerald-500 mt-1">{t(`org.${org.n}.role`)}</p>
                    <span className="inline-block mt-2 text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--muted)]">
                      {t(`org.${org.n}.period`)}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed lg:border-l lg:border-[var(--card-border)] lg:pl-10">{t(`org.${org.n}.desc`)}</p>
              </div>

              {/* Kegiatan dan kepanitiaan */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {org.acts.map((a, i) => (
                  <ActivityCard key={a} n={a} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
