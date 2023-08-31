<script lang="ts">
	import logo from '$lib/assets/sveltekit.svg';
	import type { Post } from 'database';

	export let data: { posts: Post[] };
</script>

<main class="flex min-h-screen flex-col items-center p-24">
	<div class="relative flex place-items-center before:absolute mb-20">
		<img class="relative" src={logo} alt="SvelteKit Logo" style="width: 620px;" />
	</div>

	<div>
		{#each data.posts as post}
			<div class="mb-6 max-w-3xl">
				<div class="mb-2">
					<div class="text-3xl">{post.title}</div>
					<div>{post.userId}</div>
				</div>
				<div>{post.content}</div>
			</div>
		{/each}
	</div>
</main>
