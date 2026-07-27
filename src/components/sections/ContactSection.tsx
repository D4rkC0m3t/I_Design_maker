"use client";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) newErrors.name = "Name is required";
    if (!data.get("phone")?.toString().trim()) newErrors.phone = "Phone is required";
    if (!data.get("service")?.toString().trim()) newErrors.service = "Please select a service";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB400]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {submitted ? (
          <div className={`text-center py-32 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-20 h-20 bg-[#FFB400]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#FFB400]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#111] mb-4">Thank You!</h2>
            <p className="text-[#555] text-lg max-w-lg mx-auto mb-8">
              Your quote request has been received. Our team will get back to you within 24 hours.
            </p>
            <button onClick={() => { setSubmitted(false); setFileName(""); }} className="btn-gold px-8 py-3.5 rounded-full font-semibold text-sm">
              Submit Another Inquiry
            </button>
          </div>
        ) : (
        <>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FFB400] mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-6">
            Let&apos;s Discuss Your Signage Project <span className="text-[#FFB400]">Today</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto mb-6">
            Get a free consultation and quote within 24 hours. No commitment required.
          </p>
          {/* Urgency trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[#111]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Free Site Visit
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Free Quotation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              24-Hour Response
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Left: Contact Info & Map */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-8">
              <div>
                <h3 className="font-display text-2xl text-[#111] mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#FFB400]/10 flex items-center justify-center shrink-0 text-[#FFB400]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-1">Factory Location</div>
                      <div className="text-sm text-[#111] font-medium leading-relaxed">
                        1st Main Rd, Sharada Colony,<br />BEML Layout, Kamakshipalya, Bengaluru 560079
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 text-[#25D366]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-1">WhatsApp / Call</div>
                      <a href="tel:+919686241411" className="text-lg text-[#111] font-bold hover:text-[#25D366] transition-colors">+91 96862 41411</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0 text-[#111]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-1">Email Us</div>
                      <a href="mailto:hello@idesignmaker.com" className="text-sm text-[#111] font-medium hover:text-[#FFB400] transition-colors">hello@idesignmaker.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-200 rounded-3xl h-64 overflow-hidden border border-black/5 shadow-sm relative group">
                <iframe 
                src="https://maps.google.com/maps?q=Kamakshipalya,BEML+Layout,Bengaluru+560079&output=embed" 
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="I Design Maker factory location on Google Maps"
              />
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-xl">
              <h3 className="font-display text-3xl text-[#111] mb-2">Request a Quote</h3>
              <p className="text-[#555] text-sm mb-8">Fill out the details below and our team will get back to you within 24 hours.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Your Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="John Doe" className={`w-full bg-[#FAFAFA] border rounded-xl px-4 py-3.5 text-[#111] text-sm focus:outline-none focus:border-[#FFB400] focus:ring-2 focus:ring-[#FFB400]/20 transition-all ${errors.name ? "border-red-500" : "border-black/10"}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Phone Number</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" className={`w-full bg-[#FAFAFA] border rounded-xl px-4 py-3.5 text-[#111] text-sm focus:outline-none focus:border-[#FFB400] focus:ring-2 focus:ring-[#FFB400]/20 transition-all ${errors.phone ? "border-red-500" : "border-black/10"}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Company / Business Name</label>
                    <input id="contact-company" name="company" type="text" placeholder="ABC Corp Ltd." className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3.5 text-[#111] text-sm focus:outline-none focus:border-[#FFB400] focus:ring-2 focus:ring-[#FFB400]/20 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Service Required</label>
                    <select id="contact-service" name="service" className={`w-full bg-[#FAFAFA] border rounded-xl px-4 py-3.5 text-[#111] text-sm focus:outline-none focus:border-[#FFB400] focus:ring-2 focus:ring-[#FFB400]/20 transition-all appearance-none ${errors.service ? "border-red-500" : "border-black/10"}`}>
                      <option value="">Select a service...</option>
                      <option value="led">LED Signage</option>
                      <option value="acp">ACP Cladding</option>
                      <option value="3d">3D Letter Signage</option>
                      <option value="wayfinding">Wayfinding Systems</option>
                      <option value="digital">Digital Displays</option>
                      <option value="retail">Retail Branding</option>
                      <option value="vehicle">Vehicle Branding</option>
                      <option value="other">Other / Custom</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-details" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Project Details</label>
                  <textarea id="contact-details" name="details" rows={4} placeholder="Tell us about your project requirements, location, and dimensions..." className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-4 py-3.5 text-[#111] text-sm focus:outline-none focus:border-[#FFB400] focus:ring-2 focus:ring-[#FFB400]/20 transition-all resize-none"></textarea>
                </div>

                <div>
                  <label htmlFor="contact-file" className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Upload Site Photo / Logo (Optional)</label>
                  <div 
                    className="border-2 border-dashed border-black/10 rounded-xl p-6 text-center cursor-pointer hover:border-[#FFB400]/50 hover:bg-[#FAFAFA] transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input 
                      type="file" 
                      id="contact-file"
                      className="hidden" 
                      ref={fileInputRef} 
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.ai,.eps"
                    />
                    <svg className="w-8 h-8 mx-auto text-[#888] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <p className="text-[#111] font-medium text-sm">
                      {fileName ? fileName : "Click to upload or drag and drop"}
                    </p>
                    {!fileName && <p className="text-xs text-[#888] mt-1">SVG, PNG, JPG, PDF or AI (Max. 10MB)</p>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button type="submit" className="flex-1 btn-gold py-4 rounded-xl text-[15px] font-bold shadow-[0_10px_20px_rgba(255,180,0,0.2)]">
                    Get Free Quote
                  </button>
                  <a href="https://wa.me/919686241411" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 transition-colors shadow-[0_10px_20px_rgba(37,211,102,0.2)]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp Now
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-[#888]">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Free consultation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    24hr response time
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#FFB400]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    No obligation
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </section>
  );
}
