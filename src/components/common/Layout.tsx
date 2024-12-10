import { Container, Stack } from '@chakra-ui/react'
import { Outlet } from "react-router";
import React, { useState } from 'react'
import Header from './Header'
import SideNav from './SideNav';

export default function Layout() {
  // const windowSize = useWindowSize()
  const [isExpanded, setIsExpanded] = useState<boolean>(() => window.innerWidth > 768)
  const btnRef = React.useRef()

  // const {
  //   props: { auth },
  // } = usePage() as { props: PageProps }

  return (
    <Container maxW="100%" paddingX="0">
      <div className="h-screen flex">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            // title={title}
            // user={auth as User}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            ref={btnRef}
          />
          <div className="h-full box-border overflow-x-hidden overflow-y-auto">
          <Stack direction="row" h="vh">
            <SideNav />
              {<Outlet />}
            </Stack>
          </div>
        </div>
      </div>
    </Container>
  )
}
