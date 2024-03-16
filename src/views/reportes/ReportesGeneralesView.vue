<template>
<div class="grid d-flex" v-if="numero_estudiantes_totales">
        <div class="col-12 lg:col-6 xl:col-3 d-flex align-items-stretch">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">ESTUDIANTES INSCRITOS POR CARRERA</span>
                        <div class="text-900 font-medium text-xl">Total Inscritos: {{ numero_estudiantes_totales }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round cursor-pointer" style="width: 2.5rem; height: 2.5rem" @click="ReportesCarrera()">
                        <i class="pi pi-paperclip text-blue-500 pe-auto"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">24 new </span> -->
                <span class="text-500 font-medium text-l">INGENIERÍA EN ACUICULTURA COMUNITARIA Y GESTIÓN DE AGUA:</span>
                <span class="text-green-500 font-medium">  {{ numero_estudiantes_acuc }} INSCRITOS</span>
                <span class="text-blue-500 font-medium"> {{ porcentaje_estudiantes_acuc }} (%)</span>
                <span class="text-500 font-medium text-l">LICENCIATURA EN ECONOMÍA COMUNITARIA PRODUCTIVA:</span>
                <span class="text-green-500 font-medium">  {{ numero_estudiantes_ecop }} INSCRITOS</span>
                <span class="text-blue-500 font-medium"> {{porcentaje_estudiantes_ecop  }} (%)</span>
                <span class="text-500 font-medium">INGENIERÍA EN TRANSFORMACIÓN DE ALIMENTOS:</span>
                <span class="text-green-500 font-medium">  {{ numero_estudiantes_tial }} INSCRITOS</span>
                <span class="text-blue-500 font-medium"> {{ porcentaje_estudiantes_tial }} (%)</span>
                <span class="text-500 font-medium">INGENIERÍA EN AGROFORESTERÍA COMUNITARIA ECOLÓGICA:</span>
                <span class="text-green-500 font-medium">  {{ numero_estudiantes_agrf }} INSCRITOS</span>
                <span class="text-blue-500 font-medium"> {{ porcentaje_estudiantes_agrf }} (%)</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3 d-flex align-items-stretch">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">ESTUDIANTES INSCRITOS POR GÉNERO(M/F) </span>
                        <div class="text-900 font-medium text-xl">Total Inscritos: {{ numero_estudiantes_totales }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round cursor-pointer"  style="width: 2.5rem; height: 2.5rem" @click="ReportesGenero()">
                        <i class="pi pi-paperclip text-orange-500 text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">%52+ </span> -->
                <!-- <span class="text-500">since last week</span> -->
                <span class="text-500 font-medium text-l">HOMBRES:</span>
                <span class="text-green-500 font-medium">  {{ varones_generales }} INSCRITOS</span><span class="text-blue-500 font-medium"> {{ porcentaje_varones_generales }} (%)</span>
                <span class="text-500 font-medium text-l">MUJERES:</span>
                <span class="text-green-500 font-medium">  {{ mujeres_generales }} INSCRITOS</span><span class="text-blue-500 font-medium"> {{ porcentaje_mujeres_generales }} (%)</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3 d-flex align-items-stretch">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">ESTUDIANTES INSCRITOS POR ORGANIZACIÓN SOCIAL</span>
                        <div class="text-900 font-medium text-xl">Total Inscritos: {{ numero_estudiantes_totales }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round cursor-pointer" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-paperclip text-blue-500 text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">520 </span> -->
                <div class="text-900 font-medium text-l">ORGANIZACIONES MATRICES:</div>
                <span class="text-500 font-medium text-l">ORGANIZACION #1:</span>
                <span class="text-green-500 font-medium">  # INSCRITOS</span><span class="text-blue-500 font-medium"> # (%)</span>
                <span class="text-500 font-medium text-l">ORGANIZACION #2:</span>
                <span class="text-green-500 font-medium">  # INSCRITOS</span><span class="text-blue-500 font-medium"> # (%)</span>
                <span class="text-500 font-medium text-l">ORGANIZACION #3:</span>
                <span class="text-green-500 font-medium">  # INSCRITOS</span><span class="text-blue-500 font-medium"> # (%)</span>
                <span class="text-500 font-medium text-l">ORGANIZACION #4:</span>
                <span class="text-green-500 font-medium">  # INSCRITOS</span><span class="text-blue-500 font-medium"> # (%)</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3 d-flex align-items-stretch">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">ESTUDIANTES INSCRITOS POR DEPARTAMENTO</span>
                        <div class="text-900 font-medium text-xl">Total Inscritos: {{ numero_estudiantes_totales }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round cursor-pointer" style="width: 2.5rem; height: 2.5rem" @click="ReportesDepartamento()">
                        <i class="pi pi-paperclip text-orange-500 text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">85 </span> -->
                <div class="text-900 font-medium text-l">DEPARTAMENTOS(MAS AFLUENCIA):</div>
                <div class="d-flex justify-content-between">
                  <div>
                    <span class="text-500 font-medium text-l">COCHABAMBA:</span>
                    <span class="text-green-500 font-medium">
                        <p>150 INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> 25 (%)</p>
                    </span>
                  </div>
                  <div>
                    <span class="text-500 font-medium text-l">
                      <p>LA PAZ:</p></span>
                    <span class="text-green-500 font-medium">
                       <p> 55 INSCRITOS</p>
                    </span>
                        <span class="text-blue-500 font-medium"> 26 (%)</span>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <span class="text-500 font-medium text-l">SANTA CRUZ:</span>
                    <span class="text-green-500 font-medium">
                      <p>  # INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> # (%)</p>
                    </span>
                  </div>
                  <div>
                    <span class="text-500 font-medium text-l">ORURO:</span>
                    <span class="text-green-500 font-medium">  
                      <p># INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> # (%)</p>
                    </span>                    
                  </div>
                </div>

                <div class="d-flex justify-content-between">
                  <div>
                    <span class="text-500 font-medium text-l">POTOSI:</span>
                    <span class="text-green-500 font-medium"> 
                      <p> # INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium"> 
                      <p># (%)</p>
                    </span>
                  </div>
                  <div>
                    <span class="text-500 font-medium text-l">CHUQUISACA:</span>
                    <span class="text-green-500 font-medium">  
                      <p># INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> # (%)</p>
                    </span>
                  </div>
                </div>

                <div class="d-flex justify-content-between">
                  <div>
                    <span class="text-500 font-medium text-l">TARIJA:</span>
                    <span class="text-green-500 font-medium">
                       <p> # INSCRITOS</p>
                    </span>                    
                    <span class="text-blue-500 font-medium">
                       <p> # (%)</p>
                    </span>
                  </div>
                  <div>
                    <span class="text-500 font-medium text-l">BENI:</span>
                    <span class="text-green-500 font-medium">
                      <p>  # INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> # (%)</p>
                    </span>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between">
                  <div>
                    <span class="text-500 font-medium text-l">PANDO:</span>
                    <span class="text-green-500 font-medium">
                      <p>  # INSCRITOS</p>
                    </span>
                    <span class="text-blue-500 font-medium">
                      <p> # (%)</p>
                    </span>
                  </div>
                </div>
                    
                
                
                

            </div>
        </div>
</div>
<div v-else>
  <div class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Cargando...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
</div>

  <div class="container">
    <div class="row">
      <div class="mb-3">
        <div class="d-grid col-3-mx-auto offset-md-9">
          <!-- <button class="btn btn-success">                
                  <router-link to="/carrera/create" class="nav-link active">Nueva Carrera</router-link><i class="fa-solid fa-building-columns"></i>
              </button></div>    -->

        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="mb-3">        
        <div class="mb-3 d-grid gap-2 d-md-block">

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
          </button>
          <button class="btn btn-success" @click="mostrarMallaAcademica()">
            <i class="fa-solid fa-table"></i>Malla Académica
          </button>

        </div>
      </div>
    </div> -->

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
      <div class="table-responsive">        
        <DataTable ref="table" id="estudiantes_generales" :data="estudiantes_generales" :columns="columns" 
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            pageLength: 5,                                                             
            columnDefs: [{
              width: '10%', target: [3],
              width: '10%', target: [1],
              width: '40%', target: [0],
            },
              { responsivePriority: 1, targets: 0 },
              { responsivePriority: 2, targets: 6 },
              // { responsivePriority: 3, targets: 3 },
              // { responsivePriority: 4, targets: 4 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="columns.length">
          <thead class="table-light">
            <tr>
              <th>
                CARRERA
              </th>
              <th>
                PRIMER AÑO
              </th>
              <th>
                SEGUNDO AÑO
              </th>
              <th>
                TERCER AÑO
              </th>
              <th>
                CUARTO AÑO
              </th>
              <th>
                QUINTO AÑO
              </th>
              <th>
                TOTAL
              </th>
            </tr>
          </thead>

          <tbody class="table-group-divider" id="contenido">
            
          </tbody>
        </DataTable>
        <!-- <div v-else>
          <div class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
              Cargando...
              <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
              </h3>
            </div>
          </div>
        </div>         -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
//import DataTable from "datatables.net-bs5";
import { confirmar1 } from '../../funciones';

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

//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);
let BASE_URL = import.meta.env.VITE_BASE_URL;
let MINISTERIO = import.meta.env.VITE_MINISTERIO;
let LOGO_UNI = import.meta.env.VITE_LOGO_UNI;
export default {
  name: 'DocenteView',
  components: { DataTable },
  data() {
    return {
      fecha_emision:'',estudiantes_generales:null,total_inscritos:'',
      carreras: null, url: BASE_URL + '/parametros/carreras/', principal: '', ruta: '../loading.gif',
      numero_estudiantes_totales:'',estudiantes:null,respuesta:{},
      numero_estudiantes_acuc:'',numero_estudiantes_tial:'',numero_estudiantes_ecop:'',numero_estudiantes_agrf:'',
      porcentaje_estudiantes_acuc:'',porcentaje_estudiantes_tial:'',porcentaje_estudiantes_ecop:'',porcentaje_estudiantes_agrf:'',
      estudiantes_carrera:'',estudiantes_genero:[],
      varones_generales:0,mujeres_generales:0,total_genero:0,
      
      columns: [
      { data: null, render: function (data) { return `${data[0]}` } },
      { data: null, render: function (data) { return `${data[1]}` } },
      { data: null, render: function (data) { return `${data[2]}` } },
      { data: null, render: function (data) { return `${data[3]}` } },
      { data: null, render: function (data) { return `${data[4]}` } },
      { data: null, render: function (data) { return `${data[5]}` } },
      { data: null, render: function (data) { return `${data[6]}` } }      
    ]
      //carrera:'',numero_estudiantes_totales:'',año:'',estudiantes:null,
      // columns: [
      //   {
      //     data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
      //   },
      //   { data: 'codigo_carrera' },
      //   { data: 'nombre_carrera' },
      //   //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
      //   { data: 'descripcion' },
      //   { data: 'estado' },

      // ]

    };
  },
  setup() {
    const table = ref(null)
    // ...
    return {
      table
    }
  },
  mounted() {
    //this.getCarreras();
    this.getEstudiantes();
    this.getCarreras();
    this.cargarPorGenero();

    this.getEstudiantesGenerales();
    //this.cargarPorCarrera();
    //console.log(this.getEstudiantesPorCarrera('ACUC'));
    
    this.principal = '/carreras';
  },
  methods: {
    
    ReportesCarrera(){
      this.$router.push('/reporte/reporte-carrera/');
    },
    ReportesGenero(){
      this.$router.push('/reporte/reporte-genero/');
    },
    ReportesDepartamento(){
      this.$router.push('/reporte/reporte-departamento/');
    },
    async getEstudiantesGenerales() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/reportes/EstudiantesInscritosPorCarreraAnio/')
        .then(
          response => (
            this.estudiantes_generales = response.data['datos'],
            this.estudiantes_generales[4][6]=response.data['TOTAL']
            //this.total_inscritos=response.data['TOTAL'],
            // this.fecha_emision=response.data['fecha_emision']
            // this.numero_estudiantes=response.data['numero_estudiantes'],
            // this.carrera=response.data['carrera'],
            // this.año=response.data['año']
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
      console.log(this.estudiantes_generales);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },
    async  getEstudiantes() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/reportes/EstudiantesCarreraAnio/0/0/')
        .then(
          response => (
            this.estudiantes = response.data['estudiantes'],
            this.numero_estudiantes_totales=response.data['numero_estudiantes']
            // this.carrera=response.data['carrera'],
            // this.año=response.data['año']
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
      console.log(this.estudiantes);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },
    async getEstudiantesPorGenero() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/reportes/EstudiantesInscritosGenero/')
        .then(
          response => (
            //this.estudiantes_tabla=response.data,
            this.estudiantes_genero=response.data
            // this.estudiantes = response.data['estudiantes'],
            // this.numero_estudiantes=response.data['numero_estudiantes'],
            // this.carrera=response.data['carrera'],
            // this.año=response.data['año']
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
        return this.estudiantes_genero;
      //console.log(this.estudiantes);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },
    async getEstudiantesPorCarrera(carrera_universitaria) {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/reportes/EstudiantesCarreraAnio/'+carrera_universitaria+'/0/')
        .then(
          response => (
            this.estudiantes_carrera = response.data['numero_estudiantes']
            //this.estudiantes_carrera = response.data['estudiantes']
            //this.numero_estudiantes_totales=response.data['numero_estudiantes']
            // this.carrera=response.data['carrera'],
            // this.año=response.data['año']
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
        return this.estudiantes_carrera;
      //console.log(this.estudiantes);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },
    async cargarPorCarrera(carrera){
      //console.log(carrera);
      let career_name='';
      let respuesta_estudiantes={};   
      let respuesta_general ='';   
      respuesta_general= await this.getEstudiantesPorCarrera('0');

      for (let index = 0; index < carrera.length; index++) {
        career_name = carrera[index]['codigo_carrera']
        console.log('ps'+career_name);
        if(career_name==='ACUC')     
        {
          respuesta_estudiantes = await this.getEstudiantesPorCarrera('ACUC');          
          //console.log(this.estudiantes_carrera['numero_estudiantes']);
          this.numero_estudiantes_acuc=respuesta_estudiantes;
          console.log(this.numero_estudiantes_acuc);
          console.log('aca'+this.numero_estudiantes_totales);
          this.porcentaje_estudiantes_acuc=((this.numero_estudiantes_acuc/respuesta_general)*100).toFixed(2);
          console.log(this.porcentaje_estudiantes_acuc);
        }else if(career_name==='ECOP'){
          respuesta_estudiantes = await  this.getEstudiantesPorCarrera('ECOP');
          this.numero_estudiantes_ecop=respuesta_estudiantes;
          this.porcentaje_estudiantes_ecop=((this.numero_estudiantes_ecop/respuesta_general)*100).toFixed(2);
          console.log(this.numero_estudiantes_totales);
        }else if(career_name==='TIAL')
        {
          respuesta_estudiantes = await  this.getEstudiantesPorCarrera('TIAL');
          this.numero_estudiantes_tial=respuesta_estudiantes;
          this.porcentaje_estudiantes_tial=((this.numero_estudiantes_tial/respuesta_general)*100).toFixed(2);
          console.log(this.numero_estudiantes_totales);
        }else{
          respuesta_estudiantes = await this.getEstudiantesPorCarrera('AGRF');
          this.numero_estudiantes_agrf=respuesta_estudiantes;
          this.porcentaje_estudiantes_agrf=((this.numero_estudiantes_agrf/respuesta_general)*100).toFixed(2);
        }
        //console.log(career_name);
      }
    },
    async cargarPorGenero(){
      let resultado = await this.getEstudiantesPorGenero();
      this.varones_generales =resultado[4][1];
      this.mujeres_generales =resultado[4][2];
      this.total_genero = this.varones_generales+this.mujeres_generales;
      this.porcentaje_varones_generales=((this.varones_generales/this.total_genero)*100).toFixed(2);
      this.porcentaje_mujeres_generales=((this.mujeres_generales/this.total_genero)*100).toFixed(2);

      //console.log(varones,mujeres);
    },
    verificarSeleccion() {
      let datos = this.carreras;
      let identificador = '';
      let nombres = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombre_carrera}`;
        let clave = datos[idx].codigo_carrera;

        identificador = clave;
      });
      return { identificador, nombres };
    },
    async editarSeleccionado() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        this.$router.push('/carrera/edit/' + identificador + '/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
    eliminarSeleccionado() {
      const { identificador, nombres } = this.verificarSeleccion();

      if (identificador) {
        const ruta = 'parametros/carreras/' + identificador + '/';
        //const principal = '/docentes';
        confirmar1(identificador, nombres, ruta, this.principal);
        //this.$router.push('/estudiante/edit/'+identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
    mostrarMallaAcademica() {
      const { identificador } = this.verificarSeleccion();
      console.log(identificador);
      if (identificador) {
        //console.log('mostrarmall'+identificador);
        this.$router.push('/carrera/mostrarmalla/' + identificador+'/');
      } else {
        const error = 'Debes Seleccionar Una Carrera!';
        show_alerta(error, 'info')
      }
    },
   async  getCarreras()
    {
      await axios.get(BASE_URL+'/parametros/carreras/')
            .then(            
                response =>(
                    this.carreras = response.data,
                    this.cargarPorCarrera(this.carreras)
                    //console.log(this.carreras)                        
                )
            ).catch(error => { 
          console.log(error)
          show_alerta(error,'error')
        });           
    }, eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }
      //linea adicional recientemente añadida
      //const principal = '/docentes';
      const ruta = 'parametros/carreras/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
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
      // const resultado = [];
      // const encabezado = [];

      // for (var i = 0; i < this.estudiantes.length; i += 1) {
      //   console.log(this.estudiantes[i]);
      //   //resultado.push(this.estudiantes[i])
      //    if(i==0)
      //    {
      //      encabezado.push({nombres:`${this.estudiantes[i].apellidoP} ${this.estudiantes[i].apellidoM} ${this.estudiantes[i].nombres} `,ci_estudiante:this.estudiantes[i].ci_estudiante,
      //                      nombre_carrera:this.estudiantes[i].nombre_carrera});
      //       console.log(encabezado);
      //    }
      //   resultado.push([i+1,this.estudiantes[i].nombres,this.estudiantes[i].apellidoP,this.estudiantes[i].apellidoM,this.estudiantes[i].celular,
      //   this.estudiantes[i].nombre_carrera,this.estudiantes[i].estado])
      //result.push(Object.assign({}, data));
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
      //   html: '#estudiantes_generales',
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

      const headers = [['CARRERA', 'PRIMER AÑO','SEGUNDO AÑO','TERCER AÑO','CUARTO AÑO','QUINTO AÑO', 'TOTAL']];

      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 10,
        //showHead: 'never',
        head: headers,
        body: this.estudiantes_generales,
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
  },  
}
</script>
<style >
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';
.cursor-pointer{
  cursor: pointer;
}

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
