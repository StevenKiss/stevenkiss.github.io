'use client';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('Failed to send email:', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-page">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;d love to hear from you! Whether you have a project in mind, 
                want to collaborate, or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">steventkiss@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:pt-0">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={4}
                      required
                      className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  {status === 'success' && (
                    <div className="text-green-600 text-center p-3 bg-green-50 rounded-lg">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="text-red-600 text-center p-3 bg-red-50 rounded-lg">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
