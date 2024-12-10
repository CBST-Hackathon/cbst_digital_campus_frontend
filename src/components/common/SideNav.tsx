'use client'
import {
  Box,
  DrawerRoot,
  DrawerContent,
} from '@chakra-ui/react'
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
// } from 'react-icons/fi'
// import { IconType } from 'react-icons'
import { useState } from 'react'

// interface LinkItemProps {
//   name: string
//   icon: IconType
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ]

export default function SideNav() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const { open, onOpen, onClose} = useDisclosure()
  const [open, setOpen] = useState(false)
  return (
    <Box maxH="100vh" bg={'gray.900'}>
      {/* <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} /> */}
      <DrawerRoot
        open={open}
        placement="start"
        onOpenChange={(e) => setOpen(e.open)}
        size="full">
        <DrawerContent>
          {/* <SidebarContent onClose={onClose} /> */}
          <h1> Simple </h1>
        </DrawerContent>
      </DrawerRoot>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} /> */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}
