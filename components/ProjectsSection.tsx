'use client'

import TypewriterTitle from './TypewriterTitle'
import { InternshipImageStack } from './WorkGallery'
import { useLanguage } from '@/contexts/LanguageContext'

const imgs = (key: string, n: number) => Array.from({ length: n }, (_, i) => `/projects/proj-${key}-${i + 1}.jpg`)
const DRIVE = 'https://drive.google.com/drive/folders/'

// Foto dan tautan hasil proyek dari klien (folder "Project & Real-World Case Coursework").
const projects: { n: number; images: string[]; link: string }[] = [
  { n: 1, images: imgs('kain', 2), link: DRIVE + '1Ggw1BZE9WNEEGZlWW3SoTj16OEGvFLIV' },
  { n: 2, images: imgs('kimiafarma', 1), link: DRIVE + '1OEnb3dvf_4VGYrbD0cKSkfn3a3cAJp1H?usp=drive_link' },
  { n: 3, images: imgs('roleplay', 1), link: DRIVE + '1_EJMY99nsflr6_VnY2sgtrY-r_yfS-kY' },
  { n: 4, images: imgs('audit', 3), link: DRIVE + '1X_lKB_pNKK3IcvS5Ha2xKb8SAbfJlOrO' },
  { n: 5, images: imgs('republika', 1), link: DRIVE + '1qE_RN0utrcAA1QAcdRs3CqLob5kuFSbG' },
]

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects-section" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
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
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('proj.section.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <TypewriterTitle text={t('proj.section.title')} />
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map(({ n, images, link }, idx) => {
            const chips = [t(`proj.${n}.period`), ...t(`proj.${n}.tags`).split('|')]
            return (
              <div
                key={n}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 text-3xl font-black shrink-0">{n}</div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 font-semibold">{t(`proj.${n}.role`)}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t(`proj.${n}.inst`)}</h3>
                    <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6 text-justify">{t(`proj.${n}.desc`)}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {chips.map((c) => (
                        <span key={c} className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-xs font-semibold text-[var(--foreground)]">
                          {c}
                        </span>
                      ))}
                    </div>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-max px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity"
                    >
                      {t('ui.output')}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <InternshipImageStack images={images} title={t(`proj.${n}.inst`)} align="right" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
