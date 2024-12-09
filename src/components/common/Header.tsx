// import {
//   Button,
//   // forwardRef,
//   IconButton,
//   Menu,
//   // MenuButton,
//   MenuItem,
//   // MenuList,
// } from '@chakra-ui/react'
// // import { Link, router } from '@inertiajs/react'
// import axios from 'axios'
// import { ArrowDown2, HambergerMenu, ProfileCircle } from 'iconsax-react'
// // import { useTranslation } from 'react-i18next'
// import { toast } from 'sonner'
// // import NotificationButton from '../Admin/Notification/NotificationButton'
// // import LangSwitcher from './LangSwitcher'
// // import { User } from '@/types'
// // import { ForwardedRef } from 'react'

// export const Header = forwardRef(
//   (
//     {
//       setIsExpanded,
//       isExpanded,
//       title,
//       user,
//     }: {
//       setIsExpanded: Function
//       isExpanded: boolean
//       title: string
//       user: User
//     },
//     ref
//   ) => {
//     // const { t } = useTranslation()

//     const handleLogout = async () => {
//       // try {
//       //   const { data } = await axios.post('/api/auth/logout')
//       //   if (data?.message) {
//       //     router.visit('/login')
//       //   }
//       // } catch (e) {
//       //   toast.error('Failed to logout')
//       // }
//     }

//     return (
//       <div className="min-h-[76px] flex justify-between border-b border-black/10 bg-white w-full items-center gap-2 px-4">
//         <div>
//           {user?.roleId === 4 || user?.roleId === 5 ? (
//             <div className="h-[76px] flex items-center justify-center">
//               <a href="/" className="flex items-center justify-center">
//                 <img
//                   src={isExpanded ? '/get-pasto.png' : '/get-pasto-mini.png'}
//                   alt="Get pasto logo"
//                   className="h-10"
//                 />
//               </a>
//             </div>
//           ) : (
//             <div className="flex items-center gap-4">
//               <IconButton
//                 aria-label={'Toggle'}
//                 className="size-12 rounded-full bg-white shadow-primary gp-transition"
//                 // icon={<HambergerMenu size="20" />}
//                 // _icon={'icon'}
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 ref={ref}
//               />
//               <p className="text-secondary-500 font-medium text-lg hidden sm:inline-block">
//                 {t(title)}
//               </p>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center gap-2">
//           {/* <NotificationButton /> */}

//           {/* <LangSwitcher /> */}

//           <Menu placement="bottom-end">
//             <MenuButton
//               as={Button}
//               className="h-12 rounded-full px-0 bg-white shadow-primary gp-transition"
//             >
//               <div className="flex md:hidden items-center px-3 py-2 gap-2">
//                 <ProfileCircle />
//               </div>

//               <div className="hidden md:flex items-center px-6 py-2 gap-2">
//                 <div className="flex flex-col items-end">
//                   <span className="font-bold">{user?.fullName}</span>
//                   <span className="text-xs font-medium">{user?.role?.name}</span>
//                 </div>
//                 <ArrowDown2 size="24" />
//               </div>
//             </MenuButton>
//             <MenuList className="p-1">
//               <MenuItem onClick={handleLogout}>{t('Logout')}</MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//       </div>
//     )
//   }
// )

// Header.displayName = 'Header'

// export default Header
