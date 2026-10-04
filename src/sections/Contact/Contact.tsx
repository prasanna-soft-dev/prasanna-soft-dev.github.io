import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { Section } from '../../components/common/Section'
import { Reveal } from '../../components/common/Reveal'
import { socialLinks } from '../../data/Social'

export function Contact() {
  const [state, handleSubmit] = useForm('xkjowbrb')

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl"
          />

          <div className="relative p-7 sm:p-10 lg:p-14">
            {/* Header */}
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Get in touch
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Let's build something
                <br className="hidden sm:block" />
                meaningful.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                Have an opportunity, project, or just want to connect?
                Send me a message and I'll get back to you.
              </p>
            </div>

            {/* Contact form */}
            <Reveal delay={100}>
              <form
                onSubmit={handleSubmit}
                className="mt-10 max-w-3xl space-y-6"
              >
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)]"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-xs text-[var(--error)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)]"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-xs text-[var(--error)]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What would you like to talk about?"
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)]"
                  />

                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="mt-2 text-xs text-[var(--error)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me a little about your opportunity or project..."
                    className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm leading-6 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)]"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-xs text-[var(--error)]"
                  />
                </div>

                {/* General error */}
                <ValidationError
                  errors={state.errors}
                  className="text-sm text-[var(--error)]"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:gap-3 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />

                  {state.submitting ? 'Sending...' : 'Send message'}
                </button>

                {/* Success */}
                {state.succeeded && (
                  <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[var(--success)]"
                    />

                    <span>
                      Thanks for reaching out. Your message has been
                      sent successfully.
                    </span>
                  </div>
                )}
              </form>
            </Reveal>

            {/* Direct contact */}
            <Reveal delay={200}>
              <div className="mt-12 border-t border-[var(--border)] pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      Prefer a direct message?
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      You can also reach me directly.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:prasannat857@gmail.com"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    >
                      <Mail size={15} />
                      Email

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href="https://wa.me/917397141898"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    >
                      <MessageCircle size={15} />
                      WhatsApp

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}