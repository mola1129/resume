import type { Profile, Project, SkillCategory } from "@/types";

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
    name: "検索データを分析・可視化する社内ツールの開発",
    period: "2024/04 - 現在",
    company: "LINEヤフー株式会社",
    role: "フロントエンド兼バックエンドエンジニア, スクラムマスター",
    type: "web",
    description: "<説明を書く>",
    technologies: [
      { name: "Vue.js", icon: "vue" },
      { name: "Nuxt.js", icon: "nuxt" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Nitro.js", icon: "nitrojs" },
      { name: "MySQL", icon: "mysql" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
    ],
    achievements: [
      "Vue.js (Nuxt.js) , SCSSによるフロントエンドの実装",
      "Node.js (Nitro.js), Prisma, MySQL によるバックエンドの実装",
      "OpenAI API (Server-Sent Events) を使った検索データのAI分析機能の実装",
      "業務効率化のため, 開発フローに生成AIを導入",
      "スクラムマスターとしてスクラムイベントの円滑な進行やチームメンバーの技術的課題の解決，機能開発のスケジュール管理を担当",
    ],
  },
  {
    name: "DS.INSIGHTの開発",
    period: "2022/04 - 2024/03",
    company: "LINEヤフー株式会社",
    role: "バックエンドエンジニア",
    type: "web",
    description: "<説明を書く>",
    technologies: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Trino", icon: "trino" },
      { name: "MQ", icon: "mq" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Node.js", icon: "nodejs" },
    ],
    achievements: [
      "Java (Spring Boot) によるREST APIの実装",
      "Trino, MQ によるリアルタイム集計の実装",
      "FaaS (Node.js), Java (Spring Boot) による定期メール配信の実装",
      "Spring Boot 3, Java 17 への移行",
      "アプリケーションの実行環境を新プラットフォームへ移行",
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
      { name: "Nitro", icon: "nitro", url: "https://nitro.unjs.io/" },
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
        icon: "trino",
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
