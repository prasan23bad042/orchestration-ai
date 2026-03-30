import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

export default function Layout({ children }) {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen">
      <TopNavBar />
      <SideNavBar />
      <main className="md:ml-64 pt-16 min-h-screen bg-surface">
        {children}
      </main>
    </div>
  );
}
