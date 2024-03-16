<template>
  <!-- <div class="container-fluid text-center"> -->
  <div v-if="materias" class="container" id="contenido-global">
    <div class="row">
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="mb-3 fw-bold  normal-letter">

        <div class="mb-3 fs-5 text-center">
          HISTORIAL ACADÉMICO 
        </div>

        <div class="  fs-6">
          APELLIDOS Y NOMBRES: {{ `${apellidoP} ${apellidoM} ${nombres}` }}
        </div>

        <div class="  fs-6">
          CÉDULA DE IDENTIDAD: {{ `${ci_estudiante}` }}
        </div>

        <div class="  fs-6">
          NRO DE REGISTRO: {{ `${numero_registro}` }}
        </div>

        <div class="  fs-6">
          CARRERA: {{ `${nombre_carrera}` }}
        </div>

        <!-- <div class=" fs-6">                 
              APELLIDOS Y NOMBRES:      {{`${apellidoP} ${apellidoM} ${nombres}`}}
            </div> -->

        <div class=" mb-3 fs-6">
          FECHA DE EMISIÓN : {{ `${fecha_emision}` }}
        </div>
        <div class="d-flex justify-content-between ">

          <div>
            <button class="btn btn-warning ma-3" @click="exportPDF">
              <strong> GENERAR PDF :</strong> <i class="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>

      </div>
      <!-- </div> -->
    </div>

    <div class="row g-3">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">   
              Información General           
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p>            
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">     
              Información Universitaria
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, error? Animi qui id maxime corporis, ex rem labore laborum unde ipsa nisi sunt deserunt,
               ducimus sed tempore, fuga commodi laboriosam.      
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="table-responsive ">
        <DataTable ref="table" id="materias_cursadas" :data="materias" :columns="columns"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrti',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }],
            pageLength: 100,
            //responsivePriority: 1,                                                   
            columnDefs: [{
              width: '40%', target: [6],
              width: '10%', target: [7],
            },
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 4, targets: 4 },
            ],
            language: {
              search: 'Buscar', zeroRecord: 'No hay registros que mostrar',
              info: 'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros)',
              paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Ultimo' }
            },
          }" :key="columns.length">
          <thead v-if="materias" class="pb-4 table-light">
            <tr>
              <th>
                #
              </th>
              <th>
                GESTION
              </th>
              <th>
                SIGLA CODIGO
              </th>
              <!-- <th>
                  SIGLA CONV.
                </th> -->
              <th>
                HOMOL.
              </th>
              <th>
                ASIGNATURA
              </th>
              <th>
                HRS. ACAD.
              </th>

              <th>
                PREREQUISITOS
              </th>
              <th>
                CALIFICACION NUMERAL
              </th>
              <th>
                ESTADO
              </th>
              <!-- <th>
                        INS. DE APR.
                      </th>         
                      <th>
                        OBSERVACION
                      </th>                                            
                      <th>
                        ACCIONES
                      </th> -->
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="materia, i  in materias" :key="materia">
                <td>{{ i + 1 }}</td>
                <td>{{ materia.anio_cursado }}</td>
                <td>{{ materia.codigo_asignatura }}</td>
                <td>{{ materia.convalidacion }}</td>
                <td>{{ materia.homologacion }}</td>
                <td>{{ materia.nombre_asignatura }}</td>
                <td>{{ materia.total_horas }}</td>
                <td>{{ materia.pre_requisitos }}</td>
                <td>{{ materia.nota_num_final }}</td>
                <td>{{ materia.estado_gestion_espaniol }}</td> -->
            <!-- <td></td>
                        <td></td> -->
            <!-- <td>{{ estudiante.nombre_asignatura }}</td> -->
            <!-- <td >{{ estudiante.id_docente }}</td> -->

            <!-- <td >{{ estudiante.estado_gestion_espaniol }}</td> -->
            <!--  <td>{{ getCarrera(estudiante.id_carrera) }}</td> -->
            <!-- <td>{{ estudiante.nota_num_final }}</td> -->


            <!-- <td>                                                                                 
                            <button   class="btn btn-warning" @click="clickMe"> -->
            <!-- <i class="fa-solid fa-file-pdf"></i> -->
            <!-- </button>                         
                        </td> -->
            <!-- </tr> -->
          </tbody>
        </DataTable>
        <!-- </div> -->
      </div>
    </div>
    <!-- </div> -->
    <!-- <b-table striped hover :items="materias">
    </b-table> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import {ref} from 'vue';
import axios from "axios";
import { show_alerta, confirmar1 } from '../../funciones';
import { useRoute } from "vue-router";


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


