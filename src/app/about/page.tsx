import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - d8aware',
  description:
    'From scaling pain points to systematic solutions. Learn about my journey and approach to transforming technical debt into competitive advantage.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">From Scaling Pain Points to Systematic Solutions</Heading>
      <Lead className="mt-6 max-w-3xl">
        I've lived the scaling challenges that growing SaaS companies face. As a full-stack developer who became a team leader, I've experienced firsthand how technical decisions made at 10 developers create bottlenecks at 50 developers and crises at 100 developers.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">My Journey</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            My journey through SaaS CRM platforms, financial systems, and microservices architectures taught me that successful scaling isn't about choosing the right technology—it's about implementing systematic processes that evolve with your organization.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            The turning point came when I realized that most technical debt isn't a technology problem—it's a methodology problem. Teams that thrive at scale don't just have better tools; they have better processes for making decisions, managing complexity, and evolving their systems sustainably.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <div className="block size-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <div className="block size-full bg-gradient-to-br from-green-100 to-green-200"></div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <div className="block size-full bg-gradient-to-br from-purple-100 to-purple-200"></div>
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <div className="block size-full bg-gradient-to-br from-orange-100 to-orange-200"></div>
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Experience Highlights</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years Experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={15} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Teams Scaled</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={5} end={12} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Systems Modernized</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={15} end={25} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Developers Mentored</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={80} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function ProfessionalBackground() {
  return (
    <Container className="mt-32">
      <Subheading>Professional Background</Subheading>
      <Heading as="h3" className="mt-2">
        Current Role & Experience
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Senior Software Engineering Leader managing cross-functional teams, focusing on SaaS CRM platform development and team velocity optimization.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <h4 className="text-lg font-medium text-gray-950 mb-4">Key Responsibilities</h4>
          <ul className="space-y-3 text-sm/6 text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Leading engineering teams through complex system modernization
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Implementing AI-augmented development practices at scale
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Cross-functional collaboration with Product, DevOps, QA, and Leadership
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Driving technical strategy and architecture decisions
            </li>
          </ul>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <div className="block size-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ExperienceHighlights() {
  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-medium text-gray-950 mb-6">SaaS CRM Platform Development</h3>
          <ul className="space-y-3 text-sm/6 text-gray-600">
            <li>• Scaled development teams from 20 to 80+ engineers</li>
            <li>• Led modernization of legacy monolith to microservices architecture</li>
            <li>• Implemented CI/CD pipelines reducing deployment time by 75%</li>
            <li>• Established development velocity metrics and continuous improvement processes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950 mb-6">Financial Services System Architecture</h3>
          <ul className="space-y-3 text-sm/6 text-gray-600">
            <li>• Modernized core banking platform serving millions of users</li>
            <li>• Implemented real-time transaction processing with 99.99% uptime</li>
            <li>• Led regulatory compliance initiatives for SOX and PCI standards</li>
            <li>• Developed disaster recovery and business continuity frameworks</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950 mb-6">Microservices Transformation</h3>
          <ul className="space-y-3 text-sm/6 text-gray-600">
            <li>• Designed and implemented service mesh architecture</li>
            <li>• Established API gateway and service discovery patterns</li>
            <li>• Created monitoring and observability frameworks</li>
            <li>• Led team training on distributed systems patterns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950 mb-6">Team Leadership & Development</h3>
          <ul className="space-y-3 text-sm/6 text-gray-600">
            <li>• Built and scaled engineering teams across multiple time zones</li>
            <li>• Developed technical mentorship and career progression programs</li>
            <li>• Implemented agile methodologies and lean development practices</li>
            <li>• Strong cross-functional communication and stakeholder management</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function Philosophy() {
  return (
    <Container className="mt-32">
      <Subheading>Philosophy & Approach</Subheading>
      <Heading as="h3" className="mt-2">
        Methodology Over Technology
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        The right process with average tools beats average process with the best tools.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-medium text-gray-950 mb-3">AI-Augmented, Not AI-Dependent</h4>
            <p className="text-sm/6 text-gray-600">
              I leverage AI tools to accelerate development and improve code quality, but the foundation is systematic methodology and solid engineering principles. AI augments human capabilities rather than replacing them.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-950 mb-3">Business Outcomes First</h4>
            <p className="text-sm/6 text-gray-600">
              Technical excellence means nothing if it doesn't drive business results. Every recommendation ties directly to measurable business impact: faster time-to-market, reduced operational costs, improved customer satisfaction.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-medium text-gray-950 mb-3">Knowledge Transfer Priority</h4>
            <p className="text-sm/6 text-gray-600">
              My success is measured by your team's ability to maintain and build upon improvements after engagement completion. I focus on capability building and training that empowers teams to continue improving independently.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-950 mb-3">Sustainable Transformation</h4>
            <p className="text-sm/6 text-gray-600">
              Quick fixes create technical debt. I focus on changes that compound over time and scale with your organization. Every decision considers long-term implications and team capabilities.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ConsultingFocus() {
  return (
    <Container className="mt-32">
      <Subheading>Consulting Focus</Subheading>
      <Heading as="h3" className="mt-2">
        Core Service Areas
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-lg font-medium text-gray-950 mb-4">Legacy System Modernization</h4>
          <p className="text-sm/6 text-gray-600 mb-4">
            Systematic evolution with proven approach to technical debt reduction that maintains business continuity while improving developer velocity.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Architecture assessment and modernization roadmaps</li>
            <li>• Risk-aware migration strategies and rollback plans</li>
            <li>• Incremental transformation with business value delivery</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-lg font-medium text-gray-950 mb-4">Developer Experience Transformation</h4>
          <p className="text-sm/6 text-gray-600 mb-4">
            Productivity acceleration through process and tooling improvements that make developers more productive and satisfied with their work.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Workflow analysis and bottleneck identification</li>
            <li>• Tool chain optimization and automation</li>
            <li>• Documentation systems and knowledge management</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-lg font-medium text-gray-950 mb-4">AI-Augmented Development Implementation</h4>
          <p className="text-sm/6 text-gray-600 mb-4">
            Strategic AI integration with practical integration of AI tools and practices that enhance rather than replace human expertise.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• AI tool assessment and selection</li>
            <li>• Custom methodology development for AI-augmented workflows</li>
            <li>• Team training and adoption frameworks</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-lg font-medium text-gray-950 mb-4">Team Scaling Preparation</h4>
          <p className="text-sm/6 text-gray-600 mb-4">
            Organizational readiness with technical and process foundations that support sustainable team growth.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Scalable architecture design and implementation</li>
            <li>• Process standardization and documentation</li>
            <li>• Onboarding and mentorship program development</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function WhyD8aware() {
  return (
    <Container className="mt-32">
      <Subheading>Why d8aware?</Subheading>
      <Heading as="h3" className="mt-2">
        "Data-Aware" Philosophy
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        The name "d8aware" reflects my approach to decision-making: every technical and process recommendation is backed by data, measurement, and clear business impact analysis.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-4">Proven Track Record</h4>
          <p className="text-sm/6 text-gray-600">
            15+ years of hands-on experience across multiple industries, team sizes, and technology stacks provides deep pattern recognition for what works—and what doesn't—at scale.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-4">Methodology-First Approach</h4>
          <p className="text-sm/6 text-gray-600">
            Rather than prescribing specific technologies, I develop custom methodologies that fit your organization's context, culture, and constraints while leveraging modern development practices.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-4">AI-Augmented Expertise</h4>
          <p className="text-sm/6 text-gray-600">
            Early adopter and practical implementer of AI-augmented development practices, with proven frameworks for effective adoption that enhance rather than disrupt existing workflows.
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <Button href="/contact" className="w-full sm:w-auto">
          Let's Work Together
        </Button>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <ProfessionalBackground />
      <ExperienceHighlights />
      <Philosophy />
      <ConsultingFocus />
      <WhyD8aware />
      <Footer />
    </main>
  )
}