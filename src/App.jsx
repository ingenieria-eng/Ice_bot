import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Bot, 
  Users, 
  Wrench, 
  MessageSquare, 
  Video, 
  Calendar, 
  Clock, 
  FileText, 
  Download, 
  Mail, 
  Eye, 
  Trash2, 
  Edit3,
  Snowflake,
  Send,
  PlusCircle,
  Sparkles,
  MoreVertical,
  AlertTriangle,
  CheckCircle2,
  Search,
  Target,
  Book,
  Hammer,
  ChevronDown,
  ChevronRight,
  Filter,
  UserPlus,
  Upload,
  X,
  Phone,
  Briefcase,
  Shield,
  Grid,
  Image as ImageIcon,
  Save,
  User, 
  Users2,
  RefreshCw,
  BarChart2,
  PieChart,
  Activity,
  ArrowRight,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff
} from 'lucide-react';

// --- ESTILOS PERSONALIZADOS PARA ANIMACIONES ---
const CustomStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    @keyframes scaleUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-scale-up {
      animation: scaleUp 0.3s ease-out forwards;
    }
    .animate-spin-slow {
      animation: spin 12s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #cbd5e1;
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #94a3b8;
    }
  `}</style>
);

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [currentView, setCurrentView] = useState("landing");
  const [currentAssistant, setCurrentAssistant] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState("Herramientas ICE");

  const handleSearch = () => {
    setCurrentView("dashboard");
    setActiveSidebarItem("ICE BOT");
  };

  const navigateTo = (view, sidebarLabel, assistantType = null) => {
    setCurrentView(view);
    if (sidebarLabel) setActiveSidebarItem(sidebarLabel);
    if (assistantType) setCurrentAssistant(assistantType);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-slate-800 overflow-hidden">
      <CustomStyles />
      <Sidebar 
        activeItem={activeSidebarItem} 
        setActiveItem={setActiveSidebarItem}
        onNavigate={navigateTo}
      />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'landing' && <LandingView onSearch={handleSearch} onNavigate={navigateTo} />}
        {currentView === 'contacts' && <CentroContactosView />}
        {currentView === 'assistant' && <AssistantView type={currentAssistant} />}
        {currentView === 'session' && <IceSessionView />} 
      </main>
    </div>
  );
}

// --- VISTA 5: SESIÓN ICE (DETALLE REUNIÓN) ---
function IceSessionView() {
  const participants = ["Diana", "José", "Manuel", "Carlos", "Ana", "Luis"];
  const meetParticipants = ['Diana', 'Carlos', 'Ana', 'Jose', 'Luis', 'Maria', 'Pedro', 'Sofia', 'Tu'];
  
  // Colores típicos de Google Meet (más suaves/flat)
  const avatarColors = [
    "bg-red-600", "bg-blue-600", "bg-emerald-600", 
    "bg-amber-600", "bg-purple-600", "bg-pink-600", 
    "bg-indigo-600", "bg-teal-600", "bg-orange-600"
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50 custom-scrollbar">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Panel Principal de Texto y Video */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in-up">
          <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide flex items-center gap-2 border-b border-slate-100 pb-4">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Sesión ICE | GEN+ | Estructuras | Reunión de Avance
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            
            {/* Columna de Texto */}
            <div className="lg:col-span-2 text-sm text-slate-600 space-y-6 leading-relaxed">
              
              {/* Descripción General */}
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-base">
                  <FileText size={18} className="text-blue-600" /> Descripción General
                </h4>
                <p className="text-justify">
                  La sesión se centró en revisar el estado actual del modelo, validar los avances de cada disciplina y acordar ajustes necesarios para la siguiente iteración. Se discutieron interferencias críticas, observaciones pendientes y la calidad de los entregables recientes. El equipo mantuvo un enfoque colaborativo orientado a reducir retrabajos y asegurar la coherencia multidisciplinaria del proyecto.
                </p>
              </div>

              {/* 1. Estado del Modelo */}
              <div>
                 <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-base">
                  <Search size={18} className="text-blue-600" /> 1. Estado del Modelo
                </h4>
                <p className="text-justify mb-4">
                  El modelo se encuentra actualizado con los aportes de las principales disciplinas. Se evidenció una mejora en la consistencia general, aunque permanecen áreas que requieren ajustes antes de avanzar a una federación final.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
                  <p className="font-bold text-xs text-slate-700 mb-2 uppercase tracking-wide">Puntos Clave:</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-1 text-slate-700 font-medium">
                    <li>Actualizaciones recientes integradas correctamente.</li>
                    <li>Se identifican zonas con geometría pendiente de revisión.</li>
                    <li>Revisión positiva del cumplimiento de criterios estructurales.</li>
                  </ul>
                </div>

                <div className="flex gap-3 pl-4 border-l-4 border-blue-500 bg-blue-50/50 p-3 rounded-r-lg items-start">
                  <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <p className="italic text-slate-700 font-medium">
                    "El modelo está progresando bien, pero aún requiere correcciones estratégicas antes del próximo hito."
                  </p>
                </div>
              </div>

              {/* 2. Observaciones Relevantes */}
              <div>
                <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-base">
                  <AlertTriangle size={18} className="text-amber-500" /> 2. Observaciones Relevantes
                </h4>
                <p className="text-justify">
                  Se detectaron interferencias entre estructuras y MEP, así como elementos que requieren ajustes en parámetros, alineamientos y detalles constructivos. Estas observaciones deben ser resueltas para garantizar la continuidad del flujo de trabajo y evitar retrasos en la etapa de construcción.
                </p>
              </div>
            </div>

            {/* Columna Derecha (Video Grid y Metadata) */}
            <div className="space-y-4">
              {/* Simulador de Video Call Grid - REALISTA (INICIALES) */}
              <div className="relative rounded-xl overflow-hidden bg-[#202124] aspect-video group cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-[#3c4043]">
                
                {/* Grid de participantes (Google Meet Style) */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-0.5">
                   {meetParticipants.map((name, i) => (
                     <div key={i} className="bg-[#3c4043] relative flex items-center justify-center">
                        
                        {/* Avatar Circular con Inicial */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-xs shadow-sm ${avatarColors[i]}`}>
                          {name.charAt(0)}
                        </div>
                        
                        {/* Nombre del participante */}
                        <div className="absolute bottom-1 left-1 text-[8px] text-white font-medium tracking-wide px-1">
                          {name}
                        </div>

                        {/* Indicador de Micrófono */}
                        <div className="absolute top-1 right-1 p-0.5 rounded-full bg-[#202124]/50">
                           {i % 3 === 0 ? <MicOff size={8} className="text-red-400" /> : <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
                        </div>
                     </div>
                   ))}
                </div>

                {/* Controles de llamada superpuestos */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#202124]/90 px-3 py-1.5 rounded-full border border-[#5f6368] shadow-2xl z-10 items-center">
                   <div className="p-1.5 rounded-full bg-[#3c4043] hover:bg-[#5f6368] text-white transition-colors cursor-pointer"><Mic size={14} /></div>
                   <div className="p-1.5 rounded-full bg-[#3c4043] hover:bg-[#5f6368] text-white transition-colors cursor-pointer"><VideoIcon size={14} /></div>
                   <div className="p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer px-3 flex items-center justify-center"><PhoneOff size={14} /></div>
                </div>
              </div>

              <div className="space-y-2 text-sm font-medium">
                <div className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-2 bg-white shadow-sm">
                  <span className="flex items-center gap-2 text-slate-500"><Calendar size={16} className="text-blue-500"/> Fecha</span>
                  <span className="font-semibold text-slate-700">10/12</span>
                </div>
                <div className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-2 bg-white shadow-sm">
                  <span className="flex items-center gap-2 text-slate-500"><Clock size={16} className="text-blue-500"/> Duración</span>
                  <span className="font-semibold text-slate-700">1 h 30 min</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                <h3 className="font-bold text-sm mb-3 text-slate-700">Involucrados</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {participants.map((name, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm group cursor-pointer p-1.5 hover:bg-slate-50 rounded transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-[1px] flex-shrink-0">
                         <img src={`https://i.pravatar.cc/150?u=${i+30}`} alt="avatar" className="rounded-full bg-white w-full h-full object-cover" />
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Puntos Clave */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Puntos Clave o Acuerdos de la Sesión</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <KeyPointCard 
              title="Resolver incompatibilidad de estructuras"
              assignedTo={["José"]}
              content="En la reunión se detectó incompatibilidades en la especialidad de estructuras con respecto al diseño y lo que observa en el modelamiento BIM."
            />
            <KeyPointCard 
              title="Actualización de planos de detalle"
              assignedTo={["Manuel"]}
              content="El especialista comentó que los planos deben ser actualizados debido a que la información cargada en el CDE es de una versión antigua."
            />
            <KeyPointCard 
              title="Actualización de modelo federado"
              assignedTo={["Diana", "Carlos"]}
              content="Se observó que la especialidad de geotecnia presenta avances en el plano pero esto no se refleja en el modelo por lo que deben actualizar el modelo federado."
            />
          </div>
        </div>

        {/* Métricas ICE */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Snowflake size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Métricas ICE de la Sesión</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 rounded-lg">
                <tr>
                  <th className="py-3 px-4 w-1/5 rounded-l-lg">Métrica</th>
                  <th className="py-3 px-4 w-2/5">Objetivos de Producción</th>
                  <th className="py-3 px-4 w-1/5">Valor</th>
                  <th className="py-3 px-4 w-1/5 text-right rounded-r-lg">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <MetricRow 
                  label="Issues resueltos"
                  goal="Haber logrado más del 90% de la validación de las consultas y propuestas utilizando el modelo BIM"
                  value="6/10 Issues"
                  percentage={60}
                  status="Aceptable"
                  color="yellow"
                />
                <MetricRow 
                  label="Tiempo Efectivo"
                  goal='"Lograr que el 80% del tiempo de la reunión se use en tratar puntos técnicos o decisiones."'
                  value="Sesión ICE"
                  percentage={70}
                  status="Aceptable"
                  color="yellow"
                />
                <MetricRow 
                  label="Participación activa"
                  goal='"Obtener ≥ 75% de participación activa (intervenciones relevantes por parte del equipo)."'
                  value="82% Comunicación"
                  percentage={82}
                  status="Bueno"
                  color="green"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <h3 className="text-lg font-bold text-slate-800 pl-2 border-l-4 border-blue-500 ml-2">Acta de Reunión</h3>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all text-sm font-semibold text-slate-700 shadow-sm">
              Vista Previa <Eye size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all text-sm font-semibold text-slate-700 shadow-sm">
              Descargar <Download size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white border border-transparent rounded-lg hover:bg-slate-800 transition-all text-sm font-semibold shadow-md">
              Enviar vía Gmail <Mail size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- VISTA 1: LANDING ---
function LandingView({ onSearch, onNavigate }) {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => { if (e.key === 'Enter' && inputValue.trim()) onSearch(); };
  const handleSendClick = () => { if (inputValue.trim()) onSearch(); };

  return (
    <div className="flex-1 flex flex-col h-full relative bg-gradient-to-b from-white to-blue-50/30">
       <header className="px-8 py-6 bg-white/80 backdrop-blur-sm border-b border-slate-100 flex justify-between items-center flex-shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-3"><div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600"><Sparkles size={18} /></div><div><h2 className="text-blue-700 font-bold text-lg leading-none">AGENTE BIM - ICEBOT</h2><p className="text-slate-400 text-xs mt-1">Analiza, mide y mejora tus sesiones ICE</p></div></div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors text-sm font-medium"><PlusCircle size={16} /> Nuevo chat</button>
      </header>
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 pb-32 custom-scrollbar">
         <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8">
            <div className="relative w-44 h-44 flex items-center justify-center mt-4">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_0_0_30px_rgba(0,255,255,0.4)] bg-slate-900 border border-white/20 ring-1 ring-cyan-400/30">
                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,#0284c7_90deg,transparent_180deg,#22d3ee_270deg,transparent_360deg)] animate-spin opacity-80 blur-md" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-0 left-0 w-full h-full animate-spin" style={{ animationDuration: '6s' }}>
                  <div className="absolute top-[-10%] left-[10%] w-[90%] h-[90%] bg-cyan-400 rounded-full blur-xl opacity-70 mix-blend-screen animate-pulse"></div>
                  <div className="absolute bottom-[-10%] right-[10%] w-[80%] h-[80%] bg-blue-700 rounded-full blur-xl opacity-80 mix-blend-hard-light animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-[35%] left-[35%] w-[30%] h-[30%] bg-white rounded-full blur-lg opacity-90 mix-blend-overlay"></div>
                </div>
                <div className="absolute inset-[10%] border-t-2 border-r-2 border-cyan-200/50 rounded-full blur-[1px] animate-spin opacity-60" style={{ animationDuration: '5s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-[8%] left-[15%] w-[45%] h-[30%] bg-gradient-to-b from-white to-transparent rounded-[100%] blur-sm opacity-60 -rotate-12"></div>
              </div>
              <div className="absolute inset-[-30px] animate-spin-slow pointer-events-none"><div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-[0.5px] shadow-[0_0_8px_cyan]"></div><div className="absolute bottom-1/4 right-0 w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_5px_white]"></div><div className="absolute top-1/3 left-0 w-1 h-1 bg-white/90 rounded-full"></div></div>
            </div>
            <div className="space-y-4 max-w-3xl relative z-10 -mt-2">
               <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 tracking-tight pb-2 drop-shadow-sm">¡Hola!, soy el agente ICE BOT</h1>
               <p className="text-slate-500 text-lg leading-relaxed px-4 font-medium">Asistente experto en sesiones ICE: analizo, mido y optimizo tus reuniones BIM con métricas automáticas, tareas inteligentes y procesos totalmente automatizados.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 pt-4">
               <SuggestionCard color="bg-green-400 shadow-green-200" title="Centro de contactos" subtitle="Involucrados del proyecto" onClick={() => onNavigate('contacts', 'Herramientas ICE')} />
               <SuggestionCard color="bg-orange-400 shadow-orange-200" title="Base de datos" subtitle="Información del proyecto" />
               <SuggestionCard color="bg-pink-400 shadow-pink-200" title="Procesa tus sesiones" subtitle="Sesiones ICE" />
               <SuggestionCard color="bg-indigo-400 shadow-indigo-200" title="Analiza tus métricas" subtitle="Dashboard de sesiones" onClick={() => onNavigate('dashboard', 'Dashboard')} />
            </div>
         </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center z-20">
        <div className="w-full max-w-3xl relative shadow-xl rounded-2xl group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
          <div className="relative bg-white rounded-2xl flex items-center">
            <input type="text" placeholder='Ejemplo: "¿Cómo optimizar la coordinación de estructuras?"' className="w-full p-4 pr-16 rounded-2xl border-0 focus:ring-0 text-slate-700 placeholder:text-slate-400 bg-transparent text-lg" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={handleSendClick} className="absolute right-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"><Send size={20} className="ml-0.5" /></button>
          </div>
        </div>
        <div className="mt-4 text-xs font-bold text-slate-400 flex items-center gap-1">By <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">GEN+</span></div>
      </div>
    </div>
  );
}

// --- VISTA 2: DASHBOARD (GRÁFICAS) ---
const metricsData = [
  { id: "OP.I.1", label: "Participación Clave", purpose: "Aumentar la participación clave en sesiones ICE", desc: "Reducir retrabajos mediante decisiones oportunas", value: "90%", goal: "95%", status: "Aceptable", color: "yellow", factors: [ { name: "Enviar agenda 24h antes", metric: "Horas de anticipación", goal: "≥24h", freq: "Semanal" }, { name: "Confirmación de asistentes", metric: "% confirmación", goal: "95%", freq: "Semanal" } ] },
  { id: "OP.I.2", label: "Latencia de Consultas", purpose: "Minimizar la latencia de absolución de consultas", desc: "Mantener sincronización del modelo BIM", value: "4 días", goal: "7 días", status: "Bueno", color: "green", factors: [ { name: "Priorización diaria de RFIs", metric: "RFIs atendidos/día", goal: "≥3", freq: "Diaria" }, { name: "Resumen de incompatibilidades", metric: "% resúmenes emitidos", goal: "100%", freq: "Semanal" } ] },
  { id: "OP.I.3", label: "Asistencia Efectiva", purpose: "Mantener asistencia mínima del 90% en sesiones ICE", desc: "Garantizar presencia de especialistas clave", value: "88%", goal: "90%", status: "Medio", color: "orange", factors: [ { name: "Recordatorio automático", metric: "Notificaciones enviadas", goal: "100%", freq: "Semanal" }, { name: "Reemplazos designados", metric: "% roles cubiertos", goal: "100%", freq: "Semanal" } ] },
  { id: "OP.I.4", label: "Claridad de Decisiones", purpose: "Aumentar la claridad de decisiones", desc: "Reducir ambigüedad y reprocesos posteriores", value: "79%", goal: "85%", status: "Aceptable", color: "yellow", factors: [ { name: "Acta emitida en 24h", metric: "Tiempo publicación acta", goal: "≤24h", freq: "Semanal" }, { name: "Uso de formato estándar", metric: "% cumplimiento", goal: "95%", freq: "Semanal" } ] },
  { id: "OP.I.5", label: "Issues Resueltos", purpose: "Incrementar el porcentaje de issues resueltos", desc: "Mejorar el avance coordinado del modelo BIM", value: "76%", goal: "85%", status: "Medio", color: "orange", factors: [ { name: "Priorización por criticidad", metric: "% issues críticos atendidos", goal: "100%", freq: "Semanal" }, { name: "Seguimiento diario", metric: "Issues revisados", goal: "≥10/día", freq: "Diaria" } ] },
  { id: "OP.I.6", label: "Cumplimiento Entregables", purpose: "Elevar el cumplimiento de entregables semanales", desc: "Asegurar flujo continuo de información", value: "77%", goal: "90%", status: "Medio", color: "orange", factors: [ { name: "Lista de entregables actualizada", metric: "% actualización", goal: "100%", freq: "Semanal" }, { name: "Revisión cruzada", metric: "Nº entregables revisados", goal: "≥5", freq: "Semanal" } ] },
  { id: "OP.I.7", label: "Tiempo Resolución", purpose: "Reducir el tiempo de resolución de tareas", desc: "Aumentar agilidad operativa", value: "8.5h", goal: "6h", status: "Aceptable", color: "yellow", factors: [ { name: "Daily de sincronización", metric: "Nº reuniones", goal: "5/semana", freq: "Semanal" }, { name: "Pipeline de tareas", metric: "% tareas clasificadas", goal: "100%", freq: "Semanal" } ] },
  { id: "OP.I.8", label: "Anticipación Info", purpose: "Aumentar la anticipación de información", desc: "Evitar retrasos por falta de insumos", value: "2.3 días", goal: "2 días", status: "Bueno", color: "green", factors: [ { name: "Solicitud anticipada", metric: "Notificaciones enviadas", goal: "100%", freq: "Semanal" }, { name: "Control de entregas", metric: "% entregas a tiempo", goal: "≥95%", freq: "Semanal" } ] },
  { id: "OP.I.9", label: "Reducción Retrabajo", purpose: "Reducir retrabajo semanal", desc: "Mejorar calidad en origen", value: "7", goal: "5", status: "Medio", color: "orange", factors: [ { name: "Plantillas validadas", metric: "% uso de plantillas", goal: "100%", freq: "Semanal" }, { name: "Auditoría exprés", metric: "Nº revisiones", goal: "≥3/semana", freq: "Semanal" } ] },
  { id: "OP.I.10", label: "Velocidad Cierre", purpose: "Incrementar velocidad de cierre de decisiones", desc: "Acelerar avance de modelado y documentación", value: "82", goal: "90", status: "Aceptable", color: "yellow", factors: [ { name: "Clasificación de decisiones", metric: "% decisiones clasificadas", goal: "100%", freq: "Semanal" }, { name: "Semáforo de bloqueos", metric: "Nº bloqueos activos", goal: "≤2", freq: "Semanal" } ] }
];

const getChartDataForMetric = (metricId) => {
  switch(metricId) {
    case "OP.I.1": return [75, 80, 85, 88, 87, 90, 92, 88, 94, 96, 91, 98, 95, 93, 94, 96, 94, 93, 95, 92];
    case "OP.I.2": return [10, 9, 8, 7, 7, 6, 6, 5, 6, 6, 5, 4, 5, 5, 4, 3, 3, 3, 3, 3];
    case "OP.I.3": return [85, 88, 90, 89, 92, 91, 93, 88, 85, 89, 94, 95, 92, 90, 89, 91, 93, 90, 88, 89];
    case "OP.I.4": return [60, 65, 62, 68, 70, 72, 75, 74, 78, 80, 82, 81, 85, 84, 83, 85, 86, 88, 87, 79];
    case "OP.I.5": return [50, 55, 60, 58, 65, 70, 68, 72, 75, 74, 78, 80, 75, 77, 79, 80, 82, 81, 78, 76];
    case "OP.I.6": return [70, 72, 75, 80, 78, 85, 82, 88, 85, 90, 88, 92, 90, 85, 80, 85, 88, 89, 85, 77];
    case "OP.I.7": return [12, 11, 10, 10.5, 9, 8.5, 9, 8, 7.5, 7, 8, 7.5, 7, 6.5, 7, 6, 6.5, 6, 7, 8.5];
    case "OP.I.8": return [2, 2, 2, 3, 2.5, 2, 2.7, 2, 2, 2, 2.2, 2, 3, 2.1, 2, 2, 2, 2, 2.05, 2];
    case "OP.I.9": return [15, 14, 12, 10, 9, 8, 9, 8, 7, 6, 6, 5, 5, 4, 5, 6, 7, 6, 5, 7];
    case "OP.I.10": return [60, 65, 70, 75, 72, 78, 80, 82, 85, 84, 88, 90, 89, 92, 91, 93, 90, 88, 85, 82];
    default: return Array(20).fill(0).map(() => Math.floor(Math.random() * 100));
  }
};

function DashboardView() {
  const [selectedMetricId, setSelectedMetricId] = useState("OP.I.1");
  const selectedMetric = metricsData.find(m => m.id === selectedMetricId) || metricsData[0];
  const chartData = getChartDataForMetric(selectedMetricId);
  const parseGoal = (goalStr) => { const num = parseFloat(goalStr.replace(/[^0-9.]/g, '')); return isNaN(num) ? 0 : num; };
  const goalValue = parseGoal(selectedMetric.goal);
  const maxValue = Math.max(...chartData, goalValue) * 1.1;
  const goalPercentPosition = (goalValue / maxValue) * 100;
  const getStatusColor = (status) => {
    switch(status) {
      case 'Bueno': return 'bg-emerald-500 text-white border-emerald-600';
      case 'Aceptable': return 'bg-yellow-400 text-yellow-900 border-yellow-500';
      case 'Medio': return 'bg-orange-500 text-white border-orange-600';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-slate-50 custom-scrollbar">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><LayoutDashboard className="text-blue-600" />Dashboard BIM | ICE</h2>
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="w-full lg:w-64 flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-slate-200 h-fit">
          <h3 className="font-bold text-slate-700 mb-2 border-b pb-2">Métricas ICE</h3>
          {metricsData.map((metric) => (
            <button key={metric.id} onClick={() => setSelectedMetricId(metric.id)} className={`text-left px-4 py-3 rounded-lg text-xs font-medium transition-all border shadow-sm ${selectedMetricId === metric.id ? 'bg-blue-100 border-blue-400 text-blue-800 translate-x-1 font-bold' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}>{metric.label}</button>
          ))}
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
            <div className="flex-1"><h3 className="text-xl font-bold text-slate-900">{selectedMetric.label}</h3><p className="text-sm text-slate-600 mt-1 italic">"{selectedMetric.purpose}"</p><p className="text-xs text-slate-400 mt-0.5">{selectedMetric.desc}</p></div>
            <div className="flex items-center gap-6 text-right">
              <div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Valor</div><div className="text-2xl font-bold text-slate-800">{selectedMetric.value}</div></div>
              <div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Meta</div><div className="text-2xl font-bold text-blue-600">{selectedMetric.goal}</div></div>
              <div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Estado</div><span className={`px-4 py-1 rounded-full text-xs font-bold border shadow-sm ${getStatusColor(selectedMetric.status)}`}>{selectedMetric.status}</span></div>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <div className="flex justify-between items-center mb-3">
               <div className="flex gap-2"><span className="px-3 py-1 bg-white border border-slate-300 rounded text-xs font-bold text-slate-700 shadow-sm">Tiempo | 20 semanas</span><span className="px-3 py-1 bg-white border border-slate-300 rounded text-xs font-bold text-slate-700 shadow-sm">Gráfica | Barras</span></div>
               <div className="flex gap-4 text-xs font-medium"><div className="flex items-center gap-1.5"><div className="w-4 h-2 bg-red-500/80 border border-red-600 border-dashed"></div> Valor Meta</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-sky-400 rounded-sm"></div> Métrica</div></div>
            </div>
            <div className="h-72 w-full bg-white rounded-lg border border-slate-200 relative flex items-end justify-between px-6 pb-8 pt-8">
               <div className="absolute inset-0 flex flex-col justify-between px-6 pb-8 pt-8 pointer-events-none">{[...Array(6)].map((_, i) => <div key={i} className="w-full border-t border-slate-100 h-0"></div>)}</div>
               <div className="absolute left-6 right-6 border-t-2 border-dashed border-red-500 z-10 transition-all duration-500" style={{ bottom: `calc(${goalPercentPosition}% + 2rem)` }}><span className="absolute right-0 -top-6 text-[10px] text-red-500 font-bold bg-white px-1">Meta: {selectedMetric.goal}</span></div>
               {chartData.map((val, i) => {
                 const heightPercent = (val / maxValue) * 100;
                 return (
                   <div key={i} className="flex flex-col items-center gap-1 w-full mx-0.5 group relative h-full justify-end">
                      <div className="w-full max-w-[20px] bg-sky-400 hover:bg-sky-500 transition-all rounded-t-sm relative shadow-sm" style={{ height: `${heightPercent}%` }}><div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-lg">Sem {i + 1}: {val}</div></div>
                      <span className="text-[9px] text-slate-400 font-medium absolute -bottom-6">{i + 1}</span>
                   </div>
                 )
               })}
               <div className="absolute bottom-1 left-0 right-0 text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">Semanas</div>
               <div className="absolute left-1 top-8 bottom-8 flex flex-col justify-between text-[9px] text-slate-400 font-medium h-full"><span>{Math.round(maxValue)}</span><span>{Math.round(maxValue * 0.5)}</span><span>0</span></div>
            </div>
          </div>
          <div className="mt-auto">
            <h4 className="text-sm font-bold text-slate-800 mb-4 pl-2 border-l-4 border-slate-800">Factores Controlables Recomendados</h4>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left border-collapse">
                <thead><tr className="bg-slate-50 border-b border-slate-200"><th className="py-3 px-4 text-xs font-bold text-slate-700 uppercase">Factor Controlable</th><th className="py-3 px-4 text-xs font-bold text-slate-700 uppercase">Métrica</th><th className="py-3 px-4 text-xs font-bold text-slate-700 uppercase">Valor Meta</th><th className="py-3 px-4 text-xs font-bold text-slate-700 uppercase">Frecuencia</th></tr></thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {selectedMetric.factors.map((factor, idx) => (<tr key={idx} className="hover:bg-slate-50 transition-colors"><td className="py-3 px-4 font-medium text-slate-800">{factor.name}</td><td className="py-3 px-4 text-slate-600">{factor.metric}</td><td className="py-3 px-4 text-slate-800 font-bold">{factor.goal}</td><td className="py-3 px-4 text-slate-500">{factor.freq}</td></tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center relative overflow-hidden">
           <h4 className="text-sm font-bold text-slate-700 mb-6 absolute top-6 left-6">Distribución Global del Estado</h4>
           <div className="relative w-48 h-48 mt-8 mb-4">
              <div className="w-full h-full rounded-full" style={{ background: `conic-gradient(#0ea5e9 0% 30%, #10b981 30% 50%, #facc15 50% 65%, #f97316 65% 100%)` }}></div>
              <div className="absolute top-8 left-8 right-8 bottom-8 bg-white rounded-full z-10 flex items-center justify-center flex-col"><span className="text-4xl font-bold text-slate-800">85%</span><span className="text-xs text-slate-400 font-medium text-center px-4">Cumplimiento Total</span></div>
           </div>
           <div className="flex flex-wrap gap-4 justify-center text-xs font-medium w-full px-4"><span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div> Bueno</span><span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Excelente</span><span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div> Regular</span><span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div> Crítico</span></div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
           <h4 className="text-sm font-bold text-slate-700 mb-4">Promedio Global (20 sem)</h4>
           <div className="space-y-4">
              {[{ label: "Cumplimiento entregables", val: 90, c: "bg-amber-500" }, { label: "Claridad de decisiones", val: 85, c: "bg-amber-500" }, { label: "Participación", val: 95, c: "bg-amber-500" }, { label: "Issues resueltos", val: 76, c: "bg-amber-500" }, { label: "Agenda", val: 92, c: "bg-amber-500" }].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs group"><div className="w-36 text-right text-slate-600 font-medium truncate" title={item.label}>{item.label}</div><div className="flex-1 bg-slate-100 rounded-sm h-5 relative"><div className={`h-full rounded-sm ${item.c} transition-all duration-500`} style={{ width: `${item.val}%` }}></div></div><div className="w-8 text-slate-700 font-bold">{item.val}%</div></div>
              ))}
           </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 pb-8">
         <h4 className="text-sm font-bold text-slate-700 mb-4">Tendencia General de Métricas ICE (Escalas Ajustadas)</h4>
         <div className="h-64 w-full relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">{[...Array(5)].map((_, i) => <div key={i} className="border-t border-slate-100 w-full h-0"></div>)}</div>
            <div className="absolute inset-0 flex justify-between pointer-events-none">{[...Array(10)].map((_, i) => <div key={i} className="border-r border-slate-100 h-full w-0"></div>)}</div>
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
               <polyline points="0,80 10,75 20,70 30,65 40,60 50,55 60,50 70,45 80,40 90,35 100,30" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
               <polyline points="0,90 15,80 25,60 35,85 45,70 55,60 65,90 75,30 85,60 95,70 100,70" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
               <polyline points="0,95 20,85 40,80 60,70 80,65 100,60" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
               <polyline points="0,70 10,65 30,55 50,45 70,40 90,35 100,32" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-slate-400"><span>2.5</span><span>5.0</span><span>7.5</span><span>10.0</span><span>12.5</span><span>15.0</span><span>17.5</span><span>20.0</span></div>
            <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 h-full"><span>100</span><span>80</span><span>60</span><span>40</span><span>20</span></div>
         </div>
      </div>
    </div>
  );
}

// --- VISTA 3: CENTRO DE CONTACTOS ---
function CentroContactosView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("matrix");
  const contacts = [
    { id: 1, name: "Diana White", role: "BIM Manager", spec: "Equipo BIM", email: "diana.white@genplus.com", phone: "+51 984 567 823", company: "GEN+", added: "11/07/2025", permission: "Admin", img: "https://i.pravatar.cc/150?u=30" },
    { id: 2, name: "Samuel Rocker", role: "Coordinador BIM", spec: "Equipo BIM", email: "sam.rocker@genplus.com", phone: "+51 984 555 123", company: "GEN+", added: "11/07/2025", permission: "Admin", img: "https://i.pravatar.cc/150?u=33" },
    { id: 3, name: "Robert Sams", role: "Coordinador MEP", spec: "Equipo BIM", email: "r.sams@genplus.com", phone: "+51 984 111 222", company: "GEN+", added: "12/07/2025", permission: "Admin", img: "https://i.pravatar.cc/150?u=12" },
    { id: 4, name: "Elena Torres", role: "Modelador ARQ", spec: "Arquitectura", email: "e.torres@design.com", phone: "+51 999 888 777", company: "DesignCo", added: "15/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=44" },
    { id: 5, name: "Carlos Ruiz", role: "Modelador EST", spec: "Estructuras", email: "c.ruiz@buildit.com", phone: "+51 955 444 333", company: "BuildIt", added: "15/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=55" },
    { id: 6, name: "Ana Polo", role: "Ingeniero Civil", spec: "Estructuras", email: "a.polo@buildit.com", phone: "+51 922 333 444", company: "BuildIt", added: "16/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=21" },
    { id: 7, name: "Luis Meza", role: "Especialista SAN", spec: "Sanitarias", email: "l.meza@mepcorp.com", phone: "+51 911 222 333", company: "MEP Corp", added: "18/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=68" },
    { id: 8, name: "Sofia Chen", role: "BIM Coordinator", spec: "Coordinación", email: "s.chen@genplus.com", phone: "+51 977 666 555", company: "GEN+", added: "20/07/2025", permission: "Admin", img: "https://i.pravatar.cc/150?u=25" },
    { id: 9, name: "Jorge Solis", role: "Arquitecto", spec: "Arquitectura", email: "j.solis@design.com", phone: "+51 988 777 666", company: "DesignCo", added: "21/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=15" },
    { id: 10, name: "Maria Vega", role: "Modelador MEP", spec: "Sanitarias", email: "m.vega@mepcorp.com", phone: "+51 933 222 111", company: "MEP Corp", added: "22/07/2025", permission: "Member", img: "https://i.pravatar.cc/150?u=19" },
    { id: 11, name: "Pedro Alva", role: "Revisor", spec: "Calidad", email: "p.alva@check.com", phone: "+51 944 555 666", company: "CheckQC", added: "25/07/2025", permission: "Guest", img: "https://i.pravatar.cc/150?u=59" },
  ];
  const getMember = (id) => contacts.find(c => c.id === id) || contacts[0];
  const groups = [
    { id: 1, title: "GRUPO Nº1 | INCIDENCIA #007", members: [1, 2, 4, 5, 3, 6] },
    { id: 2, title: "GRUPO Nº2 | COORDINACIÓN MEP", members: [3, 7, 10, 8] },
    { id: 3, title: "GRUPO Nº3 | REVISIÓN ESTRUCTURAL", members: [5, 6, 1, 2, 9] },
    { id: 4, title: "GRUPO Nº4 | EQUIPO DE DISEÑO", members: [4, 9, 8, 1, 11] },
    { id: 5, title: "GRUPO Nº5 | VALIDACIÓN BIM", members: [1, 2, 3, 8] },
    { id: 6, title: "GRUPO Nº6 | SUB. SANITARIAS", members: [7, 10, 3] },
    { id: 7, title: "GRUPO Nº7 | CONTROL DE CALIDAD", members: [11, 1, 2, 8, 5] },
    { id: 8, title: "GRUPO Nº8 | INCIDENCIA #015", members: [4, 6, 7, 2] },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-100 relative">
       <div className="bg-blue-700 text-white px-8 py-4 flex items-center justify-between shadow-md shrink-0"><h1 className="text-xl font-bold tracking-wider uppercase">Centro de Contactos</h1><div className="w-12 h-1 bg-red-500 transform -skew-x-12"></div></div>
      <div className="flex-1 overflow-hidden p-6 flex flex-col">
         <div className="bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
            <div className="border-b border-slate-200 shrink-0">
               <div className="flex items-center px-6 pt-4 gap-6">
                  <button onClick={() => setActiveTab("matrix")} className={`pb-3 border-b-2 font-bold text-sm uppercase tracking-wide transition-colors ${activeTab === 'matrix' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>Matriz de Contactos</button>
                  <button onClick={() => setActiveTab("groups")} className={`pb-3 border-b-2 font-bold text-sm uppercase tracking-wide transition-colors ${activeTab === 'groups' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>Grupos de Trabajo</button>
               </div>
               <div className="bg-slate-50 px-6 py-3 flex justify-between items-center border-t border-slate-100">
                  <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-1.5 rounded hover:bg-slate-50 text-sm font-medium shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600"><PlusCircle size={16} className="text-blue-600" /> Añadir</button>
                  {activeTab === 'matrix' && (<div className="flex gap-3"><button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-1.5 rounded hover:bg-slate-50 text-sm font-medium shadow-sm transition-colors"><Upload size={16} /> Importar</button><button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-1.5 rounded hover:bg-slate-50 text-sm font-medium shadow-sm transition-colors"><Trash2 size={16} /> Eliminar Miembros</button></div>)}
               </div>
            </div>
            <div className="flex-1 overflow-auto bg-slate-50 custom-scrollbar p-6">
               {activeTab === 'matrix' ? (
                 <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-blue-700 text-white sticky top-0 z-10 shadow-sm">
                        <tr><TableHeader label="Nombres" /><TableHeader label="Especialidad" /><TableHeader label="Roles" /><TableHeader label="Correo de Contacto" /><TableHeader label="Número de Celular" /><TableHeader label="Empresa" /><TableHeader label="Added On" /><TableHeader label="Permisos" /><th className="p-3 w-10"></th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {contacts.map((contact) => (
                          <tr key={contact.id} className="hover:bg-blue-50/50 transition-colors group">
                            <td className="p-3"><div className="flex items-center gap-3"><img src={contact.img} alt={contact.name} className="w-9 h-9 rounded-full border border-slate-200 object-cover" /><span className="font-semibold text-blue-600 text-sm">{contact.name}</span></div></td>
                            <td className="p-3 text-sm text-slate-600">{contact.spec}</td><td className="p-3 text-sm text-slate-600">{contact.role}</td><td className="p-3 text-sm text-slate-600 underline decoration-slate-300 cursor-pointer hover:text-blue-600">{contact.email}</td><td className="p-3 text-sm text-slate-600 whitespace-nowrap">{contact.phone}</td><td className="p-3 text-sm text-slate-600 font-medium">{contact.company}</td><td className="p-3 text-sm text-slate-500">{contact.added}</td><td className="p-3 text-sm text-slate-600">{contact.permission}</td><td className="p-3 text-center"><button className="text-slate-400 hover:text-blue-600 p-1 rounded hover:bg-slate-100"><Edit3 size={16} /></button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
                    {groups.map((group) => (
                      <div key={group.id} className="bg-white rounded-xl border-2 border-slate-800 p-1 flex flex-col hover:shadow-lg transition-shadow relative group-card">
                        <div className="flex justify-between items-start px-3 py-3 border-b border-slate-100 mb-2"><h3 className="font-bold text-sm text-slate-800 uppercase leading-tight pr-4">{group.title}</h3><button className="text-slate-800 hover:text-blue-600"><Edit3 size={16} /></button></div>
                        <div className="grid grid-cols-2 gap-2 px-2 pb-8">
                            {group.members.map((memberId, idx) => {
                                const member = getMember(memberId);
                                return (<div key={idx} className="flex items-center gap-2 p-1 rounded hover:bg-slate-50"><img src={member.img} alt="" className="w-7 h-7 rounded-full border border-slate-200" /><div className="flex flex-col overflow-hidden"><span className="text-[10px] font-bold text-blue-600 truncate leading-none">{member.name}</span><span className="text-[9px] text-slate-400 truncate leading-none mt-0.5">{member.spec}</span></div></div>);
                            })}
                        </div>
                        <button className="absolute bottom-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-full transition-colors"><Trash2 size={18} /></button>
                      </div>
                    ))}
                 </div>
               )}
            </div>
         </div>
      </div>
      {isModalOpen && <AddMemberModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// --- VISTA 4: ASISTENTE ESPECIALIZADO ---
function AssistantView({ type }) {
  const assistants = {
    BEP: { title: "BEP Assistant", subtitle: "Especialista en Plan de Ejecución BIM", welcome: "¡Hola! Soy BEP Assistant", description: "Soy tu asistente especializado en BEP. Puedo ayudarte con el Plan de Ejecución BIM, matriz de involucrados, asignación RACI y coordinación de especialidades.", icon: <Hammer size={32} className="text-yellow-500 fill-yellow-500/20" />, placeholder: "Pregunta sobre BEP, matriz RACI, stakeholders..." },
    TDR: { title: "TDR Assistant", subtitle: "Especialista en Términos de Referencia", welcome: "¡Hola! Soy TDR Assistant", description: "Soy tu asistente especializado en Términos de Referencia. Puedo ayudarte a redactar, revisar y validar los requisitos técnicos y alcances para tus proyectos de licitación.", icon: <FileText size={32} className="text-orange-400 fill-orange-400/20" />, placeholder: "Pregunta sobre alcances, entregables, normativas..." },
    VDC: { title: "VDC Assistant", subtitle: "Especialista en Virtual Design Construction", welcome: "¡Hola! Soy VDC Assistant", description: "Soy tu asistente especializado en VDC. Puedo ayudarte a optimizar flujos de trabajo, implementar métricas de producción, gestionar sesiones ICE y visualizar objetivos del proyecto.", icon: <Target size={32} className="text-pink-500 fill-pink-500/20" />, placeholder: "Pregunta sobre métricas, sesiones ICE, PPM..." }
  };
  const config = assistants[type] || assistants.BEP;
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
      <div className="flex items-center justify-between px-8 py-6 bg-white/5 backdrop-blur-sm border-b border-white/10 shrink-0 z-10">
        <div className="flex items-center gap-4"><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 shadow-inner">{config.icon}</div><div><h2 className="font-bold text-lg leading-tight">{config.title}</h2><p className="text-xs text-blue-200">{config.subtitle}</p></div></div>
        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors border border-white/10 flex items-center gap-2"><RefreshCw size={14} /> Limpiar Chat</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 overflow-y-auto custom-scrollbar">
        <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in-up">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center"><div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div><div className="relative w-full h-full bg-gradient-to-b from-slate-700/50 to-slate-900/50 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl"><div className="transform scale-150">{config.icon}</div></div></div>
          <div className="space-y-4"><h1 className="text-4xl font-bold tracking-tight">{config.welcome}</h1><p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto font-light">{config.description}</p></div>
        </div>
      </div>
      <div className="p-6 shrink-0 z-20 flex justify-center"><div className="w-full max-w-4xl relative"><input type="text" placeholder={config.placeholder} className="w-full py-4 pl-6 pr-32 bg-white rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-xl border-0" /><button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"><Send size={16} /> Enviar</button></div></div>
    </div>
  );
}

// --- AUXILIARIES MODIFICADOS ---
function AddMemberModal({ onClose }) { 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden animate-scale-up">
        
        {/* Header Modal */}
        <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Nuevo Usuario</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Foto */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 p-8 flex flex-col items-center justify-center text-center h-48 group hover:border-blue-400 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-400 mb-3 group-hover:text-blue-500">
                 <ImageIcon size={24} />
              </div>
              <span className="font-semibold text-slate-700 text-sm">Subir Foto</span>
              <span className="text-xs text-slate-400 mt-1">Formatos permitidos: JPG, PNG</span>
              <button className="mt-4 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded shadow-sm hover:bg-blue-700 transition-colors">
                Explorar
              </button>
            </div>

            <div className="flex justify-center">
               <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center">
                 {/* Icono Genérico solicitado */}
                 <User size={64} className="text-slate-300" />
               </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-left">
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Nombres <span className="text-red-500">(Required)</span></label>
              <input type="text" className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800 placeholder-slate-400" placeholder="Nombre completo" />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Email <span className="text-red-500">(Required)</span></label>
              <div className="relative">
                 <Mail size={16} className="absolute left-3 top-2.5 text-slate-400" />
                 <input type="email" className="w-full p-2 pl-9 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-slate-50 text-slate-800" defaultValue="DW@abc.in" />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Especialidad</label>
              <select className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800">
                <option>Equipo BIM</option>
                <option>Arquitectura</option>
                <option>Estructuras</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Roles</label>
              <select className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800">
                <option>BIM Manager</option>
                <option>Modelador</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Correo de Contacto</label>
              <input type="email" className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800" defaultValue="ana.white@genplusdesign.com" />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Número de Celular</label>
              <input type="text" className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800" defaultValue="+ 51 984 567 823" />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Empresa</label>
              <input type="text" className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800" defaultValue="GEN+" />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Added On</label>
              <div className="relative">
                 <input type="date" className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800" defaultValue="2025-07-11" />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Permisos</label>
              <select className="w-full p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-white text-slate-800">
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>

          </div>
        </div>

        {/* Footer Modal */}
        <div className="px-8 py-5 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 border border-slate-300 bg-white text-slate-700 font-semibold rounded hover:bg-slate-50 transition-colors text-sm shadow-sm">
            Cancelar
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-blue-800 text-white font-semibold rounded hover:bg-blue-900 transition-colors text-sm shadow-md flex items-center gap-2">
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
}

function SuggestionCard({ color, title, subtitle, onClick }) { return <div onClick={onClick} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all"><div className={`w-12 h-12 rounded-full ${color}`}></div><div><h4 className="font-bold text-slate-800 text-sm">{title}</h4><p className="text-slate-400 text-xs mt-1.5">{subtitle}</p></div></div>; }
function TableHeader({ label }) { return <th className="p-3 text-xs font-semibold uppercase tracking-wide border-r border-blue-600/30 last:border-r-0 whitespace-nowrap"><div className="flex items-center justify-between gap-2"><span>{label}</span><Filter size={12} className="opacity-70 hover:opacity-100 cursor-pointer" /></div></th>; }
function KeyPointCard({ title, assignedTo, content }) { return <div className="bg-white rounded-xl border border-slate-200 p-5 relative group hover:shadow-lg hover:border-blue-200 transition-all duration-300"><div className="flex justify-between items-start mb-3"><div className="flex gap-3"><div className="p-1.5 bg-slate-50 rounded text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors"><FileText size={18} /></div><h4 className="font-bold text-sm text-slate-800 leading-tight pr-6 pt-1">{title}</h4></div><button className="text-slate-300 hover:text-slate-500 transition-colors"><Edit3 size={16} /></button></div><div className="mb-4 text-xs text-slate-500 flex items-center gap-2 flex-wrap bg-slate-50 p-2 rounded-lg"><span className="font-medium">Asignado a:</span><div className="flex items-center gap-1">{assignedTo.map((person, idx) => (<span key={idx} className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm"><img src={`https://i.pravatar.cc/150?u=${idx+20}`} className="w-3.5 h-3.5 rounded-full" alt="" /><span className="text-blue-600 font-medium">{person}</span></span>))}</div></div><p className="text-sm text-slate-600 leading-relaxed mb-6">{content}</p><button className="absolute bottom-4 right-4 text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"><Trash2 size={18} /></button></div>; }
function MetricRow({ label, goal, value, percentage, status, color }) {
  const statusColors = { yellow: "bg-yellow-50 text-yellow-700 border-yellow-200", green: "bg-emerald-50 text-emerald-700 border-emerald-200", red: "bg-red-50 text-red-700 border-red-200" };
  const barColors = { yellow: "bg-yellow-400", green: "bg-emerald-500", red: "bg-red-500" };
  return (
    <tr className="hover:bg-slate-50/50 transition-colors"><td className="py-4 px-4 font-semibold text-slate-800 align-top">{label}</td><td className="py-4 px-4 text-slate-500 italic text-xs leading-relaxed align-top pr-8">{goal}</td><td className="py-4 px-4 align-middle"><div className="w-full max-w-[150px]"><div className="flex justify-between text-[10px] text-slate-400 mb-1 font-medium"><span>Progress</span><span>{percentage}%</span></div><div className="h-2.5 w-full bg-slate-100 rounded-full mb-1 overflow-hidden shadow-inner"><div className={`h-full rounded-full ${barColors[color] || 'bg-blue-500'} shadow-sm`} style={{ width: `${percentage}%` }}></div></div><span className="text-xs font-bold text-slate-700 block mt-1">{value}</span></div></td><td className="py-4 px-4 align-middle text-right"><span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${statusColors[color] || 'bg-gray-100'}`}>{status}</span></td></tr>
  );
}

function Sidebar({ activeItem, setActiveItem, onNavigate }) {
  const [expandedMenus, setExpandedMenus] = useState({ "Herramientas ICE": true, "Mis Asistentes": false });
  const toggleMenu = (label) => setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <aside className="w-64 bg-blue-950 text-white flex flex-col flex-shrink-0 z-30 shadow-2xl relative">
      <div className="p-6 border-b border-blue-800/50 cursor-pointer hover:bg-blue-900/50 transition-colors" onClick={() => onNavigate('landing')}><h1 className="text-2xl font-bold flex items-center gap-2"><Bot className="w-6 h-6" />ICEBOT</h1><p className="text-[10px] text-blue-300 mt-2 font-medium tracking-wide uppercase">Asistente ICE para Proyectos BIM</p></div>
      <nav className="flex-1 py-6 space-y-1 px-3 overflow-y-auto custom-scrollbar">
        <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeItem === "Dashboard"} onClick={() => onNavigate('dashboard', 'Dashboard')} />
        <div>
          <SidebarItem icon={<Users size={20} />} label="Mis Asistentes" hasSubmenu expanded={expandedMenus["Mis Asistentes"]} onClick={() => toggleMenu("Mis Asistentes")} />
          {expandedMenus["Mis Asistentes"] && (
             <div className="ml-4 pl-4 border-l border-blue-800 space-y-1 mt-1">
                <SidebarSubItemWithSubtitle icon={<Hammer size={18} className="text-yellow-500" />} title="BEP Assistant" subtitle="Especialista BEP" onClick={() => onNavigate('assistant', 'Mis Asistentes', 'BEP')} />
                <SidebarSubItemWithSubtitle icon={<FileText size={18} className="text-orange-400" />} title="TDR Assistant" subtitle="Especialista TDR" onClick={() => onNavigate('assistant', 'Mis Asistentes', 'TDR')} />
                <SidebarSubItemWithSubtitle icon={<Target size={18} className="text-pink-500" />} title="VDC Assistant" subtitle="Especialista VDC" onClick={() => onNavigate('assistant', 'Mis Asistentes', 'VDC')} />
             </div>
          )}
        </div>
        <div>
           <SidebarItem icon={<Wrench size={20} />} label="Herramientas ICE" active={activeItem.includes("Herramientas")} hasSubmenu expanded={expandedMenus["Herramientas ICE"]} onClick={() => toggleMenu("Herramientas ICE")} />
            {expandedMenus["Herramientas ICE"] && (
                <div className="ml-4 mt-1 space-y-1">
                    <SidebarSubItem icon={<Book size={18} />} label="Centro de Contactos" active={activeItem === "Centro de Contactos"} onClick={() => onNavigate('contacts', 'Centro de Contactos')} />
                    <SidebarSubItem icon={<Edit3 size={18} />} label="Sesiones ICE" active={activeItem === "Sesiones ICE"} onClick={() => onNavigate('session', 'Sesiones ICE')} />
                </div>
            )}
        </div>
      </nav>
      <div className="p-4 space-y-3 relative z-10 bg-blue-950/50 backdrop-blur-sm mt-auto border-t border-blue-800/30">
        <SidebarFooterItem icon={<Trash2 size={16} />} label="Limpiar Conversaciones" />
        <SidebarFooterItem icon={<Sparkles size={16} />} label="Sesiones" />
        <SidebarFooterItem icon={<FileText size={16} />} label="Consultas" />
        <SidebarFooterItem icon={<Users size={16} />} label="Participantes" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active, hasSubmenu, expanded, onClick }) { return <div onClick={onClick} className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-lg transition-all ${active ? 'bg-blue-600/90 text-white' : 'text-blue-200 hover:bg-white/5'}`}><div className="flex items-center gap-3"><span>{icon}</span><span className="font-medium text-sm">{label}</span></div>{hasSubmenu && (expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}</div>; }
function SidebarSubItem({ icon, label, active, onClick }) { return <div onClick={onClick} className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer rounded-lg transition-colors text-sm ${active ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-800/50'}`}>{icon}<span>{label}</span></div>; }
function SidebarSubItemWithSubtitle({ icon, title, subtitle, onClick }) { return <div onClick={onClick} className="flex items-start gap-3 px-3 py-3 cursor-pointer rounded-lg hover:bg-blue-800/30 transition-colors group"><div className="mt-0.5">{icon}</div><div><div className="text-blue-100 font-medium text-sm">{title}</div><div className="text-blue-400 text-[10px]">{subtitle}</div></div></div>; }
function SidebarFooterItem({ icon, label }) { return <div className="text-blue-400 hover:text-white cursor-pointer flex items-center gap-3 text-xs font-medium px-2 py-1.5 hover:bg-white/5 rounded transition-colors">{icon} <span>{label}</span></div> }

