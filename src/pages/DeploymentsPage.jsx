import Layout from '../components/Layout';

export default function DeploymentsPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-center space-y-3">
          <span className="material-symbols-outlined text-5xl text-primary/30">rocket_launch</span>
          <p className="font-headline text-lg text-on-surface-variant">Deployments — paste your HTML here</p>
          <p className="text-xs font-mono text-gray-600">Awaiting page HTML from user</p>
        </div>
      </div>
    </Layout>
  );
}
