import type { User } from '@/types/user'
import { getQuery } from 'h3'

export default defineEventHandler((event): User[] => {
  const query = getQuery(event)
  const search = typeof query.q === 'string'
    ? query.q.toLowerCase()
    : ''

  const users: User[] = [
    { id: 1, pseudo: 'nico_dev', avatar: 'https://i.pravatar.cc/150?img=12', isActive: true, email: 'nico_dev@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, pseudo: 'alice_ui', avatar: 'https://i.pravatar.cc/150?img=32', isActive: false, email: 'alice_ui@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, pseudo: 'bob_ts', avatar: 'https://i.pravatar.cc/150?img=56', isActive: true, email: 'bob_ts@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, pseudo: 'clara_nuxt', avatar: 'https://i.pravatar.cc/150?img=68', isActive: false, email: 'clara_nuxt@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 5, pseudo: 'julien_js', avatar: 'https://i.pravatar.cc/150?img=5', isActive: true, email: 'julien_js@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 6, pseudo: 'emma_css', avatar: 'https://i.pravatar.cc/150?img=6', isActive: true, email: 'emma_css@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 7, pseudo: 'thomas_node', avatar: 'https://i.pravatar.cc/150?img=7', isActive: false, email: 'thomas_node@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 8, pseudo: 'lea_vue', avatar: 'https://i.pravatar.cc/150?img=8', isActive: true, email: 'lea_vue@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 9, pseudo: 'max_react', avatar: 'https://i.pravatar.cc/150?img=9', isActive: true, email: 'max_react@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 10, pseudo: 'sarah_api', avatar: 'https://i.pravatar.cc/150?img=10', isActive: false, email: 'sarah_api@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 11, pseudo: 'kevin_sql', avatar: 'https://i.pravatar.cc/150?img=11', isActive: true, email: 'kevin_sql@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 12, pseudo: 'lucas_php', avatar: 'https://i.pravatar.cc/150?img=13', isActive: false, email: 'lucas_php@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 13, pseudo: 'manon_git', avatar: 'https://i.pravatar.cc/150?img=14', isActive: true, email: 'manon_git@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 14, pseudo: 'paul_docker', avatar: 'https://i.pravatar.cc/150?img=15', isActive: true, email: 'paul_docker@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 15, pseudo: 'ines_test', avatar: 'https://i.pravatar.cc/150?img=16', isActive: false, email: 'ines_test@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 16, pseudo: 'hugo_ci', avatar: 'https://i.pravatar.cc/150?img=17', isActive: true, email: 'hugo_ci@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 17, pseudo: 'camille_ux', avatar: 'https://i.pravatar.cc/150?img=18', isActive: false, email: 'camille_ux@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 18, pseudo: 'antoine_algo', avatar: 'https://i.pravatar.cc/150?img=19', isActive: true, email: 'antoine_algo@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 19, pseudo: 'jade_mobile', avatar: 'https://i.pravatar.cc/150?img=20', isActive: true, email: 'jade_mobile@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 20, pseudo: 'romain_flutter', avatar: 'https://i.pravatar.cc/150?img=21', isActive: false, email: 'romain_flutter@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 21, pseudo: 'lina_kotlin', avatar: 'https://i.pravatar.cc/150?img=22', isActive: true, email: 'lina_kotlin@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 22, pseudo: 'yann_swift', avatar: 'https://i.pravatar.cc/150?img=23', isActive: false, email: 'yann_swift@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 23, pseudo: 'nora_graphql', avatar: 'https://i.pravatar.cc/150?img=24', isActive: true, email: 'nora_graphql@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 24, pseudo: 'quentin_rest', avatar: 'https://i.pravatar.cc/150?img=25', isActive: true, email: 'quentin_rest@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 25, pseudo: 'zoe_auth', avatar: 'https://i.pravatar.cc/150?img=26', isActive: false, email: 'zoe_auth@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 26, pseudo: 'axel_oauth', avatar: 'https://i.pravatar.cc/150?img=27', isActive: true, email: 'axel_oauth@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 27, pseudo: 'marine_cache', avatar: 'https://i.pravatar.cc/150?img=28', isActive: false, email: 'marine_cache@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 28, pseudo: 'benjamin_perf', avatar: 'https://i.pravatar.cc/150?img=29', isActive: true, email: 'benjamin_perf@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 29, pseudo: 'eva_cloud', avatar: 'https://i.pravatar.cc/150?img=30', isActive: true, email: 'eva_cloud@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 30, pseudo: 'leo_aws', avatar: 'https://i.pravatar.cc/150?img=31', isActive: false, email: 'leo_aws@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 31, pseudo: 'anais_azure', avatar: 'https://i.pravatar.cc/150?img=33', isActive: true, email: 'anais_azure@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 32, pseudo: 'sam_gcp', avatar: 'https://i.pravatar.cc/150?img=34', isActive: true, email: 'sam_gcp@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 33, pseudo: 'elise_logs', avatar: 'https://i.pravatar.cc/150?img=35', isActive: false, email: 'elise_logs@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 34, pseudo: 'victor_sec', avatar: 'https://i.pravatar.cc/150?img=36', isActive: true, email: 'victor_sec@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 35, pseudo: 'pauline_rgpd', avatar: 'https://i.pravatar.cc/150?img=37', isActive: false, email: 'pauline_rgpd@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 36, pseudo: 'noah_encrypt', avatar: 'https://i.pravatar.cc/150?img=38', isActive: true, email: 'noah_encrypt@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 37, pseudo: 'cloe_backup', avatar: 'https://i.pravatar.cc/150?img=39', isActive: true, email: 'cloe_backup@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 38, pseudo: 'mathis_k8s', avatar: 'https://i.pravatar.cc/150?img=40', isActive: false, email: 'mathis_k8s@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 39, pseudo: 'iris_monitor', avatar: 'https://i.pravatar.cc/150?img=41', isActive: true, email: 'iris_monitor@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 40, pseudo: 'adam_event', avatar: 'https://i.pravatar.cc/150?img=42', isActive: false, email: 'adam_event@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 41, pseudo: 'sofia_queue', avatar: 'https://i.pravatar.cc/150?img=43', isActive: true, email: 'sofia_queue@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 42, pseudo: 'nathan_realtime', avatar: 'https://i.pravatar.cc/150?img=44', isActive: true, email: 'nathan_realtime@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ]
  if (!search) {
    return users
  }

  return users.filter(user =>
    user.pseudo.toLowerCase().includes(search)
  )
})
