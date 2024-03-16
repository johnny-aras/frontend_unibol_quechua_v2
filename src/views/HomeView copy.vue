<template>
  <div class="container-fluid">
      <!-- <div class="row">
        <div class="mb-3">
        <div class="d-flex justify-content-around">        
        <button class="btn btn-outline-warning col-2" @click="update()">
          <i class="fa-solid fa-edit"></i> EDITAR
        </button> &nbsp;
        <button class="btn btn-outline-danger col-2 " @click="eliminar()">
          <i class="fa-solid fa-trash"></i> ELIMINAR
        </button>

        </div>    
      </div>
      </div> -->
      <!-- <BtnEditar :estudiantes="estudiantes"  @click="update">
      </BtnEditar> -->
      <button @click="alabout()">
        click me
      </button>
      <div class="row">
          <div class="col-lg-12 offset-lg-0">
              <div class="table-responsive">
                  
                  <!-- <DataTable  ref="inputs" :data="estudiantes" :columns="columns" class="display" :options="{ select: true }" :key="columns.length"> -->   
                  <DataTable  ref="table" id="datatable"  :data="estudiantes" :columns="columns" class="table table-striped table-bordered display w-full" 
                  :options="{ select: true ,responsive: true,autoWidth:false,dom:'Bfrtip',
                    pageLength:5,
                    language:{
                                        search:'Buscar',zeroRecord:'No hay registros que mostrar',
                                        info:'Mostrando desde _START_ a _END_ de _TOTAL_ registros',
                                        infoFiltered:'(Filtrados de _MAX_ registros)',
                                        paginate:{first:'Primero',previous:'Anterior',next:'Siguiente',last:'Ultimo'}
                              
                                      }}" :key="columns.length" >                   
                  <thead>
                      <tr>
                        <th>
                          #
                        </th>
                        <th>
                          C.I.
                        </th>
                        <th >
                          NOMBRES
                        </th>
                        <th>
                          APELLIDO-P.
                        </th>
                        <th>
                          APELLIDO-M.
                        </th> 
                        <th>
                          TIPO INGRESO
                        </th> 
                        <th>
                          CARRERA
                        </th>
                        <th>
                          AÑO DE INGRESO
                        </th>
                        <th>
                          AÑO CURSADO
                        </th>                                          
                        <th>
                          ESTADO
                        </th>                      
                      </tr>
                    </thead>
                    </DataTable>


                  <button class="form-control btn btn-success" @click="exportPDF">Click PDF</button>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  //import BtnEditar from "../components/BtnEditar.vue";

  import axios from 'axios';
  
  //import PDFDocument from 'pdfkit'
  //import fs from './fs-extra'
  
  import jsPDF from "jspdf";
  import autoTable from "jspdf-autotable";
  
  
  import {ref} from 'vue';
  import DataTable from 'datatables.net-vue3';
  //import DataTablesCore from 'datatables.net-bs5';
  import DataTableLib from 'datatables.net-bs5';
  //import Select from 'datatables.net-select'
  //import { format } from 'date-fns'
  //import Buttons from 'datatables.net-buttons-bs5';
  //import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
  //import print from 'datatables.net-buttons/js/buttons.print'
  //import pdfmake from 'pdfmake';
  //import pdfFonts from 'pdfmake/build/vfs_fonts';
  import 'datatables.net-responsive-bs5';
  //import JsZip from 'jszip';
  //window.JSZip= JSZip;
  //DataTable.use(DataTablesCore);
  import 'datatables.net-select';
  //import Select from 'datatables.net-select';
  DataTable.use(DataTableLib);
  //DataTable.use(Select);

  //DataTable.use(pdfmake);
  //DataTable.use(ButtonsHtml5);
  
  let base_url=import.meta.env.VITE_BASE_URL;
  let title=import.meta.env.VITE_MY_TITLE;

  //let table = ref(null)
  import { useRouter } from 'vue-router'
  import { RouteNames } from '../router'
  
  export default{
    name:"HomeView",
    components:{DataTable},
    props: {
      estudiantes:Object,
      table:Object
    },
    data(){
      return {      
        estudiantes:new Array(),  
        table:ref(null) ,
        columns:[
         {data:null,render:function(data,type,row,meta)
         {return `${meta.row+1}`}},
         {data:'ci_estudiante'},
         {data:'nombres'},
         {data:'apellidoP'},
         {data:'apellidoM'},
         {data:'tipo_ingreso'},
         {data:'nombre_carrera'},
         {data:'anio_ingreso'},
         {data:'anio_cursado'},
         {data:'estado'}
       ]
  
      }
    },
    setup(){
        const table = ref(null)
        const router = useRouter()
      // ...
      return {
        table,
        router
      }
    },
    mounted(){
      this.getEstudiantes();  
      // let formatedDate = format('1998-11-30', 'dd/MM/yyyy');
      // console.log(formatedDate);
      console.log(base_url);
      console.log(title);
      
    },
    methods:{
      alabout(){
        this.$router.push({name: RouteNames.ABOUT});
      },
      update(){
        console.log('actualizando');
        let datos= this.estudiantes;

        //console.log(this.table.dt.rows({select:true})); 
         this.table.dt.rows({selected:true}).every( function(){
          //let idx = this.data().estudiantes.indexOf(this.data());
          
          //console.log(this.estudiantes.indexOf(this.data()));
          //TODO ESTO FUNCIONA MUY BIEN, EXCELENTE
          const row = this.data();
          console.log(row);
          // console.log(datos.indexOf(this.data()));
          let idx = datos.indexOf(this.data());
          let clave = datos[idx].ci_estudiante;
          console.log(clave);          
          //this.$router.go('/about');
          //console.log(this.$router);
          //console.log(router);
          //router.push({name: RouteNames.ABOUT});

          //console.log(idx);
          //console.log(this.data().ci_estudiante);
          // let indice = this.estudiantes.map(e => e.ci_estudiante).indexOf('9675154')
          // console.log(indice);
          //  let indice = props.estudiantes.indexOf(this.data());
          //  let clave = props.estudiantes[indice].ci_estudiante;   
          //  console.log(clave);                 
         });
         //this.$router.go('/about');
         this.$router.push({name: RouteNames.ABOUT});
        // console.log(this.table.dt.rows);
         
        // const tables = this.$refs.table;
        // console.log(tables.dt.rows({select:true}).every(()=>{
        // }));
      },
      eliminar(){
        console.log('eliminando');
      },
      async getEstudiantes(){
              await axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
              .then(            
                  response =>(
                      this.estudiantes = response.data                                         
                  )
              );
              console.log(this.estudiantes);
              console.log(title);              
              console.log('esto'+base_url);  
  
              
      },
      generateData(amount) {
    var result = [];
    var data = {
      coin: "100",
      game_group: "GameGroup",
      game_name: "XPTO2",
      game_version: "25",
      machine: "20485861",
      vlt: "0"
    };
    for (var i = 0; i < amount; i += 1) {
      data.id = (i + 1).toString();
      result.push(Object.assign({}, data));
    }
    return result;
  },
       exportPDF() {
                    //first try
                    // const doc = new jsPDF('p', 'pt', 'A4');
                    
                    
                    //   let pdfName = 'test';                     
                    //   doc.text(`Hello Students:
                      
                    //     ${this.estudiantes[0].nombre_carrera}                   
                        
                    //     `, 10, 100);
                    //   doc.save(pdfName + '.pdf');
  
                    //second try
                    const doc = new jsPDF({unit: 'px'});
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
                    const encabezado = [];
  
                    for (var i = 0; i < this.estudiantes.length; i += 1) {
                      console.log(this.estudiantes[i]);
                      //resultado.push(this.estudiantes[i])
                       if(i==0)
                       {
                         encabezado.push({nombres:`${this.estudiantes[i].apellidoP} ${this.estudiantes[i].apellidoM} ${this.estudiantes[i].nombres} `,ci_estudiante:this.estudiantes[i].ci_estudiante,
                                         nombre_carrera:this.estudiantes[i].nombre_carrera});
                          console.log(encabezado);
                       }
                      resultado.push([i+1,this.estudiantes[i].nombres,this.estudiantes[i].apellidoP,this.estudiantes[i].apellidoM,this.estudiantes[i].celular,
                      this.estudiantes[i].nombre_carrera,this.estudiantes[i].estado])
                      //result.push(Object.assign({}, data));
                    }
  
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
                     const pageNumber=3;
                     for (let i = 0; i < pageNumber; i++) {
                        doc.setPage(i);
                        let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //現在這頁
                        doc.setFontSize(12); //設定字體大小(optional)
                        doc.text(
                          `${pageCurrent} / ${pageNumber}`,
                          190,
                          doc.internal.pageSize.height - 10,
                          {align: 'left'}
                        );
                      } 
  
                      //RELLENADO DE DATOS DEL ESTUDIANTE:
                      //INICIO PRIMERA FORMA
                      doc.setTextColor(100);
                      doc.setFontSize(15);
                      // doc.text(`
                      //   Primer comentario                                        
                      //    `, 10, setY);
                         
                      let finalY = doc.lastAutoTable.finalY || 10
  
                      //doc.addImage("https://picsum.photos/200", "JPEG", doc.internal.pageSize.width-80, finalY+20, 50, 50);
                      doc.addImage("caracteristicas-bosques-tropicales.jpg", "JPG", doc.internal.pageSize.width-80, finalY+20, 50, 50);
  
                      doc.text(`
                         HISTORIAL ACADEMICO DE AVANCE GENERAL                                                      
                         `, 20, finalY);
                         finalY+=25;    
                      //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
                      doc.setFontSize(10);
                      doc.text(`
                         MI PRIMER TITULO CON TABLAS EN PDF       
                         NOMBRES: ${encabezado[0].nombres}                                  
                         CEDULA DE IDENTIDAD: ${encabezado[0].ci_estudiante}
                         CARRERA: ${encabezado[0].nombre_carrera}
                         NIVEL DE FORMACION: ${encabezado[0].nombre_carrera}
                         `,0, finalY);
                         finalY+=35;                   
                      
                      //PRIMERA FORMA FINALIZADA 
                      autoTable(doc, { 
                        startY: finalY + 20,
                        html: '#contenidos' })
  
                        finalY = doc.lastAutoTable.finalY
  
  
                      doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);
                    
                    //const body = this.estudiantes;
                     //const body =otro;
  
                      //SEGUNDA FORMA FINALIZADA
                      // autoTable(doc, {
                      //   head: headers1,
                      //   body:resultado,
                      // });
  
                      //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });
                      doc.save('example.pdf');
  
                  //EJEMPLO DEL FORMATO Y USO DE PDFDOCUMENT
                  //finish second try
                  // const headers = [['Name', 'Email', 'Country']], // 注意有兩層[]
                  // const body = [
                  //     ['David', 'david@example.com', 'Sweden'],
                  //     ['Castille', 'castille@example.com', 'Spain']
                  // ]
  
                    // autoTable(doc, {
                    //   head: headers,
                    //   body,
                    // });
                    doc.save('example.pdf');
  
  
                   
                    //var doc = new jsPDF('p', 'pt', 'A4');
                      // margins = {
                      //     top: 80,
                      //     bottom: 60,
                      //     left: 40,
                      //     width: 522
                      // };
                    
                   
                    
                    doc.save('test.pdf');
                  
  
                  //const pdf = new PDFDocument()
                  //pdf.end()
                  //const stream = pdf.pipe(createWriteStream('./goal.pdf'))
  
                  // const rootNode = nodeMap['root']
                  // traverse(rootNode)
  
                  //pdf.end()
                  //stream.on('finish', () => {
                    //console.log('Wrote to file.pdf.')
                  //})
  
  
                  // .fill('red')
                  // .text('This is some text')
                   //console.log(doc);
      //                 ended: (sender, args) => pdf.saveBlob(args.blob, 'Document.pdf')
      //             });
      //             //
      //             doc.drawText('Demo page.');
      //             //
      //             doc.end();
       }
    }
  }
  // export default {
  // name:'ReporteView',
  // //components:{DataTable},
  //   data(){
  //     return {
  //     ci_estudiante:'',nombres:'',apellidoP:'',apellidoM:'',numero_registro:'',nombre_carrera:'',fecha_emision:'',
  //     estudiantes:null,materias:null,    
  //     url:'http://127.0.0.1:8000/estudiantes/obtenerAsignaturasCursadas',
  //     columns:[
  //       {data:null,render:function(data,type,row,meta)
  //       {return `${meta.row+1}`}},
  //       {data:'ci_estudiante'},
  //       {data:'apellidoP'},
  //       {data:'apellidoM'},
  //       {data:'celular'},
  //       {data:'nombre_carrera'},
  //       {data:'anio_ingreso'},
  //       {data:'anio_cursado'},
  //       {data:'estado'}
  //     ]
  //     }
  //   },
  //   mounted(){
  //      //const route =useRoute();
  //      //this.id = route.params.id;
        
  //      //this.url = this.url + '/' +this.id+'/';
  //     //this.getMateriasCursadas();
  //     //ruta de navegacion despues de la accion eliminar
  //     //this.principal='/estudiantes';
  
  //       //this.getMateriasCursadas();
  
  //       this.getEstudiantes();
  //   },methods:{
  //       getEstudiantes(){
  //             axios.get('http://127.0.0.1:8000/estudiantes/estudiantes/')
  //             .then(            
  //                 response =>(
  //                     this.estudiantes = response.data                        
  //                 )
  //             );
  //             console.log(this.estudiantes);
  //     },
  //       getMateriasCursadas(){
  //          axios.get(this.url)
  //             .then(            
  //                 response =>(                  
  //                     this.ci_estudiante=response.data['estudiante']['ci_estudiante'],
  //                     this.nombres=response.data['estudiante']['nombres'],
  //                     this.apellidoP=response.data['estudiante']['apellidoP'],
  //                     this.apellidoM=response.data['estudiante']['apellidoM'],
  //                     this.numero_registro=response.data['estudiante']['numero_registro'],
  //                     this.nombre_carrera=response.data['estudiante']['nombre_carrera'],
  
  //                     this.fecha_emision=response.data['fecha_emision'],
  
  //                     //this.materias = this.sortGestion(response.data['datos'])
  //                     this.materias = response.data['datos']
                      
  //                 )
  //             ).catch(error => { 
  //           console.log(error)
  //           //show_alerta(error,'error')
  //         });
  //         console.log(this.materias+'sss');            
  //       }
  //   }
  // }
  </script>
  
  <style>
  @import 'datatables.net-dt';

  /* @import 'datatables.net-responsive-bs5'; */
  @import 'datatables.net-responsive-dt'; 

  table.dtr-inline.collapsed>tbody>tr>td.dtr-control, table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
}
table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td.dtr-control:before, table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th.dtr-control:before {
    content: "-";
    background-color: #d33333;
}
table.dataTable.dtr-inline.collapsed>tbody>tr>td.dtr-control:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control:before {
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
    font-family: "Courier New",Courier,monospace;
    line-height: 1em;
    content: "+";
    /* background-color: #31b131; */
    background-color: #74a2ff;
    
}
  
  </style>
  
  