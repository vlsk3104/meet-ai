"use client";

import { BotIcon, StarIcon, VideoIcon } from "lucide-react";

const firstSection = [
  { icon: VideoIcon, label: "ミーティング", href: "/meetings" },
  { icon: BotIcon, label: "エージェント", href: "/agents" },
];

const secondSection = [
  { icon: StarIcon, label: "アップグレード", href: "/upgrade" },
];

const DashboardSidebar = () => {
  return <div>dashboard-sidebar</div>;
};

export default DashboardSidebar;
