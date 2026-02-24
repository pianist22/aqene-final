import type { MenuItem } from '@/types/menu'

export const menuItems: MenuItem[] = [ 
    { id: 'about-us', label: 'About Us', href: '/about-us', image: '/menu-images/why-us.jpg' },
    { id: 'contacts', label: 'Contacts Us', href: '/contact-us', image: '/menu-images/contact.jpg' },
    { id: 'home', label: 'Home', href: '/', image: '/menu-images/home.webp' },
    { id: 'project', label: 'Project', href: '/projects', image: '/menu-images/project.jpg' },
  { id: 'process', label: 'Process', href: '/the-prakriya', image: '/menu-images/process.jpg' },
  { id: 'products', label: 'Products', href: '/products', image: '/menu-images/e-catalog.jpg' },
]
