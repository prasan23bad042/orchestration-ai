import Layout from '../components/Layout';

export default function MonitoringPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-center space-y-3">
          <span className="material-symbols-outlined text-5xl text-primary/30">monitoring</span>
          <p className="font-headline text-lg text-on-surface-variant">Monitoring — paste your HTML here</p>
          <p className="text-xs font-mono text-gray-600">Awaiting page HTML from user</p>
        </div>
      </div>
    </Layout>
  );
}
