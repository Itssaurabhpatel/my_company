export const mainNavigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Custom Software', href: '/services/custom' },
      { name: 'Web Applications', href: '/services/web' },
      { name: 'Mobile Apps', href: '/services/mobile' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Cloud Solutions', href: '/services/cloud' },
      { name: 'Maintenance & Support', href: '/services/maintenance' }
    ]
  },
  { name: 'Industries', href: '/industries' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Custom Software', href: '/services/custom' },
    { name: 'Web Development', href: '/services/web' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'UI/UX Design', href: '/services/design' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ]
};