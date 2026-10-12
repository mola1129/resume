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
  "フロントエンドとバックエンドの両方でWebアプリケーションを開発してきました。TypeScript・Vue.js・Nuxt.js、Java・Spring Bootを軸に、複数の機能開発で開発リードを担当しています。直近では、検索データをAIで分析する機能の本実装をリードし、本番リリースまで推進しました。";

export const projects: Project[] = [
  {
    name: "検索データを分析・可視化する社内ツールの開発",
    period: "2023/11 - 現在",
    company: "LINEヤフー株式会社",
    role: "フロントエンド・バックエンドエンジニア、機能開発リード兼スクラムマスター",
    description:
      "検索データの傾向を分析・可視化する社内ツールを開発しています。社内の営業担当者も広告提案に活用しています。",
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
      "Vue.js・Nuxt.jsによる画面と、Node.js・Nitro・Prisma・MySQLによるAPIを設計・実装しました。",
      "複数の機能開発で開発リードを担当しました。検索データをAIで分析する機能では、他のメンバーが作成・検証したプロトタイプを基に、バックエンドを中心としてBFF・フロントエンドを含む本実装を推進しました。",
      "AIが検索行動を時系列のフェーズに分類し、傾向と根拠キーワードを提示する機能を開発しました。候補モデルの出力品質・応答速度・コストを比較し、SSEで結果を段階的に表示しました。",
      "機能開発リード兼スクラムマスターとして、見積もり、タスク分担、技術提案の取りまとめ、開発中の課題解決、テストチームとの調整を担当しました。",
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
