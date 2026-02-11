import type { MenuItem } from '@/types/menu'

export const menuItems: MenuItem[] = [ 
    { id: 'about-us', label: 'About Us', href: '/about-us', image: '/menu-images/why-us.jpg' },
    { id: 'contacts', label: 'Contacts Us', href: '/contacts-us', image: '/menu-images/contact.jpg' },
    { id: 'home', label: 'Home', href: '/', image: '/menu-images/home.webp' },
    { id: 'project', label: 'Project', href: '/project', image: '/menu-images/project.jpg' },
  { id: 'process', label: 'Process', href: '/process', image: '/menu-images/process.jpg' },
  { id: 'products', label: 'Products', href: '/products', image: '/menu-images/e-catalog.jpg' },
]
