import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Search, FileText, Zap, Phone, TrendingUp, Award, Users, Clock, Shield, Sparkles, Target, BarChart3 } from "lucide-react";
import ebook1 from "@/assets/ebook-1.jpg";
import ebook2 from "@/assets/ebook-2.jpg";
import ebook3 from "@/assets/ebook-3.jpg";
import houseBefore from "@/assets/house-before.jpg";
import houseAfter from "@/assets/house-after.jpg";
const Index = () => {
  const handleCTAClick = () => {
    window.open('https://wa.link/5yagz9', '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            ⚡ Resultados en 48 horas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tu inmobiliaria podría estar perdiendo clientes cada día
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 leading-relaxed">
            Descubre cómo solucionarlo en <span className="font-bold text-accent">48h</span> por solo <span className="font-bold text-accent">47€</span>
          </p>
          <p className="text-lg mb-8 text-primary-foreground/80 max-w-3xl">
            Con nuestra Auditoría Exprés + 3 acciones inmediatas descubrirás los errores que te frenan 
            y te diremos exactamente qué hacer para captar más compradores y propietarios sin malgastar en publicidad.
          </p>
          <Button size="xl" variant="cta" className="text-lg" onClick={handleCTAClick}>
            Sí, quiero mi auditoría ahora por 47€
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/70">
            ✓ Sin permanencia · ✓ Resultados garantizados · ✓ 3 bonus incluidos
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Te suena familiar alguno de estos problemas?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {["Tu web recibe visitas pero casi nadie te contacta", "Inviertes en portales y apenas recibes llamadas", "Tus anuncios en redes no generan clientes reales", "Te da miedo gastar en marketing y no ver resultados", "Tus competidores parecen estar un paso por delante"].map((pain, idx) => <Card key={idx} className="p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-foreground">{pain}</p>
              </Card>)}
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-6 text-foreground">
              Si reconoces <span className="text-destructive">al menos 1</span> de estos puntos, necesitas esta auditoría.
            </p>
            <Button size="lg" variant="cta" onClick={handleCTAClick}>
              Quiero descubrir qué me está frenando
            </Button>
          </div>
        </div>
      </section>

      {/* Service Presentation */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Esto es lo que recibirás con la Auditoría Exprés
          </h2>
          <p className="text-center text-xl text-accent font-bold mb-12">(47€)</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[{
            icon: Search,
            title: "Análisis completo",
            desc: "De tu web, redes sociales y fichas en portales inmobiliarios"
          }, {
            icon: FileText,
            title: "Informe en PDF",
            desc: "Con los puntos críticos que te están haciendo perder clientes"
          }, {
            icon: Zap,
            title: "3 acciones inmediatas",
            desc: "Que puedes aplicar ya para captar más leads cualificados"
          }, {
            icon: Phone,
            title: "Llamada de 20 minutos",
            desc: "Donde te explicamos todo paso a paso"
          }].map((service, idx) => <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-accent">
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>)}
          </div>

          <div className="text-center bg-accent/10 rounded-xl p-8 mb-8">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-2xl font-bold text-foreground">Todo esto en solo 48h</p>
          </div>

          <div className="text-center">
            <Button size="xl" variant="cta" onClick={handleCTAClick}>
              Reservar mi auditoría por 47€
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Lo que conseguirás al aplicar estas mejoras
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
            icon: Users,
            text: "Más leads cualificados interesados en comprar o vender"
          }, {
            icon: Award,
            text: "Imagen profesional que te diferencia de tu competencia"
          }, {
            icon: TrendingUp,
            text: "Vender inmuebles más rápido y con menos tiempo perdido"
          }, {
            icon: Target,
            text: "Justificar mejor tu comisión ofreciendo un servicio moderno"
          }].map((benefit, idx) => <Card key={idx} className="p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <benefit.icon className="w-8 h-8 text-accent mb-2" />
                  <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              El poder de una buena fotografía inmobiliaria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La misma propiedad, dos resultados completamente diferentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <Badge variant="destructive" className="mb-4">ANTES</Badge>
              <img 
                src={houseBefore} 
                alt="Foto inmobiliaria sin edición profesional - mala iluminación" 
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
              />
              <p className="text-sm text-muted-foreground">
                Fotografía sin tratamiento: mala iluminación, colores apagados, poco atractiva
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-accent/30">
              <Badge className="mb-4 bg-accent text-accent-foreground">DESPUÉS</Badge>
              <img 
                src={houseAfter} 
                alt="Foto inmobiliaria con edición profesional - iluminación perfecta" 
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
              />
              <p className="text-sm text-muted-foreground">
                Con edición profesional: luz equilibrada, colores vibrantes, máximo atractivo
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Las propiedades con fotos profesionales se venden un 32% más rápido
                </p>
                <p className="text-muted-foreground">
                  En tu auditoría analizaremos la calidad de tus fotos actuales y te diremos exactamente 
                  cómo mejorarlas para captar más visitas y acelerar las ventas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonus eBooks Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Además, te llevas GRATIS estos 3 e-books exclusivos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{
            image: ebook1,
            title: "10 errores que hacen que tu inmobiliaria pierda clientes cada mes",
            subtitle: "(y cómo evitarlos sin gastar más dinero)",
            value: "97€"
          }, {
            image: ebook2,
            title: "Guía práctica para generar leads inmobiliarios en Facebook e Instagram",
            subtitle: "sin ser un experto en marketing",
            value: "97€"
          }, {
            image: ebook3,
            title: "De inmobiliaria tradicional a marca local líder",
            subtitle: "Cómo diferenciarte y atraer clientes que te eligen por valor y no por precio",
            value: "97€"
          }].map((ebook, idx) => <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={ebook.image} alt={ebook.title} className="w-full h-80 object-contain rounded-lg mb-4 shadow-lg" />
                <Badge className="mb-2 bg-accent text-accent-foreground">
                  Valor: {ebook.value}
                </Badge>
                <h3 className="text-lg font-bold mb-2 text-foreground leading-tight">
                  {ebook.title}
                </h3>
                <p className="text-sm text-muted-foreground">{ebook.subtitle}</p>
              </Card>)}
          </div>

          <div className="text-center bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-xl p-8 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Valor total <span className="line-through text-muted-foreground">291€</span> 
              <span className="text-accent"> → GRATIS</span>
            </p>
            <p className="text-xl text-muted-foreground">
              al reservar tu auditoría por solo <span className="font-bold text-accent">47€</span>
            </p>
          </div>

          <div className="text-center">
            <Button size="xl" variant="cta" onClick={handleCTAClick}>
              Acceder ahora a mi auditoría + 3 bonus por 47€
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof / Authority */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart3 className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            El 72% de compradores de vivienda comienzan su búsqueda online
          </h2>
          <p className="text-xl leading-relaxed text-primary-foreground/90">
            Si tu inmobiliaria no está optimizada digitalmente, estás perdiendo ventas cada día. 
            Nuestra auditoría detecta esos errores y te da un plan claro para solucionarlos rápido.
          </p>
        </div>
      </section>

      {/* Offer + Urgency */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Reserva hoy mismo por solo 47€
          </h2>

          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-secondary/50 to-secondary/30 border-2 border-accent/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground mb-2">
                    Una consultoría de marketing inmobiliario suele costar
                  </p>
                  <p className="text-3xl font-bold line-through text-muted-foreground">
                    200€ - 300€
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-accent/30 pt-6">
                <p className="text-lg text-foreground mb-4">
                  Hoy puedes acceder a tu <span className="font-bold">Auditoría Exprés completa</span> + 
                  <span className="font-bold"> 3 eBooks de alto valor</span>...
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-bold text-accent">47€</div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground font-semibold">
                      Precio especial de lanzamiento
                    </p>
                    <Badge variant="destructive" className="mt-2">
                      Solo 10 auditorías al mes para garantizar calidad
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button size="xl" variant="cta" onClick={handleCTAClick}>
              Quiero mi auditoría ya por 47€
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Plazas limitadas · Resultados en 48h
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center border-2 border-accent/30">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-foreground">Sin riesgo para ti</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Si después de la auditoría no encuentras <span className="font-bold text-accent">al menos una acción práctica</span> que 
              pueda traerte más clientes, te devolvemos tu dinero.
            </p>
            <p className="text-muted-foreground mt-4 font-semibold">Sin preguntas.</p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            En 48h tendrás en tus manos un plan claro para captar más clientes
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Por solo <span className="font-bold text-accent">47€</span>, obtienes tu auditoría exprés + 
            3 acciones inmediatas + 3 eBooks exclusivos.
          </p>
          <p className="text-lg mb-8 text-primary-foreground/80">
            No dejes que tus competidores sigan llevándose los clientes que podrían ser tuyos.
          </p>
          <Button size="xl" variant="cta" className="text-lg shadow-2xl" onClick={handleCTAClick}>
            Sí, quiero mi auditoría por 47€
          </Button>
          <div className="mt-8 flex items-center justify-center gap-8 flex-wrap text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Resultados en 48h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> 3 bonus gratis (291€)
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Garantía devolución
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/50 text-center text-sm text-muted-foreground">
        <p>© 2025 Auditoría Exprés Inmobiliaria. Todos los derechos reservados.</p>
      </footer>
    </div>;
};
export default Index;