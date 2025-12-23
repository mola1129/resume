export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCategory {
	category: string;
	description: string;
	items: Skill[];
}

export const skills: SkillCategory[] = [
	{
		category: '得意領域',
		description: '即戦力として貢献可能な技術',
		items: [
			{ name: 'TypeScript', icon: 'ts' },
			{ name: 'Vue.js', icon: 'vue' },
			{ name: 'Nuxt.js', icon: 'nuxtjs' },
			{ name: 'Java', icon: 'java' },
			{ name: 'Spring Boot', icon: 'spring' },
		]
	},
	{
		category: '実務経験あり',
		description: 'プロジェクトで使用した技術',
		items: [
			{ name: 'Node.js', icon: 'nodejs' },
			{ name: 'Nitro', icon: 'nodejs' },
			{ name: 'MySQL', icon: 'mysql' },
			{ name: 'Docker', icon: 'docker' },
			{ name: 'Kubernetes', icon: 'kubernetes' },
			{ name: 'Redis', icon: 'redis' },
			{ name: 'Trino', icon: 'postgres' },
		]
	},
];
