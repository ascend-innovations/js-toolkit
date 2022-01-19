<!-- For now we will use this file to run a simple prettier test in the pipeline to make sure our Svelte Prettier formatter is valid and working -->
<script lang="ts">
const test = (string: string) => string;
</script>

<div>This is a {test('test')}</div>
