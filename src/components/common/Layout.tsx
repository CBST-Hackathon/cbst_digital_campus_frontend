// // import { PageProps, User } from '@/types'
// import { Container, Drawer, DrawerBody, DrawerContent } from '@chakra-ui/react'
// // import { usePage } from '@inertiajs/react'
// import React, { useState } from 'react'
// import Header from './Header'
// import SideNav from './SideNav'
// import useWindowSize from '@/hooks/useWindowSize'

// export default function Layout({
//   children,
//   title,
//   enableDrawerSidebar,
// }: {
//   children: React.ReactNode
//   title: string
//   enableDrawerSidebar?: boolean
// }) {
//   const windowSize = useWindowSize()
//   const [isExpanded, setIsExpanded] = useState<boolean>(() => window.innerWidth > 768)
//   const btnRef = React.useRef()

//   const {
//     props: { auth },
//   } = usePage() as { props: PageProps }

//   return (
//     <Container maxW="100%" paddingX="0">
//       <div className="h-screen flex">
//         {windowSize.width < 768 || enableDrawerSidebar ? (
//           <Drawer isOpen={isExpanded} onClose={() => setIsExpanded(false)} placement="left">
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerBody className="overflow-hidden p-0">
//                 {auth?.roleId !== 4 && auth?.roleId !== 5 && <SideNav isExpanded={true} />}
//               </DrawerBody>
//             </DrawerContent>
//           </Drawer>
//         ) : (
//           auth?.roleId !== 4 && auth?.roleId !== 5 && <SideNav isExpanded={isExpanded} />
//         )}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <Header
//             title={title}
//             user={auth as User}
//             isExpanded={isExpanded}
//             setIsExpanded={setIsExpanded}
//             ref={btnRef}
//           />
//           <div className="h-full box-border overflow-x-hidden overflow-y-auto">{children}</div>
//         </div>
//       </div>
//     </Container>
//   )
// }
