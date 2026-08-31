import type { ReactNode } from 'react'

interface PageFrameProps {
  title: string
  children: ReactNode
}

export default function PageFrame({ title, children }: PageFrameProps) {
  return (
    <section className="page-frame">
      <header className="page-frame-head">
        <span className="page-frame-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="page-frame-title">{title}</span>
      </header>
      <div className="page-frame-body">{children}</div>
    </section>
  )
}
