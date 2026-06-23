'use client'

import Image from 'next/image'
import { ArrowRight, Cloud, Lock, Zap, Users, BarChart3, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-2">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">SaaSOrder</span>
            </div>
            <div className="hidden gap-8 md:flex">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Platform</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Enterprise</a>
            </div>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">B2B Commerce, Reimagined</span>
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Enterprise procurement, <span className="text-primary">simplified</span>
              </h1>
              <p className="text-balance text-lg text-muted-foreground md:text-xl">
                The complete platform for discovering, purchasing, and managing recurring technology services. Transform your procurement operations with intelligent automation and enterprise-grade security.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Buyers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$50B</p>
                  <p className="text-sm text-muted-foreground">GMV Processed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
              <Image
                src="/hero-platform.png"
                alt="SaaSOrder Platform Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-t border-border/40 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
            {['Microsoft', 'Google', 'Amazon', 'Adobe', 'Cisco'].map((company) => (
              <div key={company} className="flex items-center justify-center py-4">
                <span className="text-sm font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-20 space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Everything you need to scale</h2>
            <p className="text-balance text-lg text-muted-foreground">Powerful features designed for modern procurement teams</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Cloud,
                title: 'Cloud Solutions',
                description: 'Access a curated catalog of cloud services with instant provisioning and management.'
              },
              {
                icon: Zap,
                title: 'Instant Setup',
                description: 'Deploy in minutes, not months. Get your procurement platform running immediately.'
              },
              {
                icon: Lock,
                title: 'Enterprise Security',
                description: 'SOC 2 certified with end-to-end encryption, compliance, and audit trails.'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Real-time collaboration tools for procurement teams and stakeholders.'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description: 'Gain insights into spending, ROI, and cost optimization opportunities.'
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Built-in controls and compliance checks for every purchase.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="rounded-xl border border-border/50 bg-card p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all">
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="border-t border-border/40 bg-secondary/30 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
              <Image
                src="/platform-demo.png"
                alt="Platform Demo"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Powerful procurement made simple</h2>
                <p className="text-lg text-muted-foreground">One integrated platform for your entire procurement lifecycle, from discovery to renewal.</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Unified vendor marketplace with vetted solutions',
                  'Automated contract management and renewals',
                  'Real-time budget tracking and forecasting',
                  'Integrated approval workflows and compliance',
                  'API-first architecture for seamless integrations'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline" className="mt-8">
                Explore Full Platform <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-20 space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Transparent pricing that scales with you</h2>
            <p className="text-balance text-lg text-muted-foreground">No hidden fees. Pay only for what you use.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$0',
                period: 'free forever',
                features: ['Up to 10 users', 'Basic reporting', '50 SKU catalog access', 'Community support']
              },
              {
                name: 'Professional',
                price: '$299',
                period: 'per month',
                features: ['Unlimited users', 'Advanced analytics', 'Full API access', 'Priority support', '99.9% SLA', 'SSO & SAML'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'contact sales',
                features: ['Dedicated account manager', 'Custom integrations', 'SLA guarantees', 'On-premise option', 'Advanced security']
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 md:p-10 transition-all ${
                  plan.highlighted
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                    : 'border-border/50 bg-card hover:border-primary/30'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <p className="text-sm text-muted-foreground mt-2">{plan.period}</p>
                </div>
                <Button className="w-full mb-8">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-br from-primary via-primary/90 to-accent/80 py-20 md:py-32 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">Ready to transform your procurement?</h2>
          <p className="text-balance text-lg mb-8 opacity-95">Join thousands of companies using SaaSOrder to streamline their purchasing process.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Your Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-5 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 SaaSOrder. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span>Made by SaaSOrder</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
