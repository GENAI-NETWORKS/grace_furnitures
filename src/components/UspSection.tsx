'use client';
import { useState } from 'react';
import { Factory, ShieldCheck, Clock, Palette, Handshake, ChevronDown } from 'lucide-react';

const usps = [
  {
    id: 1,
    title: "Factory Direct Supply",
    label: "Manufacturing",
    icon: <Factory width="22" height="22" />,
    iconBg: "rgba(166,25,46,0.10)",
    iconColor: "var(--brand-red)",
    desc: "No middlemen. We manufacture and supply directly, giving you better pricing and full transparency."
  },
  {
    id: 2,
    title: "Consistent Quality",
    label: "Quality Control",
    icon: <ShieldCheck width="22" height="22" />,
    iconBg: "rgba(245,197,24,0.12)",
    iconColor: "#b8860b",
    desc: "Strict quality control at every stage. Every piece that leaves our factory meets our premium standard."
  },
  {
    id: 3,
    title: "On-Time Delivery",
    label: "Logistics",
    icon: <Clock width="22" height="22" />,
    iconBg: "rgba(59,130,246,0.10)",
    iconColor: "#2563eb",
    desc: "We understand your project timelines. Our logistics team ensures on-schedule delivery, every time."
  },
  {
    id: 4,
    title: "Custom Orders",
    label: "Customisation",
    icon: <Palette width="22" height="22" />,
    iconBg: "rgba(139,92,246,0.10)",
    iconColor: "#7c3aed",
    desc: "Send us your design requirements or dimensions. We'll manufacture it exactly to your specifications."
  },
  {
    id: 5,
    title: "Trusted Partner",
    label: "B2B Relations",
    icon: <Handshake width="22" height="22" />,
    iconBg: "rgba(16,185,129,0.10)",
    iconColor: "#059669",
    desc: "Long-term B2B relationships with showrooms, hotels, and designers across Tamil Nadu and beyond."
  }
];

export default function UspSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="usp" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid rgba(0,0,0,0.05)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="section-label" style={{ color: 'var(--brand-red)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em' }}>WHY GRACE?</span>
          <h2 className="section-title" style={{ color: 'var(--espresso)', fontSize: '2.4rem', fontWeight: 800, marginTop: '10px', lineHeight: 1.2 }}>
            Why Choose <span style={{ color: 'var(--gold)' }}>GRACE™</span>
          </h2>
          <p className="section-sub" style={{ color: 'var(--espresso-light)', fontSize: '1.05rem', marginTop: '14px', lineHeight: 1.7 }}>
            Five core pillars that make us the preferred furniture manufacturing partner for India&apos;s top businesses.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px', margin: '0 auto' }}>
          {usps.map((usp) => {
            const isOpen = openId === usp.id;
            return (
              <div
                key={usp.id}
                onClick={() => toggleAccordion(usp.id)}
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  border: isOpen ? '1.5px solid rgba(166,25,46,0.18)' : '1.5px solid rgba(0,0,0,0.07)',
                  boxShadow: isOpen ? '0 6px 28px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Icon Box */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: usp.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: usp.iconColor,
                      flexShrink: 0
                    }}>
                      {usp.icon}
                    </div>
                    {/* Title + Label */}
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--espresso)', lineHeight: 1.3 }}>
                        {usp.title}
                      </div>
                      <span style={{
                        display: 'inline-block',
                        marginTop: '5px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: usp.iconColor,
                        background: usp.iconBg,
                        borderRadius: '20px',
                        padding: '2px 10px',
                        letterSpacing: '0.02em'
                      }}>
                        {usp.label}
                      </span>
                    </div>
                  </div>
                  {/* Chevron */}
                  <ChevronDown
                    width={20}
                    height={20}
                    style={{
                      color: 'var(--espresso-light)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </div>

                {/* Expandable Description */}
                <div style={{
                  maxHeight: isOpen ? '160px' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, opacity 0.25s ease'
                }}>
                  <div style={{
                    padding: '0 20px 18px 84px',
                    color: 'var(--espresso-light)',
                    fontSize: '0.93rem',
                    lineHeight: 1.7
                  }}>
                    {usp.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
