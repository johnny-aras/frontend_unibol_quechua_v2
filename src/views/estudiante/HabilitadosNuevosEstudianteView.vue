<template >
  <!-- <div class="container-fluid text-center"> -->
  <div class="container" id="contenido-global">
    <div class="row">
      <div class="mb-3 fw-bold">
        <!-- <div class="mb-3 col-lg-10 offset-1"> -->
        <!-- <button class="btn btn-outline-success col-2 float-end">
            <i class="fa-solid fa-table"></i> <router-link to="/estudiante/curso-preparatorio"
              class="nav-link active">ESTUDIANTES-PREPARATORIO</router-link>
          </button> &nbsp; -->
        <!-- </div> -->

        <div class="mb-3 fs-4 text-center">
          PLANILLA DE ESTUDIANTES HABILITADOS PARA LA INSCRIPCION:
        </div>

        <!-- <div class=" mb-3">                 
              APELLIDOS Y NOMBRES:    {{`${apellidoP} ${apellidoM} ${nombres}`}}
            </div>
            
            <div class=" mb-3">                 
              CEDULA DE IDENTIDAD:     {{`${ci_estudiante}`}}
            </div>

            <div class=" mb-3">                 
              NRO DE REGISTRO:       {{`${numero_registro}`}}
            </div>

            <div class=" mb-3">                 
              CARRERA:         {{`${nombre_carrera}`}}
            </div>

            <div class=" mb-3">                 
              APELLIDOS Y NOMBRES:      {{`${apellidoP} ${apellidoM} ${nombres}`}}
            </div>

            <div class=" mb-3">                 
              FECHA DE EMISION :         {{`${fecha_emision}`}}
            </div> -->

      </div>
    </div>

    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block">

          <button class="btn btn-outline-success float-end">
            <!-- <i class="fa-solid fa-table"></i> <router-link to="/estudiante/curso-preparatorio" -->
            <i class="fa-solid fa-table"></i> <router-link to="/curso-preparatorio"
              class="nav-link active">ESTUDIANTES-PREPARATORIO</router-link>
          </button> &nbsp;

          <button class="btn btn-outline-success  me-1" @click="inscribirEstudiante">
            <i class="fa-solid fa-user-plus"></i>INSCRIBIR

          </button>
          <button class="btn btn-warning rounded   me-1" @click="inscripcionDirectaN()">
            <i class="fa-solid fa-user-plus"></i>INS.DIRECTA
          </button>
          <button class="btn btn-outline-danger  rounded   me-1" @click="reimprimirInscripcionNuevos()">
            REIMPR.-N
          </button>
          <button class="btn btn-outline-secondary me-1" @click="recepcionAnularInscripcion()">
            <i class="fa-solid fa-user-graduate"></i>ANULAR INSC.
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="col-lg-10 offset-lg-1">
        <div class="table-responsive text-center"> -->
      <div class="table-responsive">
        <!-- <table class="table table-bordered table-hover table-striped col-12 small" :key="keycon" v-if="keycon>=0"> -->
        <DataTable ref="table" id="datatable" :data="estudiantes" :columns="columns" v-if="estudiantes"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            pageLength: 5,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '40%', target: [6],
              width: '10%', target: [7],
            },
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 4, targets: 4 },
            { responsivePriority: 5, targets: 8 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="keycon">

          <thead class="pb-4 table-light" v-if="estudiantes">
            <tr>
              <th>N°</th>
              <th>C.I.</th>
              <!-- <th>APELLIDO P.</th>
        <th>APELLIDO M.</th> -->
              <th>NOMBRE COMPLETO</th>
              <th>CODIGO CARRERA</th>
              <th>NOMBRE CARRERA</th>
              <th>N° INSCRIPCIÓN</th>
              <th>N° BOLETA</th>
              <th>AÑO CURSADO</th>
              <th>INSCRITO</th>

            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="(estudiante, i) in estudiantes" :key="i" :id="estudiante.ci_estudiante">
                  <td>{{ i + 1 }}</td>
                  <td v-if="estudiante.ci_especial">{{ `${estudiante.ci_estudiante} ${estudiante.ci_especial} ` }}</td>
                  <td v-else>{{ estudiante.ci_estudiante }}</td>
                  <td>{{ estudiante.apellidoP }}</td>
                    <td>{{ estudiante.apellidoM }}</td>
                  <td>{{ `${estudiante.apellidoP} ${estudiante.apellidoM} ${estudiante.nombres} ` }}</td>
                  <td>{{ estudiante.codigo_carrera }}</td>
                  <td>{{ estudiante.nombre_carrera }}</td>
                  <td>{{ estudiante.numero_registro }}</td>
                  <td>{{ estudiante.numero_boleta }}</td>
                  <td>{{ estudiante.anio_cursado }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <router-link :to="{ path: '/estudiante/ofertas/' + estudiante.ci_estudiante }"
                        class="btn btn-success btn-sm" v-if="estudiante.inscrito_gestion == 'no'" :key="keycon">
                        INSCRIBIR
                      </router-link>
                      <button class="btn btn-success btn-sm disabled" v-else>
                        INSCRITO
                      </button>
                      <button class="btn btn-info btn-sm"
                        v-if="estudiante.anio_ingreso === this.anio_actual && estudiante.inscrito_gestion == 'si'"
                        @click="reimpresionNuevos(estudiante.ci_estudiante)">
                        REIMP.-N
                      </button>
                      <button class="btn btn-info btn-sm"
                        v-if="estudiante.anio_ingreso !== this.anio_actual && estudiante.inscrito_gestion == 'si'"
                        @click="reimpresionRegulares(estudiante.ci_estudiante)">
                        REIMP.-R
                      </button>
                      <button class="btn btn-danger btn-sm" v-if="estudiante.inscrito_gestion == 'si'"
                        @click="consultaAnularInscripcion(estudiante.ci_estudiante, `${estudiante.nombres} ${estudiante.apellidoP} ${estudiante.apellidoM}`)">
                        ANULAR-INS.
                      </button>
                      <button class="btn btn-info btn-sm"
                        v-if="estudiante.anio_ingreso === this.anio_actual && estudiante.inscrito_gestion == 'no'"
                        @click="inscripcionDirecta(estudiante.ci_estudiante, `${estudiante.nombres} ${estudiante.apellidoP} ${estudiante.apellidoM}`)">
                        INS-DIRECTA
                      </button>
                      <button class="btn btn-info btn-sm" v-if="sexto_anio"
                        @click="inscripcionSextoAnio(estudiante.ci_estudiante, `${estudiante.nombres} ${estudiante.apellidoP} ${estudiante.apellidoM}`)">
                        INSCRIBIR-6TO
                      </button>

                    </div>
                  </td>


                </tr> -->
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

      <!-- </div> -->
    </div>
    <!-- </div>
    </div> -->
  </div>

  <!-- <div v-else class="text-center">
    <img :src="ruta" alt="imagen">
  </div> -->
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
//import { getCurrentInstance } from 'vue';
import axios from "axios";
import { show_alerta } from '../../funciones';
import { generarReporteInscripcionNuevos, generarReporteInscripcionRegulares } from '../../reportes';
import Swal from "sweetalert2";
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


//import html2pdf from "html2pdf.js";
//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);


//let BASE_URL = process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
export default {
  components: { DataTable },
  name: 'AprobadasEstudianteView',
  data() {
    return {
      estudiantes: null, carreras: [], principal: '',
      ci_estudiante: '', nombres: '', apellidoP: '', apellidoM: '', codigo_carrera: '', nombre_carrera: '', anio_cursado: '', inscrito_gestion: '', anio_ingreso: '', ci_especial: '',
      anio_actual: 0, sexto_anio: false,
      materias: null,
      //url: BASE_URL + '/administracion/obtenerEstudiantesInscripcion/',
      url: BASE_URL + '/administracion/ObtenerEstudiantesNuevosInscripcion/',
      
      //url:'http://192.168.30.9:8000/administracion/obtenerEstudiantesInscripcion/',
      ruta: '../loading.gif',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'ci_estudiante' },
        { data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },

        { data: 'codigo_carrera' },
        { data: 'nombre_carrera' },
        { data: 'numero_registro' },
        { data: 'numero_boleta' },
        { data: 'anio_cursado' },
        { data: 'inscrito_gestion' },

      ]
    }
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
    //devuelve los estudiantes habilitados para inscribirse
    this.getEstudiantesHabilitados();
    //ruta de navegacion despues de la accion eliminar
    this.principal = '/estudiantes';
  },

  methods: {
    inscribirEstudiante() {
      const { identificador, inscrito_gestion } = this.verificarSeleccion();
      if (identificador) {
        if (inscrito_gestion === 'no') {
          this.$router.push('/estudiante/ofertas/' + identificador);
        } else {
          show_alerta('El Estudiante ya se encuentra Inscrito!', 'info')
        }
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
    },
    inscripcionDirectaN() {
      const { identificador, inscrito_gestion, nombres, anio_ingreso } = this.verificarSeleccion();
      if (identificador) {
        if (inscrito_gestion === 'no' && anio_ingreso === this.anio_actual) {
          //this.$router.push('/estudiante/ofertas/' + identificador);
          this.inscripcionDirecta(identificador, nombres)
        } else {
          show_alerta('El Estudiante ya se encuentra Inscrito!', 'info')
        }
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
    },
    recepcionAnularInscripcion() {
      const { identificador, inscrito_gestion, nombres } = this.verificarSeleccion();
      if (identificador) {
        if (inscrito_gestion === 'si') {
          //this.$router.push('/estudiante/ofertas/' + identificador);
          this.consultaAnularInscripcion(identificador, nombres)
        } else {
          show_alerta('El Estudiante no se encuentra Inscrito!', 'info')
        }
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
    },
    reimprimirInscripcionNuevos() {
      const { identificador, inscrito_gestion, nombres, anio_ingreso } = this.verificarSeleccion();
      if (identificador) {
        if (inscrito_gestion === 'si' && anio_ingreso === this.anio_actual) {
          //this.$router.push('/estudiante/ofertas/' + identificador);
          //this.consultaAnularInscripcion(identificador, nombres)
          this.reimpresionNuevos(identificador)
        } else {
          show_alerta(`El Estudiante ${nombres} no se encuentra Inscrito!`, 'info')
        }
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
    },
    verificarSeleccion() {
      let datos = this.estudiantes;
      let identificador = '';
      let nombres = '';
      let inscrito_gestion = '';
      let anio_ingreso = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombres} ${datos[idx].apellidoP} ${datos[idx].apellidoM}`;
        let clave = datos[idx].ci_estudiante;
        inscrito_gestion = datos[idx].inscrito_gestion;
        anio_ingreso = datos[idx].anio_ingreso;

        identificador = clave;
      });
      return { identificador, nombres, inscrito_gestion, anio_ingreso };
    },
    methodThatForcesUpdate() {
      // const instance = getCurrentInstance();
      // instance.ctx.forceUpdate();            
      //this.keycon++;
      //console.log('estmos forznado update' + this.keycon);
    },
    inscribirPrimerAnio(ci_estudiante, nombres) {
      this.inscripcionDirecta(ci_estudiante, nombres)
    },
    inscripcionSextoAnio(ci_estudiante, nombres) {
      event.preventDefault();

      const url = BASE_URL + '/administracion/inscribirEstudianteSextoAnio/' + ci_estudiante + '/';

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Esta seguro que desea inscribir al Estudiante: ' + nombres,
        text: 'Se inscribira al estudiante ',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, Inscribir',
        cancelButtonText: '<i class="fa-solid fa-ban"></i>Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          // sendRequest('GET', { id: ci_estudiante }, url, 'Estudiante inscrito Satisfactoriamente!', 'estudiante-primer-anio');
          this.registrarEstudianteSextoAnio(url);
        } else {
          show_alerta('Operacion cancelada', 'info');
        }
      })
    },
    async inscripcionDirecta(ci_estudiante, nombres) {
      event.preventDefault();

      const url = BASE_URL + '/administracion/inscribirEstudiantePrimerAnio/' + ci_estudiante + '/';

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Esta seguro que desea inscribir al Estudiante: ' + nombres,
        text: 'Se inscribira al estudiante ',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, Inscribir',
        cancelButtonText: '<i class="fa-solid fa-ban"></i>Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          // sendRequest('GET', { id: ci_estudiante }, url, 'Estudiante inscrito Satisfactoriamente!', 'estudiante-primer-anio');
          this.registrarEstudianteNuevo(url);
        } else {
          show_alerta('Operacion cancelada', 'info');
        }
      })
    },
    async consultaAnularInscripcion(id, nombres) {
      event.preventDefault();
      //const url =BASE_URL+'/administracion/eliminarDatosInscripcion/'+id+'/';
      const url = BASE_URL + '/administracion/cancelarInscripcion/' + id + '/';

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Esta seguro que desea Anular la Inscripción para el Estudiante: ' + nombres,
        text: 'Se Anulará la Inscripción ',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, Anular',
        cancelButtonText: '<i class="fa-solid fa-ban"></i>Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          // sendRequest('GET', { id: ci_estudiante }, url, 'Estudiante inscrito Satisfactoriamente!', 'estudiante-primer-anio');
          this.anularInscripcion(url);
        } else {
          show_alerta('Operacion cancelada', 'info');
        }
      })

    },
    async anularInscripcion(url) {
      console.log('Anulando inscripcion');
      console.log(url);
      await axios.get(url)
        .then(
          response => {
            const status = response.status;
            console.log(response.data);
            const mensaje = 'Inscripción Anulada Satisfactoriamente!';
            if (status === 200) {
              //console.log('se isncribio al estudiantes');      
              show_alerta(mensaje, 'success');
              //setTimeout(() => window.location.href = '/estudiante/habilitados#'+datos_estudiante['ci_estudiante'], 1000);           
              //setTimeout(() => window.location.href = '/estudiante/habilitados', 1000);              
              this.forceRender();
              //agregar un loader con un modal encima
              this.getEstudiantesHabilitados();
              //setTimeout(() => window.location.href = '/habilitados-nuevos', 1000);
            }
          }
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
    },
    async registrarEstudianteNuevo(url) {
      await axios.get(url).then(resultado => {
        const status = resultado.status;
        console.log('este es el status' + status);

        const datos = resultado.data['asignaturas_inscritas'];
        const datos_estudiante = resultado.data['estudiante'];
        const fecha_emision = resultado.data['fecha_emision'];
        const numero_boleta = resultado.data['numero_boleta'];
        const numero_archivo = resultado.data['numero_archivo'];
        let asignaturas_tabla = [];
        let modalidad_de_ingreso = [];
        for (let index = 0; index < datos.length; index++) {
          //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
          asignaturas_tabla.push([index + 1, datos[index].codigo_asignatura, datos[index].nombre_asignatura, 'N'])
        }

        //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
        modalidad_de_ingreso.push([`${datos_estudiante['tipo_ingreso']} GESTION ${datos_estudiante['anio_ingreso']}`, 'APROBADO'])


        //this.methodThatForcesUpdate();
        //console.log(asignaturas_tabla);
        //aqui estaba ggenerar reporte oficial
        //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);
        //this.$router.push('/estudiantes');
        //this.$router.push('/estudiante/habilitados');

        //console.log(datos);          
        const mensaje = 'Estudiante inscrito Exitosamente!';
        if (status === 200) {
          //console.log('se isncribio al estudiantes');      
          show_alerta(mensaje, 'success');
          //setTimeout(() => window.location.href = '/estudiante/habilitados#'+datos_estudiante['ci_estudiante'], 1000);      

          this.forceRender();
           //agregar un loader con un modal encima
          this.getEstudiantesHabilitados();

          //setTimeout(() => window.location.href = '/habilitados-nuevos', 1000);


          //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);

          //this.generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
          generarReporteInscripcionNuevos(asignaturas_tabla, modalidad_de_ingreso, datos_estudiante, fecha_emision, numero_boleta, numero_archivo);
          //optimizar este codigo que redirija a la la misma lista de habilitados
          //this.$router.push('/estudiantes');
          //this.methodThatForcesUpdate();
          //console.log('oir aki'+datos);                      
        }
      });
    },
    async registrarEstudianteSextoAnio(url) {
      await axios.get(url).then(resultado => {
        const status = resultado.status;
        console.log('este es el status' + status);

        const datos = resultado.data['asignaturas_inscritas'];
        const datos_estudiante = resultado.data['estudiante'];
        const fecha_emision = resultado.data['fecha_emision'];
        const numero_boleta = resultado.data['numero_boleta'];
        const numero_archivo = resultado.data['numero_archivo'];
        let asignaturas_tabla = [];
        let modalidad_de_ingreso = [];
        for (let index = 0; index < datos.length; index++) {
          //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
          asignaturas_tabla.push([index + 1, datos[index].codigo_asignatura, datos[index].nombre_asignatura, 'N'])
        }

        //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
        modalidad_de_ingreso.push([`${datos_estudiante['tipo_ingreso']} GESTION ${datos_estudiante['anio_ingreso']}`, 'APROBADO'])


        this.methodThatForcesUpdate();
        //console.log(asignaturas_tabla);
        //aqui estaba ggenerar reporte oficial
        //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);
        //this.$router.push('/estudiantes');
        //this.$router.push('/estudiante/habilitados');

        //console.log(datos);          
        const mensaje = 'Estudiante inscrito Exitosamente!';
        if (status === 200) {
          //console.log('se isncribio al estudiantes');      
          show_alerta(mensaje, 'success');
          //setTimeout(() => window.location.href = '/estudiante/habilitados#'+datos_estudiante['ci_estudiante'], 1000);           

          setTimeout(() => window.location.href = '/estudiante/habilitados', 1000);

          //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);

          //this.generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
          generarReporteInscripcionNuevos(asignaturas_tabla, modalidad_de_ingreso, datos_estudiante, fecha_emision, numero_boleta, numero_archivo);
          //optimizar este codigo que redirija a la la misma lista de habilitados
          //this.$router.push('/estudiantes');
          //this.methodThatForcesUpdate();
          //console.log('oir aki'+datos);                      
        }
      });
    },
    async reimpresionNuevos(id) {
      const url = BASE_URL + '/administracion/reimprimirInscripcion/' + id + '/';
      await axios.get(url).then(resultado => {
        const status = resultado.status;
        console.log('este es el status' + status);

        const datos = resultado.data['asignaturas_tomadas'];
        const datos_estudiante = resultado.data['estudiantes'];
        const fecha_emision = resultado.data['fecha_emision'];
        const numero_boleta = resultado.data['numero_boleta'];
        const numero_archivo = resultado.data['numero_archivo'];
        let asignaturas_tabla = [];
        let modalidad_de_ingreso = [];
        for (let index = 0; index < datos.length; index++) {
          //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
          asignaturas_tabla.push([index + 1, datos[index].codigo_asignatura, datos[index].nombre_asignatura, 'N'])
        }

        //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
        modalidad_de_ingreso.push([`${datos_estudiante['tipo_ingreso']} GESTION ${datos_estudiante['anio_ingreso']}`, 'APROBADO'])


        this.methodThatForcesUpdate();
        //console.log(asignaturas_tabla);
        //aqui estaba ggenerar reporte oficial
        //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);
        //this.$router.push('/estudiantes');
        //this.$router.push('/estudiante/habilitados');

        //console.log(datos);          
        const mensaje = 'Reporte Generado!';
        if (status === 200) {
          //console.log('se isncribio al estudiantes');      

          //show_alerta(mensaje, 'success');

          //setTimeout(() => window.location.href = '/estudiante/habilitados#'+datos_estudiante['ci_estudiante'], 1000);           
          //CODIGO FUNCIONANDO
          //setTimeout(() => window.location.href = '/estudiante/habilitados', 1000);

          this.forceRender();
           //agregar un loader con un modal encima
          this.getEstudiantesHabilitados();
          //setTimeout(() => window.location.href = '/habilitados-nuevos', 1000);


          //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);

          //this.generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
          generarReporteInscripcionNuevos(asignaturas_tabla, modalidad_de_ingreso, datos_estudiante, fecha_emision, numero_boleta, numero_archivo);
          //optimizar este codigo que redirija a la la misma lista de habilitados
          //this.$router.push('/estudiantes');
          //this.methodThatForcesUpdate();
          //console.log('oir aki'+datos);                      
        }
      });
      //this.generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
    },
    async reimpresionRegulares(id) {
      const ruta = BASE_URL + '/administracion/reimprimirInscripcion/' + id + '/';

      await axios({ method: 'GET', url: ruta }).then(resultado => {
        const status = resultado.status;
        console.log('este es el status' + status);

        const datos = resultado.data['asignaturas_tomadas'];
        const asignaturas_anterior = resultado.data['asignaturas_anio_anterior'];
        const datos_estudiante = resultado.data['estudiantes'];
        const fecha_emision = resultado.data['fecha_emision'];
        const numero_boleta = resultado.data['numero_boleta'];
        const numero_archivo = resultado.data['numero_archivo'];
        let asignaturas_gestion_anterior = [];
        let asignaturas_tabla = [];
        for (let index = 0; index < datos.length; index++) {
          //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
          asignaturas_tabla.push([index + 1, datos[index].codigo_asignatura, datos[index].nombre_asignatura, 'N', datos[index].observacion])
        }
        for (let index = 0; index < asignaturas_anterior.length; index++) {
          asignaturas_gestion_anterior.push([index + 1, asignaturas_anterior[index].codigo_asignatura, asignaturas_anterior[index].nombre_asignatura, asignaturas_anterior[index].nota_num_final,
          asignaturas_anterior[index].estado_gestion_espaniol, asignaturas_anterior[index].observacion]);
        }
        //console.log(asignaturas_tabla);
        //this.generarReporteInscripcion(asignaturas_tabla,datos_estudiante,fecha_emision,numero_boleta);

        //this.generarReporteInscripcionRegulares(asignaturas_tabla,asignaturas_gestion_anterior,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
        generarReporteInscripcionRegulares(asignaturas_tabla, asignaturas_gestion_anterior, datos_estudiante, fecha_emision, numero_boleta, numero_archivo);


        //console.log(datos);          
        const mensaje = 'Estudiante inscrito Exitosamente!';
        if (status === 200) {
          //console.log('se isncribio al estudiantes');      
          show_alerta(mensaje, 'success');
          //console.log('oir aki'+datos);                      
        }
      });
      setTimeout(() => window.location.href = '/estudiante/habilitados', 1000);
      //this.generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo);
    },
    async generarReporteInscripcion(asignaturas_tabla, datos_estudiante, fecha_emision, numero_boleta) {
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
      //const headers = [['NRO','PERIODO','CODIGO','ASIGNATURA PROGRAMADA', 'OBSERVACION']];
      const headers = [['NRO', 'CODIGO', 'ASIGNATURA PROGRAMADA', 'OBSERVACION']];
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
      await doc.addImage("../../ministerio.jpg", "JPG", doc.internal.pageSize.width - 65, finalY + 5, 60, 60);
      await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", 15, finalY + 5, 50, 50);

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


      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        BOLETA DE INSCRIPCIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        N° ${numero_boleta}
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'bold');
      doc.text(`
                      APELLIDOS Y NOMBRES:                                  
                      CÉDULA DE IDENTIDAD:                                   
                      NÚMERO DE REGISTRO:                                   
                      CARRERA:                                   
                      FECHA DE EMISIÓN:                                   
                        
                        `, -10, finalY);




      //  NRO DE REGISTRO: ${this.numero_registro}

      //  FECHA DE EMISION: ${this.fecha_emision}
      //  NIVEL DE FORMACION: ${this.grado}
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes

      //datos_estudiante,fecha_emision,numero_boleta
      doc.setTextColor(100);
      doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${datos_estudiante.ci_estudiante}                       
                       ${datos_estudiante.numero_registro}                                 
                       ${datos_estudiante.nombre_carrera}
                       ${fecha_emision}
                       
                       `, (doc.internal.pageSize.getWidth() / 2) - 150, finalY);



      finalY += 45;
      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      //doc.setFontSize(9);


      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10; 
      //COMENTADO POR MUCHJO ESPACIO   
      //finalY+=10;    

      //PRIMERA FORMA FINALIZADA 
      // autoTable(doc, { 
      //   startY: finalY + 20,
      //   html: '#materias_cursadas' ,
      //               //styles: {font: 'arial',fontSize:9}
      //   styles: {fontSize:9,halign: 'left'}

      // })




      //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);

      //const body = this.estudiantes;
      //const body =otro;

      //SEGUNDA FORMA FINALIZADA
      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 20,
        head: headers,
        body: asignaturas_tabla,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        //columnStyles:{color}
        padding: 1

      });
      finalY = doc.lastAutoTable.finalY
      finalY += 30;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        FIRMA ESTUDIANTE
                        `, -10, finalY);
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10; 

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        RESP. INSCRIPCIÓN
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10;   

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                      FIRMA DIRECTOR
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=15;  
      finalY += 25;
      console.log('este es el alto' + doc.internal.pageSize.height);



      //INICIO REIMPRESION DE DOCUMENTO DE INSCRIPCION
      //INICIANDO LOS ENCABEZADOS Y FORMATO DE PRESENTACION                    
      await doc.addImage("../../ministerio.jpg", "JPG", doc.internal.pageSize.width - 65, finalY + 5, 60, 60);
      await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", 15, finalY + 5, 50, 50);

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


      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        BOLETA DE INSCRIPCIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        N° ${numero_boleta}
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'bold');
      doc.text(`
                      APELLIDOS Y NOMBRES:                                  
                      CÉDULA DE IDENTIDAD:                                   
                      NÚMERO DE REGISTRO:                                   
                      CARRERA:                                   
                      FECHA DE EMISIÓN:                                   
                          
                          `, -10, finalY);
      //  NRO DE REGISTRO: ${this.numero_registro}

      //  FECHA DE EMISION: ${this.fecha_emision}
      //  NIVEL DE FORMACION: ${this.grado}
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes

      //datos_estudiante,fecha_emision,numero_boleta
      doc.setTextColor(100);
      doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${datos_estudiante.ci_estudiante}                       
                       ${datos_estudiante.numero_registro}                                 
                       ${datos_estudiante.nombre_carrera}
                       ${fecha_emision}
                       
                       `, (doc.internal.pageSize.getWidth() / 2) - 150, finalY);



      finalY += 45;
      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      //doc.setFontSize(9);


      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //QUITANDO ESPACIO
      //finalY+=20;    



      //SEGUNDA FORMA FINALIZADA
      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 20,
        head: headers,
        body: asignaturas_tabla,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.5,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        padding: 1
        //columnStyles:{color}

      });
      finalY = doc.lastAutoTable.finalY
      finalY += 30;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        FIRMA ESTUDIANTE
                        `, -10, finalY);
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10; 

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        RESP. INSCRIPCIÓN
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10;   

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                      FIRMA DIRECTOR
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 20;

      //FIN DOCUMENTO DE REGISTRO DE INSCRIPCION

      //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });
      //await doc.save('inscripcion.pdf');  

      // var blobPDF =  new Blob([ doc.output('blob') ], { type : 'application/pdf'});
      // var blobUrl = URL.createObjectURL(blobPDF);  //<--- THE ERROR APPEARS HERE
      // window.open(blobUrl);  

      //doc.output('dataurlnewwindow');

      await window.open(doc.output('bloburl'), '_blank');





      //var doc = new jsPDF('p', 'pt', 'A4');
      // margins = {
      //     top: 80,
      //     bottom: 60,
      //     left: 40,
      //     width: 522
      // };       
    },
    async generarReporteInscripcionNuevos(asignaturas_tabla, modalidad_de_ingreso, datos_estudiante, fecha_emision, numero_boleta, numero_archivo) {
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
      //const headers = [['NRO','PERIODO','CODIGO','ASIGNATURA PROGRAMADA', 'OBSERVACION']];
      const headers = [['NRO', 'CODIGO', 'ASIGNATURA PROGRAMADA', 'TIPO', 'OBSERVACION']];
      const headersModalidadIngreso = [['MODALIDAD DE INGRESO', 'RESULTADO']];
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
      await doc.addImage("../../ministerio.jpg", "JPG", doc.internal.pageSize.width - 65, finalY + 5, 60, 60);
      await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", 15, finalY + 5, 50, 50);

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


      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        BOLETA DE INSCRIPCIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        N° ${numero_boleta}
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'bold');
      doc.text(`
                      APELLIDOS Y NOMBRES:                                  
                      CÉDULA DE IDENTIDAD:                                   
                      NÚMERO DE REGISTRO:                                   
                      CARRERA:                                   
                      FECHA DE EMISIÓN:                                   
                        
                        `, -10, finalY);




      //  NRO DE REGISTRO: ${this.numero_registro}

      //  FECHA DE EMISION: ${this.fecha_emision}
      //  NIVEL DE FORMACION: ${this.grado}
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes

      //datos_estudiante,fecha_emision,numero_boleta
      doc.setTextColor(100);
      doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${datos_estudiante.ci_estudiante}                       
                       ${datos_estudiante.numero_registro}                                 
                       ${datos_estudiante.nombre_carrera}
                       ${fecha_emision}
                       
                       `, (doc.internal.pageSize.getWidth() / 2) - 150, finalY);



      finalY += 45;
      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      //doc.setFontSize(9);



      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10; 
      //COMENTADO POR MUCHJO ESPACIO   
      //finalY+=10;    

      //PRIMERA FORMA FINALIZADA 
      // autoTable(doc, { 
      //   startY: finalY + 20,
      //   html: '#materias_cursadas' ,
      //               //styles: {font: 'arial',fontSize:9}
      //   styles: {fontSize:9,halign: 'left'}

      // })



      //CABECERA PARA LA MODALIDAD DE INGRESO DE NUEVOS ESTUDIANTES 2024
      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 30,
        head: headersModalidadIngreso,
        body: modalidad_de_ingreso,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        //columnStyles:{color}
        //padding:1

      });

      finalY = doc.lastAutoTable.finalY
      finalY += 10;
      //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);

      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");

      finalY += 10;
      doc.setTextColor(10);
      doc.setFontSize(10).setFont(undefined, 'bold');
      doc.text(`
                        PERIODO: ${datos_estudiante.anio_cursado}
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");


      //const body = this.estudiantes;
      //const body =otro;

      //SEGUNDA FORMA FINALIZADA
      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 20,
        head: headers,
        body: asignaturas_tabla,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        //columnStyles:{color}
        //padding:1

      });
      finalY = doc.lastAutoTable.finalY
      finalY += 80;

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        FIRMA ESTUDIANTE
                        `, -10, finalY);
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10; 

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                        RESP. INSCRIPCIÓN
                        `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=10;   

      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');
      doc.text(`
                      FIRMA DIRECTOR
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=15;  
      finalY += 85;
      console.log('este es el alto' + doc.internal.pageSize.height);

      doc.setTextColor(10);
      doc.setFontSize(6).setFont(undefined, 'bold');
      doc.text(`
                      Documento solo válido para tramite interno                                  
                      *Ajuste: Asignaturas validadas con la Resolución Ministerial N°0155/2023
                      *N: Gestión Asignatura Normal                        
                        `, -10, finalY);



      doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'bold');
      doc.text(`
                        Arch: ${numero_archivo}
                        `, (doc.internal.pageSize.getWidth() / 2) + 120, finalY + 50, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;



      //INICIO REIMPRESION DE DOCUMENTO DE INSCRIPCION
      //INICIANDO LOS ENCABEZADOS Y FORMATO DE PRESENTACION                    


      //FIN DOCUMENTO DE REGISTRO DE INSCRIPCION

      //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });
      //await doc.save('inscripcion.pdf');  

      // var blobPDF =  new Blob([ doc.output('blob') ], { type : 'application/pdf'});
      // var blobUrl = URL.createObjectURL(blobPDF);  //<--- THE ERROR APPEARS HERE
      // window.open(blobUrl);  

      //doc.output('dataurlnewwindow');

      await window.open(doc.output('bloburl'), '_blank');





      //var doc = new jsPDF('p', 'pt', 'A4');
      // margins = {
      //     top: 80,
      //     bottom: 60,
      //     left: 40,
      //     width: 522
      // };       
    },
    getEstudiantesHabilitados() {
      axios.get(this.url)
        .then(
          response => (

            this.estudiantes = response.data['estudiantes'],
            this.anio_actual = response.data['anio_actual']
            //this.materias = response.data['datos']

          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
      //console.log('s'+this.estudiantes);

    }
  }
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
.smallone {
  font-size: .875rem;
  line-height: 1.25rem;
}

.btn-custom {
  background-color: #ff5733;
  /* Cambia el color de fondo */
  color: white;
  /* Cambia el color del texto */
}

.btn-custom:hover {
  background-color: #e53935;
  /* Cambia el color de fondo al pasar el ratón sobre el botón */
}
</style>