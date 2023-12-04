import { OrgControl } from './_components/org-control'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* orgid layout */}
      <OrgControl />
      {children}
    </div>
  )
}
