<script>
  import { onMount } from 'svelte';
  import Navigation from './../widgets/Navigation.svelte'
  import Footer from './../widgets/Footer.svelte';
  import 'bootstrap/dist/css/bootstrap.min.css';
	import 'font-awesome/css/font-awesome.min.css';
  import '../../stylesheets/global.css';
	import '../../stylesheets/admin.css';
  import { Router, Route } from 'svelte-routing';
  import Pacient from '../pages/doctor/Pacient.svelte';
  import Result from '../pages/doctor/Result.svelte';
  // variables
  export let url = '';
  export let basepath = '/doctor';
  // functions
  onMount(() => { /* TODO? */  });
</script>

<Navigation />

<Router url="{url}" basepath="{basepath}">
  <Route path="/" component="{Pacient}" />
  <!--
    <Route path="/*" component="{Redirect404}" />
  -->
  <Route path="/results/add/:id" let:params><Result pacientId={params.id} operation={'add'}/></Route>
</Router>

<Footer />

<style>

</style>