import Navbar from "@/components/dashbaord/Navbar";
import Section from "@/components/dashbaord/Section";
import { DashboardContextProvider } from "@/context/DashbaordContext";

const Dashboard = () => {
  return (
    <DashboardContextProvider>
      <Navbar />
      <Section />
    </DashboardContextProvider>
  );
};

export default Dashboard;
