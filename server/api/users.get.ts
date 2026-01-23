import type { User } from '@/types/user'

export default defineEventHandler((): User[] => {
  return [
    {
      id: 1,
      pseudo: 'nico_dev',
      avatar: 'https://i.pravatar.cc/150?img=12',
      isActive: true
    },
    {
      id: 2,
      pseudo: 'alice_ui',
      avatar: 'https://i.pravatar.cc/150?img=32',
      isActive: false
    },
    {
      id: 3,
      pseudo: 'bob_ts',
      avatar: 'https://i.pravatar.cc/150?img=56',
      isActive: true
    },
    {
      id: 4,
      pseudo: 'clara_nuxt',
      avatar: 'https://i.pravatar.cc/150?img=68',
      isActive: false
    }
  ]
})