import { ref } from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);
//let BASE_URL = process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
let MINISTERIO = import.meta.env.VITE_MINISTERIO;
let LOGO_UNI = import.meta.env.VITE_LOGO_UNI;
export default {
  components: { DataTable },
  name: 'AprobadasEstudianteView',
  data() {
    return {
      estudiantes: null, carreras: [], principal: '',
      ci_estudiante: '', nombres: '', apellidoP: '', apellidoM: '', numero_registro: '', nombre_carrera: '', fecha_emision: '', grado: '',
      cantidad_aprobadas: '',
      cantidad_todas: '',
      promedio_todas: '',
      promedio_aprobadas: '',
      materias: null, message: '',
      //url: BASE_URL + '/estudiantes/obtenerAsignaturasCursadas',
      url: BASE_URL + '/estudiantes/ObtenerHitorialAcademico2',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: null, render: function (data) { return `${data[0]}` } },
        { data: null, render: function (data) { return `${data[1]}` } },
        { data: null, render: function (data) { return `${data[2]}` } },
        { data: null, render: function (data) { return `${data[3]}` } },
        { data: null, render: function (data) { return `${data[4]}` } },
        { data: null, render: function (data) { return `${data[5]}` } },
        { data: null, render: function (data) { return `${data[6]}` } },
        { data: null, render: function (data) { return `${data[7]}` } },
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
    const route = useRoute();
    this.id = route.params.id;

    this.url = this.url + '/' + '13190057' + '/';
    //oficial
    this.getEstudiantes();

    this.getMateriasCursadas();
    //ruta de navegacion despues de la accion eliminar
    this.principal = '/estudiantes';
  },
  methods: {
    async getEstudiantes() {
      //await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
      await axios.get(BASE_URL + '/estudiantes/estudiantes/')
        .then(
          response => (
            this.estudiantes = response.data
          )
        ).catch(error => {
          console.log(error)
          show_alerta(error, 'error')
        });
      console.log(this.estudiantes);
      //console.log(this.estudiantes);
      //console.log('AS'+BASE_URL);
    },

    async exportPDF() {
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
      tabla_promedios.push(['TOTAL DE ASIGNATURAS APROBADAS', this.cantidad_aprobadas])
      tabla_promedios.push(['TOTAL DE ASIGNATURAS CURSADAS', this.cantidad_todas])
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
      // await doc.addImage(MINISTERIO, 'JPG', 15, finalY + 5, 60, 60);
      // await doc.addImage(LOGO_UNI, 'PNG', doc.internal.pageSize.width - 65, finalY + 5, 50, 50);


      // // await doc.addImage("../../ministerio.jpg", "JPG", 15, finalY + 5, 60, 60);
      // // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width - 65, finalY + 5, 50, 50);

      // doc.setTextColor(10);
      // doc.setFontSize(10).setFont(undefined, 'bold');
      // doc.setTextColor(18, 73, 39);
      // doc.text(`
      //                  UNIVERSIDAD INDÍGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA
      //                  UNIBOL QUECHUA "CASIMIRO HUANCA"
      //                  `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 20;

      // doc.setTextColor(100);
      // doc.setFontSize(8).setFont(undefined, 'normal');
      // doc.text(`
      //                  Decreto Supremo N° 29664 de 2 de agosto de 2008 - Decreto Supremo N° 3079 del 8 de febrero 2017
      //                  R.M. 505/2013 - R.M. 1300/2018"
      //                  `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 20;

      // doc.setTextColor(10);
      // doc.setFontSize(8);
      // doc.text(`
      //                  Tukuy sunquwan yahcyaninchikta, ruwayninchikta, yuyayninchikta kallpachaspa sumaq kawsayman kutina                       
      //                  `, (doc.internal.pageSize.getWidth() / 2) - 5, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 15;


      // doc.setTextColor(10);
      // doc.setFontSize(10).setFont(undefined, 'bold');
      // doc.text(`
      //                 HISTORIAL ACADÉMICO 
      //                 `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 10;

      // doc.setTextColor(10);
      // doc.setFontSize(9).setFont(undefined, 'bold');
      // doc.text(`
      //                 SEGÚN AJUSTE DE RM 0155/2023
      //                 `, (doc.internal.pageSize.getWidth() / 2) - 20, finalY, null, null, "center");
      // //finalY+=25;    
      // //añadimos 20+50 por el tamaño de las imagenes
      // finalY += 10;

      finalY += 85;

      doc.setTextColor(10);
      doc.setFontSize(6).setFont(undefined, 'bold');
      doc.text(`
      SERIE "A"-3 
      `, (doc.internal.pageSize.getWidth() / 2) + 160, finalY, null, null, "center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 10;


      doc.setTextColor(10);
      doc.setFontSize(8);
      doc.text(`
                       APELLIDOS Y NOMBRES:                                  
                       CÉDULA DE IDENTIDAD: 
                       NRO DE REGISTRO: 
                       CARRERA: 
                       FECHA DE EMISIÓN: 
                       NIVEL DE FORMACIÓN: 
                       `, -10, finalY);
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      //finalY+=35; 
      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      //doc.setFontSize(9);

      doc.setTextColor(100);
      doc.text(`
                       ${this.apellidoP} ${this.apellidoM} ${this.nombres}                         
                       ${this.ci_estudiante}                       
                       ${this.numero_registro}                                
                       ${this.nombre_carrera}
                       ${this.fecha_emision}
                       ${this.grado}
                       `, (doc.internal.pageSize.getWidth() / 2) - 150, finalY);



      finalY += 35;



      //PRIMERA FORMA FINALIZADA 
      autoTable(doc, {
        startY: finalY + 20,
        html: '#materias_cursadas',
        //styles: {font: 'arial',fontSize:9}
        //styles: {fontSize:9,halign: 'left'},
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 6, halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        margin: { top: 105 }
        //padding: 0                      
      })

      finalY = doc.lastAutoTable.finalY

      let wantedTableWidth = 100;
      let pageWidth = doc.internal.pageSize.width;
      let margin = (pageWidth - wantedTableWidth) / 2;

      autoTable(doc, {
        //QUITANDO ESPACIO
        //startY: finalY + 20,               
        startY: finalY + 10,
        showHead: 'never',
        body: tabla_promedios,
        //theme:'grid',theme:'striped',theme:'plain'
        theme: 'plain',
        tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
        styles: { fontSize: 5, cellWidth: 'wrap', halign: 'center' },
        bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
        columnStyles: {
          1: { columnWidth: 'auto' }
        },
        tableWidth: doc.internal.pageSize.getWidth() / 3,
        margin: { left: margin - 20, right: margin }
        //columnStyles:{color}

      });
      finalY = doc.lastAutoTable.finalY
      finalY += 30;

      doc.setTextColor(10);
      doc.setFontSize(6).setFont(undefined, 'bold');
      doc.text(`                
        APR.: APROBADO
        REP.:REPROBADO
        AB.:ABANDONO
        CONV.:CONVALIDADO
        *Documento solo válido para Trámite Interno.
          `, 40, finalY);


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
    ,
    sortGestion(data) {
      data = data.sort((a, b) => {
        if (a.anio_cursado < b.anio_cursado) {
          return -1;
        }
      });
      console.log(data);
      return data;
    },
    getMateriasCursadas() {
      axios.get(this.url)
        .then(
          response => {

            //if(!response.data.message){
            //console.log('psando normal');
            this.message = response.data.message,
              this.ci_estudiante = response.data['estudiante']['ci_estudiante'],
              this.nombres = response.data['estudiante']['nombres'],
              this.apellidoP = response.data['estudiante']['apellidoP'],
              this.apellidoM = response.data['estudiante']['apellidoM'],
              this.numero_registro = response.data['estudiante']['numero_registro'],
              this.nombre_carrera = response.data['estudiante']['nombre_carrera'],

              this.fecha_emision = response.data['fecha_emision'],
              this.grado = response.data['grado'],

              this.cantidad_aprobadas = response.data['otros_datos']['cantidad_aprobadas'],
              this.cantidad_todas = response.data['otros_datos']['cantidad_todas'],
              this.promedio_todas = response.data['otros_datos']['promedio_todas'],
              this.promedio_aprobadas = response.data['otros_datos']['promedio_aprobadas'],


              this.materias = this.sortGestion(response.data['datos'])

            //this.materias = response.data['datos']
            // }else{
            // console.log('aki esta el error'+response.data.message);
            // }



          }
        ).catch(error => {
          console.log(error)
          show_alerta(this.message, 'error')
          this.$router.push('/estudiantes')
        });
      //console.log(this.materias+'sss');        

    }, eliminar(id, nombre) {
      //   for (let index = 0; index < 10; index++) {
      //     sendRequest('POST',{
      //     "id":999,
      //     "nombre_provincia": "TEST-PROVINCIAS",
      //     "id_departamento": null
      // },'http://127.0.0.1:8000/parametros/provincias/','ProvinciaS Eliminada');              
      //   }
      const ruta = 'estudiantes/estudiantes/' + id + '/';
      confirmar1(id, nombre, ruta, this.principal);
      this.$router.push('/estudiantes')
    },
    getCarrera(id) {
      axios.get(BASE_URL + '/parametros/carreras/' + id + '/')
        .then(
          response => (
            this.carreras[id] = response.data['nombre_carrera']
          )
        );
      return this.carreras[id]
    },

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