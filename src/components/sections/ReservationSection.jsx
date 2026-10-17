
import React, { useState } from 'react';

const createEmptyForm = () => ({
  name: '',
  phone: '',
  address: '',
});

const fieldClass =
  'h-11 lg:h-[max(40px,2.65vw)] w-full min-w-0 rounded-[4px] border border-[#E6E6E6] bg-white px-4 lg:px-[max(12px,0.9vw)] text-sm lg:text-[max(13px,0.8vw)] text-[#111827] placeholder-[#9A9A9A] transition-colors focus:border-[#F15A24] focus:outline-none';

const labelClass =
  'mb-1.5 lg:mb-[max(5px,0.45vw)] block font-condensed text-xs lg:text-[max(11px,0.72vw)] font-medium uppercase tracking-[0.04em] text-[#111827]';

const iconClass =
  'h-7 w-7 lg:h-[max(24px,2.1vw)] lg:w-[max(24px,2.1vw)] text-[#F15A24]';

const pillServices = [
  {
    id: 'BUFFET',
    label: 'Buffet',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 18h16" />
        <path d="M3 20h18" />
        <path d="M12 4v2" />
        <path d="M5 18a7 7 0 0 1 14 0" />
        <circle cx="12" cy="4" r="1.5" fill="#F15A24" />
      </svg>
    ),
  },
  {
    id: 'PARTY',
    label: 'Party',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 3l3 6a2 2 0 0 1-1.5 2.5L7 12v6" />
        <path d="M5 18h4" />
        <path d="M16 3l-3 6a2 2 0 0 0 1.5 2.5L17 12v6" />
        <path d="M15 18h4" />
        <path d="M11 5l2 2" />
      </svg>
    ),
  },
  {
    id: 'EVENT',
    label: 'Event',
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20l7-14 9 9-14 7z" />
        <path d="M11 6l9 9" />
        <path d="M15 3v2" />
        <path d="M21 9h-2" />
        <path d="M19 4l-1.5 1.5" />
        <circle cx="17" cy="7" r="0.8" fill="#F15A24" />
        <circle cx="21" cy="5" r="0.8" fill="#F15A24" />
      </svg>
    ),
  },
];

export default function ReservationSection() {
  const [formData, setFormData] = useState(createEmptyForm);
  const [selectedService, setSelectedService] = useState('BUFFET');
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative flex w-full flex-col lg:flex-row lg:items-stretch">
        {/* LEFT: IMAGE AND SERVICE PILLS */}
        <div className="relative z-20 h-[300px] w-full shrink-0 sm:h-[420px] md:h-[460px] lg:h-auto lg:min-h-[max(560px,42.5vw)] lg:w-[48%]">
          <img
            src="/images/Image.png"
            alt="Table feast dining experience"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Service pills - kept intact */}
          <div
            className="
              absolute bottom-0 left-1/2 z-30
              flex -translate-x-1/2 translate-y-1/2
              flex-row gap-3
              lg:bottom-auto lg:left-auto lg:right-0 lg:top-[43%]
              lg:translate-x-1/2 lg:-translate-y-1/2
              lg:flex-col lg:gap-[max(10px,1.05vw)]
            "
          >
            {pillServices.map((pill) => {
              const isSelected = selectedService === pill.id;

              return (
                <button
                  key={pill.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedService(pill.id)}
                  className={`
                    flex h-[76px] w-[72px] shrink-0
                    flex-col items-center justify-center gap-2
                    rounded-[18px] border bg-white
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    transition-all hover:-translate-y-0.5
                    sm:h-[84px] sm:w-[80px]
                    lg:h-[max(84px,7.6vw)] lg:w-[max(80px,7.9vw)] lg:rounded-[max(20px,2.6vw)]
                    ${
                      isSelected
                        ? 'border-[#F15A24]'
                        : 'border-transparent'
                    }
                  `}
                >
                  {pill.icon}

                  <span className="font-condensed text-[11px] font-medium uppercase tracking-[0.04em] text-[#111827] lg:text-[max(11px,0.82vw)]">
                    {pill.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div
          className="
            relative flex w-full flex-col justify-center
            px-5 pb-12 pt-20
            sm:px-10 sm:pb-16
            md:px-14
            lg:w-[52%] lg:pl-[max(56px,6.3vw)] lg:pr-8
            lg:py-[max(48px,4vw)]
          "
        >
          <div className="relative z-10 mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:w-[max(340px,29.4vw)]">
            {/* Eyebrow */}
            <div className="flex select-none items-center gap-2">
              <span className="font-condensed text-[13px] font-medium uppercase tracking-[0.06em] text-[#F15A24] sm:text-sm lg:text-[max(13px,0.95vw)]">
                Contact Us
              </span>

              <svg
                className="h-3 w-12 shrink-0 text-[#F15A24]"
                viewBox="0 0 60 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 2l4 4-4 4M7 2l4 4-4 4M12 2l4 4-4 4" />
                <line x1="16" y1="6" x2="52" y2="6" />
                <circle cx="55" cy="6" r="2.2" />
              </svg>
            </div>

            <h2 className="mb-6 mt-1 font-condensed text-[36px] font-medium leading-[1.1] text-[#111111] sm:text-[42px] lg:mb-[max(20px,1.9vw)] lg:text-[max(34px,2.85vw)]">
              Contact Us
            </h2>

            {submitted ? (
              <div className="flex items-start gap-4 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xl text-white">
                  ✓
                </span>

                <div className="min-w-0">
                  <h4 className="font-semibold">
                    Thank you for contacting us!
                  </h4>

                  <p className="mt-1 break-words text-sm text-emerald-700">
                    We have received your enquiry and will contact you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData(createEmptyForm());
                      setSubmitted(false);
                    }}
                    className="mt-3 text-sm font-semibold text-emerald-800 underline underline-offset-4"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 lg:space-y-[max(12px,0.85vw)]"
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={update('name')}
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={update('phone')}
                    placeholder="Enter your phone number"
                    className={fieldClass}
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="contact-address" className={labelClass}>
                    Address
                  </label>

                  <textarea
                    id="contact-address"
                    name="address"
                    autoComplete="street-address"
                    required
                    value={formData.address}
                    onChange={update('address')}
                    placeholder="Enter your address"
                    rows={3}
                    className={`${fieldClass} h-auto min-h-24 resize-y py-3`}
                  />
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="
                      h-12 w-[150px]
                      rounded-[4px]
                      bg-[#F15A24]
                      font-condensed
                      text-[15px] font-medium text-white
                      transition-colors hover:bg-[#d94917]
                      active:scale-95
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#F15A24]
                      focus-visible:ring-offset-2
                      lg:h-[max(42px,2.9vw)]
                      lg:w-[max(150px,10vw)]
                      lg:text-[max(14px,0.9vw)]
                    "
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Decorative chef bell - kept intact */}
          <img
            src="/images/notifications-chef-bell.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none absolute bottom-0 right-2
              hidden h-auto w-[130px] select-none
              sm:block md:w-[150px]
              lg:hidden xl:block
              xl:right-[1.6vw] xl:bottom-[-2vw] xl:w-[max(180px,14.4vw)]
            "
          />
        </div>
      </div>
    </section>
  );
}
