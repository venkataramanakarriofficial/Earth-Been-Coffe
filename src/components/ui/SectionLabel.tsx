export default function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? 'label-light' : ''}`}><span>{number}</span><span>{children}</span></p>;
}
