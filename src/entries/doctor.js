import Doctor from '../components/layouts/Doctor.svelte';

const app = new Doctor({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;