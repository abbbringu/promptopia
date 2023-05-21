"use client";

import { SessionProvider } from 'next-auth/react';

const Provers = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provers