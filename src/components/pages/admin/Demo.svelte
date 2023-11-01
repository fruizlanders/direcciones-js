<script>
  import { onMount } from 'svelte';
	import { alertMessage as alertMessageStore} from '../../../stores/alertMessage.js';
	const base_url = BASE_URL;
  let alertMessage = null;
  let alertMessageProps = {};

  let imageUrl = '';
  let exp = '';

  onMount(() => {
    // console.log('index');
    alertMessageStore.subscribe(value => {
      if(value != null){
        alertMessage = value.component;
        alertMessageProps = value.props;
      }
    });
  });

  const loadImage = () => {
    var xhr = new XMLHttpRequest();
    var url = 'http://192.168.1.27:8000/admin/demo/pde?exp=' + exp;
    // Configure the GET request
    xhr.open('GET', url, true);
    // Set up a callback function to handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Request was successful
            var responseData = xhr.responseText;
            console.log(responseData);
            imageUrl = STATIC_URL + responseData;
        } else {
            // Request failed
            console.error('Request failed. Status code: ' + xhr.status);
        }
    };
    // Handle network errors
    xhr.onerror = function () {
        console.error('Network error occurred');
    };
    // Send the GET request
    xhr.send();
  }
</script>

<svelte:head>
	<title>Demo PyPDE</title>
</svelte:head>

<div class="container">
	<div class="row">
		<svelte:component this={alertMessage} {...alertMessageProps} />
		<div class="col-lg-12 page-header">
			<h2>Demo PyPDE</h2>
		</div>
		<div class="col-md-5">
			<img src={imageUrl} alt="Image" />
      <input type="text" bind:value={exp} placeholder="Exponente" />
      <button on:click={loadImage}>Generar Imagen</button>
		</div>
	</div>
</div>

<style>

</style>