"use client";

import { ConvexReactClient, ConvexProvider } from 'convex/react';

function ConvexClientProvider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    
    return (
        <ConvexProvider client={convex}>{children}</ConvexProvider>
    );
}

export default ConvexClientProvider;