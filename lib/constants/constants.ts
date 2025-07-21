const urlApi = process.env.NEXT_PUBLIC_URLAPI

const documentType = [
  "C.E.",
  "DNI",
  "Otro"
]

const languageMenu = [
  {
    title: 'Español', 
    country: 'España'
  },
  {
    title: 'English', 
    country: 'UK'
  },
  {
    title: 'Deutsche', 
    country: 'Deutschland'
  },
]

const sidebarMenu = [
  {
    title: 'Dashboard',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'pi pi-bolt'
      },
    ]
  },
  {
    title: 'Salud',
    items: [
      {
        title: 'Resumen',
        href: '/dashboard/health/',
        icon: 'pi pi-chart-bar',
      },
      {
        title: 'Registro Presión',
        href: '/dashboard/health/bp/new',
        icon: 'pi pi-stopwatch',
      }
    ]
  },
]

const sidebarAdminMenu = [
  {
    title: 'Usuarios',
    items: [
      {
        title: 'Listado',
        href: '/dashboard/users',
        icon: 'pi pi-users'
      },
      {
        title: 'Agregar nuevo',
        href: '/dashboard/users/add',
        icon: 'pi pi-user-plus'
      },
      {
        title: 'Actividades',
        href: '/dashboard/users/activity',
        icon: 'pi pi-chart-bar'
      }
    ]
  },
  {
    title: 'Contabilidad',
    items: [
      {
        title: 'Ingresos por servicios',
        href: '/dashboard/accountability/incomings',
        icon: 'pi pi-chart-line'
      },
      {
        title: 'Egresos',
        href: '/dashboard/accountability/outcomings',
        icon: 'pi pi-chart-scatter'
      }
    ]
  },
  {
    title: 'Configuración',
    items: [
      {
        title: 'Datos empresa',
        href: '/dashboard/settings/company',
        icon: 'pi pi-cog'
      }
    ]
    
  }
]

const serviceTypes = [
  "Diagnóstico",
  "Mantenimiento preventivo",
  "Mantenimiento pesado",
  "Repotenciación",
  "Reparación",
  "Recuperación",
  "Otro"
]

const userMenu = [
  {
    title: 'Edit Profile', 
    href: '/dashboard/user/edit'
  },
  {
    title: 'View Profile', 
    href: '/dashboard/user/:id'
  },
  {
    title: 'Logout', 
    href: '/dashboard/logout'
  },
]

const userRol = [
  "admin",
  "specialist",
  "colaborator"

]

export const constants = {
  documentType,
  languageMenu,
  serviceTypes,
  sidebarMenu,
  sidebarAdminMenu,
  urlApi,
  userMenu,
  userRol,
}
