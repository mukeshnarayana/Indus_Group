import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sector: 'Hospitality',
    dates: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How long does the leasing process take?',
      a: 'The process typically takes between 2-4 months depending on the complexity of your lease requirements and market conditions.'
    },
    {
      q: 'Do I need a real estate agent to lease a commercial property?',
      a: 'No, our team can handle the leasing process from start to finish for you.'
    },
    {
      q: 'What will be the total cost of leasing a commercial property?',
      a: 'The total cost can vary widely depending on lease terms and location. We can provide you with a detailed cost analysis to help you make an informed decision.'
    },
    {
      q: 'Can I lease a property for short-term use?',
      a: 'Yes, we can help you locate a property for short-term use, such as co-working space or an executive suite.'
    }
  ];

  return (
    <div className="pt-20">
      
      {/* Header */}
      <section className="bg-[#001849] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Direct Reservations & Inquiries</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            Contact Indus Group
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans">
            Our reservation specialists and accessibility coordinators are available 24 hours a day.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 border border-[#14171F]/10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#00287A] text-[#F5A623] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#001849]">
                    Reservation Request Received
                  </h3>
                  <p className="text-[#6B6E7A] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-bold text-[#001849]">{formData.fullName}</span>. Our VIP Concierge coordinator will contact you shortly at <span className="font-mono-code text-[#E85D25]">{formData.email}</span> to confirm your customized stay details.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="font-mono-code text-xs uppercase tracking-wider text-[#E85D25] hover:underline pt-4 inline-block font-semibold"
                  >
                    ← Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="eyebrow">
                    <span>Reservation & Service Form</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001849] mb-6">
                    Book Your Custom Experience
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lord Arthur Pendelton"
                        className="w-full bg-[#FBF8F2] border border-[#14171F]/20 p-3 text-sm focus:outline-none focus:border-[#E85D25]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="concierge@example.com"
                        className="w-full bg-[#FBF8F2] border border-[#14171F]/20 p-3 text-sm focus:outline-none focus:border-[#E85D25]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#FBF8F2] border border-[#14171F]/20 p-3 text-sm focus:outline-none focus:border-[#E85D25]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-2">
                        Target Sector
                      </label>
                      <select 
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full bg-[#FBF8F2] border border-[#14171F]/20 p-3 text-sm focus:outline-none focus:border-[#E85D25]"
                      >
                        <option value="Hospitality">Hospitality & Suites</option>
                        <option value="Retail">Retail Integration</option>
                        <option value="Industrial">Industrial Stays</option>
                        <option value="Office">Office & Workspaces</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-2">
                      Additional Requests or Project Notes
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify flight arrival times, dietary requirements, or meeting room setups..."
                      className="w-full bg-[#FBF8F2] border border-[#14171F]/20 p-3 text-sm focus:outline-none focus:border-[#E85D25]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#00287A] text-white font-mono-code text-xs uppercase tracking-wider py-4 hover:bg-[#E85D25] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Submit Reservation Inquiry</span>
                    <Send className="w-4 h-4 text-[#F5A623]" />
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              
              <div className="bg-[#001849] text-white p-8 border border-white/10">
                <h3 className="font-serif text-2xl font-bold mb-6 text-[#F5A623]">
                  Concierge Headquarters
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E85D25] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono-code text-xs text-[#F5A623] uppercase">Location</div>
                      <div className="font-semibold">Plot no: 501, Second floor-202</div>
                      <div className="text-xs text-white/70">Teachers colony, Phase 2, BN Reddy Nagar</div>
                      <div className="text-xs text-white/70">Hyderabad - 500070</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#E85D25] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono-code text-xs text-[#F5A623] uppercase">Contact Number</div>
                      <div className="font-semibold">+91 8420861234</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#E85D25] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono-code text-xs text-[#F5A623] uppercase">Email Enquiries</div>
                      <div className="font-semibold">tejeswararao@indusgroup.in</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E85D25] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono-code text-xs text-[#F5A623] uppercase">Hours</div>
                      <div className="font-semibold">24 Hours / 365 Days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Box */}
              <div className="bg-white p-8 border border-[#14171F]/10">
                <h3 className="font-serif text-xl font-bold text-[#001849] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#14171F]/10 pb-3">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full text-left font-serif font-semibold text-sm text-[#001849] hover:text-[#E85D25] flex justify-between items-center py-1"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180 text-[#E85D25]' : ''}`} />
                      </button>
                      {activeFaq === idx && (
                        <p className="text-xs text-[#6B6E7A] mt-2 leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE GOOGLE MAPS LOCATION SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-[#14171F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="eyebrow justify-center text-[#E85D25]">
              <span>Visit Our Corporate Office</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001849]">
              Find Us On Google Maps
            </h2>
            <p className="text-xs sm:text-sm font-mono-code text-[#6B6E7A]">
              Plot no: 501, Second floor-202, Teachers colony, Phase 2, BN Reddy Nagar, Hyderabad - 500070
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FBF8F2] relative h-[480px] group">
            <iframe
              title="Indus Group Corporate Headquarters Location Map"
              src="https://maps.google.com/maps?q=Teachers+colony+Phase+2+BN+Reddy+Nagar+Hyderabad+500070&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute bottom-6 left-6 bg-[#001849]/95 backdrop-blur-md text-white p-5 rounded-2xl border border-white/20 shadow-xl max-w-md hidden sm:flex items-center gap-3 z-10">
              <MapPin className="w-6 h-6 text-[#F5A623] shrink-0" />
              <div>
                <span className="font-mono-code text-[11px] text-[#F5A623] font-bold uppercase tracking-wider block mb-0.5">
                  Indus Group Corporate Office
                </span>
                <p className="text-xs text-white/90 font-sans leading-snug">
                  Plot no: 501, Second floor-202, Teachers colony, Phase 2, BN Reddy Nagar, Hyderabad - 500070
                </p>
                <a
                  href="https://maps.google.com/?q=Teachers+colony+Phase+2+BN+Reddy+Nagar+Hyderabad+500070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono-code font-bold text-[#F5A623] hover:text-white mt-2 transition-colors group/link"
                >
                  <span>Open in Google Maps / Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
