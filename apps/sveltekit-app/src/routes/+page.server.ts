import { db, posts, users, eq } from 'database';

export interface PostWithUserData {
	id: number;
	title: string;
	content: string;
	userId: number;
	userName: string;
}

export async function load({ params }): Promise<{ posts: PostWithUserData[] }> {
	const data = await db
		.select({
			id: posts.id,
			title: posts.title,
			content: posts.content,
			userId: posts.userId,
			userName: users.name
		})
		.from(users)
		.innerJoin(posts, eq(users.id, posts.userId));

	return {
		posts: data
	};
}
