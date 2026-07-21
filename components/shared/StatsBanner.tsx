import { COLORS, FONTS } from '@/lib/constants';

/** Claim-safe only — no invented project counts or star ratings. */
const stats = [
  { value: '2007', label: 'Serving since' },
  { value: 'Local', label: 'Richmond, TX' },
  { value: 'Full', label: 'Service remodel' },
  { value: 'Free', label: 'Consultation' },
];

export default function StatsBanner() {
  return (
    <div style={{ backgroundColor: COLORS.espresso, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {stats.map((stat, i) => (
        <div key={stat.label} style={{ padding: '56px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
          <span style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 64px)', color: COLORS.white, lineHeight: 1 }}>
            {stat.value}
          </span>
          <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 12 }}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
