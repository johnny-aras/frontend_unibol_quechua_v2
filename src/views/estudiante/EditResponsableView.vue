<template>
<div class="container">
  <div class="row mt-3 justify-center">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-secondary text-white text-center">
          EDITAR RESPONSABLE
        </div>
        <div class="card-body">
          <form @submit="guardar">                        

            <div class="input-group mb-3">     
              <input type="text" v-model="nombre" id="nombre_responsable" class="form-control" maxlength="100" placeholder="Nombre Responsable">
            </div>
            
            <div class="input-group mb-3">     
              <input type="text" v-model="apellidoP" id="apellidoP" class="form-control" maxlength="100" placeholder="Apellido Responsable" required>              
            </div>

            
            <div class="input-group mb-3">   
              <input type="text" v-model="ci" id="cedula_responsable" class="form-control" maxlength="100" placeholder="Cédula Identidad" required>              
            </div>
           
            <div class="input-group mb-3">   
              <input type="text" v-model="celular" id="celular_responsable" class="form-control" maxlength="100" placeholder="Celular" >              
            </div>

            <div class="input-group mb-3">   
              <input type="text" v-model="ocupacion" id="ocupacion" class="form-control" maxlength="100" placeholder="Ocupación" >              
            </div>

            <div class="input-group mb-3">   
              <input type="text" v-model="idioma" id="idioma" class="form-control" maxlength="100" placeholder="Idioma que Habla" >              
            </div>

            <div class="input-group mb-3">   
              <input type="text" v-model="relacion_responsable" id="relacion_responsable" class="form-control" maxlength="100" placeholder="Relación Responsable" >              
            </div>
          
            <!-- </div> -->
            <div class="d-grid col-6-mx-auto">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i> Guardar</button></div>            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { show_alerta,sendRequest } from "../../funciones";
