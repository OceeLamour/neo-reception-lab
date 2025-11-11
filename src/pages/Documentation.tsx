import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  UserCircle,
  Building,
  Plug,
  Palette,
  Shield,
  Rocket,
  Volume2,
  Calendar,
  Users,
  MessageSquare,
  AlertCircle,
  Mail,
  Phone,
  BookOpen,
  HelpCircle,
} from "lucide-react";

const Documentation = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              VoiceSteer Documentation
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-inter">
              Everything you need to set up, customize, and optimize your AI receptionist
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#setup">
              <Button variant="outline" size="sm">
                <Rocket className="h-4 w-4 mr-2" />
                Setup Guide
              </Button>
            </a>
            <a href="#troubleshooting">
              <Button variant="outline" size="sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                Troubleshooting
              </Button>
            </a>
            <a href="#support">
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support Resources
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section id="setup" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Setup Guide
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Get your AI receptionist up and running in six simple steps
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1: Sign Up */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <UserCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 1: Sign Up and Create Your Account
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Visit <a href="https://voicesteer.com" className="text-teal hover:text-green">voicesteer.com</a> and create your account. You'll get 50 free conversations to start—no credit card required.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span>Enter your business email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span>Choose a secure password</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span>Verify your email address</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 2: Select Business Type */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 2: Select Your Business Type
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Choose from our industry-specific templates to get pre-configured conversation flows and responses.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Healthcare</p>
                      <p className="text-xs text-muted-foreground">Patient scheduling & inquiries</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Home Services</p>
                      <p className="text-xs text-muted-foreground">Job booking & dispatch</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Professional Services</p>
                      <p className="text-xs text-muted-foreground">Lead qualification & scheduling</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Retail & Local</p>
                      <p className="text-xs text-muted-foreground">Store info & availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 3: Connect Your Tools */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Plug className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 3: Connect Your Tools (Optional)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with your existing systems for seamless workflow automation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Calendar className="h-5 w-5 text-teal" />
                      <div>
                        <p className="font-semibold text-sm">Google Calendar</p>
                        <p className="text-xs text-muted-foreground">Automatic appointment booking</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <MessageSquare className="h-5 w-5 text-teal" />
                      <div>
                        <p className="font-semibold text-sm">Twilio / WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Multi-channel communication</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Users className="h-5 w-5 text-teal" />
                      <div>
                        <p className="font-semibold text-sm">CRM Systems</p>
                        <p className="text-xs text-muted-foreground">Customer data synchronization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 4: Customize Your AI */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 4: Customize Your AI's Behavior
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Make your AI sound like your business. Adjust personality, responses, and conversation flows.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span><strong>Set Your Voice:</strong> Professional, friendly, or casual tone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span><strong>Custom Responses:</strong> Add FAQs and business-specific information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span><strong>Conversation Flows:</strong> Define how the AI handles different scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">•</span>
                      <span><strong>Operating Hours:</strong> Set when the AI should answer calls</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 5: Set Safety Rules */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 5: Configure Safety Rules
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Define when the AI should transfer to a human agent and set escalation rules.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm"><strong>Handoff Triggers:</strong></p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Customer requests to speak with a person</li>
                      <li>• Complex issues the AI can't resolve</li>
                      <li>• Emergency situations</li>
                      <li>• Sensitive account matters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 6: Go Live */}
            <Card className="p-6 hover:shadow-soft transition-all border-2 border-green">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold mb-2 text-foreground">
                    Step 6: Test and Go Live
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Test your AI with sample conversations, then activate it to start handling real calls.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" size="lg">
                      Start Test Call
                    </Button>
                    <Button variant="outline" size="lg">
                      View Dashboard
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshooting" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Troubleshooting
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Common issues and how to resolve them
            </p>
          </div>

          <div className="space-y-6">
            {/* Audio Quality Issue */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Volume2 className="h-6 w-6 text-teal mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Audio Quality Issues
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Problem:</strong> The AI's voice sounds choppy, unclear, or delayed.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Check your internet connection speed (minimum 5 Mbps recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Verify your phone system's audio codecs support high-quality voice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Contact support to adjust voice quality settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Google Calendar Issue */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-teal mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Google Calendar Not Syncing
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Problem:</strong> Appointments aren't appearing in your calendar or bookings are failing.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Re-authorize the Google Calendar connection in Settings → Integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Ensure calendar permissions include "Make changes to events"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Check that your availability rules match your actual calendar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Handoff Issue */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-teal mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Human Handoff Not Working
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Problem:</strong> The AI isn't transferring calls when it should.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Verify your fallback phone number is correct in Settings → Handoff Rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Test the transfer trigger keywords (e.g., "speak to a person")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Review recent call logs to see if handoff was triggered</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* WhatsApp Issue */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-teal mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    WhatsApp Messages Not Sending
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Problem:</strong> Customers aren't receiving WhatsApp confirmations or updates.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Verify WhatsApp Business API is properly connected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Check message templates are approved by WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Ensure phone numbers include correct country codes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* AI Not Responding */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-destructive mt-1 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    AI Agent Not Responding to Calls
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Problem:</strong> Calls ring but the AI doesn't answer.
                  </p>
                  <p className="text-muted-foreground mb-2"><strong>Solutions:</strong></p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Check that your agent is set to "Active" in the dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Verify operating hours match your expected availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Ensure your phone number forwarding is configured correctly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green mt-1">✓</span>
                      <span>Contact support if the issue persists after checking these settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Resources Section */}
      <section id="support" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Support Resources
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Need more help? We're here for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Live Chat Support */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Live Chat Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our support team. Available Monday-Friday, 9am-6pm EST.
                  </p>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </div>
            </Card>

            {/* Email Support */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Email Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    support@voicesteer.com
                  </Button>
                </div>
              </div>
            </Card>

            {/* Phone Support */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Phone Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Talk to a support specialist. Available for Pro and Enterprise plans.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </Card>

            {/* Knowledge Base */}
            <Card className="p-6 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal to-green shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold mb-2 text-foreground">
                    Knowledge Base
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Browse our complete library of guides, tutorials, and best practices.
                  </p>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Articles
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-cta text-center">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-4 text-white">
              Still Have Questions?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our team is ready to help you get the most out of VoiceSteer. Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Documentation;
