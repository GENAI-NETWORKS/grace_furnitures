'use client';
import { useState } from 'react';
import { Factory, ShieldCheck, Clock, Palette, Handshake, ChevronDown } from 'lucide-react';

const usps = [
  {
    id: 1,
    title: "Factory Direct Supply",
    icon: <Factory width="32" height="32" />,
    desc: "No middlemen. We manufacture and supply directly, giving you better pricing and full transparency."
  },
  {
    id: 2,
    title: "Consistent Quality",
    icon: <ShieldCheck width="32" height="32" />,
    desc: "Strict quality control at every stage. Every piece that leaves our factory meets our premium standard."
  },
  {
    id: 3,
    title: "On-Time Delivery",
    icon: <Clock width="32" height="32" />,
    desc: "We understand your project timelines. Our logistics team ensures on-schedule delivery, every time."
  },
  {
    id: 4,
    title: "Custom Orders",
    icon: <Palette width="32" height="32" />,
    desc: "Send us your design requirements or dimensions. We'll manufacture it exactly to your specifications."
  },
  {
    id: 5,
    title: "Trusted Partner",
    icon: <Handshake width="32" height="32" />,
    desc: "Long-term B2B relationships with showrooms, hotels, and designers across Tamil Nadu and beyond."
  }
];

export default function UspSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="usp" className="py-24" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label" style={{ color: 'var(--espresso-dark)', fontWeight: 600 }}>WHY GRACE?</span>
          <h2 className="section-title text-4xl md:text-5xl font-bold mt-2" style={{ color: 'var(--espresso)' }}>
            Why Choose <span style={{ color: 'var(--gold)' }}>GRACE™</span>
          </h2>
          <p className="section-sub text-lg mt-4" style={{ color: 'var(--espresso-light)' }}>
            Five core pillars that make us the preferred furniture manufacturing partner for India's top businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {usps.map((usp) => {
            const isOpen = openId === usp.id;
            return (
              <div 
                key={usp.id} 
                className="bg-white rounded-lg shadow-sm border border-[rgba(0,0,0,0.05)] overflow-hidden cursor-pointer"
                onClick={() => toggleAccordion(usp.id)}
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div style={{ color: 'var(--brand-red)' }}>
                      {usp.icon}
                    </div>
                    <h3 className="font-bold text-xl" style={{ color: 'var(--espresso)' }}>{usp.title}</h3>
                  </div>
                  <ChevronDown 
                    style={{ 
                      color: 'var(--espresso-light)', 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                
                <div 
                  style={{ 
                    maxHeight: isOpen ? '200px' : '0', 
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease'
                  }}
                >
                  <div className="p-5 pt-0 text-[var(--espresso-light)] leading-relaxed">
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
