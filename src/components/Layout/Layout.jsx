import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
      {children}
      </Suspense>
      
    </div>
  );
}