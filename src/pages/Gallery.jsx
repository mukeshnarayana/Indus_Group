import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Building, Maximize2, Tag, CheckCircle2, Filter, ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      brand: 'Zudio',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abiram Developers',
      space: '4,500 sqft',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-9WshKw3cMZCRT6CbHbN1bJzuJQX9gW6cSpqomTq-ywAswOvBOxeGaQwwMvUJR3el-SSCetElwEbBdcMrVMTK35YNAghhCpdM3womVErW5FFk9cAtSy6EFHNcNrBrhc1nW-Y213_S1Sw=w243-h304-n-k-no-nu'
    },
    {
      id: 2,
      brand: 'Style Union',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abiram Developers',
      space: '4,500 sqft',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnx4ucv5ZHRlAuMZ-M0_bgwMgbhrXcDZokQrYNaLwHF3IdWIdpfBDyTQMirvLJouE1hNrMeERKHG55-lloMVYF-e4lst-N8OwY6OUETAG64MA-AO-blGismk49VXTjqusnY-Ysd=s1360-w1360-h1020-rw'
    },
    {
      id: 3,
      brand: 'Style Union',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abiram Developers',
      space: '4,500 sqft',
      image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=lu.gallery.gps&panoid=jyKMZgcA9iuKBugmm5zmrg&w=980&h=200&thumb=2&yaw=63.445694&pitch=0'
    },
    {
      id: 4,
      brand: 'Style Union',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Muralinagar',
      space: '1,000 sqft',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8Ftb3qYSSICT877FR3dc9jDIfoCSnhIT7dGCAmZ6vBfea6YXBRxPoRmPigY7OBdIDABi-P3ekIoOsWpq3vnre8ajD4sLoP1DThOdgXagkVQAO1slzqMAIo73be4uBlYWIrM7AzoQ87Kjq=s1360-w1360-h1020-rw'
    },
    {
      id: 5,
      brand: 'DMart',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Muralinagar',
      space: '1,000 sqft',
      image: 'https://scontent.fhyd3-1.fna.fbcdn.net/v/t39.30808-6/481791060_1664969657561367_6660461780421218873_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x608&ctp=s1080x608&_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=yu1jZLehwUUQ7kNvwG-RCWE&_nc_oc=Adr5oVUFP8eb_RZckcAzxyJK-YkcU9cb_pPGCEvI5OUR5y09KHr-O11jeZqhtzLTYDA&_nc_zt=23&_nc_ht=scontent.fhyd3-1.fna&_nc_gid=mMfAkTfi_f_TpHjkMEMjBg&_nc_ss=7b289&oh=00_AQFDKex-80165PfErEwUAswJ_MjYyKbTMGEu8iC_Qsyv0A&oe=6A77B112'
    },
    {
      id: 6,
      brand: 'IBO',
      state: 'Telangana',
      city: 'Hastinapuram',
      space: '15,000 sqft',
      image: 'https://lscdn.azureedge.net/biz-live/img/11843691-11843691-6c16f3ac.jpeg'
    },
    {
      id: 7,
      brand: 'Mangalya Shopping Mall',
      state: 'Telangana',
      city: 'Karmanghat',
      space: '20,000 sqft',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvVzA_cGNKZDtTU0jp70WBp8wLgnm7wa6eYhLEUMElPTKQ0CM_yYu3VE&s=10'
    },
    {
      id: 8,
      brand: 'S Conventions',
      state: 'Telangana',
      city: 'Karmanghat',
      space: '2,000 sqft',
      future: 'Signed with MAX and DIY',
      image: 'https://content3.jdmagicbox.com/v2/comp/hyderabad/c1/040pxx40.xx40.180420185204.s9c1/catalogue/s-convention-hall-karmanghat-hyderabad-convention-halls-f1kqnupe0a.jpg'
    },
    {
      id: 9,
      brand: 'Max & DIY (Upcoming)',
      state: 'Telangana',
      city: 'Karmanghat',
      future: 'Signed with MAX and DIY',
      image: ''
    },
    {
      id: 10,
      brand: 'Unlimited',
      state: 'Andhra Pradesh',
      city: 'Srikakulam',
      space: '7,000 sqft',
      image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqvoW-FT6514lBRqLZi0JRK1VGksGRft45GDUknq7KA&s'
    },
    {
      id: 11,
      brand: 'Kalyan Jewellers',
      state: 'Andhra Pradesh',
      city: 'Vizianagaram',
      space: '17,000 sqft',
      image: 'https://content.jdmagicbox.com/v2/comp/jharsuguda/p5/9999p6645.6645.250227054321.k2p5/catalogue/kalyan-jewellers-marwari-para-jharsuguda-jewellery-showrooms-bprtxmz6tp.jpg'
    }
  ];

  const filters = ['All', 'Andhra Pradesh', 'Telangana'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.state === selectedFilter);

  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* Header Banner */}
      <section className="bg-[#001849] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-4">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Indus & Arrow Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
            Commercial Project Gallery
          </h1>
          <p className="text-white/85 text-base md:text-lg font-serif max-w-2xl mx-auto leading-relaxed">
            Explore our completed and upcoming retail, commercial, and anchor brand properties across Andhra Pradesh and Telangana.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-[#FBF8F2] border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-[#FBF8F2]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="font-mono-code text-xs text-[#6B6E7A] uppercase mr-2 flex items-center gap-1.5 font-bold">
              <Filter className="w-4 h-4 text-[#E85D25]" /> Filter Region:
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`font-mono-code text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all font-bold ${
                  selectedFilter === filter
                    ? 'bg-[#001849] text-[#F5A623] shadow-md'
                    : 'bg-white text-[#14171F] border border-stone-200 hover:border-[#E85D25] hover:text-[#E85D25]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveProject(item)}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-64 overflow-hidden bg-stone-100 flex items-center justify-center">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.brand}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#001849]/5 flex flex-col items-center justify-center p-6 text-center text-[#001849]/60">
                      <Building className="w-12 h-12 text-[#E85D25] mb-2" />
                      <span className="font-serif font-bold text-sm text-[#001849]">{item.brand}</span>
                      <span className="font-mono-code text-[11px] text-[#6B6E7A] mt-1">{item.city}</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-[#001849]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2">
                    <ZoomIn className="w-8 h-8 text-[#F5A623]" />
                    <span className="font-mono-code text-xs uppercase tracking-wider font-bold">View Full Project Details</span>
                  </div>

                  {/* Location Badge */}
                  <span className="absolute top-3 left-3 bg-[#001849] text-[#F5A623] font-mono-code text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm font-bold border border-white/10">
                    {item.state}
                  </span>
                </div>

                {/* Card Footer: Brand Name Visible Under Image */}
                <div className="p-6 bg-white flex items-center justify-between border-t border-stone-100">
                  <div>
                    <span className="font-mono-code text-[10px] text-[#E85D25] font-bold uppercase tracking-wider block mb-0.5">
                      Brand Partner
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#001849] capitalize">
                      {item.brand}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#FBF8F2] text-[#001849] group-hover:bg-[#E85D25] group-hover:text-white flex items-center justify-center transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Details Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 bg-[#001849]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white text-[#14171F] rounded-2xl shadow-2xl overflow-hidden border border-stone-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#001849]/80 text-white hover:bg-[#E85D25] transition-colors shadow-lg"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Banner */}
            <div className="relative h-72 sm:h-80 bg-stone-900 overflow-hidden flex items-center justify-center">
              {activeProject.image ? (
                <img 
                  src={activeProject.image} 
                  alt={activeProject.brand} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#001849] flex flex-col items-center justify-center p-8 text-center text-white">
                  <Building className="w-16 h-16 text-[#F5A623] mb-3" />
                  <div className="font-serif font-bold text-2xl text-white">{activeProject.brand}</div>
                  <div className="font-mono-code text-xs text-white/70 mt-1">{activeProject.city}, {activeProject.state}</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001849] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono-code text-xs text-[#F5A623] uppercase tracking-widest block mb-1 font-bold">
                  {activeProject.state} Real Estate
                </span>
                <h3 className="font-serif text-3xl font-bold capitalize text-white">
                  {activeProject.brand}
                </h3>
              </div>
            </div>

            {/* Complete Project Details Content */}
            <div className="p-6 sm:p-8 space-y-6 bg-white">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Brand Name */}
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                    <Tag className="w-4 h-4" /> Brand Partner
                  </div>
                  <div className="font-serif font-bold text-lg text-[#001849] capitalize">
                    {activeProject.brand}
                  </div>
                </div>

                {/* Location City */}
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                    <MapPin className="w-4 h-4" /> Location / City
                  </div>
                  <div className="font-serif font-bold text-base text-[#001849]">
                    {activeProject.city}, {activeProject.state}
                  </div>
                </div>

                {/* Space Sqft */}
                {activeProject.space && (
                  <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                      <Maximize2 className="w-4 h-4" /> Total Space Area
                    </div>
                    <div className="font-serif font-bold text-lg text-[#001849]">
                      {activeProject.space}
                    </div>
                  </div>
                )}

                {/* Developer */}
                {activeProject.developer && (
                  <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                      <Building className="w-4 h-4" /> Developer Partner
                    </div>
                    <div className="font-serif font-bold text-base text-[#001849]">
                      {activeProject.developer}
                    </div>
                  </div>
                )}

              </div>

              {/* Future Agreement Note if applicable */}
              {activeProject.future && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E85D25] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono-code text-xs font-bold text-[#E85D25] uppercase">
                      Upcoming / Expansion Status
                    </div>
                    <div className="font-serif text-sm font-semibold text-[#001849] mt-0.5">
                      {activeProject.future}
                    </div>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 bg-[#001849] text-white font-mono-code text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#E85D25] transition-colors shadow"
                >
                  Close Details
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
