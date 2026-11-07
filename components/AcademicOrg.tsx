'use client'

import { useState } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

const DRIVE = 'https://drive.google.com/drive/folders/'
const SHEET = 'https://docs.google.com/spreadsheets/d/'

// Susunan seperti Template 1 (TrainingsSection): kolase foto di kiri, kartu organisasi di kanan.
// Kegiatan/kepanitiaan tiap organisasi ditampilkan sebagai daftar yang bisa dibuka; tautan hasil kerja dari klien.
const orgs: { n: number; acts: number[] }[] = [
  { n: 1, acts: [1] },
  { n: 2, acts: [2, 3, 4, 5, 6, 7, 8, 9] },
  { n: 3, acts: [10, 11, 12] },
]
const links: Record<number, string> = {
  1: SHEET + '1-K-_wR9XYZDd6P8g5e8E7_iNMva8dlDUzRKl9It82_k/edit?usp=drivesdk',
  2: DRIVE + '1lIiYO3F0lkbi_L_e_0jAtn257EkRPjjj',
  3: DRIVE + '1poVs6HMVPd4rLaCsVdzi8M9Xlx8cW3hy',
  4: DRIVE + '1vSbJ61livbLzKTbcswBko1hXOUZ7ZcOB',
  5: DRIVE + '1X2sc3FaMJw5U5_7cWUzLl9h2ddtxHAdX',
  12: SHEET + '1D0No4EOH3bRl_GIECfOagMBDUvvL0WtEeYHf2yY7rI8/edit?usp=drivesdk',
}

// foto HIMA yang bisa diganti dengan klik (kolase dan deretan thumbnail)
const himaPhotos = ['/projects/act-keilmuan-2.jpg', '/projects/act-cleaner-1.jpg', '/projects/act-dies-1.jpg', '/projects/act-green-1.jpg', '/projects/act-camp-1.jpg', '/projects/act-silabus-1.jpg']

