<template>
<div class="container">
  
    <div class="row">
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="mb-3 fw-bold  normal-letter">

        <div class="mb-3 fs-5 text-center">
          PERFIL DEL ESTUDIANTE
        </div>
      </div>
    </div>

    <div class="row">
      <div class="mb-3">        
        <div class="mb-3 d-grid gap-2 d-md-block">
<!-- 
          <button class="btn btn-outline-success  float-end ">
            <i class="fa-solid fa-user-plus"></i> <router-link to="/carrera/create" class="nav-link active">NUEVA
              CARRERA</router-link>
          </button>
          <button class="btn btn-outline-warning rounded   me-1" @click="editarSeleccionado()">
            Editar
            <i class="fa-solid fa-user-plus"></i>
          </button>
          <button class="btn btn-danger  rounded   me-1" @click="eliminarSeleccionado()">
            Eliminar
            <i class="fa-solid fa-trash"></i>
          </button> -->
          
            <button class="btn btn-warning ma-3" @click="exportPDF">
              <strong> GENERAR PDF :</strong> <i class="fa-solid fa-file-pdf"></i>
            </button>
          

        </div>
      </div>
    </div>

    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="table-responsive ">
        <DataTable ref="table" id="perfil_estudiante" :data="estudiante_formateado" :columns="columns"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Brti',order: [], info:'',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }],
            pageLength: 100,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '50%', target: [0],
              width: '50%', target: [1],
            },
            { orderable: false, targets: 0 },
            { orderable: false, targets: 1 },
            { responsivePriority: 0, targets: 0 },
            { responsivePriority: 1, targets: 1 },
            //{ responsivePriority: 3, targets: 3 },            
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" >        
          <thead class="pb-4 table-light">
            <tr>
              <th>
                INFORMACIÓN GENERAL
              </th>              
              <th>
                INFORMACIÓN ESTUDIANTIL
              </th>
              <!-- <th>
                CLAVE
              </th>
              <th>
                VALOR
              </th> -->
            </tr>
          </thead>
        <tbody class="table-group-divider" id="contenido">
        </tbody>
        </DataTable>
      </div>
    </div>

    <div class="row g-3 mb-3" >
      <div class="col-sm-12 col-md-6 col-lg-4" v-if="organizacion['id']">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-bold">   
              Organización Social          
            </h5>
            <!-- <div class="mb-3 fw-bold flex ">              
              <div class="  fs-6">
                Apellidos y Nombres: &emsp;
              </div>
                <div class="ma-3 ">
                  {{ `${apellidoP} ${apellidoM} ${nombres}` }}
                </div>                  
            </div>
            <div class="mb-3 fw-bold flex ">
              <div class="  fs-6">              
                Cédula de Identidad:  &emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${ci_estudiante}` }}
                </div>
            </div> -->

            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Organización Matriz:  &emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${organizacion_matriz}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Organización Departamental:  &emsp;
              </div>
                <div class="ma-3 float-center">
                 {{ `${organizacion_departamental}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Organización Regional:  
              </div>
                <div class="ma-3 ">
                 {{ `${organizacion_regional}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Comunidad Sindicato:  &emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${comunidad_sindicato}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Datos Complementarios:  
              </div>
                <div class="ma-3 ">
                 {{ `${otros}` }}
                </div>
            </div>
            <!-- <div class="mb-3 fw-bold flex ">

             
              <div class="  fs-6">
                Carrera:  
                <div >
                  {{ `${nombre_carrera}` }}
                </div>
                            
              </div>              
              <div class="  fs-6">
                          DIRECCIÓN:  {{ `${direccion}` }}
              </div>
              <div class="  fs-6">
                            CELULAR:  {{ `${celular}` }}
              </div>
              <div class="  fs-6">
                             GÉNERO:  {{ `${genero}` }}
              </div>
              <div class="  fs-6">
                FECHA DE NACIMIENTO:  {{ `${fecha_nacimiento}` }}
              </div>
              <div class="  fs-6">
         DEPARTAMENTO DE NACIMIENTO: {{ `${depa_nacimiento}` }}
              </div>
              <div class="  fs-6">
            PROVINCIA DE NACIMIENTO: {{ `${prov_nacimiento}` }}
              </div>
              <div class="  fs-6">
            MUNICIPIO DE NACIMIENTO:  {{ `${munic_nacimiento}` }}
              </div>
              <div class="  fs-6">
                         FOTOGRAFÍA:  {{ `${fotografia}` }}
              </div>
              <div class="  fs-6">
                FECHA DE NACIMIENTO:  {{ `${fecha_nacimiento}` }}
              </div>
              <div class="  fs-6">
                    TIPO DE INGRESO:{{ `${tipo_ingreso}` }}
              </div>
              <div class="  fs-6">
                       ESTADO CIVIL:  {{ `${estado_civil}` }}
              </div>
              <div class="  fs-6">
                      IDIOMA NATIVO:{{ `${idioma_nativo}` }}
              </div>
              <div class="  fs-6">
                     IDIOMA REGULAR:  {{ `${idioma_regular}` }}
              </div>
              <div class="  fs-6">
                FECHA DE NACIMIENTO:  {{ `${fecha_nacimiento}` }}
              </div>
              <div class="  fs-6">
                 CORREO ELECTRÓNICO:  {{ `${email}` }}
              </div>
                 <div class="  fs-6">
                       NACIONALIDAD:  {{ `${nacionalidad}` }}               
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4" v-else>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Organización Social
              
            </h5>
            <h6>
              No Existen Datos de La Organización Social
            </h6>
            <div>
              <!-- <button class="btn btn-info" @click="AgregarOrganizacion(ci_estudiante)">
                Agregar Informacion Reponsable
              </button> -->
              <router-link :to="{ path: '/estudiante/organizacion/' + ci_estudiante }"
                    class="btn btn-warning me-1">
                    Agregar Organización Social
                    <i class="fa-solid fa-edit"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>


      

      <div class="col-sm-12 col-md-6 col-lg-4" v-if="educacion_primaria['unidad_educativa']">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Educación Primaria
            </h5>
            <!-- <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p> -->
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Unidad Educativa:  &emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${unidad_educativa}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Año de Egreso:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${anio_egreso}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Tipo Colegio:  &emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${tipo_colegio}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                País Académico:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${pais_academico}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
               Departamento:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${departamento}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Provincia:  &emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${provincia}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Estado:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${estado_educacion}` }}
                </div>
            </div>



          </div>
        </div>
      </div>

      

      <div class="col-sm-12 col-md-6 col-lg-4" v-else>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Educación Primaria
              
            </h5>
            <h6>
              No Existen Datos de La Educación Primaria
            </h6>
            <div>
              <!-- <button class="btn btn-info" @click="AgregarOrganizacion(ci_estudiante)">
                Agregar Informacion Reponsable
              </button> -->
              <router-link :to="{ path: '/estudiante/organizacion/' + ci_estudiante }"
                    class="btn btn-warning me-1">
                    Agregar Educación
                    <i class="fa-solid fa-edit"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4" v-if="responsable_estudiante['id']">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Responsable del  Estudiante
            </h5>
            <!-- <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p> -->
            <div class="mb-3 fw-bold d-flex justify-content-between">
              <div class="  fs-6">              
                Nombre Completo:  &emsp;
              </div>
                <div class="ma-3 float-end">
                 {{ `${nombre_completo}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Cédula Identidad:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${cedula_responsable}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Celular:  &emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${celular_responsable}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
                Ocupación:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${ocupacion}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between ">
              <div class="  fs-6">              
               Idioma que Habla:  &emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${idioma_hablante}` }}
                </div>
            </div>
            <div class="mb-3 fw-bold d-flex justify-content-between">
              <div class="  fs-6">              
                Relación Familiar:  &emsp;&emsp;&emsp;&emsp;&emsp;
              </div>
                <div class="ma-3 ">
                 {{ `${relacion_responsable}` }}
                </div>
            </div>
            



          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4" v-else>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Responsable del  Estudiante
              
            </h5>
            <h6>
              No Existen Datos del Responsable
            </h6>
            <div>
              <!-- <button class="btn btn-info" @click="AgregarOrganizacion(ci_estudiante)">
                Agregar Informacion Reponsable
              </button> -->
              <router-link :to="{ path: '/estudiante/organizacion/' + ci_estudiante }"
                    class="btn btn-warning me-1">
                    AgregarResponsable
                    <i class="fa-solid fa-edit"></i>
              </router-link>
            </div>
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
import {ref} from 'vue';
import axios from 'axios';


