import type { SkillCategory } from "@/types";

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
