"use client"

import * as React from "react"
import { SessionProvider as NextSessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionProviderProps {
    children: React.ReactNode;
    session: Session;
}

export function SessionProvider({ children, session }: SessionProviderProps) {
    return <NextSessionProvider session={session}>{children}</NextSessionProvider>
}