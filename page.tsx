"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, TrendingUp, Zap, Check } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-400">DigitalEdge</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amplify Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We craft data-driven marketing strategies that transform your brand into a digital powerhouse. Ready to
              dominate your market?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that drive everything we do and deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Precision</h3>
                <p className="text-gray-400">
                  Every campaign is meticulously planned and executed with laser-focused targeting to maximize ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Growth</h3>
                <p className="text-gray-400">
                  We're obsessed with driving measurable growth that transforms businesses and exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Partnership</h3>
                <p className="text-gray-400">
                  Your success is our success. We work as an extension of your team, not just another vendor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
                <p className="text-gray-400">
                  We stay ahead of digital trends and leverage cutting-edge tools to keep you competitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business needs and marketing goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-400">$999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">Perfect for small businesses getting started</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">SEO Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Social Media Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Monthly Analytics Report</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Email Support</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => alert("Redirecting to checkout for Starter plan ($999/month)...")}
                >
                  Subscribe to Starter
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-gray-800/50 border-purple-500 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">$2,499</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">Ideal for growing businesses</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">PPC Campaign Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Content Marketing Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Weekly Performance Reviews</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Priority Phone Support</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => alert("Redirecting to checkout for Professional plan ($2,499/month)...")}
                >
                  Subscribe to Professional
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-400">$4,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">For large-scale operations</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom Marketing Automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Advanced Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 Premium Support</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => alert("Redirecting to checkout for Enterprise plan ($4,999/month)...")}
                >
                  Subscribe to Enterprise
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive digital marketing insights, industry trends, and proven strategies delivered to your inbox.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have accelerated their growth with our proven strategies.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 DigitalEdge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
