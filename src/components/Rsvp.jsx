import { useState } from "react";
import { Check, Users, Sparkles, Gift } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";
import { giftRegistry } from "../data/giftData";

export function Rsvp() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !attendance) return;
    setSubmitted(true);
  };

  const handleCopy = (key, value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const reset = () => {
    setName("");
    setAttendance("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section
      id="rsvp"
      className="section-container relative overflow-hidden py-stack-lg"
    >
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-stack-lg">
          <h2
            className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            Konfirmasi Kehadiran
          </h2>

          <p
            className="font-body-md text-body-md text-on-surface-variant"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            Beri tahu kami apakah Anda akan hadir di hari istimewa kami
          </p>

          <div className="mx-auto mt-4 w-24 h-px bg-primary/30" />
        </div>

        {!submitted ? (
          <form
            className="bg-white/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-outline-variant/30 space-y-5"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {/* Nama */}
            <div>
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider block mb-2">
                Nama Lengkap
              </label>

              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 bg-white/40 border border-outline-variant/40 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Konfirmasi */}
            <div>
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider block mb-2">
                Konfirmasi
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                {[
                  {
                    value: "hadir",
                    label: "Saya akan hadir",
                    icon: Check,
                  },
                  {
                    value: "tidak",
                    label: "Maaf, tidak bisa hadir",
                    icon: Users,
                  },
                ].map((opt) => {
                  const Icon = opt.icon;

                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setAttendance(opt.value)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border-[1.5px] rounded-lg font-body-md text-body-md transition-all duration-300 ${
                        attendance === opt.value
                          ? "border-primary bg-primary text-white"
                          : "border-outline-variant/40 text-on-surface-variant hover:border-primary"
                      }`}
                    >
                      <Icon size={18} />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pesan */}
            <div>
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider block mb-2">
                Pesan / Ucapan
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Berikan ucapan untuk kedua mempelai"
                rows={4}
                className="w-full px-4 py-3 bg-white/40 border border-outline-variant/40 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!name || !attendance}
              className="w-full py-3 bg-primary text-white font-label-caps text-label-caps uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kirim Konfirmasi
            </button>
          </form>
        ) : (
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8 border border-outline-variant/30 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Check size={32} className="text-primary" />
            </div>

            <h3
              className="font-display text-headline-sm text-primary mb-2 italic"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Terima Kasih
            </h3>

            <p
              className="font-body-md text-body-md text-on-surface-variant mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="250"
            >
              Konfirmasi Anda telah kami catat. Sampai jumpa di hari istimewa!
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <button
                type="button"
                onClick={reset}
                className="font-label-caps text-label-caps text-primary uppercase tracking-wider hover:underline"
              >
                Kirim ulang
              </button>
            </div>
          </div>
        )}

        {/* Gift Registry */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="0"
            >
              <Gift size={24} className="text-primary" />
            </div>

            <h3
              className="font-display text-headline-sm text-primary italic"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Hadiah Pernikahan
            </h3>

            <p
              className="font-body-md text-body-md text-on-surface-variant mt-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="250"
            >
              Doa restu Anda adalah hadiah terbaik. Jika berkenan memberikan
              hadiah, silakan melalui:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Bank */}
            <div
              className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-3">
                Transfer Bank
              </p>

              <p className="font-display text-headline-sm text-primary mb-1">
                {giftRegistry.bank.name}
              </p>

              <p className="font-body-md text-body-md text-on-surface-variant">
                a.n. {giftRegistry.bank.aN}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2 bg-white/40 px-3 py-2 rounded-lg">
                <code className="font-body-md text-body-md text-primary">
                  {giftRegistry.bank.account}
                </code>

                <button
                  type="button"
                  onClick={() => handleCopy("bank", giftRegistry.bank.account)}
                  className="font-label-caps text-label-caps text-primary uppercase tracking-wider hover:underline"
                >
                  {copied === "bank" ? "Tersalin" : "Salin"}
                </button>
              </div>
            </div>

            {/* eWallet */}
            <div
              className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-3">
                e-Wallet
              </p>

              <p className="font-display text-headline-sm text-primary mb-1">
                OVO / GoPay
              </p>

              <p className="font-body-md text-body-md text-on-surface-variant">
                a.n. {giftRegistry.ewallet.ovo.name}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2 bg-white/40 px-3 py-2 rounded-lg">
                <code className="font-body-md text-body-md text-primary">
                  {giftRegistry.ewallet.ovo.number}
                </code>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy("ewallet", giftRegistry.ewallet.ovo.number)
                  }
                  className="font-label-caps text-label-caps text-primary uppercase tracking-wider hover:underline"
                >
                  {copied === "ewallet" ? "Tersalin" : "Salin"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-12">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="650">
            <Sparkles
              size={32}
              className="text-primary mx-auto mb-3 opacity-70"
            />
          </div>

          <p
            className="font-display text-headline-sm text-primary italic"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="750"
          >
            Bambang &amp; Imroatus
          </p>

          <p
            className="font-body-md text-body-md text-on-surface-variant mt-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="850"
          >
            1 September 2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rsvp;
