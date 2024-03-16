<template>
  <!-- <div class="container-fluid text-center"> -->
  <div class="container" id="contenido-global">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="mb-3 fw-bold ">

          <div class="mb-3 fs-6 text-center">
            ESTUDIANTES DEL CURSO PREPARATORIO
          </div>
          <!-- 
            <div class=" mb-3">                 
              APELLIDOS Y NOMBRES:    {{`${apellidoP} ${apellidoM} ${nombres}`}}
            </div>
            
            <div class=" mb-3">                 
              CEDULA DE IDENTIDAD:     {{`${ci_estudiante}`}}
            </div>

            <div class=" mb-3">                 
              NOTA FINAL:       {{`${numero_registro}`}}
            </div>

           

            <div class="d-flex justify-content-between ">
            <div class=" mb-3">                 
              FECHA DE EMISION :         {{`${fecha_emision}`}}
            </div>
            <div>
            <button   class="btn btn-warning " @click="exportPDF">                           
              GENERAR PDF : <i class="fa-solid fa-file-pdf"></i>
              </button>
            </div>
          </div> -->

        </div>
      </div>
    </div>

    <div class="row">
      <div class="mb-3">
        <!-- <div class="d-flex justify-content-around ">         -->
        <div class="mb-3 d-grid gap-2 d-md-block ">
          <button class="btn btn-outline-success rounded   me-1 float-end">
            NUEVO ESTUDIANTE
            <i class="fa-solid fa-user-plus"></i>
          </button>

          <button class="btn btn-success rounded   me-1" @click="confirmarRegistro()">
            INSCRIBIR

          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- <div class="col-lg-12 col-sm-12 offset-lg-2 align-center"> -->
      <!-- <div class="col-lg-12 col-sm-12 align-center"> -->
      <!-- <div class="col-lg-10 offset-lg-1"> -->
      <div class="table-responsive">
        <DataTable ref="table" id="datatable" :data="estudiantesP" :columns="columns" v-if="estudiantesP"
          class="table table-bordered table-striped display small" :options="{
            select: true, responsive: true, autoWidth: true, dom: 'Bfrtip',
            buttons: [{
              extend: 'selected',
              text: 'Edit',
              name: 'edit'
            }], pageLength: 5,
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
          <thead class="pb-4 table-light">
            <tr>
              <th>
                #
              </th>
              <th>
                CEDULA DE IDENTIDAD
              </th>
              <th>
                NOMBRES
              </th>
              <th>
                APELLIDO PATERNO
              </th>
              <th>
                APELLIDO MATERNO
              </th>
              <th>
                ESTADO
              </th>
              <th>
                CARRERA
              </th>
              <th>
                INSCRITO
              </th>
            </tr>
          </thead>
          <!-- <div v-else>
              <img :src="ruta" alt="imagen">
            </div> -->
          <tbody class="table-group-divider" id="contenido">
            <!-- <tr v-for="estudiante, i  in estudiantesP" :key="estudiante">
                <td>{{ i + 1 }}</td>
                <td>{{ estudiante.ci_postulante }}</td>
                <td>{{ estudiante.nombres_p }}</td>
                <td>{{ estudiante.apellido_paterno_p }}</td>
                <td>{{ estudiante.apellido_materno_p }}</td>
                <td :class="estudiante.estado_inscrito === 'APROBADO' ? 'aprobado' : 'reprobado'">
                  {{ estudiante.estado_ingreso }}
                </td>
                <td>{{ estudiante.carrera }}</td>
                <td>{{ estudiante.registrado.toUpperCase() }}</td>
                <td>
                  <button class="btn btn-success btn-sm"
                    @click="confirmarRegistro(estudiante.ci_postulante, `${estudiante.nombres_p} ${estudiante.apellido_paterno_p} ${estudiante.apellido_materno_p}`)"
                    v-if="estudiante.registrado == 'no'">
                    REGISTRAR
                  </button>
                  <button class="btn btn-warning btn-sm disabled" v-else>
                    INSCRITO
                  </button>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import axios from "axios";
import { show_alerta, confirmar1, confirmarRegistroP } from '../../funciones';
//import { useRoute } from "vue-router";
//import html2pdf from "html2pdf.js";


import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import Select from "datatables.net-select";
import 'datatables.net-responsive-bs5';
//import 'datatables.net-select';

DataTable.use(DataTableLib);
DataTable.use(Select);



//librerias para la exportacion en pdf
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


