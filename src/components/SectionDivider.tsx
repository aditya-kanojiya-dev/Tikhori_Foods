export default function SectionDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className={`relative h-16 ${variant === 'dark' ? 'bg-maroon-dark' : 'bg-cream'}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full"
        fill={variant === 'dark' ? '#3A1012' : '#FFF8EC'}
      >
        <path d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z" opacity="0.3" />
        <path d="M0,50 Q300,20 600,50 T1200,50 L1200,80 L0,80 Z" opacity="0.5" />
        <path d="M0,60 Q300,40 600,60 T1200,60 L1200,80 L0,80 Z" opacity="0.8" />
      </svg>
    </div>
  );
}
