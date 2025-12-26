import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Globe, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            IA Central Inteligente
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Toolsy AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O hub de ferramentas online com inteligência artificial central.
            Interface simples, design moderno e ferramentas poderosas para impulsionar sua produtividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Começar Gratuitamente
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher Toolsy AI?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefícios objetivos que fazem a diferença no seu dia a dia
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Rápido e Eficiente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Respostas em segundos com IA avançada e processamento otimizado
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Seguro e Confiável</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seus dados protegidos com criptografia de ponta e privacidade garantida
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Global e Acessível</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Suporte multi-idioma e uso global com arquitetura escalável
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools List */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ferramentas Disponíveis</h2>
          <p className="text-lg text-muted-foreground">
            Mais de 15 ferramentas poderosas para todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Conversão de Texto",
            "Gerador de Texto IA",
            "Resumo Automático",
            "Reescrita de Texto",
            "Gerador de Títulos",
            "Gerador de Descrições",
            "Gerador de Tags",
            "SEO Básico",
            "OCR",
            "Tradução",
            "Removedor de Fundo",
            "Gerador de Imagens IA",
            "Conversor de Arquivos",
            "Utilitários Web"
          ].map((tool) => (
            <Card key={tool} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{tool}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ferramenta avançada com IA integrada para resultados superiores.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Perfeito para começar</CardDescription>
              <div className="text-3xl font-bold">R$ 0</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Até 100 usos/mês</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />5 ferramentas</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Suporte básico</li>
              </ul>
              <Button className="w-full mt-4">Começar</Button>
            </CardContent>
          </Card>
          <Card className="relative border-primary">
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Mais Popular</Badge>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Para profissionais</CardDescription>
              <div className="text-3xl font-bold">R$ 29<span className="text-lg">/mês</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Usos ilimitados</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Todas as ferramentas</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Suporte prioritário</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Histórico avançado</li>
              </ul>
              <Button className="w-full mt-4">Assinar Pro</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Business</CardTitle>
              <CardDescription>Para equipes</CardDescription>
              <div className="text-3xl font-bold">R$ 99<span className="text-lg">/mês</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Tudo do Pro</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Até 10 usuários</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />API dedicada</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Suporte 24/7</li>
              </ul>
              <Button variant="outline" className="w-full mt-4">Contato</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para revolucionar sua produtividade?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a milhares de usuários que já confiam no Toolsy AI
          </p>
          <Button size="lg" className="text-lg px-8">
            Começar Agora - É Gratuito!
          </Button>
        </div>
      </section>
    </div>
  );
}