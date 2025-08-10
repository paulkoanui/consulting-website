import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon, MinusIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - d8aware',
  description:
    'Systematic transformation for growing SaaS companies through proven 5-phase methodology. Legacy modernization, developer experience, and AI-augmented development.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Systematic Transformation for Growing SaaS Companies</Heading>
      <Lead className="mt-6 max-w-3xl">
        My consulting practice focuses exclusively on Series B-D SaaS companies facing scaling challenges. Through a proven 5-phase methodology, I transform technical debt and process bottlenecks into competitive advantages.
      </Lead>
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-blue-900">
          <strong>Typical Engagement:</strong> $100-250K investment over 3-6 months with measurable business outcomes and comprehensive knowledge transfer.
        </p>
      </div>
    </Container>
  )
}

function CoreServices() {
  return (
    <Container className="mt-32">
      <Subheading>Core Services</Subheading>
      <Heading as="h3" className="mt-2">
        Specialized Solutions for Scaling Challenges
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-4">Legacy System Modernization</h4>
          <p className="text-gray-600 mb-6">
            <strong>Challenge:</strong> Technical debt accumulated during rapid growth creates scaling bottlenecks and reduces development velocity.
          </p>
          
          <div className="mb-6">
            <h5 className="font-medium text-gray-950 mb-3">Approach:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Comprehensive technical debt assessment and prioritization</li>
              <li>• Risk-aware modernization roadmap with business impact projections</li>
              <li>• Incremental transformation that maintains business continuity</li>
              <li>• Team training on maintaining modernized systems</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-950 mb-3">Typical Results:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 40-70% reduction in deployment cycle time</li>
              <li>• 30-50% decrease in production incidents</li>
              <li>• Improved developer satisfaction and retention</li>
              <li>• Foundation for sustainable scaling</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-4">Developer Experience Transformation</h4>
          <p className="text-gray-600 mb-6">
            <strong>Challenge:</strong> Poor developer experience leads to reduced velocity, quality issues, and team satisfaction problems.
          </p>
          
          <div className="mb-6">
            <h5 className="font-medium text-gray-950 mb-3">Approach:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Developer workflow analysis and bottleneck identification</li>
              <li>• Tool chain optimization with AI-augmented development practices</li>
              <li>• Documentation system implementation and knowledge management</li>
              <li>• Process standardization with team buy-in</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-950 mb-3">Typical Results:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 25-45% improvement in development velocity</li>
              <li>• Reduced onboarding time for new team members</li>
              <li>• Higher developer satisfaction scores</li>
              <li>• Decreased context switching and frustration</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-4">AI-Augmented Development Implementation</h4>
          <p className="text-gray-600 mb-6">
            <strong>Challenge:</strong> Teams want to leverage AI tools but lack systematic approach for effective adoption.
          </p>
          
          <div className="mb-6">
            <h5 className="font-medium text-gray-950 mb-3">Approach:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Current tool usage assessment and gap analysis</li>
              <li>• Custom AI-augmented development methodology design</li>
              <li>• Team training and adoption support</li>
              <li>• Measurement framework for continuous improvement</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-950 mb-3">Typical Results:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 20-35% improvement in code quality metrics</li>
              <li>• Faster feature development without quality sacrifice</li>
              <li>• Reduced manual testing and review overhead</li>
              <li>• Sustainable AI tool adoption across team</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-4">Team Scaling Preparation</h4>
          <p className="text-gray-600 mb-6">
            <strong>Challenge:</strong> Technical and process foundations need strengthening to support sustainable team growth.
          </p>
          
          <div className="mb-6">
            <h5 className="font-medium text-gray-950 mb-3">Approach:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Scalable architecture design and implementation</li>
              <li>• Process standardization and documentation</li>
              <li>• Onboarding and mentorship program development</li>
              <li>• Communication and collaboration framework design</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-950 mb-3">Typical Results:</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Reduced onboarding time for new hires</li>
              <li>• Improved cross-team communication</li>
              <li>• Scalable development processes</li>
              <li>• Foundation for sustainable growth</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

function MethodologyDeepDive() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading>Methodology</Subheading>
        <Heading as="h3" className="mt-2">
          5-Phase Systematic Approach
        </Heading>
        
        <div className="mt-16 space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-950 mb-2">Discovery & Assessment (Weeks 1-2)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Comprehensive understanding of current state and constraint identification
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Activities:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Technical architecture and code quality assessment</li>
                      <li>• Developer workflow and tooling analysis</li>
                      <li>• Team satisfaction and pain point interviews</li>
                      <li>• Business impact and priority mapping</li>
                      <li>• Stakeholder alignment sessions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Detailed current state assessment report</li>
                      <li>• Constraint and opportunity prioritization matrix</li>
                      <li>• Stakeholder alignment documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-950 mb-2">Analysis & Strategy (Weeks 2-4)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Data-driven modernization strategy with business impact projections
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Activities:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Technical debt impact quantification</li>
                      <li>• Solution approach evaluation and risk assessment</li>
                      <li>• Resource requirement and timeline estimation</li>
                      <li>• ROI modeling and success metrics definition</li>
                      <li>• Implementation roadmap development</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Strategic modernization roadmap</li>
                      <li>• Business case with ROI projections</li>
                      <li>• Risk assessment and mitigation plans</li>
                      <li>• Success metrics and measurement framework</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-950 mb-2">Proposal & Planning (Weeks 4-5)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Detailed implementation plan with clear success criteria
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Activities:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Implementation approach refinement</li>
                      <li>• Team involvement and responsibility definition</li>
                      <li>• Timeline and milestone establishment</li>
                      <li>• Budget and resource allocation planning</li>
                      <li>• Stakeholder approval and commitment securing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Detailed implementation proposal</li>
                      <li>• Project timeline with milestones</li>
                      <li>• Team roles and responsibilities matrix</li>
                      <li>• Success criteria and measurement plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-lg">4</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-950 mb-2">Implementation (Weeks 6-20)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Hands-on transformation with team knowledge transfer
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Activities:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Systematic legacy system modernization</li>
                      <li>• AI-augmented development process implementation</li>
                      <li>• Team training and capability building</li>
                      <li>• Progress monitoring and course correction</li>
                      <li>• Documentation and knowledge transfer</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Modernized systems and processes</li>
                      <li>• Team training and documentation</li>
                      <li>• Progress reports and metrics tracking</li>
                      <li>• Knowledge transfer sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-lg">5</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-950 mb-2">Measurement & Handoff (Weeks 20-24)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Sustainable improvements with measurable business impact
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Activities:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Results measurement and validation</li>
                      <li>• Process optimization and refinement</li>
                      <li>• Team capability assessment and gap addressing</li>
                      <li>• Maintenance planning and handoff</li>
                      <li>• Success documentation and lessons learned</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-950 mb-2">Deliverables:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Results measurement report</li>
                      <li>• Sustainability planning documentation</li>
                      <li>• Team capability certification</li>
                      <li>• Maintenance and evolution guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function InvestmentROI() {
  return (
    <Container className="py-32">
      <Subheading>Investment & ROI</Subheading>
      <Heading as="h3" className="mt-2">
        Clear Value Proposition
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-6">Typical Investment</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Range:</span>
              <span className="font-semibold text-gray-950">$100,000 - $250,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-semibold text-gray-950">3-6 months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Structure:</span>
              <span className="font-semibold text-gray-950">Milestone-based</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h4 className="text-xl font-medium text-gray-950 mb-6">ROI Example</h4>
          <p className="text-sm text-gray-600 mb-4">Mid-Market SaaS Company (80 developers, $50M ARR):</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Developer cost savings:</span>
              <span className="font-semibold text-gray-950">$400K annually</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Incident reduction savings:</span>
              <span className="font-semibold text-gray-950">$150K annually</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Retention improvements:</span>
              <span className="font-semibold text-gray-950">$200K annually</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <span className="font-medium text-gray-950">Total Annual Benefit:</span>
              <span className="font-bold text-gray-950">$750K</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-blue-600">12-month ROI:</span>
              <span className="font-bold text-blue-600">340%</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function EngagementRequirements() {
  return (
    <Container className="py-32">
      <Subheading>Requirements</Subheading>
      <Heading as="h3" className="mt-2">
        Ideal Client Profile
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-6">Perfect Fit Indicators</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Series B-D SaaS company</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">50-200 developers</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">$10M-500M ARR</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Experiencing scaling bottlenecks or velocity concerns</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Leadership dedication to systematic improvement</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">$100K+ budget for comprehensive transformation</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-6">What We Don't Do</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MinusIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Quick fixes or band-aid solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <MinusIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Technology-first implementations without business case</span>
            </div>
            <div className="flex items-start gap-3">
              <MinusIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">One-size-fits-all generic solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <MinusIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Long-term operational support (knowledge transfer focus)</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FAQ() {
  return (
    <Container className="py-32">
      <Subheading>FAQ</Subheading>
      <Heading as="h3" className="mt-2">
        Frequently Asked Questions
      </Heading>
      
      <div className="mt-16 space-y-8">
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">How do you measure success?</h4>
          <p className="text-gray-600">
            Success is measured through specific business metrics established during planning: development cycle time, defect rates, developer satisfaction scores, and team velocity. Every engagement includes baseline measurement and progress tracking.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">What if our technology stack is different?</h4>
          <p className="text-gray-600">
            My methodology is technology-agnostic and focuses on processes and practices rather than specific tools. I leverage AI-augmented development to quickly understand new technical environments and apply systematic approaches across any stack.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">Do you provide ongoing support?</h4>
          <p className="text-gray-600">
            The engagement includes comprehensive knowledge transfer so your team can maintain improvements independently. A 90-day consultation period is included for questions, with longer-term support available separately if needed.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">How do you ensure no disruption to our business?</h4>
          <p className="text-gray-600">
            All transformations are designed for business continuity through incremental changes, comprehensive testing, and gradual rollouts. We prioritize stability and risk mitigation throughout the implementation process.
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <Button href="/contact" className="w-full sm:w-auto">
          Schedule Discovery Call
        </Button>
      </div>
    </Container>
  )
}

export default function Services() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <CoreServices />
      <MethodologyDeepDive />
      <InvestmentROI />
      <EngagementRequirements />
      <FAQ />
      <Footer />
    </main>
  )
}