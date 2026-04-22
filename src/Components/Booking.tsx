import { useEffect, useRef, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface BookingProps {
  calUsername: string;
  calEvent?: string;
}

const CAL_NAMESPACE = 'booking-inline';

const Booking = ({ calUsername, calEvent }: BookingProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const calLink = calEvent ? `${calUsername}/${calEvent}` : calUsername;

  useEffect(() => {
    (async () => {
      const api = await getCalApi({ namespace: CAL_NAMESPACE });
      const accent =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim() || '#7666f0';
      api('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: accent } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const openBooking = () => {
    setMounted(true);
    setOpen(true);
  };

  const toggle = () => {
    if (!open) {
      openBooking();
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !mounted) {
          openBooking();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <section className="booking" id="booking" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-number">06 — Book a call</span>
        <h2>Let's talk</h2>
      </div>
      <div className="booking-inner reveal">
        <div className="booking-header">
          <h2>
            Got a project
            <br />
            in <em>mind?</em>
          </h2>
          <p>
            Pick a slot and let's have a 30-minute intro call. No commitment,
            just a conversation about what you're building and how I can help.
          </p>
        </div>
        <button
          className={`booking-trigger${open ? ' active' : ''}`}
          onClick={toggle}
          type="button"
        >
          <span className="booking-trigger-label">
            {open ? 'Close calendar ×' : 'Pick a time slot ↓'}
          </span>
          <span className="booking-trigger-icon">+</span>
        </button>
        <div className={`cal-collapse${open ? ' open' : ''}`}>
          <div className="cal-collapse-inner">
            {mounted && (
              <Cal
                namespace={CAL_NAMESPACE}
                calLink={calLink}
                style={{ width: '100%', height: '700px', overflow: 'scroll' }}
                config={{ layout: 'month_view', theme: 'dark' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
