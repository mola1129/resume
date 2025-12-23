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
			{ name: 'Java', icon: 'java' },
			{ name: 'Vue.js', icon: 'vue' },
			{ name: 'Nuxt.js', icon: 'nuxtjs' },
			{ name: 'Spring Boot', icon: 'spring' },
		]
	},
	{
		category: '実務経験あり',
		description: 'プロジェクトで使用した技術',
		items: [
			{ name: 'Docker', icon: 'docker' },
			{ name: 'Kubernetes', icon: 'kubernetes' },
			{ name: 'MySQL', icon: 'mysql' },
			{ name: 'Redis', icon: 'redis' },
			{ name: 'Node.js', icon: 'nodejs' },
			{ name: 'Nitro', icon: 'nodejs' },
			{ name: 'Trino', icon: 'postgres' },
		]
	},
];
