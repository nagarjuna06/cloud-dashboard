import { ChartData } from "chart.js";

export enum ChartType {
  pie = "pie",
  bar = "bar",
  line = "line",
}

export type WidgetType = {
  id: string;
  name: string;
  type: ChartType;
  show: boolean;
  data: ChartData;
};

// cspm categories
const cloudAccounts: WidgetType = {
  id: "w1",
  name: "Cloud Accounts",
  type: ChartType.pie,
  show: true,
  data: {
    labels: ["Connected", "Not Connected"],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ["#e1ebff", "#5578ff"],
      },
    ],
  },
};

const cloudAccountRiskAssessment: WidgetType = {
  id: "w2",
  name: "Risk Overview",
  type: ChartType.pie,
  show: true,
  data: {
    labels: ["Low Risk", "Medium Risk", "High Risk"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  },
};

const complainsStatus: WidgetType = {
  id: "w3",
  name: "Complaints Status",
  type: ChartType.pie,
  show: false,
  data: {
    labels: ["Compliant", "Non-Compliant"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#66BB6A", "#EF5350"],
      },
    ],
  },
};

const auditTrail: WidgetType = {
  id: "w4",
  name: "Audit Trail",
  type: ChartType.pie,
  show: false,
  data: {
    labels: ["Logs Reviewed", "Pending Review"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#29B6F6", "#EF5350"],
      },
    ],
  },
};

// security categories
const threatDetection: WidgetType = {
  id: "w5",
  name: "Threat Detection",
  type: ChartType.line,
  show: true,
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Threats Detected",
        borderColor: "#FF6384",
        data: [5, 12, 8, 15],
      },
    ],
  },
};

const workLoadAlerts: WidgetType = {
  id: "w6",
  name: "Workload Alerts",
  type: ChartType.line,
  show: true,
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Workloads",
        data: [300, 350, 400, 420, 500, 480, 550],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Alerts",
        data: [50, 45, 70, 60, 90, 75, 100],
        borderColor: "#FF7043",
        backgroundColor: "rgba(255, 112, 67, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
};
// registry Scan

const imageRiskAssessment: WidgetType = {
  id: "w7",
  name: "Image Risk Assessment",
  type: ChartType.bar,
  show: true,
  data: {
    labels: ["Vulnerabilities"],
    datasets: [
      {
        label: "Critical",
        backgroundColor: "#77150e",
        data: [9],
      },
      {
        label: "High",
        backgroundColor: "#c82819",
        data: [150],
      },
      {
        label: "Medium",
        backgroundColor: "#eea354",
        data: [300],
      },
      {
        label: "Low",
        backgroundColor: "#f0c341",
        data: [1011],
      },
    ],
  },
};

const imageSecurityIssues: WidgetType = {
  id: "w8",
  name: "Image Security Issues",
  type: ChartType.bar,
  show: true,
  data: {
    labels: ["Images"],
    datasets: [
      {
        label: "Critical",
        backgroundColor: "#77150e",
        data: [2],
      },
      {
        label: "High",
        backgroundColor: "#c82819",
        data: [4],
      },
      {
        label: "Medium",
        backgroundColor: "#eea354",
        data: [0],
      },
      {
        label: "Low",
        backgroundColor: "#f0c341",
        data: [5],
      },
    ],
  },
};

export type CategoryType = {
  id: string;
  name: string;
  short_name: string;
  widgets: WidgetType[];
};

export const categoriesData: CategoryType[] = [
  {
    id: "c1",
    name: "CSPM Executive Dashboard",
    short_name: "CSPM",
    widgets: [
      cloudAccounts,
      cloudAccountRiskAssessment,
      complainsStatus,
      auditTrail,
    ],
  },
  {
    id: "c2",
    name: "Security Dashboard",
    short_name: "Security",
    widgets: [threatDetection, workLoadAlerts],
  },
  {
    id: "c3",
    name: "Registry Scan Dashboard",
    short_name: "Registry Scan",
    widgets: [imageRiskAssessment, imageSecurityIssues],
  },
];
