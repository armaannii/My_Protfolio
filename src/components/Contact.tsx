import { type FormEvent, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  HiOutlineCheck,
  HiOutlineChevronRight,
  HiOutlineExclamationCircle,
  HiOutlineMail,
  HiOutlinePaperAirplane,
} from 'react-icons/hi'
import emailjs from '@emailjs/browser'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: <HiOutlineMail className="h-5 w-5" />,
    label: 'Email',
    value: 'shahinrayhan92@gmail.com',
    href: 'mailto:shahinrayhan92@gmail.com',
    iconClass: 'bg-[#00d9a318] text-[#00d9a3]',
    hoverClass: 'hover:border-[#00d9a344] hover:bg-[#00d9a308]',
    accentClass: 'text-[#00d9a3]',
  },
  {
    icon: <FaGithub className="h-5 w-5" />,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/armaannii',
    iconClass: 'bg-[#58a6ff18] text-[#58a6ff]',
    hoverClass: 'hover:border-[#58a6ff44] hover:bg-[#58a6ff08]',
    accentClass: 'text-[#58a6ff]',
  },
  {
    icon: <FaLinkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/armanhosen92',
    iconClass: 'bg-[#d2a8ff18] text-[#d2a8ff]',
    hoverClass: 'hover:border-[#d2a8ff44] hover:bg-[#d2a8ff08]',
    accentClass: 'text-[#d2a8ff]',
  },
]

function InputField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  error,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  required?: boolean
  error?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-[#c9d1d9]">
        {label} {required && <span className="text-[#00d9a3]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-xl border px-4 py-3 text-sm text-[#e6edf3] outline-none transition-all duration-200 placeholder:text-[#8b949e] ${
          error ? 'border-[#f85149]' : 'border-[rgba(48,54,61,0.7)]'
        } bg-[rgba(13,17,23,0.6)] focus:border-[#00d9a3] focus:shadow-[0_0_0_3px_rgba(0,217,163,0.1)]`}
      />
      {error && <p id={`${id}-error`} className="text-xs text-[#f85149]">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<FormState>('idle')

  const validate = (): boolean => {
    const nextErrors: Partial<FormData> = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email'
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required'
    if (!form.message.trim()) nextErrors.message = 'Message is required'
    else if (form.message.trim().length < 20) nextErrors.message = 'Message must be at least 20 characters'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS__SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS__TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS__PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS is not configured. Set the service ID, template ID, and public key.')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}`)
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrors({})
  }

  const revealClass =
    'opacity-0 transition-[opacity,transform] duration-[600ms] ease-[ease] [&.visible]:translate-x-0 [&.visible]:translate-y-0 [&.visible]:opacity-100'

  return (
    <section
      id="contact"
      className="bg-[var(--bg-secondary)] bg-[radial-gradient(circle,rgba(0,217,163,0.08)_1px,transparent_1px)] [background-size:30px_30px] px-6 py-20 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div data-scroll-reveal className={`${revealClass} translate-y-[30px]`}>
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#d2a8ff]">
            Get In Touch
          </p>
          <h2 className="mb-4 bg-[linear-gradient(135deg,#00d9a3_0%,#58a6ff_50%,#d2a8ff_100%)] bg-clip-text text-center text-[clamp(2rem,4vw,2.75rem)] font-extrabold text-transparent">
            Let's Work Together
          </h2>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-[#8b949e]">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div data-scroll-reveal className={`${revealClass} -translate-x-[30px] space-y-5 lg:col-span-2`}>
            <div className="rounded-2xl border border-[rgba(48,54,61,0.5)] bg-[rgba(28,35,51,0.6)] p-6 backdrop-blur-[12px]">
              <h3 className="mb-2 text-lg font-bold text-[#e6edf3]">Ready to collaborate?</h3>
              <p className="mb-6 text-sm leading-relaxed text-[#8b949e]">
                Whether you're looking to build something from scratch, improve an existing product, or just want to chat about tech — my inbox is always open.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl border border-[rgba(48,54,61,0.4)] bg-[rgba(13,17,23,0.4)] p-3.5 transition-all duration-200 ${info.hoverClass}`}
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${info.iconClass}`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs font-medium text-[#8b949e]">{info.label}</div>
                      <div className="text-sm font-semibold text-[#c9d1d9] transition-colors duration-200">
                        {info.value}
                      </div>
                    </div>
                    <HiOutlineChevronRight
                      className={`ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 ${info.accentClass}`}
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[rgba(0,217,163,0.25)] bg-[rgba(0,217,163,0.08)] px-5 py-4">
              <div className="h-3 w-3 flex-shrink-0 animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full bg-[#00d9a3] shadow-[0_0_8px_rgba(0,217,163,0.6)]" />
              <div>
                <div className="text-sm font-semibold text-[#00d9a3]">Available for opportunities</div>
                <div className="text-xs text-[#8b949e]">Responding within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Right side sent message */}
          <div data-scroll-reveal id='message' className={`${revealClass} translate-x-[30px] lg:col-span-3`}>
            <div className="rounded-2xl border border-[rgba(48,54,61,0.5)] bg-[rgba(28,35,51,0.6)] p-7 backdrop-blur-[12px]">

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[rgba(0,217,163,0.4)] bg-[rgba(0,217,163,0.15)]">
                    <HiOutlineCheck className="h-8 w-8 text-[#00d9a3]" strokeWidth={2.5} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#e6edf3]">Message sent! 🎉</h3>
                  <p className="mb-6 text-sm text-[#8b949e]">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg border-[1.5px] border-[#00d9a3] bg-transparent px-7 py-3 text-[0.95rem] font-semibold text-[#00d9a3] transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:bg-[rgba(0,217,163,0.1)] hover:shadow-[0_8px_25px_rgba(0,217,163,0.2)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-5 grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Full Name"
                      id="name"
                      value={form.name}
                      onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                      placeholder="Enter your full name"
                      required
                      error={errors.name}
                    />
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                      placeholder="user@example.com"
                      required
                      error={errors.email}
                    />
                  </div>
                  <div className="mb-5">
                    <InputField
                      label="Subject"
                      id="subject"
                      value={form.subject}
                      onChange={(value) => setForm((current) => ({ ...current, subject: value }))}
                      placeholder="Project collaboration / Job opportunity / General inquiry"
                      required
                      error={errors.subject}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#c9d1d9]">
                      Message <span className="text-[#00d9a3]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                      placeholder="Tell me about your project, timeline, or anything else you'd like to share..."
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-[#e6edf3] outline-none transition-all duration-200 placeholder:text-[#8b949e] ${
                        errors.message ? 'border-[#f85149]' : 'border-[rgba(48,54,61,0.7)]'
                      } bg-[rgba(13,17,23,0.6)] focus:border-[#00d9a3] focus:shadow-[0_0_0_3px_rgba(0,217,163,0.1)]`}
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-xs text-[#f85149]">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="mb-5 flex items-center gap-3 rounded-xl border border-[rgba(248,81,73,0.3)] bg-[rgba(248,81,73,0.1)] px-4 py-3 text-sm text-[#ffa198]"
                    >
                      <HiOutlineExclamationCircle className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border-0 bg-[linear-gradient(135deg,#00d9a3,#00b589)] px-7 py-3 text-[0.95rem] font-bold text-[#0d1117] transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,217,163,0.4)] disabled:cursor-wait disabled:opacity-80"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiOutlinePaperAirplane className="h-4 w-4" strokeWidth={2.5} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
