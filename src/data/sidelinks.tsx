import { Separator } from '@radix-ui/react-dropdown-menu'
import {
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconError404,
  IconUserStar,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconLayoutDashboard,
  IconMessages,
  IconUsersGroup,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
  IconGraph,
  IconChartLine,
  IconBrandGoogleDrive,
  IconReportAnalytics,
  IconBooks,
  IconCreditCardPay,
  IconStack,
  IconLayoutCollage,
  IconBuildingWarehouse,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Data Akademik',
    label: '4',
    href: '',
    icon: <IconLayoutCollage size={18} />,
    sub: [
      {
        title: 'Task Projects',
        label: '',
        href: '/tasks',
        icon: <div />,
      },
      {
        title: 'Mata Kuliah',
        label: '9',
        href: '/matakuliah',
        icon: <div />,
      },
      {
        title: 'Mahasiswa',
        label: '',
        href: '/mahasiswa',
        icon: <div />,
      },
      {
        title: 'Dosen',
        label: '',
        href: '/dosen',
        icon: <div />,
      },
      {
        title: 'Roster',
        label: '',
        href: '/roster',
        icon: <div />,
      },
      {
        title: 'Pengajuan Judul',
        label: '',
        href: '/pengajuanjudul',
        icon: <div />,
      },
      {
        title: 'Skripsi',
        label: '',
        href: '/skripsi',
        icon: <div />,
      },
      {
        title: 'Praktik Kerja Lapangan / KP',
        label: '',
        href: '/pkl',
        icon: <div />,
      },
    ],
  },
  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Analysis',
    label: '',
    href: '/analysis',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