import { useRoute } from "vue-router";
//import {ref} from 'vue';
import axios from 'axios';
//let BASE_URL=process.env.VUE_APP_BASE_URL;
let BASE_URL=import.meta.env.VITE_BASE_URL;
export default {
  name: 'EditEstudianteView',
  // setup(){
  //   const file = ref(null)
  //   const cargar = async() => {
  //          // debugger;
  //           console.log("selected file",file.value.files)
  //           //Upload to server
  //       }
  //       return {
  //         cargar,
  //         file
  //      }
  // },
  data(){
    return {
      ci_estudiante:0,extencion:'',nombres:'',apellidoP:'',apellidoM:'',direccion:'',celular:0,anio_ingreso:'',anio_cursado:'',genero:'',fecha_nacimiento:'',depa_nacimiento:'',prov_nacimiento:'',munic_nacimiento:'',tipo_ingreso:'',
      fotografia:'',estado_civil:'',idioma_nativo:'',idioma_regular:'',email:'',nacionalidad:'',numero_archivo:'',
      homologacion:'',estado_homologacion:'',convalidacion:'',estado_convalidacion:'',egresado:'',estado_egresado:'',titulado:'',descripcion_titulado:'',
      numero_registro:0,obs1:'',obs2:'',obs3:'',estado:'',descripcion_estado:'',baja:'',codigo_carrera:0,nombre_carrera:'',
      ci_especial:'',photography:'',fileFoto:null,
      idiomas:null,carreras:null,principal:'',provincias:null,departamentos:null,noencontrado:true,
      anios_carreras:'',
      url:BASE_URL+'estudiantes/responsableEstudiante/',
      organizacion_matriz:'',organizacion_departamental:'',organizacion_regional:'',comunidad_sindicato:'',datos_complementarios:'',
      nombre:'',apellidoP:'',ci:'',celular:'',ocupacion:'',idioma:'',relacion_responsable:'',ci_estudiante:''

    }
  },
   mounted() {
     const route =useRoute();
     this.id = route.params.id;
      
     this.url = this.url + '/' +this.id+'/';
     //this.getEstudiante();     
     this.getIdiomas();
     this.getCarreras();
     this.getProvincias();    
     this.getAnioCarrera();
     this.getDepartamentos();
    //  this.provincias.forEach(element => {
    //   if(element===this.prov_nacimiento)
    //   {
    //     noencontrado=false;        
    //   }
    //  }); 


     this.principal='/estudiantes';
  },
  methods:{
    cargarFoto(event){
      console.log('por aca'+event.target.files[0].name);

      this.photography=event.target.files[0].name;
      this.fileFoto=event.target.files[0];
    },
    onChange(event) {            
            axios.get(BASE_URL+'/parametros/obtenerProvincias/'+event.target.value+'/')
            .then(            
                response =>(
                    this.provincias = response.data                        
                )
            );  
    },
    getEstudiante(){
      axios.get(this.url).then(
        response =>(
          console.log(response),
          //revisar lo de fernando de objects
          this.nombres = response.data['nombres'],
          this.ci_estudiante=response.data['ci_estudiante'],
          this.extencion=response.data['extencion'],

          this.apellidoP=response.data['apellidoP'],
          this.apellidoM=response.data['apellidoM'],
          this.direccion=response.data['direccion'],
          this.celular=response.data['celular'],

          this.anio_ingreso=response.data['anio_ingreso'],
          this.anio_cursado=response.data['anio_cursado'],

          this.genero=response.data['genero']?response.data['genero']:'',
          this.fecha_nacimiento=response.data['fecha_nacimiento'],
          this.depa_nacimiento= response.data['depa_nacimiento'],
          this.prov_nacimiento=response.data['prov_nacimiento'],

          this.munic_nacimiento=response.data['munic_nacimiento'],

          this.tipo_ingreso=response.data['tipo_ingreso'],

          this.fotografia=response.data['fotografia'],
          
          this.estado_civil=response.data['estado_civil']?response.data['estado_civil']:'',
          this.idioma_nativo=response.data['idioma_nativo']?response.data['idioma_nativo']:'',
          this.idioma_regular=response.data['idioma_regular'],
          this.email=response.data['email'],

          this.nacionalidad=response.data['nacionalidad']?response.data['nacionalidad']:'',
          this.numero_archivo=response.data['numero_archivo'],
          
          this.homologacion=response.data['homologacion'],
          this.estado_homologacion=response.data['estado_homologacion'],
          this.convalidacion=response.data['convalidacion'],
          this.estado_convalidacion=response.data['estado_convalidacion'],
          this.egresado=response.data['egresado'],
          this.estado_egresado=response.data['estado_egresado'],
          this.titulado=response.data['titulado'],
          this.descripcion_titulado=response.data['descripcion_titulado'],

          this.numero_registro=response.data['numero_registro'],
          this.obs1=response.data['obs1'],
          this.obs2=response.data['obs2'],
          this.obs3=response.data['obs3'],


          this.estado=response.data['estado'],
          this.descripcion_estado=response.data['descripcion_estado'],
          this.baja=response.data['baja'],
          this.codigo_carrera=response.data['codigo_carrera'],
          this.nombre_carrera=response.data['nombre_carrera'],
          this.ci_especial=response.data['ci_especial']
           
        )
      ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });
        
      console.log('esto es:'+typeof(this.estado_civil));      
    },
    verificarProvincia(){

    },
    getIdiomas()
    {
      axios.get(BASE_URL+'/parametros/idiomasOriginarios/')
            .then(            
                response =>(
                    this.idiomas = response.data                        
                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
    },
    getCarreras()
    {
      axios.get(BASE_URL+'/parametros/carreras/')
            .then(            
                response =>(
                    this.carreras = response.data                        
                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
    },
   async getProvincias()
    {
      await axios.get(BASE_URL+'/parametros/provincias/')
            .then(            
                response =>(
                    this.provincias = response.data                        
                )
            );            
    },
    async getAnioCarrera()
    {
      await axios.get(BASE_URL+'/parametros/aniosCarreras/')
            .then(            
                response =>(
                    this.anios_carreras = response.data                        
                )
            );            
    },
    async getDepartamentos()
    {
      await axios.get(BASE_URL+'/parametros/departamentos/')
            .then(            
                response =>(
                    this.departamentos = response.data                        
                )
            );            
    },
    async guardar(){
      event.preventDefault();
      
      // if(this.ci_especial!=='')
      // {
      //   const sin_complemento =this.ci_especial.split('-')[0];
      //   this.ci_estudiante=sin_complemento;
      //   console.log('sin_complemento:'+sin_complemento);    
      // }
      if(this.nombres.trim()==='')
      {
        show_alerta('El nombre no puede ser vacio','warning','nombre');
      }else{

        const parametros={
                          organizacion_matriz:this.organizacion_matriz,
                          organizacion_departamental:this.organizacion_departamental,
                          organizacion_regional:this.organizacion_regional,
                          comunidad_sindicato:this.comunidad_sindicato,
                          otros:this.datos_complementarios,
                          ci_estudiante:this.id,
                          
                        };


        //const parametros={nombre_provincia:this.nombre.trim()};
        console.log(parametros);
        await sendRequest('PUT',parametros,this.url,'Organización Actualizada Exitosamente!',this.principal);
        this.$router.push('/perfil-estudiante/'+this.id)
      }
    }
  }
}
</script>
<style scoped>
body {
    font-size: .875rem;
    line-height: 1.25rem;
}
</style>
