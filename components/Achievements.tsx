'use client'

import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

// Foto dan sertifikat dari klien (folder "Achievements"). Butir 1 tidak punya berkas; butir 7 hanya punya sertifikat.
const others: { n: number; photo?: string; cert?: string }[] = [
  { n: 3, photo: '/projects/achv-baf-1.jpg', cert: '/projects/achv-baf-cert.jpg' },
  { n: 4, photo: '/projects/achv-shafest-1.jpg', cert: '/projects/achv-shafest-cert.jpg' },
  { n: 5, photo: '/projects/achv-galaksi-1.jpg', cert: '/projects/achv-galaksi-cert.jpg' },
  { n: 6, photo: '/projects/achv-aco-1.jpg' },
  { n: 7, cert: '/projects/achv-bi-cert.jpg' },
  { n: 8, photo: '/projects/achv-pjbl-1.jpg' },
  { n: 9, photo: '/projects/achv-debate-1.jpg' },
  { n: 10, photo: '/projects/achv-kwi-1.jpg', cert: '/projects/achv-kwi-cert.jpg' },
  { n: 1 },
]

export default function Achievements() {
  const { t } = useLanguage()
  // Susunan seperti Template 1 (PrestasiSection): satu kartu besar untuk prestasi utama (Juara 1 NAC 2026), lalu prestasi lainnya.
  const chips = [t('ach.2.org'), t('ach.2.year'), t('hero.badge.event')]

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('achv.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <TypewriterTitle text={t('achv.title')} />
          </h2>
        </div>

        {/* Prestasi utama */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="m8.5 14.5-1.5 7 5-3 5 3-1.5-7" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 font-semibold">{t('ach.2.rank')}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{t('ach.2.title')}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {chips.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-xs font-semibold text-[var(--foreground)]">
                    {c}
                  </span>
                ))}
              </div>
              <a href="/projects/achv-nac-cert.jpg" target="_blank" rel="noopener noreferrer" className="w-max text-xs font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
                {t('achv.cert')}
              </a>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-md bg-[var(--background)] group">
                <img src="/projects/achv-nac-1.jpg" alt={t('ach.2.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                <p className="absolute bottom-4 left-5 right-5 text-sm font-bold text-white drop-shadow-md">{t('ach.2.org')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prestasi lainnya */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 mt-14 mb-6 font-semibold">{t('achv.others')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map(({ n, photo, cert }) => {
            const media = photo ?? cert
            return (
              <article key={n} className="group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/50 transition-colors p-4 flex gap-4">
                <div className={`w-28 h-24 shrink-0 rounded-xl overflow-hidden border border-[var(--card-border)] ${photo ? 'bg-[var(--background)]' : 'bg-white'}`}>
                  {media ? (
                    <img src={media} alt={t(`ach.${n}.title`)} className={`w-full h-full ${photo ? 'object-cover' : 'object-contain'} group-hover:scale-105 transition-transform duration-500`} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-transparent text-emerald-500">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
                        <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-[10px] tracking-widest uppercase text-emerald-500 font-semibold mb-1">
                    {t(`ach.${n}.rank`)}
                    {t(`ach.${n}.year`) ? ` · ${t(`ach.${n}.year`)}` : ''}
                  </span>
                  <h4 className="font-bold text-sm leading-snug mb-1">{t(`ach.${n}.title`)}</h4>
                  <p className="text-[11px] font-semibold text-[var(--muted)] mb-2">{t(`ach.${n}.org`)}</p>
                  {cert && (
                    <a href={cert} target="_blank" rel="noopener noreferrer" className="mt-auto w-max text-[11px] font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
                      {t('achv.cert')}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
