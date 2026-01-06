import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "サンプルプロジェクト1",
    period: "2023/04 - 現在",
    company: "株式会社サンプル",
    role: "バックエンドエンジニア",
    type: "web",
    description:
      "大規模ECサイトのバックエンドAPI開発とインフラ構築を担当。[マイクロサービスアーキテクチャ](https://microservices.io/)を採用し、高可用性とスケーラビリティを実現。",
    technologies: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "MySQL", icon: "mysql" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Redis", icon: "redis" },
    ],
    achievements: [
      "API応答速度を平均**30%改善**",
      "月間**1000万PV**を処理する基盤を構築",
      "[CI/CD](https://about.gitlab.com/topics/ci-cd/)パイプラインの構築によりデプロイ時間を**50%削減**",
    ],
  },
  {
    name: "サンプルプロジェクト2",
    period: "2022/01 - 2023/03",
    company: "株式会社サンプル",
    role: "フロントエンドエンジニア",
    type: "web",
    description:
      "社内管理画面のリニューアルプロジェクト。**Vue.js/Nuxt.js**を使用した[SPA](https://developer.mozilla.org/ja/docs/Glossary/SPA)の開発を担当。",
    technologies: [
      { name: "TypeScript", icon: "ts" },
      { name: "Vue.js", icon: "vue" },
      { name: "Nuxt.js", icon: "nuxtjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    achievements: [
      "レガシーシステムからモダンな**SPA**へ移行",
      "ページ遷移速度を大幅に改善",
    ],
  },
];
