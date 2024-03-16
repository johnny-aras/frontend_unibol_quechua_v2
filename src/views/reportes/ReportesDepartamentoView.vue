<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="mb-3 fw-bold ">

          <div class="mb-3 fs-5 text-center">
           REPORTE DE ESTUDIANTES INSCRITOS POR DEPARTAMENTO
          </div>          

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
      <!-- <div class=" col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <div class="table-responsive">
        <DataTable ref="table" id="reportes_generales" :data="estudiantes" :columns="columns" v-if="estudiantes"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: '<<t>>',
            pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '40%', target: [2],
              width: '10%', target: [3],
            },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: 10 },
            //{ responsivePriority: 3, targets: 3 },
            // { responsivePriority: 4, targets: 3 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="keycon">
          <thead class="pb-4 table-light">
            <tr>
              <th>
                CARRERA
              </th>
              <!-- <th class="d-none d-sm-block pb-4 col"> -->
              <th>
                COCHABAMBA
              </th>
              <th>
                LA PAZ
              </th>
              <th>
                SANTA CRUZ
              </th>
              <th>
                ORURO
              </th>
              <th>
                POTOSI
              </th>
              <th>
                CHUQUISACA
              </th>
              <th>
                TARIJA
              </th>
              <th>
                BENI
              </th>
              <th>
                PANDO
              </th>
              <th>
                TOTAL
              </th>
              <!-- <th>
                  APELLIDO-P.
                </th>
                <th class="col">
                  APELLIDO-M.
                </th> -->
              
              <!-- <th class="col-1">
                TIPO INGRESO
              </th>
              <th class="col-1">
                AÑO INGRESO
              </th> -->
              <!-- <th class="col-1">
                N° ARCHIVO
              </th> -->
              <!-- <th class="col-1">
                AÑO CURSADO
              </th> -->
              <!-- <th class="col-2">
                OBS.1
              </th>
              <th class="col-2">
                OBS.2
              </th> -->
              <!-- <th class="col-1">
                        OBS.1
                      </th>
                      <th class="col-1">
                        OBS.2
                      </th>                       -->
              <!-- <th class="col-1">
                ESTADO
              </th> -->
              <!-- <th class="col-1">
                INSCRITO
              </th> -->
            </tr>
          </thead>
          <!-- <div v-else>
            <img src="loading.gif" alt="iamgen">
          </div> -->

          <tbody id="contenido">

            <!-- <td class="d-flex justify-content-center">
                <div class="d-flex mb-1 ">
                  <router-link :to="{ path: '/estudiante/materias-cursadas/' + estudiante.ci_estudiante }"
                    class="btn btn-outline-secondary me-1">
                    <i class="fa-solid fa-user-graduate"></i>
                  </router-link>
                  <button class="btn btn-outline-success" @click="formularioA(estudiante.ci_estudiante)">
                    <i class="fa-regular fa-clipboard"></i>
                  </button>
                </div>
                <div class="d-flex">
                  <router-link :to="{ path: '/estudiante/edit/' + estudiante.ci_estudiante }"
                    class="btn btn-outline-warning me-1">
                    <i class="fa-solid fa-edit"></i>
                  </router-link>
                  <button class="btn btn-outline-success" @click="certificadoCalificaciones(estudiante.ci_estudiante)">
                    <i class="fa-solid fa-sheet-plastic"></i>
                  </button> -->
            <!-- <button class="btn btn-outline-danger" @click="eliminar(estudiante.ci_estudiante, estudiante.nombres)">
            <i class="fa-solid fa-trash"></i>
          </button> -->
            <!--           
                </div>
              </td> -->


          </tbody>
        </DataTable>
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
      </div>
      <!-- <div class="d-flex mb-1 ">
                  <router-link :to="{ path: '/estudiante/materias-cursadas/' + estudiante.ci_estudiante }"
                    class="btn btn-outline-success" 
                    >                    
                    <i class="fa-solid fa-user-graduate"></i>
                  </router-link> &nbsp;

                  <button class="btn btn-outline-success" @click="formularioA(estudiante.ci_estudiante)" >                   
                    <i class="fa-regular fa-clipboard"></i>
                  </button>                                                      
                </div>
                <div class="d-flex">
                  <router-link :to="{ path: '/estudiante/edit/' + estudiante.ci_estudiante }" class="btn btn-outline-warning"  
                    >                    
                    <i class="fa-solid fa-edit"></i>
                  </router-link> &nbsp;
                  <button class="btn btn-outline-danger" @click="eliminar(estudiante.ci_estudiante, estudiante.nombres)" >
                    
                    
                    <i class="fa-solid fa-trash"></i>
                  </button>                  
                </div>                -->

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
          
            <span class="btn btn-success ma-3 float-end" >
              <strong> TOTAL :{{ total_inscritos }}</strong> 
            </span>
          

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
//import DataTable from "datatables.net-bs5";
import { confirmar1,show_alerta } from '../../funciones';


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
  name: 'ReporteView',
  components: { DataTable },
  data() {
    return {
      carreras: null, url: BASE_URL + '/parametros/carreras/', principal: '', ruta: '../loading.gif',
      carrera:'',numero_estudiantes:'',año:'',
      carrera_selected:'',anio_selected:'',total_inscritos:'',
      estudiantes:null,gestiones:[],gestionActivated:false,
      selectedStatus:'',
      selectedStatus2:'',
      columns: [
      { data: null, render: function (data) { return `${data[0]}` } },
      { data: null, render: function (data) { return `${data[1]}` } },
      { data: null, render: function (data) { return `${data[2]}` } },
      { data: null, render: function (data) { return `${data[3]}` } },
      { data: null, render: function (data) { return `${data[4]}` } },
      { data: null, render: function (data) { return `${data[5]}` } },
      { data: null, render: function (data) { return `${data[6]}` } },
      { data: null, render: function (data) { return `${data[7]}` } },
      { data: null, render: function (data) { return `${data[8]}` } },
      { data: null, render: function (data) { return `${data[9]}` } },
      { data: null, render: function (data) { return `${data[10]}` } },

        //{ data: `${data.nombres} ${data.apellidoP} ${data.apellidoM}` },

        //{ data: 'apellidoP' },
        //{ data: 'apellidoM' },
        //{data:'celular'},
        
        // { data: 'tipo_ingreso' },
        // { data: 'anio_ingreso' },
        //{ data: 'numero_archivo' },
        //{ data: 'anio_cursado' },
        // { data: 'obs1' },
        // { data: 'obs2' },

        //{ data: 'estado' },
        //{ data: 'inscrito_gestion' },
        //{
        //data: 'ci_estudiante',
        // render:function(data){
        //   return `<button   data-id=${data} class="btn btn-danger" id="edit" @click="eliminar(${data.ci_estudiante},${data.nombres})">
        //                         <i class="fa-solid fa-trash"></i>
        //           </button> &nbsp;
        //           <router-link data-id=${data} :to="{path:'/estudiante/edit/'+ci_estudiante}" class="btn btn-warning">
        //                         <i class="fa-solid fa-edit"></i>
        //                     </router-link>

        //           `
        // }
        //},
      ]

    };
  },
  setup() {
    const table = ref(null)
    const keycon = ref(0)
    const forceRender = () => {
      keycon.value += 1;
    }
    // ...
    return {
      table,
      forceRender
    }
  },
  mounted() {
    //this.getEstudiantes();
    this.getEstudiantesPorDepartamentos();
    //this.getEstudiantesNuevos();
    this.getCarreras();
    this.getGestiones();
    //this.generarGestion();
    this.principal = '/estudiantes';
  },
  methods: {
    resetearFiltros(){
      this.selectedStatus='';
      this.selectedStatus2='';
      this.gestionActivated=false; 
      this.carrera_selected='';
      this.anio_selected='';

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
    generarGestion(){
      //console.log('esto'+gestion);
      let inicio=2024;
      let anios =['PRIMERO AÑO','SEGUNDO AÑO','TERCER AÑO'];
      let numero=5;
      
        for (let index = 0; index < numero; index++) {          
          this.gestiones.push(inicio-index)        
        }            
      console.log(this.gestiones);      
    },
    async onChange(event) {   
      //await this.waitForReload();      
      this.carrera_selected=  event.target.value;
//      this.table.dt.page.len(5).draw();
      console.log(event.target.value);
          await  axios.get(BASE_URL+'/reportes/EstudiantesCarreraAnio/'+this.carrera_selected+'/0/')
            .then(            
                response =>(
                    this.estudiantes = response.data['estudiantes'],   
                    this.numero_estudiantes=response.data['numero_estudiantes'],
                    this.carrera=response.data['carrera'],
                    this.año=response.data['año'],
                    console.log(this.estudiantes),               
                                    
                    //this.estudiantes =response.data
                    this.forceRender()
                    //agregar un loader con un modal encima
                    //this.getEstudiantesHabilitados()                 
                )
            );  
    },
    async onChanges(event) {   
      //await this.waitForReload();    
      this.gestionActivated=true;   
      this.anio_selected=  event.target.value;
      
      console.log(event.target.value);
          await  axios.get(BASE_URL+'/reportes/EstudiantesCarreraAnio/'+this.carrera_selected+'/'+this.anio_selected+'/')
            .then(            
                response =>(
                    this.estudiantes = response.data['estudiantes'],      
                    this.numero_estudiantes=response.data['numero_estudiantes'],
                    this.carrera=response.data['carrera'],
                    this.año=response.data['año'],              
                                    
                    //this.estudiantes =response.data
                    this.forceRender()
                    //agregar un loader con un modal encima
                    //this.getEstudiantesHabilitados()                 
                )
            );  
    },
    async getEstudiantesNuevos() {   
      //await this.waitForReload();         
      //console.log(event.target.value);
          await  axios.get(BASE_URL+'/administracion/ObtenerEstudiantesNuevosInscripcion/')
            .then(            
                response =>(
                    this.estudiantes = response.data['estudiantes'],
                    console.log(this.estudiantes)             
                                    
                    //this.estudiantes =response.data
                    //this.forceRender()
                    //agregar un loader con un modal encima
                    //this.getEstudiantesHabilitados()                 
                )
            );  
    },
    async getGestiones() {   
      //await this.waitForReload();         
      //console.log(event.target.value);
          await  axios.get(BASE_URL+'/parametros/aniosCarreras/')
            .then(            
                response =>(
                    this.gestiones = response.data,
                    console.log(this.gestiones)             
                                    
                    //this.estudiantes =response.data
                    //this.forceRender()
                    //agregar un loader con un modal encima
                    //this.getEstudiantesHabilitados()                 
                )
            );  
    },
    async waitForReload(){      
      await setTimeout(() => {
        console.log('esperando...');
        this.estudiantes = [];
        this.forceRender();
      }, 2000);
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
    async getEstudiantesPorDepartamentos() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/reportes/EstudiantesInscritosPorDepartamentos/')
        .then(
          response => (
            this.estudiantes = response.data['datos'],
            this.total_inscritos=response.data['TOTAL']
            // this.numero_estudiantes=response.data['numero_estudiantes'],
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
    getCarreras() {
      axios.get(this.url)
        .then(response => (this.carreras = response.data));
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
                      REPORTE DE ESTUDIANTES INSCRITOS POR DEPARTAMENTO
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



      const headers = [['CARRERA','COCHABAMBA', 'LA PAZ','SANTA CRUZ','ORURO','POTOSI','CHUQUISACA','TARIJA','BENI','PANDO','TOTAL']];


      // //PRIMERA FORMA FINALIZADA 
      // autoTable(doc, {
      //   startY: finalY + 20,
      //   html: '#reportes_generales',
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

      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 10,
        head: headers,
        body: this.estudiantes,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'justify' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        columnStyles: {
          0: { columnWidth: 'auto' }
        },
        // tableWidth: doc.internal.pageSize.getWidth() / 3,
        // margin: { left: margin - 20, right: margin,top: 105 }
        //columnStyles:{color}

      });
      finalY = doc.lastAutoTable.finalY

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'bold');
      doc.text(`
      TOTAL INSCRITOS: ${this.total_inscritos}
      `, (doc.internal.pageSize.getWidth() / 2) + 155, finalY+5, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      //PARTE COMENTADA
      // let wantedTableWidth = 100;
      // let pageWidth = doc.internal.pageSize.width;
      // let margin = (pageWidth - wantedTableWidth) / 2;

      // autoTable(doc, {
      //   //QUITANDO ESPACIO
      //   //startY: finalY + 20,               
      //   startY: finalY + 10,
      //   showHead: 'never',
      //   body: tabla_promedios,
      //   //theme:'grid',theme:'striped',theme:'plain'
      //   theme: 'plain',
      //   tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
      //   styles: { fontSize: 5, cellWidth: 'wrap', halign: 'center' },
      //   bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
      //   columnStyles: {
      //     1: { columnWidth: 'auto' }
      //   },
      //   tableWidth: doc.internal.pageSize.getWidth() / 3,
      //   margin: { left: margin - 20, right: margin,top: 105 }
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
  components: { DataTable }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';



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
