'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  Cloud,
  Lock,
  Zap,
  Users,
  BarChart3,
  Shield,
  Search,
  ShoppingCart,
  Check,
  Star,
  Layers,
  Sparkles,
  MessageSquare,
  Globe,
  Database,
  Laptop,
  Server,
  Scale,
  Sliders,
  Calendar,
  X,
  Mail,
  Building,
  ArrowUpRight,
  TrendingUp,
  Award,
  Clock,
  ChevronRight,
  Volume2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  // Navigation State
  const [activeNavItem, setActiveNavItem] = useState('Home')

  // Search State in the Dashboard Mockup
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  // Interactive Tabs State
  const [activeTab, setActiveTab] = useState('Cloud Solutions')

  // Carousel State for right-side tab content
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Demo Booking Modal State
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false)
  const [demoFormData, setDemoFormData] = useState({
    name: '',
    email: '',
    company: '',
    marketplaceType: 'Software Marketplace'
  })

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  // Dashboard Stats Mock Data (Filtered by search)
  const allCategories = [
    { id: 'cloud', name: 'Cloud', icon: Cloud, count: '1,240', color: 'text-blue-500 bg-blue-50 border-blue-100' },
    { id: 'infra', name: 'Infrastructure', icon: Server, count: '890', color: 'text-purple-500 bg-purple-50 border-purple-100' },
    { id: 'security', name: 'Security', icon: Shield, count: '640', color: 'text-rose-500 bg-rose-50 border-rose-100' },
    { id: 'collab', name: 'Collaboration', icon: Users, count: '1,100', color: 'text-amber-500 bg-amber-50 border-amber-100' },
    { id: 'backup', name: 'Backup', icon: Database, count: '450', color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
    { id: 'domains', name: 'Domains', icon: Globe, count: '2,300', color: 'text-sky-500 bg-sky-50 border-sky-100' },
  ]

  const filteredCategories = searchQuery
    ? allCategories.filter(cat => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : allCategories

  // Tabs Data
  const tabsData = {
    'Cloud Solutions': {
      title: 'Cloud Solutions',
      description: 'Leverage leading cloud platforms to build, deploy and scale with confidence.',
      features: [
        'Microsoft Azure Integration',
        'Amazon Web Services (AWS)',
        'Google Cloud Platform (GCP)',
        'Scalable, Reliable, Secure',
        'Pay-as-you-go billing engine'
      ],
      products: [
        {
          name: 'Microsoft Azure',
          description: 'Hybrid cloud computing platform.',
          price: 'From $0.010/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 23 23" fill="none">
              <path d="M0 11.38L9.22 0H18.9L9.68 11.38H0Z" fill="#0072C6"/>
              <path d="M12.92 11.62L9.68 15.61L18.9 23H23L12.92 11.62Z" fill="#0072C6"/>
            </svg>
          )
        },
        {
          name: 'Amazon Web Services',
          description: 'Reliable, scalable cloud services.',
          price: 'From $0.010/mo',
          logo: (
            <svg className="w-12 h-8" viewBox="0 0 24 15" fill="none">
              <path d="M18.9 6.2c0-1.8-1-2.9-2.7-2.9-1.2 0-2.2.6-2.7 1.6l-.3-.2C13.4 3 13.8 1 15.6 1c2.1 0 3.7 1.4 3.7 3.9v4.2c0 .8.2 1.1.8 1.1h.4v.9h-.8c-1 0-1.3-.5-1.3-1.4V6.2z" fill="#232F3E"/>
              <path d="M1.3 5.4C1.3 2.8 3.1 1.7 5.4 1.7c1.7 0 3.3.6 4.4 1.5l-.6.7c-.9-.7-2.1-1.2-3.6-1.2-1.8 0-3 1-3 2.7 0 1.7 1.1 2.6 3 2.6 1.5 0 2.8-.5 3.7-1.3l.5.7C8.7 8.5 7.1 9.2 5.4 9.2c-2.3 0-4.1-1.3-4.1-3.8z" fill="#232F3E"/>
              <path d="M6 11.5c4.5 2.1 10.3 3.1 15.3 1.5.5-.2.9-.6.6-1.1-.3-.4-.8-.4-1.2-.2-4.5 1.4-9.8.5-13.9-1.4-.4-.2-.9.1-1.1.5-.2.5.1 1 .3.7" fill="#FF9900"/>
            </svg>
          )
        },
        {
          name: 'Google Cloud Platform',
          description: 'Build and run applications on Google.',
          price: 'From $0.010/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path d="M12.0001 0L3.13623 5.12207L12.0001 10.2441L20.864 5.12207L12.0001 0Z" fill="#EA4335"/>
              <path d="M3.13623 5.12207V15.3657L12.0001 10.2441V0L3.13623 5.12207Z" fill="#4285F4"/>
              <path d="M12.0001 10.2441L20.864 5.12207V15.3657L12.0001 20.4878V10.2441Z" fill="#FBBC05"/>
              <path d="M12.0001 20.4878L3.13623 15.3657L12.0001 10.2441L20.864 15.3657L12.0001 20.4878Z" fill="#34A853"/>
            </svg>
          )
        }
      ]
    },
    'Infrastructure': {
      title: 'Infrastructure',
      description: 'Host, manage, and scale server configurations with elastic computing resources.',
      features: [
        'Dedicated VPS Hosting',
        'Kubernetes Container Registry',
        'Bare Metal Cloud Server Provisioning',
        'VPC Networking & Load Balancers',
        'Automated Backups & Monitoring'
      ],
      products: [
        {
          name: 'DigitalOcean',
          description: 'Developer-friendly cloud computing.',
          price: 'From $4.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#0080FF">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c5.96 0 10.9-4.36 11.83-10.1h-4.09c-.87 3.52-4.04 6.1-7.74 6.1-4.42 0-8-3.58-8-8s3.58-8 8-8c3.7 0 6.87 2.58 7.74 6.1h4.09C22.9 4.36 17.96 0 12 0zm2 10h3v3h-3v-3zm-4 4h3v3h-3v-3zm0-8h3v3h-3V6z"/>
            </svg>
          )
        },
        {
          name: 'Vultr Cloud VPS',
          description: 'SSD Cloud Instances globally.',
          price: 'From $5.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#007BFF">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-2.5L2 17zm0-5l10 5 10-5-10-2.5L2 12z"/>
            </svg>
          )
        },
        {
          name: 'Linode Compute',
          description: 'Affordable Linux virtual machines.',
          price: 'From $5.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#00B050">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
            </svg>
          )
        }
      ]
    },
    'Email & Collaboration': {
      title: 'Email & Collaboration',
      description: 'Synchronize workflows, enterprise-grade business mailboxes, and workspace collaboration portals.',
      features: [
        'Google Workspace Office Suite',
        'Microsoft 365 Business Premium',
        'Zoho Workplace Custom Mailboxes',
        'Real-time File Synchronization',
        'Advanced Anti-Spam protection'
      ],
      products: [
        {
          name: 'Google Workspace',
          description: 'Gmail, Drive, Docs, and Meet.',
          price: 'From $6.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#4285F4" opacity="0.1"/>
              <path d="M6 12h12M12 6v12" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )
        },
        {
          name: 'Microsoft 365',
          description: 'Office desktop apps and Cloud storage.',
          price: 'From $8.25/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 23 23" fill="none">
              <path d="M0 0H11V11H0V0Z" fill="#F25022"/>
              <path d="M12 0H23V11H12V0Z" fill="#7FBA00"/>
              <path d="M0 12H11V23H0V12Z" fill="#00A4EF"/>
              <path d="M12 12H23V23H12V12Z" fill="#FFB900"/>
            </svg>
          )
        },
        {
          name: 'Zoho Mail',
          description: 'Secure, ad-free business email.',
          price: 'From $1.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="6" fill="#F44336"/>
              <circle cx="16" cy="8" r="6" fill="#4CAF50"/>
              <circle cx="8" cy="16" r="6" fill="#FFEB3B"/>
              <circle cx="16" cy="16" r="6" fill="#2196F3"/>
            </svg>
          )
        }
      ]
    },
    'Backup & Security': {
      title: 'Backup & Security',
      description: 'Bulletproof business data backups and endpoint security mechanisms.',
      features: [
        'Acronis Cyber Protect Backups',
        'Sophos Endpoint Threat Protection',
        'Veeam Cloud Data Management',
        'Ransomware Defense Shielding',
        'Zero-trust compliance systems'
      ],
      products: [
        {
          name: 'Acronis Backup',
          description: 'Hybrid cloud backup solutions.',
          price: 'From $12.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#005B94">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
          )
        },
        {
          name: 'Sophos Endpoint',
          description: 'Anti-virus & cybersecurity tools.',
          price: 'From $3.50/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#000F9F">
              <path d="M12 2L2 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-4zm0 6h6v4h-6V8z"/>
            </svg>
          )
        },
        {
          name: 'Veeam Protect',
          description: 'Disaster recovery and site backups.',
          price: 'From $15.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#00B159">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <path d="M8 8h8M8 12h8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )
        }
      ]
    },
    'Domain Names': {
      title: 'Domain Names',
      description: 'Register domain endings, configure DNS root servers, and manage SSL certificates.',
      features: [
        'Premium Domain Name Search',
        'Free DNSSEC & WHOIS Protection',
        'Wildcard SSL Certificate Enrolment',
        'Anycast Global DNS Routing',
        'Automatic Renewal Guard'
      ],
      products: [
        {
          name: 'Cloudflare DNS',
          description: 'Fastest global DNS resolver.',
          price: 'From $0.00/mo',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#F38020">
              <path d="M22.8 13.5a4.2 4.2 0 00-3.3-3c-.4-.1-.7-.1-.9-.1-.2-1.3-.9-2.5-2-3.3a5.5 5.5 0 00-6.7.3c-.9.7-1.5 1.8-1.7 3a4 4 0 00-4 3.7c0 .2.1.3.1.5-1 .5-1.7 1.5-1.7 2.7 0 1.7 1.4 3.1 3.1 3.1h15c1.7 0 3-1.3 3.1-3 .1-1.6-.9-3.2-2.7-3.9z"/>
            </svg>
          )
        },
        {
          name: 'Namecheap Registrar',
          description: 'Domain registry and hosting service.',
          price: 'From $8.98/yr',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#DE3721">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )
        },
        {
          name: 'GoDaddy Domains',
          description: 'Global domain name broker.',
          price: 'From $11.99/yr',
          logo: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#00A699">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14H9v-2h4v-2H9v-2h4V8H7v8h6v2z"/>
            </svg>
          )
        }
      ]
    }
  }

  // Handle Demo Modal Form Submit
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoFormSubmitted(true)
    setTimeout(() => {
      setDemoFormSubmitted(false)
      setIsDemoModalOpen(false)
      setDemoFormData({ name: '', email: '', company: '', marketplaceType: 'Software Marketplace' })
    }, 2500)
  }

  // Handle Newsletter Form Submit
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSubmitted(true)
    setTimeout(() => {
      setNewsletterSubmitted(false)
      setNewsletterEmail('')
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      
      {/* 1. Header Section */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3 select-none cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f41b5d] text-white shadow-lg shadow-[#f41b5d]/20 hover:scale-105 transition-transform duration-300">
                <svg className="w-5.5 h-5.5 transform hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-10.84 0M10.29 17.29a6 6 0 005.15-5.15M17.29 10.29a6 6 0 00-5.15 5.15M9 9l3 3m0 0l3-3m-3 3v8" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.25em] uppercase">SAAS</span>
                <span className="text-[19px] font-black text-slate-900 tracking-tight">ORDER</span>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="hidden xl:flex items-center gap-8">
              {['Home', 'Platform', 'Catalog', 'Customers', 'Partners', 'Pricing', 'News', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNavItem(item)}
                  className={`relative text-[14px] font-semibold transition-all hover:text-[#f41b5d] py-2 cursor-pointer ${
                    activeNavItem === item ? 'text-[#f41b5d]' : 'text-slate-600'
                  }`}
                >
                  {item}
                  {activeNavItem === item && (
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#f41b5d] rounded-full transition-all" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="hidden sm:flex items-center gap-2 bg-[#f41b5d] hover:bg-[#d0144d] text-white text-xs sm:text-sm font-bold tracking-wide py-3 px-5 sm:px-6 rounded-full shadow-lg shadow-[#f41b5d]/20 hover:shadow-[#f41b5d]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Launch Your Market Place
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-[#f41b5d] hover:border-[#f41b5d]/30 hover:bg-[#f41b5d]/[0.03] transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-block">
                <span className="text-[11px] font-bold text-[#f41b5d] tracking-[0.25em] uppercase border-b border-[#f41b5d]/20 pb-1">
                  TECHNOLOGY MARKETPLACE
                </span>
              </div>
              
              <h1 className="text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Launch. Manage. <br />
                <span className="text-[#f41b5d] inline-block mt-1 transform hover:skew-x-2 transition-transform duration-300">Scale.</span>
              </h1>
              
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
                Build your own procurement marketplace for software, cloud, infrastructure and digital services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex items-center gap-2 bg-[#f41b5d] hover:bg-[#d0144d] text-white py-4 px-8 rounded-lg font-bold shadow-lg shadow-[#f41b5d]/15 hover:shadow-[#f41b5d]/25 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setActiveNavItem('Catalog')}
                  className="flex items-center gap-2 bg-white border border-slate-200 text-[#f41b5d] hover:border-[#f41b5d]/30 hover:bg-[#f41b5d]/[0.02] py-4 px-8 rounded-lg font-bold hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 text-[#f41b5d]" />
                </button>
              </div>

              {/* Horizontal Stats Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-10 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-[#f41b5d]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 text-[#f41b5d] shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">+250</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Vendors</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-[#f41b5d]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 text-[#f41b5d] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">+5000</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Products</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-[#f41b5d]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 text-[#f41b5d] shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">+100</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Mockup Column */}
            <div className="lg:col-span-7 flex justify-center items-center w-full">
              <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/60 bg-white overflow-hidden flex flex-row h-[460px] w-full max-w-[580px] hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:scale-[1.01] transition-all duration-500">
                
                {/* Mockup Sidebar - Dark Navy */}
                <div className="w-14 bg-[#0e1726] flex flex-col items-center justify-between py-5 shrink-0 border-r border-slate-900">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-7 h-7 rounded-full bg-[#f41b5d] flex items-center justify-center text-white cursor-pointer hover:rotate-12 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-10.84 0M10.29 17.29a6 6 0 005.15-5.15M17.29 10.29a6 6 0 00-5.15 5.15M9 9l3 3m0 0l3-3m-3 3v8" />
                      </svg>
                    </div>

                    <div className="flex flex-col gap-4 text-slate-500">
                      {[
                        { icon: Laptop, active: true },
                        { icon: Users, active: false },
                        { icon: ShoppingCart, active: false },
                        { icon: BarChart3, active: false },
                        { icon: MessageSquare, active: false },
                        { icon: Shield, active: false },
                        { icon: Sliders, active: false }
                      ].map((item, idx) => {
                        const IconComponent = item.icon
                        return (
                          <div
                            key={idx}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:text-white hover:bg-slate-800 ${
                              item.active ? 'bg-[#f41b5d]/10 text-[#f41b5d]' : 'text-slate-400'
                            }`}
                          >
                            <IconComponent className="w-4.5 h-4.5" />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f41b5d] animate-ping" />
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer">
                      <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mockup Main Panel */}
                <div className="flex-1 bg-white flex flex-col p-5 overflow-y-auto">
                  
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-800">Welcome back, Admin</h3>
                      <span>👋</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-full py-1 px-3 shadow-sm hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="w-3.5 h-3.5 rounded-sm bg-blue-500 flex items-center justify-center shrink-0">
                        <span className="text-[7px] text-white font-bold font-sans">M</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600">Microsoft 365</span>
                    </div>
                  </div>

                  {/* Mockup Search Bar */}
                  <div className="mt-4">
                    <div className={`relative flex items-center bg-slate-50 border rounded-lg px-3 py-1.5 transition-all ${
                      searchFocused ? 'border-[#f41b5d]/50 ring-2 ring-[#f41b5d]/10 bg-white' : 'border-slate-200'
                    }`}>
                      <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search for products, vendors or categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        className="bg-transparent border-none outline-none text-[11px] text-slate-700 w-full placeholder:text-slate-400"
                      />
                      <button className="bg-[#f41b5d] hover:bg-[#d0144d] text-white text-[10px] font-bold tracking-wide py-1 px-3 rounded-md transition-colors cursor-pointer shrink-0">
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Mockup Grid Stats */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {[
                      { label: 'Vendors', value: '250+', color: 'border-emerald-100 bg-emerald-50/30' },
                      { label: 'Products', value: '5000+', color: 'border-blue-100 bg-blue-50/30' },
                      { label: 'Categories', value: '120+', color: 'border-purple-100 bg-purple-50/30' },
                      { label: 'Orders', value: '960+', color: 'border-rose-100 bg-rose-50/30' }
                    ].map((stat, idx) => (
                      <div key={idx} className={`p-2.5 rounded-lg border text-center hover:scale-105 transition-all duration-300 ${stat.color}`}>
                        <p className="text-xs font-black text-slate-800 leading-none">{stat.value}</p>
                        <p className="text-[9px] font-semibold text-slate-500 mt-1 leading-none">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mockup Categories */}
                  <div className="mt-5">
                    <div className="flex justify-between items-center mb-2.5">
                      <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Top Categories</h4>
                      <button className="text-[10px] font-semibold text-slate-400 hover:text-[#f41b5d] flex items-center gap-0.5 cursor-pointer">
                        View all
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {filteredCategories.slice(0, 6).map((cat, idx) => {
                        const IconComp = cat.icon
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 border border-slate-100 rounded-lg hover:border-[#f41b5d]/20 hover:bg-[#f41b5d]/[0.01] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                          >
                            <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 border ${cat.color}`}>
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-[10px] font-bold text-slate-700 truncate leading-tight">{cat.name}</p>
                              <p className="text-[8px] font-semibold text-slate-400 mt-0.5">{cat.count} listings</p>
                            </div>
                          </div>
                        )
                      })}
                      {filteredCategories.length === 0 && (
                        <p className="text-[10px] text-slate-400 col-span-3 text-center py-2">No matching categories</p>
                      )}
                    </div>
                  </div>

                  {/* Mockup Vendors */}
                  <div className="mt-5">
                    <div className="flex justify-between items-center mb-2.5">
                      <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Top Vendors</h4>
                      <button className="text-[10px] font-semibold text-slate-400 hover:text-[#f41b5d] flex items-center gap-0.5 cursor-pointer">
                        View all
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2 p-2 border border-slate-100 rounded-lg bg-slate-50/30">
                      {['Microsoft', 'AWS', 'Google', 'Adobe', 'Zoho', 'Cisco'].map((vendor, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center bg-white border border-slate-200/80 rounded-md py-1.5 px-2 text-[8px] font-bold text-slate-500 hover:text-[#f41b5d] hover:border-[#f41b5d]/20 hover:scale-105 transition-all shadow-sm cursor-pointer"
                        >
                          {vendor}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Trusted Vendors logo bar */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-bold text-slate-400 tracking-[0.25em] uppercase mb-8">
            TRUSTED BY GLOBAL TECHNOLOGY VENDORS
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16 opacity-75">
            {[
              { name: 'Microsoft', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-blue-500">M</span>icrosoft</span> },
              { name: 'Google', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-red-500">G</span>oogle</span> },
              { name: 'AWS', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-orange-500">A</span>WS</span> },
              { name: 'Adobe', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-red-600">A</span>dobe</span> },
              { name: 'Cisco', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-sky-500">C</span>isco</span> },
              { name: 'Zoho', logo: <span className="font-extrabold text-slate-700 tracking-tight"><span className="text-yellow-500">Z</span>oho</span> },
              { name: 'Sophos', logo: <span className="font-extrabold text-slate-400 tracking-tight hover:text-slate-800 transition-colors">SOPHOS</span> },
              { name: 'VMware', logo: <span className="font-extrabold text-slate-400 tracking-tight hover:text-slate-800 transition-colors">vmware</span> },
              { name: 'Acronis', logo: <span className="font-extrabold text-slate-400 tracking-tight hover:text-slate-800 transition-colors">Acronis</span> },
              { name: 'Red Hat', logo: <span className="font-extrabold text-slate-400 tracking-tight hover:text-slate-800 transition-colors"><span className="text-red-600">Red</span>Hat</span> },
              { name: 'DocuSign', logo: <span className="font-extrabold text-slate-400 tracking-tight hover:text-slate-800 transition-colors">DocuSign</span> },
            ].map((company, idx) => (
              <div
                key={idx}
                className="transform hover:scale-105 transition-all duration-300 filter hover:brightness-95 flex items-center justify-center cursor-pointer"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Procurement Platform for Your Tech Business */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Procurement Platform for Your <span className="text-[#f41b5d]">Tech Business</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Your one-stop solution for discovering, purchasing and managing recurring technology services.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                title: 'Discover',
                description: 'Find products across thousands of global vendors.',
                icon: Search,
                color: 'text-[#f41b5d] bg-pink-50 border-pink-100'
              },
              {
                title: 'Compare',
                description: 'Compare pricing & solutions to find the right fit.',
                icon: Scale,
                color: 'text-purple-600 bg-purple-50 border-purple-100'
              },
              {
                title: 'Purchase',
                description: 'Streamlined procurement with secure checkout and flexible payments.',
                icon: ShoppingCart,
                color: 'text-blue-600 bg-blue-50 border-blue-100'
              },
              {
                title: 'Manage',
                description: 'Manage subscriptions, renewals and billing from one dashboard.',
                icon: Sliders,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
              }
            ].map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#f41b5d]/20 hover:shadow-[0_15px_30px_rgba(244,27,93,0.05)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 duration-300 ${item.color}`}>
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom Button */}
          <div className="pt-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#f41b5d] hover:border-[#f41b5d]/30 hover:bg-[#f41b5d]/[0.02] py-3.5 px-7 rounded-lg font-bold transition-all cursor-pointer shadow-sm hover:shadow"
            >
              Explore Procurement Suite
              <ArrowRight className="w-4.5 h-4.5 text-[#f41b5d]" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Everything You Need. One Marketplace */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Everything You Need. <span className="text-[#f41b5d]">One Marketplace.</span>
            </h2>
          </div>

          {/* Horizontal Tabs list */}
          <div className="flex border-b border-slate-200 overflow-x-auto justify-center no-scrollbar">
            <div className="flex space-x-8 px-4">
              {Object.keys(tabsData).map((tabName) => (
                <button
                  key={tabName}
                  onClick={() => {
                    setActiveTab(tabName)
                    setCarouselIndex(0)
                  }}
                  className={`text-sm sm:text-base font-bold pb-4 transition-all whitespace-nowrap cursor-pointer relative ${
                    activeTab === tabName ? 'text-[#f41b5d]' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tabName}
                  {activeTab === tabName && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f41b5d] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Tab Content Grid */}
          <div className="grid gap-12 lg:grid-cols-12 items-center bg-slate-50/30 border border-slate-100 rounded-3xl p-6 sm:p-10 lg:p-12">
            
            {/* Left description column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
                {tabsData[activeTab as keyof typeof tabsData].title}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed">
                {tabsData[activeTab as keyof typeof tabsData].description}
              </p>

              {/* Checkbox Benefits List */}
              <ul className="space-y-3.5 pt-2">
                {tabsData[activeTab as keyof typeof tabsData].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-50 text-[#f41b5d] shrink-0 border border-pink-100">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Products slide column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product cards list */}
              <div className="grid gap-4 sm:grid-cols-3">
                {tabsData[activeTab as keyof typeof tabsData].products.map((product, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border rounded-2xl p-6 text-center space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      carouselIndex === idx ? 'border-[#f41b5d]/40 ring-1 ring-[#f41b5d]/5' : 'border-slate-150'
                    }`}
                    onClick={() => setCarouselIndex(idx)}
                  >
                    <div className="flex justify-center items-center h-14 w-full bg-slate-50 border border-slate-100 rounded-xl px-2 py-3 shadow-inner">
                      {product.logo}
                    </div>
                    
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{product.name}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold line-clamp-2 leading-snug">{product.description}</p>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs font-bold text-slate-700">{product.price}</p>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsDemoModalOpen(true)
                        }}
                        className="mt-3.5 w-full bg-white border border-slate-200 hover:border-[#f41b5d]/30 hover:bg-[#f41b5d]/[0.02] text-[#f41b5d] text-xs font-bold py-2 rounded-lg transition-all cursor-pointer"
                      >
                        View Plans
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 pt-2">
                {tabsData[activeTab as keyof typeof tabsData].products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      carouselIndex === idx ? 'bg-[#f41b5d] w-6' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. Four Counter Badges Bar */}
      <section className="bg-slate-50/50 border-y border-slate-150 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
            
            <div className="flex flex-col items-center justify-center p-4 bg-white border border-slate-100 rounded-2xl hover:scale-[1.03] transition-transform shadow-sm">
              <span className="text-3xl mb-2">😊</span>
              <p className="text-2xl font-black text-slate-900">98%</p>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">Customer Satisfaction</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white border border-slate-100 rounded-2xl hover:scale-[1.03] transition-transform shadow-sm">
              <span className="text-3xl mb-2">🎧</span>
              <p className="text-2xl font-black text-slate-900">24/7</p>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">Expert Support</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white border border-slate-100 rounded-2xl hover:scale-[1.03] transition-transform shadow-sm">
              <span className="text-3xl mb-2">🛡️</span>
              <p className="text-2xl font-black text-slate-900">99.9%</p>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">Platform Uptime</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white border border-slate-100 rounded-2xl hover:scale-[1.03] transition-transform shadow-sm">
              <span className="text-3xl mb-2">🌐</span>
              <p className="text-2xl font-black text-slate-900">150+</p>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">Countries Served</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Insights and Updates Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 text-left">
              <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Insights and <span className="text-[#f41b5d]">Updates</span>
              </h2>
            </div>
            <button
              onClick={() => setActiveNavItem('News')}
              className="text-sm font-bold text-[#f41b5d] hover:text-[#d0144d] flex items-center gap-1 cursor-pointer shrink-0"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                tag: 'TECHNOLOGY INSIGHTS',
                title: "Cyber Resilient Platforms are Essentials for Today's Enterprises",
                imageBg: 'from-blue-950 via-slate-900 to-indigo-950',
                cardGraphic: (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Shield className="w-24 h-24 text-blue-500 animate-pulse" />
                  </div>
                )
              },
              {
                tag: 'NEWS & UPDATES',
                title: "Unlock Cloud Sales: A Starter's 5-Step Guide - Part 1",
                imageBg: 'from-pink-900 via-rose-950 to-slate-950',
                cardGraphic: (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Cloud className="w-24 h-24 text-pink-500 animate-pulse" />
                  </div>
                )
              },
              {
                tag: 'CUSTOMER & PARTNER SUCCESS',
                title: "Febno establish RnD and offshore development centre in India",
                imageBg: 'from-emerald-950 via-teal-950 to-slate-900',
                cardGraphic: (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <Database className="w-24 h-24 text-emerald-500 animate-pulse" />
                  </div>
                )
              },
              {
                tag: 'MARKETPLACE',
                title: "How Marketplaces Drive Growth for Tech Resellers",
                imageBg: 'from-indigo-950 via-purple-950 to-slate-900',
                cardGraphic: (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <TrendingUp className="w-24 h-24 text-purple-500 animate-pulse" />
                  </div>
                )
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                
                {/* Image Placeholder with Gradients */}
                <div className={`relative h-44 w-full bg-gradient-to-br ${card.imageBg} overflow-hidden shrink-0 flex items-center justify-center`}>
                  {card.cardGraphic}
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-extrabold tracking-wider py-1.5 px-3 rounded-full border border-white/20 uppercase">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug group-hover:text-[#f41b5d] transition-colors line-clamp-3">
                    {card.title}
                  </h3>
                  
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#f41b5d] flex items-center gap-1 transition-colors cursor-pointer self-start"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Call to Action (CTA) Banner */}
      <section className="py-16 md:py-24 bg-[#090e1a] relative overflow-hidden text-white border-b border-slate-900">
        
        {/* Background dotted art grids */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#f41b5d]/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#f41b5d]/15 to-transparent rounded-full blur-3xl animate-pulse" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-16">
            
            {/* Left side Rocket icon & details */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-full bg-[#f41b5d] flex items-center justify-center text-white shadow-xl shadow-[#f41b5d]/20 shrink-0 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-10.84 0M10.29 17.29a6 6 0 005.15-5.15M17.29 10.29a6 6 0 00-5.15 5.15M9 9l3 3m0 0l3-3m-3 3v8" />
                </svg>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to Build Your <br className="hidden sm:inline" /> Technology <span className="text-[#f41b5d]">Marketplace?</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Launch procurement, monetization and vendor management from a single platform.
                </p>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-[#f41b5d] hover:bg-[#d0144d] text-white py-4 px-8 rounded-lg font-bold shadow-lg shadow-[#f41b5d]/20 hover:shadow-[#f41b5d]/35 hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto text-center"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-transparent border border-slate-700 text-white hover:border-white hover:bg-white/5 py-4 px-8 rounded-lg font-bold hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto text-center"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Footer Section */}
      <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 text-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Links */}
          <div className="grid gap-10 md:grid-cols-6 lg:grid-cols-12 text-left">
            
            {/* Logo description */}
            <div className="md:col-span-3 lg:col-span-4 space-y-5">
              <div className="flex items-center gap-2.5 select-none cursor-pointer">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f41b5d] text-white shadow-md shadow-[#f41b5d]/15">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-10.84 0M10.29 17.29a6 6 0 005.15-5.15M17.29 10.29a6 6 0 00-5.15 5.15M9 9l3 3m0 0l3-3m-3 3v8" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-extrabold text-slate-400 tracking-[0.2em] uppercase">SAAS</span>
                  <span className="text-[17px] font-black text-slate-900 tracking-tight">ORDER</span>
                </div>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                A platform for transforming transactions and empowering trade.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4 pt-2">
                {['Facebook', 'LinkedIn', 'Twitter', 'YouTube'].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center justify-center w-8.5 h-8.5 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-[#f41b5d] hover:border-[#f41b5d]/25 hover:bg-[#f41b5d]/[0.02] hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    {social === 'Facebook' && <span className="font-extrabold text-xs">f</span>}
                    {social === 'LinkedIn' && <span className="font-extrabold text-xs">in</span>}
                    {social === 'Twitter' && <span className="font-extrabold text-xs">t</span>}
                    {social === 'YouTube' && <span className="font-extrabold text-[10px]">YT</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 1 - Platform */}
            <div className="md:col-span-1.5 lg:col-span-2 space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">Platform</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Catalog</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Vendors</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Column 2 - Solutions */}
            <div className="md:col-span-1.5 lg:col-span-2 space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Cloud</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Collaboration</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Backup & Recovery</a></li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div className="md:col-span-1.5 lg:col-span-2 space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">Resources</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">News</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div className="md:col-span-1.5 lg:col-span-2 space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">Company</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#f41b5d] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-3 lg:col-span-4 space-y-4">
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">Subscribe to our newsletter</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Be the first to get latest offers and news on our products directly in your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/50 focus:ring-2 focus:ring-[#f41b5d]/10 transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#f41b5d] hover:bg-[#d0144d] text-white text-xs sm:text-sm font-bold tracking-wide py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterSubmitted && (
                  <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold animate-fadeIn">
                    <Check className="w-3.5 h-3.5" />
                    Successfully subscribed!
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Copyright & Contacts */}
          <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-semibold">
            
            <p className="text-center md:text-left select-none">
              &copy; 2026 SaaSOrder | +91 844 844 2121 (India) | +971 54 405 5009 (UAE) | info@saasorder.com
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#f41b5d] transition-colors">Privacy Policy</a>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <a href="#" className="hover:text-[#f41b5d] transition-colors">Terms of Service</a>
            </div>

          </div>

        </div>
      </footer>

      {/* 10. Interactive Modal - Booking / Consultation Form */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          
          <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden animate-scaleIn relative">
            
            {/* Modal Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-pink-50 border border-pink-100 text-[#f41b5d] flex items-center justify-center shrink-0">
                  <Calendar className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-800">Book a Demo</h3>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="w-8 h-8 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {demoFormSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-black text-slate-800">Booking Requested!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                      Our procurement experts will reach out to you shortly at <span className="font-semibold text-slate-700">{demoFormData.email}</span>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4 text-left">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={demoFormData.name}
                        onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/50 focus:ring-2 focus:ring-[#f41b5d]/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={demoFormData.email}
                        onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/50 focus:ring-2 focus:ring-[#f41b5d]/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={demoFormData.company}
                        onChange={(e) => setDemoFormData({ ...demoFormData, company: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#f41b5d]/50 focus:ring-2 focus:ring-[#f41b5d]/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Marketplace Type Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Marketplace Type</label>
                    <select
                      value={demoFormData.marketplaceType}
                      onChange={(e) => setDemoFormData({ ...demoFormData, marketplaceType: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-sm text-slate-800 outline-none focus:border-[#f41b5d]/50 focus:ring-2 focus:ring-[#f41b5d]/10 transition-all"
                    >
                      <option value="Software Marketplace">Software Marketplace</option>
                      <option value="Cloud Procurement Portal">Cloud Procurement Portal</option>
                      <option value="Infrastructure Marketplace">Infrastructure Marketplace</option>
                      <option value="Domain Registrar Suite">Domain Registrar Suite</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#f41b5d] hover:bg-[#d0144d] text-white font-bold py-3.5 rounded-lg transition-all cursor-pointer shadow-lg shadow-[#f41b5d]/10 hover:shadow-[#f41b5d]/20"
                  >
                    Confirm Demo Booking
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      )}

    </main>
  )
}