//librerias para la exportacion en pdf
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);

//let BASE_URL=process.env.VUE_APP_BASE_URL;
let BASE_URL=import.meta.env.VITE_BASE_URL;
let MINISTERIO = import.meta.env.VITE_MINISTERIO;
let LOGO_UNI = import.meta.env.VITE_LOGO_UNI;
export default {
  name: 'PerfilEstudianteView',
  components: { DataTable },
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
      numero_registro:0,obs1:'',obs2:'',obs3:'',estado:'',descripcion_estado:'',baja:'',codigo_carrera:0,nombre_carrera:'',inscrito_gestion:'',
      ci_especial:'',photography:'',fileFoto:null,
      organizacion:{},
      organizacion_matriz:'',organizacion_departamental:'',organizacion_regional:'',comunidad_sindicato:'',otros:'',
      unidad_educativa:'',anio_egreso:'',tipo_colegio:'',pais_academico:'',departamento:'',provincia:'',estado_educacion:'',educacion_primaria:{},
      nombre_completo:'',cedula_responsable:'',celular_responsable:'',ocupacion:'',idioma_hablante:'',relacion_responsable:'',responsable_estudiante:{},
      idiomas:null,carreras:null,principal:'',provincias:null,departamentos:null,noencontrado:true,
      anios_carreras:'',
      estudiante_data:[],estudiante_formateado:[],gender:'',
      //url:BASE_URL+'/estudiantes/estudiantes',
      url:BASE_URL+'/estudiantes/estudiantes',

      columns: [       
        { data: null, render: function (data) { return `${data[0]}` } },
         { data: null, render: function (data) { return `${data[1]}` } },
        //  { data: null, render: function (data) { return `${data[2]}` } },
        //  { data: null, render: function (data) { return `${data[3]}` } },
         //{ data: null, render: function (data) { return `${data[4]}` } },
        // { data: null, render: function (data) { return `${data[5]}` } },
        // { data: null, render: function (data) { return `${data[6]}` } },
        // { data: null, render: function (data) { return `${data[7]}` } },
        //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
        //{ data: `${data.nombres} ${data.apellidoP} ${data.apellidoM}` },

        // <td>{{ materia.anio_cursado }}</td>
        // { data: 'codigo_asignatura' },
        // { data: 'homologacion' },
        // { data: 'nombre_asignatura' },
        // { data: 'total_horas' },
        // { data: 'pre_requisitos' },
        // { data: 'nota_num_final' },
        // { data: 'estado_gestion_espaniol' },
      ]
    }
  },
  setup() {
    const table = ref(null)
    // ...
    return {
      table
    }
  },
   mounted() {
     const route =useRoute();
     this.id = route.params.id;
      
     this.url = this.url + '/' +this.id+'/';
     //this.url = this.url + '/' +'13190057'+'/';
     
     this.getEstudiante();     
     this.getIdiomas();
     this.getCarreras();
     this.getProvincias();    
     this.getAnioCarrera();
     this.getDepartamentos();
     this.getOrganizacion(this.id);
     this.getEducacionPrimaria(this.id);
     this.getResponsable(this.id);
    //  this.provincias.forEach(element => {
    //   if(element===this.prov_nacimiento)
    //   {
    //     noencontrado=false;        
    //   }
    //  }); 


     this.principal='/estudiantes';
  },
  methods:{
    AgregarOrganizacion(ci){

    },
    cargarFoto(event){
      console.log('por aca'+event.target.files[0].name);

      this.photography=event.target.files[0].name;
      this.fileFoto=event.target.files[0];
    },
    listaGeneral(){

    },
    formatearLista(){
      let indice=20;
      for (let index = 0; index < this.estudiante_data.length; index++) {
        //const element = this.estudiante_data[index];
        this.estudiante_formateado.push('a',this.estudiante_data[index]) 
        if(index>=20)
        {
          this.estudiante_formateado.push('','',this.estudiante_data[indice]) 
          indice++;
        }

        return this.estudiante_formateado;
      }      
    },
    onChange(event) {            
            axios.get(BASE_URL+'/parametros/obtenerProvincias/'+event.target.value+'/')
            .then(            
                response =>(
                    this.provincias = response.data                        
                )
            );  
    },
    formatDate(cadena) {
      console.log('ss' + cadena + 'esto');
      // const date = new Date(cadena);  
      // return new Intl.DateTimeFormat('es-BO').format(date).toString();
      if (cadena !== '' && cadena !== null && cadena !== 'undefined' && cadena !== ' ') {
        console.log('entro?');
        let fecha = '';
        const datos = cadena.split('-');
        fecha = datos[2] + '/' + datos[1] + '/' + datos[0];
        return fecha;
      }
    },
    getGenero(genero){
      if(genero==='M')
      {
        return 'Masculino'
      }else{
        return 'Femenino'
      }
    },
    getEstudiante(){
      axios.get(this.url).then(
        response =>(
          console.log(response),
          //revisar lo de fernando de objects
          this.nombres = response.data['nombres'],
          this.ci_estudiante=response.data['ci_estudiante'],
          this.ci_especial=response.data['ci_especial'],
          this.extencion=response.data['extencion'],

          this.apellidoP=response.data['apellidoP'],
          this.apellidoM=response.data['apellidoM'],

          this.codigo_carrera=response.data['codigo_carrera'],
          this.nombre_carrera=response.data['nombre_carrera'],
          this.inscrito_gestion=response.data['inscrito_gestion'],
          this.estado=response.data['estado'],
          this.descripcion_estado=response.data['descripcion_estado'],


          this.direccion=response.data['direccion']?response.data['direccion']:'',
          this.celular=response.data['celular'],         

          this.genero=response.data['genero']?response.data['genero']:'',
          this.fecha_nacimiento=response.data['fecha_nacimiento'],
          this.depa_nacimiento= response.data['depa_nacimiento'],
          this.prov_nacimiento=response.data['prov_nacimiento'],

          this.munic_nacimiento=response.data['munic_nacimiento'],

          this.tipo_ingreso=response.data['tipo_ingreso'],

          this.fotografia=response.data['fotografia'],
          
          this.estado_civil=response.data['estado_civil']?response.data['estado_civil']:'',
          this.idioma_nativo=response.data['idioma_nativo']?response.data['idioma_nativo']:'',
          this.idioma_regular=response.data['idioma_regular']?response.data['idioma_regular']:'',
          this.email=response.data['email'],

          this.nacionalidad=response.data['nacionalidad']?response.data['nacionalidad']:'',

          //SEGUNDA PARTE
          this.anio_ingreso=response.data['anio_ingreso'],
          //this.estudiante_formateado.push(['NOMBRES:',`${this.apellidoP} ${this.apellidoM} ${this.nombres}`,'AÑO INGRESO:',this.anio_ingreso]),
          this.estudiante_formateado.push([`NOMBRES:  &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.apellidoP} ${this.apellidoM} ${this.nombres}`,`AÑO INGRESO:&emsp; &emsp;&emsp;&emsp;&emsp;&emsp; ${this.anio_ingreso}`]),
          this.anio_cursado=response.data['anio_cursado'],
          //this.estudiante_formateado.push(['CÉDULA IDENTIDAD:',this.ci_estudiante,'AÑO CURSADO:',this.anio_cursado]),
          this.estudiante_formateado.push([`CÉDULA IDENTIDAD :  &emsp;&emsp;&emsp;&emsp; ${this.ci_estudiante}`,`AÑO CURSADO:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.anio_cursado}`]),
          this.numero_archivo=response.data['numero_archivo'],
          //this.estudiante_formateado.push(['CARRERA:',this.nombre_carrera,'NUMERO ARCHIVO:',this.numero_archivo]),
          this.estudiante_formateado.push([`CARRERA:   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${this.nombre_carrera}`,`NÚMERO ARCHIVO:  &emsp; &emsp;&emsp;&emsp; ${this.numero_archivo}`]),
          

          this.homologacion=response.data['homologacion'],
          //this.estudiante_formateado.push(['INSCRITO:',this.inscrito_gestion,'HOMOLOGACIÓN:',this.homologacion]),
          this.estudiante_formateado.push([`INSCRITO:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.inscrito_gestion}`,`HOMOLOGACIÓN: &emsp; &emsp;&emsp;&emsp;&emsp; ${this.homologacion}`]),
          this.estado_homologacion=response.data['estado_homologacion']?response.data['estado_homologacion']:'',
          //this.estudiante_formateado.push(['ESTADO:',this.estado,'ESTADO HOMOLOGACIÓN:',this.estado_homologacion]),
          this.estudiante_formateado.push([`ESTADO: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  ${this.estado}`,`ESTADO HOMOLOGACIÓN:  &emsp; ${this.estado_homologacion}`]),

          this.convalidacion=response.data['convalidacion'],
          //this.estudiante_formateado.push(['DIRECCION:',this.direccion, &emsp;':',this.convalidacion]),
          this.estudiante_formateado.push([`DIRECCIÓN: &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.direccion}`,` CONVALIDACIÓN: &emsp;&emsp;&emsp;&emsp;&emsp;  ${this.convalidacion}`]),
          this.estado_convalidacion=response.data['estado_convalidacion'],
          //this.estudiante_formateado.push(['CELULAR:',this.celular,'ESTADO HOMOLOGACIÓN:',this.estado_convalidacion]),
          this.estudiante_formateado.push([`CELULAR: &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.celular}`,`ESTADO HOMOLOGACIÓN: &emsp;  ${this.estado_convalidacion}`]),
          //this.egresado=response.data['egresado']?response.data['egresado']:'',
          //this.estudiante_formateado.push(['GÉNERO:',this.genero,'EGRESADO:',this.egresado]),          
          this.estudiante_formateado.push([`GÉNERO:  &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${this.getGenero(this.genero)}`,`EGRESADO: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  ${this.egresado}`]),
          
          //this.estado_egresado=response.data['estado_egresado']?response.data['estado_egresado']:'',
          //this.estudiante_formateado.push(['FECHA NACIMIENTO:',this.fecha_nacimiento,'ESTADO EGRESADO:',this.estado_egresado]),
          this.estudiante_formateado.push([`FECHA NACIMIENTO: &emsp;&emsp;&emsp;&emsp;  ${this.fecha_nacimiento}`,`ESTADO EGRESADO: &emsp;&emsp;&emsp;&emsp;  ${this.estado_egresado}`]),

          //this.titulado=response.data['titulado'],
          this.titulado_tecnico_superior=response.data['titulado_tecnico_superior'],
          //this.estudiante_formateado.push(['DEPARTAMENTO NACIMIENTO:',this.depa_nacimiento,'TITULADO:',this.titulado]),
          this.estudiante_formateado.push([`DEPARTAMENTO NACIMIENTO: ${this.depa_nacimiento}`,`TITULADO:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${this.titulado}`]),
          //this.descripcion_titulado=response.data['descripcion_titulado']?response.data['descripcion_titulado']:'',
          this.descripcion_titulado_superior=response.data['descripcion_titulado_superior']?response.data['descripcion_titulado_superior']:'',
          this.titulado_licenciatura=response.data['titulado_licenciatura']?response.data['titulado_licenciatura']:'',
          this.descripcion_titulado_licenciatura=response.data['descripcion_titulado_licenciatura']?response.data['descripcion_titulado_licenciatura']:'',
          


          //this.estudiante_formateado.push(['PROVINCIA NACIMIENTO:',this.prov_nacimiento,'DESCRIPCIÓN TITULADO:',this.descripcion_titulado]),
          this.estudiante_formateado.push([`PROVINCIA NACIMIENTO:  &emsp;&emsp; ${this.prov_nacimiento}`,`DESCRIPCIÓN TITULADO: &emsp;  ${this.descripcion_titulado}`]),


          this.numero_registro=response.data['numero_registro'],
          //this.estudiante_formateado.push(['MUNICIPIO NACIMIENTO:',this.munic_nacimiento,'NÚMERO REGISTRO:',this.numero_registro]),
          this.estudiante_formateado.push([`MUNICIPIO NACIMIENTO: &emsp;&emsp;  ${this.munic_nacimiento}`,`NÚMERO REGISTRO:  &emsp;&emsp;&emsp;&emsp; ${this.numero_registro}`]),
          this.obs1=response.data['obs1'],
          //this.estudiante_formateado.push(['TIPO INGRESO:',this.tipo_ingreso,'OBSERVACIÓN1:',this.obs1]),
          this.estudiante_formateado.push([`TIPO INGRESO: &emsp;&emsp;&emsp;&emsp;&emsp; &emsp; ${this.tipo_ingreso}`,`OBSERVACIÓN1: &emsp;&emsp;&emsp;&emsp;&emsp;  ${this.obs1}`]),
          this.obs2=response.data['obs2'],
          //this.estudiante_formateado.push(['ESTADO CIVIL:',this.estado_civil,'OBSERVACIÓN2:',this.obs2]),
          this.estudiante_formateado.push([`ESTADO CIVIL: &emsp;  ${this.estado_civil}`,`OBSERVACIÓN2: &emsp;&emsp;&emsp;&emsp;&emsp;  ${this.obs2}`]),
          this.obs3=response.data['obs3'],
          //this.estudiante_formateado.push(['IDIOMA NATIVO:',this.idioma_nativo,'OBSERVACIÓN:',this.obs3]),
          this.estudiante_formateado.push([`IDIOMA NATIVO: &emsp;  ${this.idioma_nativo}`,`OBSERVACIÓN3:  &emsp;&emsp;&emsp;&emsp;&emsp; ${this.obs3}`]),
         
          this.baja=response.data['baja'],
          //this.estudiante_formateado.push(['IDIOMA REGULAR:',this.idioma_regular,'BAJA:',this.baja]),
          this.estudiante_formateado.push([`IDIOMA REGULAR:  &emsp; ${this.idioma_regular}`,`BAJA: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  ${this.baja}`]),
          //this.estudiante_formateado.push(['EMAIL:',this.email,'','']),
          this.estudiante_formateado.push([`EMAIL:  &emsp; ${this.email}`,``]),
          //this.estudiante_formateado.push(['NACIONALIDAD:',this.nacionalidad,'','']),
          this.estudiante_formateado.push([`NACIONALIDAD:  &emsp; ${this.nacionalidad}`,``]),
                             
          console.log(this.estudiante_formateado),
          this.estudiante_data=response.data           
        )
      ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });
        
      console.log('esto es:'+typeof(this.estado_civil));      
    },

    verificarProvincia(){

    },
    async getOrganizacion(id)
    {
      await axios.get(BASE_URL+'/estudiantes/ObtenerOrganizacion/'+id+'/')
            .then(            
                response =>(
                 
                    this.organizacion = response.data,              
                    this.organizacion_matriz=response.data['organizacion_matriz']?response.data['organizacion_matriz']:'',
                    this.organizacion_departamental=response.data['organizacion_departamental']?response.data['organizacion_departamental']:'',
                    this.organizacion_regional=response.data['organizacion_regional']?response.data['organizacion_regional']:'',
                    this.comunidad_sindicato=response.data['comunidad_sindicato']?response.data['comunidad_sindicato']:'',
                    this.otros=response.data['otros']?response.data['otros']:'',                    
                    console.log(this.organizacion)
                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
    },
    async getEducacionPrimaria(id)
    {
      await axios.get(BASE_URL+'/estudiantes/ObtenerEducacionPrimaria/'+id+'/')
            .then(            
                response =>(         
                  this.educacion_primaria=response.data,           
                    this.unidad_educativa=response.data['unidad_educativa']?response.data['unidad_educativa']:'',
                    this.anio_egreso=response.data['anio_egreso']?response.data['anio_egreso']:'',
                    this.tipo_colegio=response.data['tipo_colegio']?response.data['tipo_colegio']:'',
                    this.pais_academico=response.data['pais_academico']?response.data['pais_academico']:'',
                    this.departamento=response.data['departamento']?response.data['departamento']:'',        
                    this.provincia=response.data['provincia']?response.data['provincia']:'',                                        
                    this.estado_educacion=response.data['estado']?response.data['estado']:''
                    //console.log(response.data);           

                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
    },
    async getResponsable(id)
    {
      await axios.get(BASE_URL+'/estudiantes/ObtenerResponsable/'+id+'/')
            .then(            
                response =>(              
                  this.responsable_estudiante=response.data, 
                  console.log(response.data),
                    this.nombre_completo=response.data['nombre']?`${response.data['nombre']} ${response.data['apellidoP']}`:'',
                    this.cedula_responsable=response.data['ci']?response.data['ci']:'',
                    this.celular_responsable=response.data['celular']?response.data['celular']:'',
                    this.ocupacion=response.data['ocupacion']?response.data['ocupacion']:'',
                    this.idioma_hablante=response.data['idioma']?response.data['idioma']:'',        
                    this.relacion_responsable=response.data['relacion_responsable']?response.data['relacion_responsable']:''                                                 
                    //console.log(response.data)        

                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
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

        const parametros={ci_estudiante:this.ci_estudiante,
                          extencion:this.extencion,
                          nombres:this.nombres,
                          apellidoP:this.apellidoP,
                          apellidoM:this.apellidoM,
                          direccion:this.direccion,
                          celular:this.celular,
                          anio_ingreso:this.anio_ingreso,
                          anio_cursado:this.anio_cursado,

                          genero:this.genero,fecha_nacimiento:this.fecha_nacimiento,
                          depa_nacimiento:this.depa_nacimiento,
                          prov_nacimiento:this.prov_nacimiento,

                          munic_nacimiento:this.munic_nacimiento,

                          tipo_ingreso:this.tipo_ingreso,
                          fotografia:this.photography,
                          //fotografia:this.fotografia,
                          estado_civil:this.estado_civil,
                          idioma_nativo:this.idioma_nativo,
                          idioma_regular:this.idioma_regular,
                          email:this.email,
                          nacionalidad:this.nacionalidad,

                          numero_archivo:this.numero_archivo,

                          homologacion:this.homologacion,
                          estado_homologacion:this.estado_homologacion,
                          convalidacion:this.convalidacion,
                          estado_convalidacion:this.estado_convalidacion,
                          egresado:this.egresado,
                          estado_egresado:this.estado_egresado,
                          titulado:this.titulado,
                          descripcion_titulado:this.descripcion_titulado,

                          numero_registro:this.numero_registro,

                          obs1:this.obs1,
                          obs2:this.obs2,
                          obs3:this.obs3,

                          estado:this.estado,
                          descripcion_estado:this.descripcion_estado,
                          baja:this.baja,
                          //numero_registro:20202025,
                          codigo_carrera:this.codigo_carrera,
                          ci_especial:this.ci_especial
                        };


        //const parametros={nombre_provincia:this.nombre.trim()};
        console.log(parametros);
        await sendRequest('PUT',parametros,this.url,'Estudiante Actualizado Exitosamente!',this.principal);
        this.$router.push('/estudiantes')
      }
    },
    async exportPDF() {
      this.table.dt.page.len(1000).draw();
      //first try
      //parameters:orientation,unit,format
      // const doc = new jsPDF('p', 'pt', 'A4');


      //   let pdfName = 'test';                     
      //   doc.text(`Hello Students:

      //     ${this.estudiantes[0].nombre_carrera}                   

      //     `, 10, 100);
      //   doc.save(pdfName + '.pdf');

      //second try
      //const doc = new jsPDF({unit: 'px'});
      const doc = new jsPDF({ orientation: 'p', unit: 'px', format: 'letter' });
      //const doc = new jsPDF('l','px,','letter');
      doc.setFontSize(12);
      //let setY=15;

      // this.estudiantes.forEach(element => {
      //   doc.text(`
      //     ${element.nombres}                                         
      //     `, 10, setY);
      //     setY+=15;
      // });

      //EJEMPLO QUE ESTA AL FINAL DE COMO PASAR LOS HEADERS Y BODY
      //const headers = [['Name', 'Email', 'Country']];
      //const headers1 = [['Nro','nombres', 'apellidoP', 'apellidoM','celular','nombre_carrera','estado']];  // 注意有兩層[]
      // const body = [
      //     ['David', 'david@example.com', 'Sweden'],
      //     ['Castille', 'castille@example.com', 'Spain']
      // ]

      //SEGUNDA FORMA CON EL RELLENADO DE UN FORMATO SOLICITADO ATRAVES DE ESTRUCTURAS DE DATOS, LA PRIMERA A TRAVES DE UN TAG HTML
      const resultado = [];
      // const encabezado = [];

      // for (var i = 0; i < this.estudiantes.length; i += 1) {
      //   console.log(this.estudiantes[i]);
        //resultado.push(this.estudiantes[i])
        //  if(i==0)
        //  {
        //    encabezado.push({nombres:`${this.estudiantes[i].apellidoP} ${this.estudiantes[i].apellidoM} ${this.estudiantes[i].nombres} `,ci_estudiante:this.estudiantes[i].ci_estudiante,
        //                    nombre_carrera:this.estudiantes[i].nombre_carrera});
        //     console.log(encabezado);
        //  }
        resultado.push(['NOMBRES: ',`${this.nombres} ${this.apellidoP} ${this.apellidoM}`,'CARRERA: ',this.nombre_carrera])
        resultado.push(['CÉDULA IDENTIDAD: ',this.ci_estudiante,'AÑO INGRESO: ',this.anio_ingreso])
        resultado.push(['ESTADO: ',this.estado,'AÑO CURSADO: ',this.anio_cursado])
        resultado.push(['DIRECCIÓN: ',this.direccion,'INSCRITO: ',this.inscrito_gestion])
        resultado.push(['CELULAR: ',this.celular,'NÚMERO ARCHIVO: ',this.numero_archivo])
        resultado.push(['GÉNERO: ',this.genero,'HOMOLOGACIÓN: ',this.homologacion])
        resultado.push(['FECHA NACIMIENTO: ',this.fecha_nacimiento,'ESTADO HOMOLOGACIÓN: ',this.estado_homologacion])
        resultado.push(['DEPARTAMENTO NACIMIENTO: ',this.depa_nacimiento,'CONVALIDACIÓN: ',this.convalidacion])
        resultado.push(['PROV.NACIMIENTO: ',,'ESTADO CONVALIDACIÓN: ',this.estado_convalidacion])
        resultado.push(['MUNICIPIO NACIMIENTO: ',this.munic_nacimiento,'TITULADO TÉCNICO SUPERIOR: ',this.titulado_tecnico_superior])
        resultado.push(['TIPO INGRESO: ',this.tipo_ingreso,'DESCRIPCIÓN TITULADO TÉCNICO: ',this.descripcion_titulado_superior])
        resultado.push(['ESTADO CIVIL: ',this.estado_civil,'TITULADO LICENCIATURA: ',this.titulado_licenciatura])
        resultado.push(['DIOMA NATIVO: ',this.idioma_nativo,'DESCRIPCIÓN TITULADO LICENCIATURA: ',this.descripcion_titulado_licenciatura])
        resultado.push(['IDIOMA REGULAR: ',this.regular,'NÚMERO REGISTRO: ',this.numero_registro])
        resultado.push(['EMAIL: ',this.email,'OBSERVACIÓN1: ',this.obs1])
        resultado.push(['NACIONALIDAD: ',this.nacionalidad,'OBSERVACIÓN2: ',this.obs2])
        resultado.push(['','','OBSERVACIÓN3: ',this.obs3])
        resultado.push(['','','BAJA: ',this.baja])

      // result.push(Object.assign({}, data));
      // }

      //UNNECESARY PIECE OF CODE 
      // let otro=[];
      //   this.estudiantes.forEach(element => {
      //     let jsonsito = {
      //       nombre:element.nombres,
      //       apellidoP:element.apellidoP,
      //       apellidoM:element.apellidoM
      //     }
      //     otro.push(jsonsito);

      //   doc.text(`
      //     ${element.nombres}                                         
      //     `, 10, setY);
      //     setY+=15;
      // });


      //numero de pagina
      //  const pageNumber=3;
      //  for (let i = 0; i < pageNumber; i++) {
      //     doc.setPage(i);
      //     let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //現在這頁
      //     doc.setFontSize(12); //設定字體大小(optional)
      //     doc.text(
      //       `${pageCurrent} / ${pageNumber}`,
      //       190,
      //       doc.internal.pageSize.height - 10,
      //       {align: 'left'}
      //     );
      //   } 

      //<!--  -->
      //RELLENADO DE FORMA INICIAL()
      //RELLENADO DE DATOS DEL ESTUDIANTE:
      //INICIO PRIMERA FORMA

      let tabla_promedios = [];


      //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
      tabla_promedios.push(['TOTAL HORAS ACADÉMICAS', this.horas_academicas])
      tabla_promedios.push(['TOTAL DE ASIGNATURAS APROBADAS', this.cantidad_aprobadas])
      //tabla_promedios.push(['TOTAL DE ASIGNATURAS CURSADAS', this.cantidad_todas])
      tabla_promedios.push(['PROMEDIO DE CALIFICACIÓN GNRAL.', this.promedio_todas])
      tabla_promedios.push(['PREMEDIO DE CALIFICACIÓN APROBADAS', this.promedio_aprobadas])

      doc.setTextColor(10);
      doc.setFontSize(15);

      // doc.text(`
      //   Primer comentario                                        
      //    `, 10, setY);

      let finalY = doc.lastAutoTable.finalY || 10

      //doc.addImage("https://picsum.photos/200", "JPEG", doc.internal.pageSize.width-80, finalY+20, 50, 50);

      //await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width-80, finalY+20, 50, 50);
      //await doc.addImage("../../caracteristicas-bosques-tropicales.jpg", "JPG", 30, finalY+20, 50, 50);

      //<!-- -->
      //PRIMER EJEMPLO DE PRUEBA EXITOSO
      // doc.text(`
      //    HISTORIAL ACADEMICO DE AVANCE GENERAL                                                      
      //    `, 20, finalY);
      //                   //finalY+=25;    
      //    finalY+=20;    
      // //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      // doc.setFontSize(10);
      // doc.text(`                            
      //    APELLIDOS Y NOMBRES: ${this.apellidoP} ${this.apellidoM} ${this.nombres}                                  
      //    CEDULA DE IDENTIDAD: ${this.ci_estudiante}
      //    NRO DE REGISTRO: ${this.numero_registro}
      //    CARRERA: ${this.nombre_carrera}
      //    FECHA DE EMISION: ${this.fecha_emision}
      //    NIVEL DE FORMACION: ${this.grado}
      //    `,80, finalY);
      //    finalY+=35;     

      //INICIANDO LOS ENCABEZADOS Y FORMATO DE PRESENTACION
      await doc.addImage(MINISTERIO, 'JPG', 15, finalY + 5, 60, 60);
      await doc.addImage(LOGO_UNI, 'PNG', doc.internal.pageSize.width - 65, finalY + 5, 50, 50);


      // await doc.addImage("../../ministerio.jpg", "JPG", 15, finalY + 5, 60, 60);
      // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width - 65, finalY + 5, 50, 50);

      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.setTextColor(18, 73, 39);
      doc.text(`
                       UNIVERSIDAD INDÍGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA
                       UNIBOL QUECHUA "CASIMIRO HUANCA"
                       `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 20;

      doc.setTextColor(100);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                       Decreto Supremo N° 29664 de 2 de agosto de 2008 - Decreto Supremo N° 3079 del 8 de febrero 2017
                       R.M. 505/2013 - R.M. 1300/2018"
                       `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 20;

      doc.setTextColor(10);
      doc.setFontSize(8);
      doc.text(`
                       Tukuy sunquwan yahcyaninchikta, ruwayninchikta, yuyayninchikta kallpachaspa sumaq kawsayman kutina                       
                       `, (doc.internal.pageSize.getWidth() / 2) - 5, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 15;

      finalY += 15;

      doc.setTextColor(10);
      doc.setFontSize(12).setFont(undefined, 'bold');
      doc.text(`
                      REPORTE DE ESTUDIANTES INSCRITOS POR CARRERA/POR AÑO
                      GESTIÓN 2024
                      `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 20;

      // doc.setTextColor(10);
      // doc.setFontSize(9).setFont(undefined, 'bold');
      // doc.text(`
      //                 SEGÚN AJUSTE DE RM 0155/2023
      //                 `, (doc.internal.pageSize.getWidth() / 2) - 15, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 10;
      

      // doc.setTextColor(10);
      // doc.setFontSize(6).setFont(undefined, 'bold');
      // doc.text(`
      // SERIE "A"-3 
      // `, (doc.internal.pageSize.getWidth() / 2) + 160, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 10;





      // //PRIMERA FORMA FINALIZADA 
      // autoTable(doc, {
      //   startY: finalY + 20,
      //   html: '#perfil_estudiante',
      //   //styles: {font: 'arial',fontSize:9}
      //   //styles: {fontSize:9,halign: 'left'},
      //   theme: 'plain',
      //   tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
      //   styles: { fontSize: 6, halign: 'center' },
      //   bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
      //   margin: { top: 105 }
      //   //padding: 0                      
      // })

      // finalY = doc.lastAutoTable.finalY

      // doc.setTextColor(10);
      // doc.setFontSize(8).setFont(undefined, 'bold');
      // doc.text(`
      // TOTAL INSCRITOS: ${this.total_inscritos}
      // `, (doc.internal.pageSize.getWidth() / 2) + 155, finalY+5, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 10;

      //PARTE COMENTADA
      // let wantedTableWidth = 100;
      // let pageWidth = doc.internal.pageSize.width;
      // let margin = (pageWidth - wantedTableWidth) / 2;

      const headers = [['INFORMACIÓN GENERAL', ' ','INFORMACIÓN UNIVERSITARIA',' ']];

      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 10,
        //showHead: 'never',
        head: headers,
        body: resultado,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'justify' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        columnStyles: {
          1: { columnWidth: 'auto' }
        },
        //tableWidth: doc.internal.pageSize.getWidth() / 3,
        //margin: { left: margin - 20, right: margin,top: 105 }
        //columnStyles:{color}

      });
      finalY = doc.lastAutoTable.finalY


      // autoTable(doc, {
      //   //QUITANDO ESPACIO
      //   //startY: finalY + 20,               
      //   startY: finalY + 10,
      //   head: headers,
      //   body: requirements,
      //   //theme:'grid',theme:'striped',theme:'plain'
      //   theme: 'striped',
      //   tableLineColor: [0, 0, 0], tableLineWidth: 0.5,
      //   styles: { fontSize: 10, cellWidth: 'wrap', halign: 'justify' },
      //   bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
      //   headStyles: {
      //     fillColor: [255, 255, 255],
      //     textColor: [0, 0, 0],
      //     halign: 'center'
      //   },
      //   padding: 2,
      //   columnStyles: {
      //     0: { cellWidth: 50, halign: 'center' },
      //     1: { cellWidth: 299, halign: 'center' },
      //     2: { cellWidth: 50, halign: 'center' },
      //     // etc
      //   }
      //   //columnStyles:{color}                                          
      // });


      // finalY = doc.lastAutoTable.finalY
      // finalY += 30;

      // doc.setTextColor(10);
      // doc.setFontSize(6).setFont(undefined, 'bold');
      // doc.text(`                
      //   APR.: APROBADO
      //   REP.:REPROBADO
      //   AB.:ABANDONO
      //   CONV.:CONVALIDADO
      //   *Documento solo válido para Trámite Interno.
      //     `, 40, finalY);


      //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);

      //const body = this.estudiantes;
      //const body =otro;

      //SEGUNDA FORMA FINALIZADA
      // autoTable(doc, {
      //   head: headers1,
      //   body:resultado,
      // });

      //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });

      //await doc.save(`${this.apellidoP} ${this.apellidoM} ${this.nombres}`);      
      await window.open(doc.output('bloburl'), '_blank');

      //var doc = new jsPDF('p', 'pt', 'A4');
      // margins = {
      //     top: 80,
      //     bottom: 60,
      //     left: 40,
      //     width: 522
      // };                                                                                                     
    }
  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';

body {
  font-size: .875rem;
  line-height: 1.25rem;
}

.normal-letter {
  font-size: .875rem;
  line-height: 1.25rem;
}

/* body {
    font-size: .875rem;
    line-height: 1.25rem;
} */


table.dtr-inline.collapsed>tbody>tr>td.dtr-control,
table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td.dtr-control:before,
table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th.dtr-control:before {
  content: "-";
  background-color: #d33333;
}

table.dataTable.dtr-inline.collapsed>tbody>tr>td.dtr-control:before,
table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control:before {
  top: 33%;
  left: 5px;
  height: 1em;
  width: 1em;
  margin-top: -5px;
  display: block;
  position: absolute;
  color: white;
  border: .15em solid white;
  border-radius: 1em;
  box-shadow: 0 0 0.2em #444;
  box-sizing: content-box;
  text-align: center;
  text-indent: 0 !important;
  font-family: "Courier New", Courier, monospace;
  line-height: 1em;
  content: "+";
  background-color: #31b131;
  background-color: #74a2ff;
}
</style>