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
  "フロントエンドとバックエンドの両領域でWebアプリケーション開発の経験があります。特にTypeScript/Vue.js/Nuxt.jsとJava/Spring Bootを得意とし、LINEヤフーにて[DS.INSIGHT](https://ds.yahoo.co.jp/service/insight/)をはじめとするデータ分析ツールの開発に携わってきました。直近ではスクラムマスターとしてチーム開発を推進しながら、OpenAI APIやServer-Sent Eventsを活用したAI分析機能の開発や、開発フロー全体への生成AI導入にも取り組んでいます。";

export const projects: Project[] = [
  {
    name: "検索データを分析・可視化する社内ツールの開発",
    period: "2023/11 - 現在",
    company: "LINEヤフー株式会社",
    role: "フロントエンド兼バックエンドエンジニア, スクラムマスター",
    description:
      "Yahoo! JAPANの検索データのトレンドや傾向を分析・可視化する社内向けツールの開発。",
    skills: [
      "typescript",
      "vue",
      "nuxt",
      "scss",
      "nodejs",
      "nitro",
      "prisma",
      "mysql",
      "docker",
      "kubernetes",
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
    skills: [
      "java",
      "spring",
      "gradle",
      "nodejs",
      "mysql",
      "redis",
      "trino",
      "mq",
      "docker",
      "kubernetes",
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
    skills: ["typescript", "vue", "nuxt", "java", "spring"],
  },
  {
    category: "実務経験あり",
    skills: [
      "gradle",
      "nodejs",
      "nitro",
      "scss",
      "prisma",
      "mysql",
      "docker",
      "kubernetes",
      "redis",
      "trino",
      "mq",
    ],
  },
  {
    category: "基礎知識",
    skills: ["c", "cpp", "py", "swift", "react", "nextjs", "astro"],
  },
];
