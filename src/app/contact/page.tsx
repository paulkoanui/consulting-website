import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - d8aware',
  description:
    'Ready to transform your technical debt into competitive advantage? Schedule a strategic discovery call to explore systematic modernization opportunities.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Ready to Transform Your Technical Debt Into Competitive Advantage?</Heading>
      <Lead className="mt-6 max-w-3xl">
        Schedule a strategic discovery call to explore how systematic modernization can accelerate your development velocity and scale your team effectively.
      </Lead>
    </Container>
  )
}

function DiscoveryCallProcess() {
  return (
    <Container className="mt-32">
      <Subheading>Discovery Call</Subheading>
      <Heading as="h3" className="mt-2">
        What to Expect
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-4">45-Minute Strategic Discussion</h4>
          <p className="text-gray-600 mb-6">
            Focused on understanding your scaling challenges and exploring potential solutions.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">1</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-950">Current State Assessment (15 min)</h5>
                <p className="text-sm text-gray-600">Understanding your technical debt and process challenges</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">2</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-950">Impact Analysis (15 min)</h5>
                <p className="text-sm text-gray-600">Exploring business impact and priority areas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">3</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-950">Solution Overview (10 min)</h5>
                <p className="text-sm text-gray-600">Discussing potential approaches and methodology fit</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 font-semibold text-xs">4</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-950">Next Steps (5 min)</h5>
                <p className="text-sm text-gray-600">Clear path forward if there's mutual interest</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Outcome:</strong> You'll leave with a clear understanding of your modernization opportunities and whether d8aware's systematic approach is right for your organization.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
            <h4 className="text-lg font-medium text-gray-950 mb-4">Come Prepared to Discuss</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-950 mb-2">Technical Challenges:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Current development velocity and quality concerns</li>
                  <li>• Specific technical debt or architectural pain points</li>
                  <li>• Deployment process complexity and cycle times</li>
                  <li>• Developer experience and team satisfaction issues</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-950 mb-2">Business Context:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Team size and growth projections</li>
                  <li>• Revenue stage and scaling timeline</li>
                  <li>• Budget range and investment timeline</li>
                  <li>• Success criteria and measurement priorities</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-950 mb-2">Organizational Readiness:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Leadership commitment to systematic change</li>
                  <li>• Team openness to process improvements</li>
                  <li>• Available time for assessment and implementation</li>
                  <li>• Decision-making timeline and stakeholders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-black/5">
            <h4 className="text-lg font-medium text-gray-950 mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-950">Discovery Call Booking:</span>
                <p className="text-blue-600">calendly.com/d8aware/discovery</p>
              </div>
              <div>
                <span className="font-medium text-gray-950">Direct Email:</span>
                <p className="text-blue-600">paul@d8aware.com</p>
              </div>
              <div>
                <span className="font-medium text-gray-950">LinkedIn:</span>
                <p className="text-blue-600">linkedin.com/in/paulkoanui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ResponseCommitments() {
  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-6">Response Commitments</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Email Inquiries:</span>
              <span className="font-semibold text-gray-950">24-hour response</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discovery Calls:</span>
              <span className="font-semibold text-gray-950">Within one week</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Follow-up:</span>
              <span className="font-semibold text-gray-950">48 hours post-call</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-black/5">
          <h4 className="text-xl font-medium text-gray-950 mb-6">Office Hours</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-gray-950 mb-2">Discovery Calls Available:</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Monday-Friday: 9 AM - 5 PM (EST)</li>
                <li>• Tuesday/Thursday evenings: 6 PM - 8 PM (EST)</li>
                <li>• Limited Saturday availability for urgent situations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-950 mb-2">Email Response:</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Business days: Within 4 hours</li>
                <li>• Evenings/weekends: Next business day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function QualificationFramework() {
  return (
    <Container className="mt-32">
      <Subheading>Qualification</Subheading>
      <Heading as="h3" className="mt-2">
        Ideal Fit Assessment
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-green-50 p-8 rounded-lg">
          <h4 className="text-xl font-medium text-green-900 mb-6">Ideal Fit Indicators</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Series B-D SaaS company with 50-200 developers</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Experiencing scaling bottlenecks or velocity decline</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Leadership commitment to systematic improvement</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">Budget allocation of $100K+ for comprehensive transformation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800">3-6 month timeline for meaningful change</span>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 p-8 rounded-lg">
          <h4 className="text-xl font-medium text-red-900 mb-6">Potential Red Flags</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <XMarkIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800">Looking for quick fixes or band-aid solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <XMarkIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800">Unwilling to invest in process changes</span>
            </div>
            <div className="flex items-start gap-3">
              <XMarkIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800">Unrealistic timeline expectations (&lt; 2 months)</span>
            </div>
            <div className="flex items-start gap-3">
              <XMarkIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800">No executive sponsor or engineering leadership buy-in</span>
            </div>
            <div className="flex items-start gap-3">
              <XMarkIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800">Budget constraints that prevent comprehensive approach</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FAQ() {
  return (
    <Container className="mt-32">
      <Subheading>FAQ</Subheading>
      <Heading as="h3" className="mt-2">
        Frequently Asked Questions
      </Heading>
      
      <div className="mt-16 space-y-8">
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">Is there any cost for the discovery call?</h4>
          <p className="text-gray-600">
            No, the initial 45-minute strategic discovery call is complimentary. It's designed for mutual assessment of fit and opportunity.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">What information will you need access to?</h4>
          <p className="text-gray-600">
            For the discovery call, we'll discuss challenges at a high level. No code access or confidential information is needed initially. Detailed technical access only occurs after engagement approval.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">Can my team join the call?</h4>
          <p className="text-gray-600">
            Absolutely. I recommend including your VP of Engineering or CTO, plus 1-2 senior developers who understand your current challenges. Maximum 4-5 participants for productive discussion.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">What's the typical investment range?</h4>
          <p className="text-gray-600">
            Most engagements range from $100,000 to $250,000 over 3-6 months, depending on scope and company size. We'll discuss specific investment during the discovery call based on your situation.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-950 mb-3">How do you measure success?</h4>
          <p className="text-gray-600">
            Success is measured through specific business metrics established during planning: development cycle time, defect rates, developer satisfaction scores, and team velocity. Every engagement includes baseline measurement and progress tracking.
          </p>
        </div>
      </div>
    </Container>
  )
}

function CallToAction() {
  return (
    <Container className="mt-32 mb-32">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to get started?
        </h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Schedule your strategic discovery call or email with your current challenges and goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#" className="bg-white text-blue-600 hover:bg-gray-50">
            Schedule Discovery Call
          </Button>
          <Button href="mailto:paul@d8aware.com" variant="secondary" className="border-white text-white hover:bg-white/10">
            Email Direct
          </Button>
        </div>
        <p className="text-blue-200 mt-6 text-sm">
          Looking for more information first? Review our <Link href="/services" className="text-white underline">Services Overview</Link> or read about <Link href="/about" className="text-white underline">My Approach</Link>.
        </p>
      </div>
    </Container>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <DiscoveryCallProcess />
      <ResponseCommitments />
      <QualificationFramework />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}