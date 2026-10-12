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
  "Vue.js・Nuxt.jsとJava・Spring Bootを用いたWebアプリケーション開発を経験。現在は検索データ分析ツールで機能開発をリードし、AI分析機能の本実装から本番リリースまで担当しています。";

export const projects: Project[] = [
  {
    name: "検索データを分析・可視化する社内ツールの開発",
    period: "2023/11 - 現在",
    company: "LINEヤフー株式会社",
    role: "フロントエンド・バックエンドエンジニア、機能開発リード兼スクラムマスター",
    description:
      "社内の広告営業が、検索行動の分析結果を広告提案に活用するためのツールを開発。",
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
      "Vue.js・Nuxt.jsによる画面と、Node.js・Nitro・Prisma・MySQLによるAPIを設計・実装。",
      "7名チームの機能開発リード兼スクラムマスターとして、他の担当者が作成・検証したプロトタイプを基に、AI分析機能の本実装をリード。バックエンドを中心にBFF・フロントエンドも担当し、タスク分担、テストチームとの調整、本番リリースまで進めた。",
      "広告営業が散布図から検索傾向を読み取る負担を踏まえ、検索行動を時系列のフェーズに分類し、傾向と根拠キーワードを提示する機能を開発。実際の広告提案事例でモデルの出力品質・応答速度・コストを比較し、生成結果はSSEで段階的に表示した。",
      "AIが示す根拠キーワードを元データと自動照合し、存在しないキーワードを画面上で判別できるようにした。残存するリスクをPM・技術責任者と共有し、合意を得てリリースした。",
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
