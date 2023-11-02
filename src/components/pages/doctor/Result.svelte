<script>
  import { onMount } from 'svelte';
  //import { getMemberUser, updateMemberUser, resetPasswordMemberUser } from '../../../services/UserMemberService.js';
  import { alertMessage as alertMessageStore} from '../../../stores/alertMessage.js';
  import AlertMessage from '../../widgets/AlertMessage.svelte';
  import InputText from '../../widgets/InputText.svelte';
  let baseURL = BASE_URL;
  let staticURL = STATIC_URL;
  let title = 'Resultado';
  let alertMessage = null;
  let alertMessageProps = {};
  let name = ''; let inputName; let nameValid = false;
  let description = ''; let inputDescripton = ''; let descriptionValid = false;
  let exp = ''; let inputExp;
  let messageRandomPassword = '';
  let changePasswordPressed = false;
  let imageUrl = '';
  // service header data
  export let pacientId;
  export let operation;
  export let disabled = false;

  onMount(() => {    
    alertMessageStore.subscribe(value => {
      if(value != null){
        alertMessage = value.component;
        alertMessageProps = value.props;
      }
    });
    if(operation == 'add'){
      title = 'Agregar ' + title;
    }
  });

  const launchAlert = (event, message, type) => {
    alertMessage = null;
    alertMessage = AlertMessage;
    alertMessageProps = {
      message: message,
      type: type,
      timeOut: 5000
    }
  };

  const saveResult = () => {
    resetPasswordMemberUser({user_id: userId}).then((resp) => {
      launchAlert(null, 'Se envió el correo una solicitud de cambio de contraseña.', 'success');
    }).catch((resp) =>  {
      console.log(resp)
      if(resp.status == 404){
        launchAlert(null, 'Recurso resetar contraseña por correo no existe', 'danger');
      }else if(resp.status == 501){ 
        launchAlert(null, resp.data, 'danger');
      }else { 
        launchAlert(null, 'Ocurrió un error en resetear la contraseña del usuario', 'danger');
      }
    })
  };

  const loadImage = () => {
    var xhr = new XMLHttpRequest();
    var url = '/pacient/generate-image?exp=' + exp;
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
	<title>{title}</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col-lg-12 page-header">
			<h2>{title}</h2>
      <svelte:component this={alertMessage} {...alertMessageProps} />
		</div>
  </div>
  <div class="row">
    <div class="col-md-3">
      <InputText 
        label={'Nombre'}
        bind:value={name}
        placeholder={'Nombre de resultado'} 
        disabled={disabled}
        validations={[
          {type:'notEmpty', message: 'Debe de ingresar un nombre'},
          {type:'text'},
          {type:'maxLength', length: 50, message: 'Nombre máximo 200 letras'},
        ]}
        bind:valid={nameValid} 
        bind:this={inputName}
      />
    </div>
    <div class="col-md-8">
      <InputText 
        label={'Descripción'}
        bind:value={description}
        placeholder={'Descripción del resultado'} 
        disabled={disabled}
        validations={[
          {type:'notEmpty', message: 'Debe de ingresar un nombre usuario'},
          {type:'maxLength', length: 200, message: 'Nombre máximo 200 letras'},
        ]}
        bind:valid={description} 
        bind:this={inputDescripton}
      />
    </div>
    <div class="col-md-1">
      <InputText 
        label={'Exponente'}
        bind:value={exp}
        placeholder={''} 
        disabled={disabled}
        bind:this={inputExp}
      />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 pull-right">
      <button class="btn btn-primary btn-actions" disabled="{disabled}" on:click="{saveResult}"><i class="fa fa-envelope-o" aria-hidden="true"></i>
        Guardar Cambios</button>
      <button class="btn btn-success btn-actions" disabled="{disabled}" on:click="{loadImage}"><i class="fa fa-camera-retro" aria-hidden="true"></i>
        Generar Imagen</button>
    </div>
  </div> 
  <div class="row">
    <div class="col-md-5">
        <img src={imageUrl} alt="Image" />
      </div>
    </div>
</div>

<style>
.btn-actions{
    float:right;
    margin-top:15px;
    margin-left: 10px;
  }
</style>