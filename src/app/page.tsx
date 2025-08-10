import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'd8aware - Transform Technical Debt Into Competitive Advantage',
  description:
    'I help Series B-D SaaS companies modernize legacy systems and accelerate developer velocity through systematic AI-augmented development methodology.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Transform Technical Debt Into Competitive Advantage
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            I help Series B-D SaaS companies modernize legacy systems and accelerate developer velocity through systematic AI-augmented development methodology.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Schedule Strategic Discovery Call</Button>
            <Button variant="secondary" href="/services">
              View Methodology
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProblemSection() {
  return (
    <Container className="pb-24">
      <Heading as="h2" className="max-w-3xl">
        The Scaling Wall Every Growing SaaS Company Hits
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">Legacy Systems Don't Scale</h3>
              <p className="text-gray-600">Systems that worked at 10 developers don't scale to 100</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">Technical Debt Accumulates</h3>
              <p className="text-gray-600">Debt accumulates faster than teams can address it</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">Velocity Slows</h3>
              <p className="text-gray-600">Developer velocity slows just when market demands acceleration</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">Process Inconsistencies</h3>
              <p className="text-gray-600">Documentation gaps and process inconsistencies create bottlenecks</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">Traditional Consulting Misses the Mark</h3>
              <p className="text-gray-600">Focuses on technology, not business outcomes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <p className="text-lg font-medium text-gray-950">
          <strong>Result:</strong> Engineering teams work harder but deliver slower, while competitors gain ground.
        </p>
      </div>
    </Container>
  )
}

function SolutionSection() {
  return (
    <Container className="pb-24">
      <Heading as="h2" className="max-w-3xl">
        Systematic Transformation, Not Quick Fixes
      </Heading>
      <p className="mt-6 text-xl/7 text-gray-600 max-w-3xl">
        My 5-phase methodology transforms these constraints into competitive advantages:
      </p>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-semibold">1</span>
          </div>
          <h3 className="text-lg font-medium text-gray-950 mb-2">Discovery & Assessment</h3>
          <p className="text-sm text-gray-600">Comprehensive technical and organizational audit to identify high-impact modernization opportunities.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-semibold">2</span>
          </div>
          <h3 className="text-lg font-medium text-gray-950 mb-2">Analysis & Strategy</h3>
          <p className="text-sm text-gray-600">Data-driven roadmap prioritizing business outcomes over technical preferences.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-semibold">3</span>
          </div>
          <h3 className="text-lg font-medium text-gray-950 mb-2">Proposal & Planning</h3>
          <p className="text-sm text-gray-600">Clear implementation plan with measurable success criteria and business impact projections.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-semibold">4</span>
          </div>
          <h3 className="text-lg font-medium text-gray-950 mb-2">Implementation</h3>
          <p className="text-sm text-gray-600">Hands-on transformation with AI-augmented development practices and team knowledge transfer.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-semibold">5</span>
          </div>
          <h3 className="text-lg font-medium text-gray-950 mb-2">Measurement & Handoff</h3>
          <p className="text-sm text-gray-600">Sustainable processes with quantified results and team capability to maintain momentum.</p>
        </div>
      </div>
    </Container>
  )
}

function DifferentiationSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Why d8aware</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Why d8aware Gets Different Results
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2">
          <BentoCard
            dark
            eyebrow="Methodology"
            title="Systematic Approach"
            description="Proven 5-phase process, not ad-hoc problem solving. Every engagement follows structured approach with measurable checkpoints."
            graphic={
              <div className="flex size-full pt-10 pl-10">
                <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
              </div>
            }
            className="lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Technology"
            title="AI-Augmented Focus"
            description="Modern development practices that leverage AI tools for sustainable velocity improvements, not temporary fixes."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Outcomes"
            title="Business Impact Driven"
            description="$100-250K engagements focused on measurable business impact: faster releases, reduced defects, improved developer satisfaction."
            graphic={<LinkedAvatars />}
            className="lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Experience"
            title="Cross-Domain Expertise"
            description="Deep experience across SaaS CRM, financial systems, and microservices architectures with team leadership perspective."
            graphic={<LogoCluster />}
            className="max-lg:rounded-b-4xl lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function SocialProofSection() {
  return (
    <Container className="py-32">
      <Subheading>Results</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Proven Results Across Growing SaaS Companies
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <blockquote className="border-l-4 border-blue-500 pl-6">
            <p className="text-lg text-gray-600 italic">
              "[Company X] reduced deployment time from 3 hours to 15 minutes while improving reliability. Developer satisfaction scores increased 40% during the 4-month engagement."
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              — VP Engineering, Series C SaaS Platform
            </footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-blue-500 pl-6">
            <p className="text-lg text-gray-600 italic">
              "The AI-augmented development processes we implemented are still driving velocity improvements 18 months later. ROI was clear within the first quarter."
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              — CTO, Financial Services SaaS
            </footer>
          </blockquote>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h4 className="text-lg font-medium text-gray-950 mb-6">Key Metrics</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Average reduction in deployment cycle time</span>
              <span className="font-semibold text-gray-950">67%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Decrease in production incidents</span>
              <span className="font-semibold text-gray-950">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Teams report improved developer experience</span>
              <span className="font-semibold text-gray-950">89%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">12-month average ROI</span>
              <span className="font-semibold text-gray-950">340%</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function AboutPreviewSection() {
  return (
    <Container className="py-32">
      <Heading as="h2" className="max-w-3xl">
        Technical Leadership That Drives Business Results
      </Heading>
      <p className="mt-6 text-xl/7 text-gray-600 max-w-3xl">
        With 15+ years across SaaS CRM platforms, financial systems, and microservices architecture, I combine deep technical expertise with AI-augmented development practices to solve scaling challenges that traditional consulting approaches miss.
      </p>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        Currently leading engineering teams at scale while developing systematic methodologies for technical debt transformation and developer experience optimization.
      </p>
      <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
        <Button href="/about">Learn About My Approach</Button>
        <Button variant="secondary" href="/contact">
          Schedule Discovery Call
        </Button>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <ProblemSection />
          <SolutionSection />
        </div>
        <DifferentiationSection />
        <SocialProofSection />
        <AboutPreviewSection />
      </main>
      <Footer />
    </div>
  )
}