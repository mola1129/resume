import type { Profile } from "@/types";
import type { Project } from "@/types";
import type { SkillCategory } from "@/types";

export const profile: Profile = {
  name: "mola1129",
  description: "ソフトウェアエンジニア",
  contacts: [
    {
      type: "Email",
      url: "mailto:ms.mola1129@gmail.com",
      icon: "mail",
    },
    {
      type: "GitHub",
      url: "https://github.com/mola1129",
      icon: "github",
    },
    {
      type: "LinkedIn",
      url: "https://jp.linkedin.com/in/satoshi-moro-29bb5a1b1",
      icon: "linkedin",
    },
  ],
};

export const careerSummary =
  "フルスタックエンジニアとして、フロントエンドからバックエンド、インフラまで幅広い領域で開発経験があります。特に**TypeScript/Vue.js**と**Java/Spring Boot**を用いたWebアプリケーション開発を得意としています。[DS.INSIGHT](https://ds.yahoo.co.jp/service/insight/)の開発をしていました。";

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

export const skills: SkillCategory[] = [
  {
    category: "得意",
    items: [
      {
        name: "TypeScript",
        icon: "ts",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "Vue.js",
        icon: "vue",
        url: "https://vuejs.org/guide/introduction.html",
      },
      { name: "Nuxt.js", icon: "nuxtjs", url: "https://nuxt.com/docs" },
      { name: "Java", icon: "java", url: "https://docs.oracle.com/en/java/" },
      {
        name: "Spring Boot",
        icon: "spring",
        url: "https://spring.io/projects/spring-boot",
      },
    ],
  },
  {
    category: "実務経験あり",
    items: [
      {
        name: "Node.js",
        icon: "nodejs",
        url: "https://nodejs.org/docs/latest/api/",
      },
      { name: "Nitro", icon: "nodejs", url: "https://nitro.unjs.io/" },
      { name: "MySQL", icon: "mysql", url: "https://dev.mysql.com/doc/" },
      { name: "Docker", icon: "docker", url: "https://docs.docker.com/" },
      {
        name: "Kubernetes",
        icon: "kubernetes",
        url: "https://kubernetes.io/docs/home/",
      },
      { name: "Redis", icon: "redis", url: "https://redis.io/docs/latest/" },
      {
        name: "Trino",
        icon: "postgres",
        url: "https://trino.io/docs/current/",
      },
    ],
  },
  {
    category: "基礎知識",
    items: [
      { name: "C", icon: "c", url: "https://en.cppreference.com/w/c" },
      { name: "C++", icon: "cpp", url: "https://en.cppreference.com/w/" },
      { name: "Swift", icon: "swift", url: "https://swift.org/documentation/" },
      { name: "React", icon: "react", url: "https://react.dev/" },
      { name: "Python", icon: "py", url: "https://docs.python.org/3/" },
    ],
  },
];
