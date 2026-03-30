import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryPage     from './pages/LibraryPage';
import CanvasPage      from './pages/CanvasPage';
import WorkflowsPage   from './pages/WorkflowsPage';
import AgentsPage      from './pages/AgentsPage';
import NodesPage       from './pages/NodesPage';
import DeploymentsPage from './pages/DeploymentsPage';
import MonitoringPage  from './pages/MonitoringPage';
import SettingsPage    from './pages/SettingsPage';
import ConnectionSpecsPage from './pages/ConnectionSpecsPage';
import LiveActivityPage  from './pages/LiveActivityPage';
import DemoModePage      from './pages/DemoModePage';
import DeveloperSpecsPage from './pages/DeveloperSpecsPage';
import IconSystemPage    from './pages/IconSystemPage';
import SmartCanvasPage   from './pages/SmartCanvasPage';
import ResponsiveSpecsPage from './pages/ResponsiveSpecsPage';
import FinalPolishPage   from './pages/FinalPolishPage';
import SharedLayout      from './components/SharedLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/"            element={<LibraryPage />} />
          <Route path="/canvas"      element={<CanvasPage />} />
          <Route path="/workflows"   element={<WorkflowsPage />} />
          <Route path="/agents"      element={<AgentsPage />} />
          <Route path="/nodes"       element={<NodesPage />} />
          <Route path="/deployments" element={<DeploymentsPage />} />
          <Route path="/monitoring"  element={<MonitoringPage />} />
          <Route path="/settings"    element={<SettingsPage />} />
          <Route path="/connection-specs" element={<ConnectionSpecsPage />} />
          <Route path="/live-activity"    element={<LiveActivityPage />} />
          <Route path="/demo"             element={<DemoModePage />} />
          <Route path="/developer-specs"  element={<DeveloperSpecsPage />} />
          <Route path="/icons"            element={<IconSystemPage />} />
          <Route path="/smart-canvas"     element={<SmartCanvasPage />} />
          <Route path="/responsive-specs" element={<ResponsiveSpecsPage />} />
          <Route path="/final-polish"     element={<FinalPolishPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