//let BASE_URL = process.env.VUE_APP_BASE_URL;
let BASE_URL = import.meta.env.VITE_BASE_URL;
//import {ref} from 'vue';
// const provincias = computed(()=>{
//         return this.provincias = this.getProvincias()
// })
//const provincias = ref([]);
//const contador =ref(0);
export default {
  components: { DataTable },
  name: 'EstudianteCursoPreparatorioView',
  data() {
    return {
      estudiantesP: null, principal: '',
      ci_estudiante: '', nombres: '', apellidoP: '', apellidoM: '', nota_final: '', estado_inscrito: '',
      message: '',
      url: BASE_URL + '/administracion/obtenerPostulates/',
      ruta: '../loading.gif',
      columns: [
        {
          data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
        },
        { data: 'ci_postulante' },
        //{ data: null, render: function (data) { return `${data.apellidoP} ${data.apellidoM} ${data.nombres}` } },
        //{ data: `${data.nombres} ${data.apellidoP} ${data.apellidoM}` },

        { data: 'nombres_p' },
        { data: 'apellido_paterno_p' },
        { data: 'apellido_materno_p' },
        { data: 'estado_ingreso' },
        { data: 'carrera' },
        { data: 'registrado' }
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
    // const route =useRoute();
    //  this.id = route.params.id;

    //  this.url = this.url + '/' +this.id+'/';
    this.getPostulantes();
    //ruta de navegacion despues de la accion eliminar
    this.principal = '/estudiantes';
  },
  methods: {
    // clickMe() {
    //   html2pdf(document.getElementById('contenido-global'), {
    //     margin: 1,
    //     filename: 'reporte.pdf',
    //     html2canvas: { scale: 3 }
    //   })
    // },
    verificarSeleccion() {
      let datos = this.estudiantesP;
      //console.log(datos);
      let identificador = '';
      let nombres = '';
      let registrado = '';

      this.table.dt.rows({ selected: true }).every(function () {
        //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
        const row = this.data();
        console.log(row);
        // console.log(datos.indexOf(this.data()));
        let idx = datos.indexOf(this.data());
        nombres = `${datos[idx].nombres_p} ${datos[idx].apellido_paterno_p} ${datos[idx].apellido_materno_p}`;
        registrado = `${datos[idx].registrado}`;
        let clave = datos[idx].ci_postulante;

        identificador = clave;
      });
      return { identificador, nombres, registrado };
    },
    async confirmarRegistro() {
      const { identificador, nombres, registrado } = this.verificarSeleccion();
      console.log(identificador);

      if (identificador) {
        event.preventDefault();
        if (registrado === 'no') {
          try {
            await confirmarRegistroP(identificador, nombres);
          } catch (error) {
            console.log(error);
          }
        } else {
          show_alerta('El Estudiante ya se encuentra Inscrito!', 'info')
        }
      } else {
        const error = 'Debes Seleccionar Un Estudiante!';
        show_alerta(error, 'info')
      }
      // this.estudiantesP = this.estudiantesP.filter(item => item.ci_postulante !== ci_postulante);
      // this.getPostulantes();
      //this.$router.push('/estudiantes');
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
      await doc.addImage("../../ministerio.jpg", "JPG", 15, finalY + 5, 60, 60);
      await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width - 65, finalY + 5, 50, 50);

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
      doc.setFontSize(10);
      doc.text(`
                       APELLIDOS Y NOMBRES: ${this.apellidoP} ${this.apellidoM} ${this.nombres}                                  
                       CEDULA DE IDENTIDAD: ${this.ci_estudiante}
                       NRO DE REGISTRO: ${this.numero_registro}
                       CARRERA: ${this.nombre_carrera}
                       FECHA DE EMISION: ${this.fecha_emision}
                       NIVEL DE FORMACION: ${this.grado}
                       `, 30, finalY);
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY += 35;
      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
      doc.setFontSize(9);


      //PRIMERA FORMA FINALIZADA 
      autoTable(doc, {
        startY: finalY + 20,
        html: '#materias_cursadas',
        //styles: {font: 'arial',fontSize:9}
        styles: { fontSize: 9, halign: 'left' }

      })

      finalY = doc.lastAutoTable.finalY


      //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);

      //const body = this.estudiantes;
      //const body =otro;

      //SEGUNDA FORMA FINALIZADA
      // autoTable(doc, {
      //   head: headers1,
      //   body:resultado,
      // });

      //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });
      await doc.save('example.pdf');
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
    getPostulantes() {
      axios.get(this.url)
        .then(
          response => (
            //this.carreras[id] = response.data['nombre_carrera']
            this.estudiantesP = response.data
          )
        );
      //return this.carreras[id]
    },

  }
}
</script>
<style>
@import 'datatables.net-bs5';

/*@import 'datatables.net-dt';*/
@import 'datatables.net-responsive-dt';

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

body {
  font-size: .875rem;
  line-height: 1.25rem;
}

.aprobado {
  color: green;
}

.reprobado {
  color: red;
}
</style>