export default function AcademicOrg() {
  const { t } = useLanguage()
  const [hoveredOrgId, setHoveredOrgId] = useState<number | null>(null)
  const [himaIdx, setHimaIdx] = useState(0)

  const wrapperClass = (ids: number[]) => {
    const isMatch = hoveredOrgId !== null && ids.includes(hoveredOrgId)
    const isDimmed = hoveredOrgId !== null && !isMatch
    if (isMatch) return 'ring-2 ring-emerald-500 shadow-2xl scale-105 z-20 border-emerald-500/60 opacity-100'
    if (isDimmed) return 'opacity-35 scale-[0.96] border-[var(--card-border)]/50'
    return 'opacity-90 scale-100 hover:opacity-100 hover:scale-105 border-[var(--card-border)] shadow-md'
  }
  const imageClass = (ids: number[]) => {
    const isMatch = hoveredOrgId !== null && ids.includes(hoveredOrgId)
    return isMatch ? 'grayscale-0 brightness-105 contrast-105 scale-105' : 'grayscale hover:grayscale-0'
  }
  const hover = (id: number) => ({ onMouseEnter: () => setHoveredOrgId(id), onMouseLeave: () => setHoveredOrgId(null) })
  const tile = 'w-full bg-[var(--card-bg)] rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer relative'
  const img = 'w-full h-full object-cover transition-all duration-500'

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Kiri: kolase foto, tersambung ke kartu organisasi */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4 pr-0 lg:pr-4 lg:sticky lg:top-24 select-none">
            <div className="flex flex-col gap-3 sm:gap-4 -translate-y-4">
              <div {...hover(2)} onClick={() => setHimaIdx((p) => (p + 1) % himaPhotos.length)} className={`${tile} aspect-[4/5] ${wrapperClass([2])}`} title={t('ui.orgClick')}>
                <img src={himaPhotos[himaIdx]} alt={t('org.2.inst')} className={`${img} ${imageClass([2])}`} />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] font-medium flex items-center gap-1 shadow-md pointer-events-none">
                  <span>{himaIdx + 1}/{himaPhotos.length}</span>
                  <span className="opacity-60">•</span>
                  <span>HIMA</span>
                </div>
              </div>
              <div {...hover(1)} className={`${tile} aspect-square ${wrapperClass([1])}`}>
                <img src="/projects/act-iai-1.jpg" alt={t('org.1.inst')} className={`${img} ${imageClass([1])}`} />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 translate-y-3">
              <div {...hover(3)} className={`${tile} aspect-square ${wrapperClass([3])}`}>
                <img src="/projects/act-girlup-1.jpg" alt={t('org.3.inst')} className={`${img} ${imageClass([3])}`} />
              </div>
              <div {...hover(2)} onClick={() => { setHimaIdx(1); setHoveredOrgId(2) }} className={`${tile} aspect-[4/5] ${wrapperClass([2])}`}>
                <img src="/projects/act-cleaner-1.jpg" alt="CLEANERAKSI 2025" className={`${img} ${imageClass([2])}`} />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 -translate-y-6">
              <div {...hover(3)} className={`${tile} aspect-[4/5] ${wrapperClass([3])}`}>
                <img src="/projects/act-fgd-1.jpg" alt="Workshop x FGD 16HAKTP 2025" className={`${img} ${imageClass([3])}`} />
              </div>
              <div {...hover(2)} onClick={() => { setHimaIdx(2); setHoveredOrgId(2) }} className={`${tile} aspect-square ${wrapperClass([2])}`}>
                <img src="/projects/act-abcd-1.jpg" alt="ABCD FEST 2025" className={`${img} ${imageClass([2])}`} />
              </div>
            </div>
          </div>

          {/* Kanan: kartu organisasi */}
          <div className="lg:col-span-7 flex flex-col gap-4 font-sans">
            {orgs.map(({ n, acts }) => {
              const isSelected = hoveredOrgId === n
              return (
                <div
                  key={n}
                  {...hover(n)}
                  className={`group p-6 rounded-3xl bg-[var(--card-bg)] border transition-all duration-300 shadow-sm flex flex-col ${
                    isSelected ? 'border-emerald-500/70 shadow-lg -translate-y-1 ring-1 ring-emerald-500/30' : 'border-[var(--card-border)] hover:border-[var(--muted)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-[var(--background)] border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/10' : 'border-[var(--card-border)] text-[var(--muted)] group-hover:text-[var(--foreground)]'
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`font-bold text-base sm:text-lg transition-colors ${isSelected ? 'text-emerald-500' : 'text-[var(--foreground)] group-hover:text-emerald-500'}`}>{t(`org.${n}.inst`)}</h3>
                        <p className="text-xs font-semibold text-[var(--muted)]">{t(`org.${n}.role`)}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] tracking-wider px-2.5 py-1 rounded-full border self-start sm:self-auto shrink-0 font-medium transition-colors ${
                        isSelected ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 'bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]'
                      }`}
                    >
                      {t(`org.${n}.period`)}
                    </span>
                  </div>

                  <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed mb-4 mt-2">{t(`org.${n}.desc`)}</p>

                  {/* Kegiatan & kepanitiaan (klik untuk membuka rincian) */}
                  <div className="pt-3 border-t border-[var(--card-border)]/50">
                    <p className="text-[10px] text-[var(--muted)] font-semibold uppercase tracking-wider mb-2">{t('ui.activities')} ({acts.length})</p>
                    <div className="flex flex-col gap-1.5">
                      {acts.map((a) => (
                        <details key={a} className="group/act rounded-xl border border-[var(--card-border)]/60 bg-[var(--background)]/60 open:bg-[var(--background)]">
                          <summary className="cursor-pointer list-none px-3 py-2 flex items-center justify-between gap-3">
                            <span className="min-w-0">
                              <span className="block text-xs sm:text-sm font-semibold text-[var(--foreground)] truncate">{t(`act.${a}.title`)}</span>
                              <span className="block text-[11px] text-emerald-500 font-medium truncate">{t(`act.${a}.role`)}</span>
                            </span>
                            <svg className="shrink-0 text-[var(--muted)] transition-transform group-open/act:rotate-180" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </summary>
                          <div className="px-3 pb-3">
                            <p className="text-xs text-[var(--muted)] leading-relaxed mb-2.5">{t(`act.${a}.desc`)}</p>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {t(`act.${a}.tags`).split('|').map((tag) => (
                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--muted)]">
                                  {tag}
                                </span>
                              ))}
                              {links[a] && (
                                <a href={links[a]} target="_blank" rel="noopener noreferrer" className="ml-auto text-[11px] font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
                                  {t('ui.output')}
                                </a>
                              )}
                            </div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                  {n === 2 && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-4 pt-3 border-t border-[var(--card-border)]/40">
                      <span className="text-[10px] text-[var(--muted)] font-semibold uppercase tracking-wider">{t('ui.orgDocs')} ({himaPhotos.length})</span>
                      <div className="flex items-center gap-2">
                        {himaPhotos.map((src, i) => (
                          <button
                            key={src}
                            type="button"
                            onClick={() => { setHimaIdx(i); setHoveredOrgId(2) }}
                            className={`w-12 h-8 rounded-lg overflow-hidden border transition-all duration-300 ${
                              himaIdx === i ? 'border-emerald-500 ring-2 ring-emerald-500/50 scale-105 shadow-md' : 'border-[var(--card-border)] opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                            title={`${t('ui.viewPhoto')} ${i + 1}`}
                          >
                            <img src={src} alt={`HIMA ${i + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
