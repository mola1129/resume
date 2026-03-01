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
  "フロントエンドとバックエンドの両領域でWebアプリケーション開発の経験があります。特に**TypeScript/Vue.js/Nuxt.js**と**Java/Spring Boot**を得意とし、LINEヤフーにて[DS.INSIGHT](https://ds.yahoo.co.jp/service/insight/)をはじめとするデータ分析ツールの開発に携わってきました。直近ではスクラムマスターとしてチーム開発を推進しながら、**OpenAI API**やServer-Sent Eventsを活用したAI分析機能の開発や、開発フロー全体への生成AI導入にも取り組んでいます。";

export const projects: Project[] = [
  {
    name: "検索データを分析・可視化する社内ツールの開発",
    period: "2023/11 - 現在",
    company: "LINEヤフー株式会社",
    role: "フロントエンド兼バックエンドエンジニア, スクラムマスター",
    description:
      "Yahoo! JAPANの検索データのトレンドや傾向を分析・可視化する社内向けツールの開発。",
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
      "Vue.js (Nuxt.js), SCSSによるフロントエンドの設計・実装",
      "Node.js (Nitro.js), Prisma, MySQLによるバックエンドのAPI設計・実装",
      "OpenAI APIとServer-Sent Eventsを活用したAI分析機能を開発し、検索データの分析業務を効率化",
      "開発フローに生成AIを導入し、JIRAチケットからの実装計画作成、コード実装、コードレビュー、PR作成までをAIで効率化",
      "スクラムマスターとしてスクラムイベントの円滑な進行やチームメンバーの技術的課題の解決, 機能開発のスケジュール管理を担当",
    ],
  },
  {
    name: "DS.INSIGHTの開発",
    period: "2022/04 - 2023/10",
    company: "ヤフー株式会社",
    role: "バックエンドエンジニア",
    description:
      "Yahoo! JAPANの検索データや位置情報などのビッグデータを活用し、企業や自治体が消費者ニーズの調査・分析を行えるBtoB向けデスクリサーチツールの開発。",
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
      "Java (Spring Boot) によるREST APIの新規開発および既存機能の改修",
      "Trino, MQを用いた大規模検索データのリアルタイム集計基盤を構築",
      "FaaS (Node.js), Java (Spring Boot) による定期メール配信の実装",
      "EOL対応としてSpring Boot 3, Java 17へのマイグレーションを推進",
      "EOL対応および運用コスト削減のため、アプリケーションの実行環境を新プラットフォームへ移行",
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
      {
        name: "SCSS",
        icon: "scss",
        url: "https://sass-lang.com/documentation/",
      },
      { name: "Prisma", icon: "prisma", url: "https://www.prisma.io/docs" },
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
