'use client'

import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

// Foto dan sertifikat dari klien (folder "Achievements"). Butir 1 tidak punya berkas; butir 7 hanya punya sertifikat.
const items: { n: number; photo?: string; cert?: string }[] = [
  { n: 1 },
  { n: 2, photo: '/projects/achv-nac-1.jpg', cert: '/projects/achv-nac-cert.jpg' },
  { n: 3, photo: '/projects/achv-baf-1.jpg', cert: '/projects/achv-baf-cert.jpg' },
  { n: 4, photo: '/projects/achv-shafest-1.jpg', cert: '/projects/achv-shafest-cert.jpg' },
  { n: 5, photo: '/projects/achv-galaksi-1.jpg', cert: '/projects/achv-galaksi-cert.jpg' },
  { n: 6, photo: '/projects/achv-aco-1.jpg' },
  { n: 7, cert: '/projects/achv-bi-cert.jpg' },
  { n: 8, photo: '/projects/achv-pjbl-1.jpg' },
  { n: 9, photo: '/projects/achv-debate-1.jpg' },
  { n: 10, photo: '/projects/achv-kwi-1.jpg', cert: '/projects/achv-kwi-cert.jpg' },
]

export default function Achievements() {
  const { t } = useLanguage()

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <TypewriterTitle text={t('achv.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">{t('achv.sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ n, photo, cert }) => {
            const media = photo ?? cert
            return (
              <article
                key={n}
                className="group rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className={`relative aspect-[16/10] w-full overflow-hidden ${photo ? 'bg-[var(--background)]' : 'bg-white'}`}>
                  {media ? (
                    <img
                      src={media}
                      alt={t(`ach.${n}.title`)}
                      className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ${photo ? 'object-cover' : 'object-contain'}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 via-[var(--card-bg)] to-[var(--card-bg)] text-emerald-500">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
                        <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
                      </svg>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold tracking-widest shadow-lg">
                    {t(`ach.${n}.rank`)}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold leading-snug mb-2">{t(`ach.${n}.title`)}</h3>
                  <p className="text-xs font-semibold text-[var(--muted)] mb-4">{t(`ach.${n}.org`)}</p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    {t(`ach.${n}.year`) ? (
                      <span className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-semibold">
                        {t(`ach.${n}.year`)}
                      </span>
                    ) : (
                      <span />
                    )}
                    {cert && (
                      <a href={cert} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
                        {t('achv.cert')}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
