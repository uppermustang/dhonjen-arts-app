import { useState } from 'react';
import { site, services } from '../data/siteContent';
import './Commission.css';

const COMMISSION_TYPES = [
  'Murals — home or business',
  'Branded / school / classroom wall art',
  "Kid's room or nursery painting",
  'Art class for kids — your school',
  'Art class for kids — individual / private',
  'Family portrait',
  'Individual portrait',
  'Semi-abstract or abstract canvas',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  commissionType: COMMISSION_TYPES[0],
  roomSize: '',
  message: '',
};

export default function Commission() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm({ ...initialForm });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="page-main">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Request custom art</h1>
          <p className="page-hero__lead">
            Dhonjen Thakuri — {site.tagline}, based in {site.location}. Use this form or email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </header>

      <section className="section commission-section">
        <div className="container commission-layout">
          <aside className="commission-aside">
            <img
              src="/images/commission/sidebar.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <div className="commission-aside__card">
              <h2>What clients ask for</h2>
              <ul>
                <li>Custom wall art for homes, businesses, and schools</li>
                <li>Inspiring pieces for classrooms</li>
                <li>Family, individual, and kids&apos; room paintings</li>
              </ul>
              <div className="commission-aside__services">
                {services.map((s) => (
                  <details key={s.title} className="commission-detail">
                    <summary>{s.title}</summary>
                    <p>{s.description}</p>
                  </details>
                ))}
              </div>
              <p className="commission-aside__note">
                Prefer email only? Reach out at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </aside>

          <form className="commission-form" onSubmit={handleSubmit} noValidate>
            <h2 className="commission-form__title">Contact form</h2>

            <div className="form-row">
              <label htmlFor="name">
                Full name <span aria-hidden="true">*</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label htmlFor="email">
                Email <span aria-hidden="true">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={site.email}
                />
              </label>
            </div>

            <label htmlFor="phone">
              Phone (optional)
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Include country code if outside the US"
              />
            </label>

            <label htmlFor="commissionType">
              What are you interested in? <span aria-hidden="true">*</span>
              <select
                id="commissionType"
                name="commissionType"
                required
                value={form.commissionType}
                onChange={handleChange}
              >
                {COMMISSION_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="roomSize">
              Wall dimensions or placement (optional)
              <input
                id="roomSize"
                name="roomSize"
                type="text"
                value={form.roomSize}
                onChange={handleChange}
                placeholder='e.g. mural wall 10 ft × 8 ft; canvas above crib'
              />
            </label>

            <label htmlFor="message">
              Your vision <span aria-hidden="true">*</span>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Theme, colors, deadline if any, references — whatever helps describe the project."
              />
            </label>

            {status === 'success' && (
              <p className="form-message form-message--success" role="status">
                Thank you — your message was sent. Dhonjen can also be reached directly at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}

            {status === 'error' && (
              <p className="form-message form-message--error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary commission-form__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
