import React, { useState } from 'react';
import { Play, Film, Sparkles, Send, CheckCircle, ChevronDown, ChevronUp, Menu, X, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [showAll, setShowAll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const whatsappNumber = '5541997999350';
  const whatsappMessage = encodeURIComponent('Olá! Vi seu portfólio e gostaria de trocar uma ideia sobre um projeto de edição/motion.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const categories = ['Todos', 'Reels / Shorts', 'Motion Graphics', 'Vídeos de Impacto', 'Comercial'];

  const projects = [
    {
      id: 1,
      title: 'Reels Dinâmico - Resultado Final',
      category: 'Reels / Shorts',
      description: 'Corte dinâmico na vertical com foco em retenção, elementos sonoros e ritmo acelerado.',
      embedUrl: 'https://drive.google.com/file/d/1SJ0fDVBizoRnHuaNjR5qKCIphf_qa-r6/preview',
      tags: ['Corte Dinâmico', 'Retenção', 'Reels', 'Sound Design']
    },
    {
      id: 2,
      title: 'Vídeo Promocional & Conteúdo - Lucas',
      category: 'Comercial',
      description: 'Edição comercial para redes sociais com dinamismo de cortes e elementos visuais.',
      embedUrl: 'https://drive.google.com/file/d/1shRVpSKgibAImC-41kzXDCGdZXLOg4Gb/preview',
      tags: ['Edição Comercial', 'Motion', 'Redes Sociais']
    },
    {
      id: 3,
      title: 'Vídeo de Impacto - Conteúdo Jambo',
      category: 'Vídeos de Impacto',
      description: 'Estruturação de narrativa com ritmo constante, apoio gráfico e transições marcantes.',
      embedUrl: 'https://drive.google.com/file/d/1Oe8OIY51fY0bcg-A4LabtM48J8u1J7f0/preview',
      tags: ['Ritmo & Fluxo', 'Sound Design', 'Pós-Produção']
    },
    {
      id: 4,
      title: 'Conteúdo Criativo Ontime 02',
      category: 'Comercial',
      description: 'Edição corporativa e dinâmica moderna para campanhas digitais e branding.',
      embedUrl: 'https://drive.google.com/file/d/1mOyZbLvV56L4Tdaz2WONNRbe9FEPYuoi/preview',
      tags: ['Premiere Pro', 'Edição de Marca', 'Color Grading']
    },
    {
      id: 5,
      title: 'Logo Animation / Intro Motion',
      category: 'Motion Graphics',
      description: 'Vinheta e animação de logo minimalista com fundo escuro e identidade marcante.',
      embedUrl: 'https://drive.google.com/file/d/1DMDKTaduBiruPk8oV8LW3u1KRngph7bd/preview',
      tags: ['After Effects', 'Motion Design', 'Logo Reveal']
    },
    {
      id: 6,
      title: 'Vídeo Promocional Misael 01',
      category: 'Vídeos de Impacto',
      description: 'Edição limpa, ritmo constante e tratamento de som com foco na mensagem principal.',
      embedUrl: 'https://drive.google.com/file/d/1SYZjQ7hvPLEg6p9xcQidWnF8kc3vwG0E/preview',
      tags: ['Edição de Voz', 'Montagem', 'Narrativa']
    },
    {
      id: 7,
      title: 'Conteúdo Audiovisual - Nathalie 02',
      category: 'Comercial',
      description: 'Pós-produção elegante com sincronia visual e ritmo envolvente.',
      embedUrl: 'https://drive.google.com/file/d/1jM7B1PGpJXYAALeN9Z69CwgwSzvK1Zqu/preview',
      tags: ['Comercial', 'Color Grading', 'Visual']
    },
    {
      id: 8,
      title: 'Reels Editorial 10-01',
      category: 'Reels / Shorts',
      description: 'Formato vertical otimizado para engajamento rápido e consumo em redes sociais.',
      embedUrl: 'https://drive.google.com/file/d/1hCO43K4yybjmQpa931jeCC4tkh_HaqgV/preview',
      tags: ['Shorts', 'Reels', 'Engajamento']
    },
    {
      id: 9,
      title: 'Campanha Audiovisual Misael 12',
      category: 'Vídeos de Impacto',
      description: 'Vídeo com estrutura rítmica de cortes secos e acentuação sonoras.',
      embedUrl: 'https://drive.google.com/file/d/16wRjI6_Ykum7N1EId8pZHJu61kZRtLga/preview',
      tags: ['SFX', 'Transições', 'Corte Ágil']
    },
    {
      id: 10,
      title: 'Kelen Bull - Vídeo 05',
      category: 'Comercial',
      description: 'Produção focada em comunicação clara e apresentação de marca.',
      embedUrl: 'https://drive.google.com/file/d/1_mXj9r10kYjFNJxU5A6IJnvUxYiqbuGE/preview',
      tags: ['Branding', 'Conteúdo', 'Comercial']
    },
    {
      id: 11,
      title: 'Kelen Bull - Vídeo 04',
      category: 'Comercial',
      description: 'Trabalho de cortes e transições para campanhas de redes sociais.',
      embedUrl: 'https://drive.google.com/file/d/11Xxd8LOT4Qe1IuWFh3KkMYdJxjWmE2hA/preview',
      tags: ['Social Media', 'Edição', 'Design']
    },
    {
      id: 12,
      title: 'Conteúdo Misael - Setembro',
      category: 'Vídeos de Impacto',
      description: 'Vídeo corporativo moderno focado na retenção e dinamismo visual.',
      embedUrl: 'https://drive.google.com/file/d/1GerBiSswbAWy3AjWnt9vO9oH-qj0Xty3/preview',
      tags: ['Pós-Produção', 'Ajuste de Cor', 'Corte']
    },
    {
      id: 13,
      title: 'Certificado Digital - Kelen Bull 07',
      category: 'Motion Graphics',
      description: 'Elementos visuais e letterings animados integrados para anúncios institucionais.',
      embedUrl: 'https://drive.google.com/file/d/1bna6xgwda-i2rfO2wJ3x47WN__fmyKy_/preview',
      tags: ['Motion', 'Typography', 'After Effects']
    },
    {
      id: 14,
      title: 'Gracy - Reels 19-03',
      category: 'Reels / Shorts',
      description: 'Corte ágil na vertical com efeitos de transição e áudio sincronizado.',
      embedUrl: 'https://drive.google.com/file/d/15YAAgaNF6iwOUrVWTr0r3C1fkjaab3RX/preview',
      tags: ['TikTok', 'Reels', 'Corte Seco']
    },
    {
      id: 15,
      title: 'Gracy - Reels 05-03',
      category: 'Reels / Shorts',
      description: 'Edição na vertical focada em ritmo acelerado e dinamismo de cortes.',
      embedUrl: 'https://drive.google.com/file/d/12bk1Wglf7zVZ2jYCAn3CIvJbLBfCfmXU/preview',
      tags: ['Shorts', 'Reels', 'Ritmo']
    },
    {
      id: 16,
      title: 'Certificado Digital - Kelen Bull 06',
      category: 'Motion Graphics',
      description: 'Animações institucionais de alta qualidade para campanhas digitais.',
      embedUrl: 'https://drive.google.com/file/d/1UVwRihXWYP6wPJkFFeCvSGJGY4tioKfF/preview',
      tags: ['Motion Graphics', 'Design', 'Branding']
    },
    {
      id: 17,
      title: 'Ontime - Vídeo 03',
      category: 'Comercial',
      description: 'Conteúdo institucional com ritmo moderno e transições suaves.',
      embedUrl: 'https://drive.google.com/file/d/1luswvIsbcm6TZ-am8gST9vk6g_aNlDyl/preview',
      tags: ['Comercial', 'Edição', 'Pós-Produção']
    },
    {
      id: 18,
      title: 'Nathalie - Vídeo 01',
      category: 'Comercial',
      description: 'Pós-produção focada no público-alvo com refinamento de cor e som.',
      embedUrl: 'https://drive.google.com/file/d/1TFnQnsgEpsDUoONyc6Iq1A3nL4y7BcQR/preview',
      tags: ['Color Grading', 'Sound Design', 'Social']
    },
    {
      id: 19,
      title: 'Ontime - Vídeo 04',
      category: 'Comercial',
      description: 'Corte rápido para peças publicitárias e vídeos curtos.',
      embedUrl: 'https://drive.google.com/file/d/19X8Ulf54Fp_NUyZNuH4TSoSLRjNyLgha/preview',
      tags: ['Ads', 'Edição Ágil', 'Vídeo']
    }
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#101011] text-[#DFDFDF] flex flex-col selection:bg-[#313AFF] selection:text-white overflow-x-hidden w-full relative">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#101011]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base sm:text-xl tracking-wider text-white">
            <Film className="text-[#313AFF] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span className="truncate">RENAN<span className="text-[#313AFF]">.</span>EDITOR</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#showcase" className="hover:text-white transition">Projetos</a>
            <a href="#sobre" className="hover:text-white transition">Como Funciona</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#313AFF] hover:bg-[#252ccb] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition shadow-lg shadow-[#313AFF]/20 whitespace-nowrap"
            >
              Fazer Orçamento
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#313AFF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#101011] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            <a 
              href="#showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#313AFF] font-medium py-1 transition"
            >
              Projetos
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#313AFF] font-medium py-1 transition"
            >
              Como Funciona
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#313AFF] font-medium py-1 transition"
            >
              Contato
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#313AFF] text-white text-center font-semibold py-3 rounded-xl text-sm transition shadow-lg shadow-[#313AFF]/20 mt-2"
            >
              Fazer Orçamento
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#313AFF]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[#313AFF] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Edição Dinâmica & Motion Design
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 text-white text-balance">
          Vídeos com ritmo, retenção <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-[#DFDFDF] to-[#313AFF] bg-clip-text text-transparent">
            e identidade visual marcante
          </span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed text-center">
          Edição ágil e animações em motion design para Reels, comerciais e projetos que precisam prender a atenção do início ao fim.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3.5 justify-center relative z-10 px-2 sm:px-0">
          <a 
            href="#showcase" 
            className="w-full sm:w-auto justify-center bg-[#313AFF] hover:bg-[#252ccb] text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center gap-2 shadow-lg shadow-[#313AFF]/25 text-center"
          >
            Ver Trabalhos <Play className="w-4 h-4 fill-white" />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition text-white backdrop-blur-sm text-center"
          >
            Trocar uma Ideia
          </a>
        </div>
      </section>

      {/* SHOWCASE / PROJETOS */}
      <section id="showcase" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Trabalhos Recentes</h2>
            <p className="text-slate-400 text-xs sm:text-base">Uma amostra do ritmo e estilo de edição.</p>
          </div>

          <div className="w-full md:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                    activeCategory === cat
                      ? 'bg-[#313AFF] text-white font-bold shadow-md shadow-[#313AFF]/30'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Vídeos com Capa Interativa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedVideo(project)}
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#313AFF]/60 hover:shadow-xl hover:shadow-[#313AFF]/20 transition duration-300 flex flex-col backdrop-blur-sm w-full h-full cursor-pointer group"
            >
              <div className="w-full aspect-video bg-black/60 relative shrink-0 flex items-center justify-center overflow-hidden">
                <iframe
                  src={project.embedUrl}
                  title={project.title}
                  className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                ></iframe>
                {/* Overlay com Botão de Play */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#313AFF] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-left">
                <span className="text-[11px] sm:text-xs font-bold text-[#313AFF] mb-2 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-base sm:text-xl font-bold mb-2 text-white group-hover:text-[#313AFF] transition">{project.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/5 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] sm:text-xs bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#313AFF] text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-3 backdrop-blur-sm shadow-lg hover:shadow-[#313AFF]/20 text-sm"
            >
              {showAll ? (
                <>
                  Mostrar Menos <ChevronUp className="w-5 h-5 text-[#313AFF]" />
                </>
              ) : (
                <>
                  Ver Todos os Vídeos ({filteredProjects.length}) <ChevronDown className="w-5 h-5 text-[#313AFF]" />
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* MODAL POP-UP PARA EXIBIÇÃO AMPLIADA DO VÍDEO */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-[#101011] border border-white/20 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div>
                <span className="text-xs font-bold text-[#313AFF] uppercase">{selectedVideo.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">{selectedVideo.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Container do Vídeo Expandido */}
            <div className="w-full aspect-video bg-black relative">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>

            {/* Footer do Modal */}
            <div className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-400 text-xs sm:text-sm">{selectedVideo.description}</p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#313AFF] hover:bg-[#252ccb] text-white font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Solicitar Vídeo Similar <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SOBRE MIM & HABILIDADES */}
      <section id="sobre" className="py-14 sm:py-20 px-4 sm:px-6 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Especialidades & Workflow</h2>
            <p className="text-slate-400 text-xs sm:text-base mb-6 leading-relaxed">
              Foco no ritmo do vídeo, design de som e elementos visuais animados que tornam o conteúdo interessante de assistir.
            </p>
            <div className="space-y-3">
              {[
                'Motion Design & Typography (After Effects)',
                'Corte Dinâmico & Montagem (Premiere Pro)',
                'Sound Design & Transições de Áudio',
                'Edição Vertical de Alta Retenção (Reels/TikTok)',
                'Color Grading & Correção de Cor'
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#313AFF] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Tem um projeto em mente?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Aberto para parcerias com criadores, produtoras, agências e trabalhos freelancers.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#313AFF] hover:bg-[#252ccb] text-white font-extrabold py-3.5 rounded-xl transition flex justify-center items-center gap-2 shadow-lg shadow-[#313AFF]/25 text-sm"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATO */}
      <footer id="contato" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 sm:gap-8 border-b border-white/10 pb-10 sm:pb-12 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Bora tirar o projeto do papel?</h2>
            <p className="text-slate-400 text-xs sm:text-base">Me manda uma mensagem para conversarmos sobre o seu vídeo.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center bg-[#313AFF] hover:bg-[#252ccb] text-white font-bold px-8 py-4 rounded-xl transition flex items-center gap-2 text-base sm:text-lg shadow-lg shadow-[#313AFF]/30"
          >
            <Send className="w-5 h-5 fill-white" /> Chamar no WhatsApp
          </a>
        </div>

        <div className="text-center text-slate-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}