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
		category: 'Expert',
		description: '最も得意な技術スタック',
		items: [
			{ name: 'TypeScript', icon: 'ts' },
			{ name: 'Vue.js', icon: 'vue' },
			{ name: 'Nuxt.js', icon: 'nuxtjs' },
			{ name: 'Java', icon: 'java' },
			{ name: 'Spring Boot', icon: 'spring' },
		]
	},
	{
		category: 'Intermediate',
		description: '実務で使用経験のある技術',
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
	{
		category: 'Basic',
		description: '基礎的な知識と経験',
		items: [
			{ name: 'C++', icon: 'cpp' },
			{ name: 'React', icon: 'react' },
			{ name: 'Python', icon: 'py' },
		]
	},
];
