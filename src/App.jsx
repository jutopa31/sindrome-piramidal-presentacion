import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

export default function App() {
  // Datos de los slides con contenido e imágenes
  const slides = [
    {
      id: 1,
      title: 'Síndrome Piramidal y Extrapiramidal',
      subtitle: 'Clase:',
      content: 'Exploramos las diferencias entre el síndrome piramidal y el extrapiramidal: sus bases anatómicas, signos clínicos y relevancia diagnóstica.',
      image: '/images/image1.jpeg',
      layout: 'cover' // Slide de portada
    },
    {
      id: 2,
      title: 'Temario de la Presentación',
      content: null,
      bullets: [
        'Introducción',
        'Definiciones básicas',
        'Signos clínicos clave',
        'Diferenciación con maniobras básicas semiológicas',
        'Importancia semiológica de los signos característicos'
      ],
      image: '/images/image2.jpeg',
      layout: 'split' // Contenido a la izquierda, imagen a la derecha
    },
    {
      id: 4,
      title: 'Examen neurologico',
      content: 'Se evaluan las funciones mentales superiores: .',
      bullets: [
        'Vigil, lucido (OTEP), lenguaje conservado, comprende ordenes',
        'PIR, campo visual, MOE',
        'Deficit motor o sensitivo',
        '¿Signos piramidales?',
        'Taxia',
        '¿Signos extrapiramidales?'
      ],
      layout: 'center'
    },
    {
      id: 5,
      title: 'Síndrome Piramidal',
      content: 'El síndrome piramidal afecta la vía corticoespinal, como lesion de 1era motoneurona y produciendo un patrón clínico de espasticidad, hiperreflexia y signo de Babinski.',
      bullets: [
        'Corticoespinal/piramidal',
        '1era motoneurona',
        'Debilidad y luego espasticidad (fase aguda hipotonia)',
        'Reflejos ++++',
        'Babinski y Hoffman. Clonus'
      ],
      layout: 'center'
    },
    {
      id: 6,
      title: 'Enfermedad de motoneurona',
      image: '/images/image4.png',
      layout: 'image-focus'
    },
    {
      id: 7,
      title: 'Signos clínicos clave',
      content: 'Maniobras semiologicas.',
      image: '/images/image5.png',
      image2: '/images/image6.png',
      layout: 'dual-image'
    },
    {
      id: 8,
      title: 'Escalas de fuerza muscular',
      image: '/images/image7.png',
      layout: 'image-focus'
    },
    {
      id: 9,
      title: 'Parálisis',
      image: '/images/image20.jpg',
      layout: 'image-focus'
    },
    {
      id: 13,
      title: 'Sistema Extrapiramidal',
      content: 'Conjunto de núcleos grises profundos (ganglios basales) y sus circuitos de conexión con corteza, cerebelo, tronco y médula. Filogenéticamente es el sistema motor más antiguo; coordina la motilidad "automática" que precede y modula a la via piramidal',
      bullets: [
        'Modulacion del tono: Hipertonia hipotonía distonia',
        'Movimientos involuntarios: Corea, temblor, corea, atetosis, discinecias y tics',
        'Movimientos automaticos: Movimientos asociados'
      ],
      layout: 'center'
    },
    {
      id: 13.5,
      title: 'Sistema Extrapiramidal',
      image: '/images/image13.png',
      layout: 'image-focus'
    },
    {
      id: 14,
      title: 'Signos Extrapiramidales',
      content: null,
      bullets: [
        'Rigidez plástica (tipo "rueda dentada") y hipertonía de predominio flexor',
        'Bradicinesia / akinesia: lentitud para iniciar y ejecutar movimientos voluntarios',
        'Temblor de reposo de 3-6 Hz, "cuenta-monedas"',
        'Movimientos hipercinéticos: Corea-atetosis (estriado, tálamo), Distonias y tics (circuitos estrio-palidales), Hemibalismo (lesión subtalámica)',
        'Pérdida de movimientos asociados: amimia facial, desaparición de balanceo de brazos, signo de la silla',
        'Alteraciones posturales: flexión tronco-cuello, inclinación axial, inestabilidad',
        'Fenómenos de rigidez + temblor axial - "rueda dentada"'
      ],
      layout: 'two-columns'
    },
    {
      id: 18,
      title: 'Diagnóstico Diferencial',
      content: 'La correcta identificación de estos signos permite establecer un diagnóstico diferencial preciso entre ambos síndromes.',
      bullets: [
        'Espasticidad → Síndrome Piramidal',
        'Rigidez → Síndrome Extrapiramidal',
        'Hiperreflexia → Piramidal',
        'Bradicinesia → Extrapiramidal',
        'Babinski → Piramidal',
        'Rueda dentada → Extrapiramidal'
      ],
      layout: 'two-columns'
    },
    {
      id: 23,
      title: 'Glosario: Movimientos Anormales',
      glossaryTerms: [
        {
          term: 'Corea',
          definition: 'Movimiento involuntario, brusco, irregular y sin propósito, que afecta principalmente las extremidades y la cara. Suele desplazarse de un grupo muscular a otro ("movimientos danzantes"). Ejemplo: Corea de Huntington.'
        },
        {
          term: 'Diskinesias',
          definition: 'Movimientos anormales involuntarios que aparecen como consecuencia de una alteración del control motor, frecuentemente secundarios al uso prolongado de levodopa o fármacos dopaminérgicos (enfermedad de Parkinson). Incluyen corea, distonía o movimientos mixtos.'
        },
        {
          term: 'Temblor',
          definition: 'Oscilación rítmica e involuntaria de una parte del cuerpo, producida por contracciones alternantes de músculos agonistas y antagonistas. Puede ser de reposo, postural o de acción.'
        },
        {
          term: 'Atetosis',
          definition: 'Movimientos lentos, continuos, sinuosos y de torsión que afectan principalmente las manos y los pies. Suele observarse en lesiones del cuerpo estriado o en la parálisis cerebral infantil.'
        },
        {
          term: 'Sincinesias',
          definition: 'Movimientos involuntarios que acompañan a un movimiento voluntario en otra parte del cuerpo. Son comunes tras lesiones del nervio facial o en la reorganización motora postlesional.'
        },
        {
          term: 'Hemibalismo',
          definition: 'Movimientos bruscos, amplios, violentos y de lanzamiento de una extremidad (generalmente unilateral), secundarios a una lesión del núcleo subtalámico contralateral.'
        }
      ],
      layout: 'glossary-cards'
    },
    {
      id: 24,
      title: 'Caso Clínico',
      content: '',
      bullets: [
        'Esta de guardia en clinica medica, recibe un llamado de traumatologia, paciente de 78 años con una fractura de cadera. "Lo veo raro"',
        '¿Es una urgencia neurologica? ¿Que hacemos?',
        'Deficit motor de menos de 24 horas',
        'Neuroimagen'
      ],
      layout: 'center'
    },
    {
      id: 24.5,
      title: 'Caso Clínico (continuación)',
      content: '',
      bullets: [
        'Segun el neuroradiologo "nada agudo"',
        'Usted llega a ver al paciente y revisa la historia clinica',
        'La ultima evolucion dice que tenia un examen fisico "normal"',
        'El paciente tiene un discurso inconexo, la ultima vez que vino un familiar fue hace 5 dias'
      ],
      layout: 'center'
    },
    {
      id: 24.7,
      title: 'Examen Físico',
      examCards: [
        {
          title: 'Estado Mental y Pares Craneales',
          content: 'Vigil, orientado en persona, desorientado en tiempo y espacio. Comprende ordenes simples pero se agota. Leve disartria, Hipomimia. PIR, MOE conservados'
        },
        {
          title: 'Examen Motor',
          content: 'Postura viciosa, con movilidad pasiva dificultosa, rigidez (aumento del tono) de 4 miembros, a predominio del hemicuerpo izquierdo. Rueda dentada +, ROT = No Hoffman no Babinski.'
        }
      ],
      layout: 'exam-cards'
    },
    {
      id: 24.8,
      title: '¡Viene un familiar!',
      content: '"Le toca tomar la medicacion"',
      image: '/images/image22.jpg',
      layout: 'vertical-split'
    },
    {
      id: 25,
      title: 'Conclusión',
      content: 'La espasticidad orienta al síndrome piramidal y la rigidez al extrapiramidal. Diferenciar ambos permite dirigir el diagnóstico y el manejo neurológico adecuado.',
      image: '/images/image16.png',
      layout: 'vertical-split'
    },
    {
      id: 26,
      title: '¡Gracias!',
      content: 'Preguntas y comentarios',
      bullets: [
        'drjulianmartinalonso@gmail.com'
      ],
      layout: 'center'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBullets, setVisibleBullets] = useState(0);
  const currentSlide = slides[currentIndex];

  // Calcular cuántos bullets tiene el slide actual
  const totalBullets = currentSlide.bullets ? currentSlide.bullets.length : (currentSlide.glossaryTerms ? currentSlide.glossaryTerms.length : (currentSlide.examCards ? currentSlide.examCards.length : 0));

  // Reset bullets cuando cambia el slide
  useEffect(() => {
    setVisibleBullets(0);
  }, [currentIndex]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextStep();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevStep();
      }
      if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIndex(0);
        setVisibleBullets(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        setCurrentIndex(slides.length - 1);
        setVisibleBullets(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, visibleBullets, totalBullets]);

  const nextStep = () => {
    // Si hay bullets y aún no se han mostrado todos
    if (totalBullets > 0 && visibleBullets < totalBullets) {
      setVisibleBullets(prev => prev + 1);
    } else {
      // Avanzar al siguiente slide
      nextSlide();
    }
  };

  const prevStep = () => {
    // Si hay bullets visibles, ocultarlos uno por uno
    if (visibleBullets > 0) {
      setVisibleBullets(prev => prev - 1);
    } else {
      // Retroceder al slide anterior
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setVisibleBullets(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setVisibleBullets(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setVisibleBullets(0);
  };

  const showAllBullets = () => {
    setVisibleBullets(totalBullets);
  };

  // Renderizar contenido según el layout
  const renderSlideContent = (slide) => {
    switch (slide.layout) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full relative">
            {slide.image && (
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
            )}
            <div className="z-10 text-center">
              {slide.subtitle && (
                <p className="text-2xl text-blue-600 mb-2">{slide.subtitle}</p>
              )}
              <h1 className="text-6xl font-bold mb-6 text-blue-700">{slide.title}</h1>
              {slide.content && (
                <p className="text-xl max-w-3xl mx-auto text-gray-700">{slide.content}</p>
              )}
            </div>
          </div>
        );

      case 'title-only':
        return (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-7xl font-bold text-blue-700">{slide.title}</h1>
          </div>
        );

      case 'image-focus':
        return (
          <div className="flex flex-col h-full p-8">
            <h2 className="text-5xl font-bold mb-6 text-blue-700 text-center">{slide.title}</h2>
            {slide.image && (
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        );

      case 'dual-image':
        return (
          <div className="flex flex-col h-full p-8">
            <h2 className="text-5xl font-bold mb-6 text-blue-700 text-center">{slide.title}</h2>
            {slide.content && (
              <p className="text-xl text-center mb-4 text-gray-700">{slide.content}</p>
            )}
            <div className="flex-1 grid grid-cols-2 gap-6 items-center">
              {slide.image && (
                <div className="flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={`${slide.title} - Imagen 1`}
                    className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}
              {slide.image2 && (
                <div className="flex items-center justify-center">
                  <img
                    src={slide.image2}
                    alt={`${slide.title} - Imagen 2`}
                    className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="grid grid-cols-2 gap-8 h-full items-center p-12">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-blue-700">{slide.title}</h2>
              {slide.content && <p className="text-xl mb-6 leading-relaxed">{slide.content}</p>}
              {slide.bullets && (
                <ul className="text-xl space-y-3">
                  {slide.bullets.slice(0, visibleBullets).map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-3">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            {slide.image && (
              <div className="flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-xl"
                />
              </div>
            )}
          </div>
        );

      case 'content-image':
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-5xl font-bold mb-8 text-blue-700">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8 flex-1">
              <div>
                {slide.content && <p className="text-xl mb-6 leading-relaxed">{slide.content}</p>}
                {slide.bullets && (
                  <ul className="text-xl space-y-3">
                    {slide.bullets.slice(0, visibleBullets).map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-600 mr-3">•</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
              {slide.image && (
                <div className="flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-h-[60vh] w-auto object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'two-columns':
        const midPoint = Math.ceil((slide.bullets?.length || 0) / 2);
        const leftBullets = slide.bullets?.slice(0, midPoint) || [];
        const rightBullets = slide.bullets?.slice(midPoint) || [];
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-5xl font-bold mb-8 text-blue-700 text-center">{slide.title}</h2>
            {slide.content && (
              <p className="text-xl text-center mb-8 leading-relaxed max-w-5xl mx-auto">{slide.content}</p>
            )}
            <div className="grid grid-cols-2 gap-12 flex-1">
              <div>
                <ul className="text-xl space-y-4">
                  {leftBullets.slice(0, Math.min(visibleBullets, leftBullets.length)).map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="text-xl space-y-4">
                  {rightBullets.slice(0, Math.max(0, visibleBullets - leftBullets.length)).map((bullet, idx) => (
                    <motion.li
                      key={idx + leftBullets.length}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'vertical-split':
        return (
          <div className="flex flex-col h-full p-12">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-6 text-blue-700 text-center">{slide.title}</h2>
              {slide.content && (
                <p className="text-2xl text-center leading-relaxed max-w-5xl mx-auto">{slide.content}</p>
              )}
            </div>
            {slide.image && (
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[45vh] max-w-full object-contain rounded-lg shadow-xl"
                />
              </div>
            )}
          </div>
        );

      case 'glossary-cards':
        return (
          <div className="flex flex-col h-full p-8">
            <h2 className="text-4xl font-bold mb-4 text-blue-700 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-4 flex-1 content-start overflow-y-auto">
              {slide.glossaryTerms?.slice(0, visibleBullets).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-4 border-2 border-blue-100 hover:border-blue-300 transition-colors h-fit"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{item.term}</h3>
                  <p className="text-sm text-gray-700 leading-snug">{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'exam-cards':
        return (
          <div className="flex flex-col h-full p-10">
            <h2 className="text-4xl font-bold mb-8 text-blue-700 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8 flex-1 items-center content-center">
              {slide.examCards?.slice(0, visibleBullets).map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-8 border-2 border-blue-200 h-full flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">{card.title}</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">{card.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'center':
      default:
        const formatBulletText = (text) => {
          const colonIndex = text.indexOf(':');
          if (colonIndex !== -1) {
            const before = text.substring(0, colonIndex + 1);
            const after = text.substring(colonIndex + 1);
            return (
              <>
                <strong className="font-bold">{before}</strong>
                {after}
              </>
            );
          }
          return text;
        };

        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">{slide.title}</h2>
            {slide.content && (
              <p className="text-lg max-w-4xl leading-relaxed">{slide.content}</p>
            )}
            {slide.bullets && (
              <ul className="text-lg space-y-3 mt-6 text-left max-w-3xl">
                {slide.bullets.slice(0, visibleBullets).map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 mr-3">•</span>
                    <span>{formatBulletText(bullet)}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen bg-gray-50 text-gray-900 relative overflow-hidden flex flex-col">
      {/* Contenido principal */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {renderSlideContent(currentSlide)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={prevStep}
          disabled={currentIndex === 0 && visibleBullets === 0}
          className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-full shadow-lg transition-colors"
          aria-label="Paso anterior"
        >
          <ArrowLeft className="text-white" size={24} />
        </button>

        <button
          onClick={() => goToSlide(0)}
          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors"
          aria-label="Ir al inicio"
        >
          <Home className="text-white" size={24} />
        </button>

        {totalBullets > 0 && visibleBullets < totalBullets && (
          <button
            onClick={showAllBullets}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-colors text-white text-sm font-medium"
            aria-label="Mostrar todos los puntos"
          >
            Mostrar todos ({totalBullets})
          </button>
        )}

        <button
          onClick={nextStep}
          disabled={currentIndex === slides.length - 1 && visibleBullets >= totalBullets}
          className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-full shadow-lg transition-colors"
          aria-label="Siguiente paso"
        >
          <ArrowRight className="text-white" size={24} />
        </button>
      </div>

      {/* Indicador de posición y bullets */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-50">
        <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
          Slide: {currentIndex + 1} / {slides.length}
        </div>
        {totalBullets > 0 && (
          <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
            Puntos: {visibleBullets} / {totalBullets}
          </div>
        )}
      </div>

      {/* Miniaturas (opcional - se puede expandir) */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50 max-h-[80vh] overflow-y-auto">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex
                ? 'bg-blue-600 w-4 h-4'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
