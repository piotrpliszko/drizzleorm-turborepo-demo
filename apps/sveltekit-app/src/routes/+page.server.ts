import { db, posts, type Post } from 'database';

export async function load({ params }) {
	const postsData: Post[] = await db.select().from(posts);

	return {
		posts: postsData
	};
}
