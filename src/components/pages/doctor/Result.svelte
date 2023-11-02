<script>
  import { onMount } from 'svelte';
  //import { getMemberUser, updateMemberUser, resetPasswordMemberUser } from '../../../services/UserMemberService.js';
  import { alertMessage as alertMessageStore} from '../../../stores/alertMessage.js';
  import AlertMessage from '../../widgets/AlertMessage.svelte';
  import InputText from '../../widgets/InputText.svelte';
  import TextArea from '../../widgets/TextArea.svelte';
  import { addService } from '../../../services/ResultService.js';
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
  let imageUrl = '/assets/img/logo.png';
  let disabledImageBtn = true;
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

  if(exp != ''){
    disabledImageBtn = false;
  }

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
    var descriptionContent = inputDescripton.getWYSIWYGContent();
    var params = {
      pacient_id: pacientId,
      image_url: imageUrl,
      description: descriptionContent,
      name: name
    }
    addService(params).then((resp) => {
      console.log(resp);
      launchAlert(null, 'Resultado agregado', 'success');
    }).catch((resp) =>  {
      console.error(resp)
      launchAlert(null, 'Error al agregar el resultado', 'danger');
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
        imageUrl = responseData;
      } else {
        // Request failed
        console.error('Request failed. Status code: ' + xhr.status);
        launchAlert(null, 'Recurso asosiar los trabajores a sedes no existe en el servidor', 'danger');
        imageUrl = '/assets/img/logo.png';
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
    <div class="col-md-5">
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
      <TextArea 
        label={'Descripción'}
        bind:value={description}
        divStyle={'margin-top: 10px;'}
        placeholder={'Descripción del resultado'} 
        height={380}
        disabled={disabled}
        validations={[
          {type:'notEmpty', message: 'Debe de ingresar un nombre'},
          {type:'text'},
          {type:'maxLength', length: 50, message: 'Nombre máximo 200 letras'},
        ]}
        WYSIWYG={true}
        bind:valid={descriptionValid} 
        bind:this={inputDescripton}
      />
    </div>
    <div class="col-md-7">
      <div class="row">
        <div class="col-md-3">
          <InputText 
            label={'Exponente'}
            bind:value={exp}
            placeholder={''} 
            disabled={disabled}
            bind:this={inputExp}
            divStyle={'width: 120px !important;'}
          />
        </div>
        <div class="col-md-9">
          <button class="btn btn-success btn-actions" disabled="{exp != '' && !isNaN(exp) ? false: disabledImageBtn}" on:click="{loadImage}"><i class="fa fa-camera-retro" aria-hidden="true"></i>
              Generar Imagen</button>
          <button class="btn btn-primary btn-actions" disabled="{disabled}" on:click="{saveResult}"><i class="fa fa-envelope-o" aria-hidden="true"></i>
              Guardar Cambios</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img src={imageUrl} alt="Image" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.btn-actions{
    float:left;
    margin-top:30px;
    margin-left: 10px;
  }
</style>