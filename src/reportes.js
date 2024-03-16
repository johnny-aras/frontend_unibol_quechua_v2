import Swal from "sweetalert2";
//librerias para la exportacion en pdf
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
//import axios from "axios";

// let docentes_ = [];
// let BASE_URL=process.env.VUE_APP_BASE_URL;
let MINISTERIO=import.meta.env.VITE_MINISTERIO;
let LOGO_UNI=import.meta.env.VITE_LOGO_UNI;

export function show_alerta(mensaje, icono, foco = '') {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title: mensaje,
        icon: icono,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoomin' },
        buttonsStyling: false
    });
}
export async function generarReporteInscripcionEgresados(modalidad_egreso, datos_estudiante, fecha_emision, numero_boleta, numero_archivo, anio_actual) {
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
  //const headers = [['NRO', 'CODIGO', 'ASIGNATURA PROGRAMADA', 'TIPO', 'OBSERVACION']];
  const headersModalidadEgreso = [['MODALIDAD DE EGRESO','RESULTADO']];
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
  await doc.addImage(MINISTERIO, 'JPG', 15, finalY+5,60 , 60);
  await doc.addImage(LOGO_UNI, 'PNG',  doc.internal.pageSize.width - 65, finalY + 5, 50, 50);


  // await doc.addImage("../../ministerio.jpg", "JPG", doc.internal.pageSize.width - 65, finalY + 5, 60, 60);
  // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", 15, finalY + 5, 50, 50);

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
  let cedula_identidad = datos_estudiante.ci_especial?`${datos_estudiante.ci_estudiante} ${datos_estudiante.ci_especial}`:datos_estudiante.ci_estudiante; 

  doc.setTextColor(100);
  doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${cedula_identidad}                       
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



  let wantedTableWidth = 279;
  let pageWidth = doc.internal.pageSize.width;
  let margin = (pageWidth - wantedTableWidth) / 2;
  console.log(anio_actual);
  //const bodyE = `${modalidad_egreso} ${anio_actual}`;
  //CABECERA PARA LA MODALIDAD DE INGRESO DE NUEVOS ESTUDIANTES 2024
  autoTable(doc, {
    //QUITANDO ESPACIO
    //startY: finalY + 20,               
    startY: finalY + 30,
    head: headersModalidadEgreso,
    body: modalidad_egreso,
    //theme:'grid',theme:'striped',theme:'plain'
    theme: 'plain',
    tableLineColor: [0, 0, 0], tableLineWidth: 0.2,
    styles: { fontSize: 6, cellWidth: 'wrap', halign: 'center' },
    bodyStyles: { lineWidth: 0.2, lineColor: [0, 0, 0] },
    margin: { left: margin - 30 },
    //columnStyles:{color}
    //padding:1

  });

  finalY = doc.lastAutoTable.finalY
  finalY += 10;
  //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);
  //1.-
  // doc.setTextColor(10);
  // doc.setFontSize(10).setFont(undefined, 'bold');                      
  // doc.text(`
  //     PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
  //     `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");

  //     finalY+=10; 
  // doc.setTextColor(10);
  // doc.setFontSize(10).setFont(undefined, 'bold');                      
  // doc.text(`
  //     PERIODO: ${datos_estudiante.anio_cursado}
  //     `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
  //-----

  //const body = this.estudiantes;
  //const body =otro;

  //SEGUNDA FORMA FINALIZADA
  //autoTable(doc, {       
  //QUITANDO ESPACIO
  //startY: finalY + 20,               
  //   startY: finalY + 20,               
  //   head: headers,
  //   body:asignaturas_tabla,
  //   //theme:'grid',theme:'striped',theme:'plain'
  //   theme:'plain',
  //   tableLineColor:[0,0,0],tableLineWidth:0.2,
  //   styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
  //   bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
  //   margin: {left: margin-30},
  //   //columnStyles:{color}
  //   //padding:1

  // });
  // finalY = doc.lastAutoTable.finalY
  finalY += 80;

  doc.setTextColor(10);
  doc.setFontSize(8).setFont(undefined, 'normal');
  doc.text(`
                        FIRMA ESTUDIANTE
                        `, 20, finalY);
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
  finalY += 205;
  console.log('este es el alto' + doc.internal.pageSize.height);

  doc.setTextColor(10);
  doc.setFontSize(6).setFont(undefined, 'bold');
  doc.text(`
                      *Documento solo válido para tramite interno                                  
                        `, 30, finalY);
  // *Ajuste: Asignaturas validadas con la Resolución Ministerial N°0155/2023
  // *N: Gestión Asignatura Normal                        




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
}


export async function generarReporteInscripcionNuevos(asignaturas_tabla,modalidad_de_ingreso,datos_estudiante,fecha_emision,numero_boleta,numero_archivo)
    {
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
                  const doc = new jsPDF({orientation:'p',unit:'px',format:'letter'});
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
                  const headers = [['NRO','CODIGO','ASIGNATURA PROGRAMADA','TIPO', 'OBSERVACION']];
                  const headersModalidadIngreso = [['MODALIDAD DE INGRESO','RESULTADO']];
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
                    await doc.addImage(MINISTERIO, 'JPG', 15, finalY+5,60 , 60);
                    await doc.addImage(LOGO_UNI, 'PNG',  doc.internal.pageSize.width - 65, finalY + 5, 50, 50);


                    // await doc.addImage("../../ministerio.jpg", "JPG",  doc.internal.pageSize.width-65, finalY+5, 60, 60);                    
                    // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", 15, finalY+5 , 50, 50);
                    
                    doc.setTextColor(10);
                    doc.setFontSize(10).setFont(undefined, 'bold');
                    doc.setTextColor(18, 73, 39);
                    doc.text(`
                       UNIVERSIDAD INDÍGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA
                       UNIBOL QUECHUA "CASIMIRO HUANCA"
                       `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=20;    

                    doc.setTextColor(100);
                    doc.setFontSize(8).setFont(undefined, 'normal');
                    doc.text(`
                       Decreto Supremo N° 29664 de 2 de agosto de 2008 - Decreto Supremo N° 3079 del 8 de febrero 2017
                       R.M. 505/2013 - R.M. 1300/2018"
                       `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=20; 

                    doc.setTextColor(10);
                    doc.setFontSize(8);
                    doc.text(`
                       Tukuy sunquwan yahcyaninchikta, ruwayninchikta, yuyayninchikta kallpachaspa sumaq kawsayman kutina                       
                       `, (doc.internal.pageSize.getWidth()/2)-5, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=15; 


                      doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        BOLETA DE INSCRIPCIÓN 2024
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;    

                      doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        N° ${numero_boleta}
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;  
                    
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
                      
                       let cedula_identidad = datos_estudiante.ci_especial?`${datos_estudiante.ci_estudiante} ${datos_estudiante.ci_especial}`:datos_estudiante.ci_estudiante; 

                       doc.setTextColor(100);
                       doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${cedula_identidad}                       
                       ${datos_estudiante.numero_registro}                                 
                       ${datos_estudiante.nombre_carrera}
                       ${fecha_emision}
                       
                       `, (doc.internal.pageSize.getWidth()/2)-150, finalY);



                       finalY+=45; 
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
                    


                    let wantedTableWidth = 279;
                    let pageWidth = doc.internal.pageSize.width;
                    let margin = (pageWidth - wantedTableWidth) / 2;

                    //CABECERA PARA LA MODALIDAD DE INGRESO DE NUEVOS ESTUDIANTES 2024
                    autoTable(doc, {       
                      //QUITANDO ESPACIO
                      //startY: finalY + 20,               
                      startY: finalY + 30,               
                      head: headersModalidadIngreso,
                      body:modalidad_de_ingreso,
                      //theme:'grid',theme:'striped',theme:'plain'
                      theme:'plain',
                      tableLineColor:[0,0,0],tableLineWidth:0.2,
                      styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
                      bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
                      margin: {left: margin-30},
                      //columnStyles:{color}
                      //padding:1
                      
                    });

                    finalY = doc.lastAutoTable.finalY
                    finalY+=10; 
                    //doc.addImage("https://picsum.photos/200", "JPEG", 15, finalY+20, 10, 10);

                    doc.setTextColor(10);
                    doc.setFontSize(10).setFont(undefined, 'bold');                      
                    doc.text(`
                        PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                    
                        finalY+=10; 
                    doc.setTextColor(10);
                    doc.setFontSize(10).setFont(undefined, 'bold');                      
                    doc.text(`
                        PERIODO: ${datos_estudiante.anio_cursado}
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                    
                  
                  //const body = this.estudiantes;
                   //const body =otro;

                    //SEGUNDA FORMA FINALIZADA
                    autoTable(doc, {       
                      //QUITANDO ESPACIO
                      //startY: finalY + 20,               
                      startY: finalY + 20,               
                      head: headers,
                      body:asignaturas_tabla,
                      //theme:'grid',theme:'striped',theme:'plain'
                      theme:'plain',
                      tableLineColor:[0,0,0],tableLineWidth:0.2,
                      styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
                      bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
                      margin: {left: margin-30},
                      //columnStyles:{color}
                      //padding:1
                      
                    });
                    finalY = doc.lastAutoTable.finalY
                    finalY+=80; 

                    doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                        FIRMA ESTUDIANTE
                        `, 20, finalY);
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        //finalY+=10; 
                        
                        doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                        RESP. INSCRIPCIÓN
                        `,(doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        //finalY+=10;   

                        doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                      FIRMA DIRECTOR
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        //finalY+=15;  
                        finalY+=55;  
                        console.log('este es el alto'+ doc.internal.pageSize.height);

                      doc.setTextColor(10);
                      doc.setFontSize(6).setFont(undefined, 'bold');
                      doc.text(`
                      Documento solo válido para tramite interno                                  
                      *Ajuste: Asignaturas validadas con la Resolución Ministerial N°0155/2023
                      *N: Gestión Asignatura Normal                        
                        `, 30, finalY);

                        

                      doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'bold');                      
                      doc.text(`
                        Arch: ${numero_archivo}
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY+50,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;  

                        

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
}

export async function generarReporteInscripcionRegulares(asignaturas_tabla,asignaturas_gestion_anterior,datos_estudiante,fecha_emision,numero_boleta,numero_archivo)
{
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
                  const doc = new jsPDF({orientation:'p',unit:'px',format:'letter'});
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
                  const headers = [['NRO','CÓDIGO','ASIGNATURA PROGRAMADA','TIPO', 'OBSERVACIÓN']];
                  const headersGestionAnterior = [['NRO','CÓDIGO','NOMBRE ASIGNATURA', 'NOTA FINAL','RESULTADO','OBSERVACIÓN']];
                  
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
                    await doc.addImage(MINISTERIO, 'JPG', 15, finalY+5,60 , 60);
                    await doc.addImage(LOGO_UNI, 'PNG',  doc.internal.pageSize.width - 65, finalY + 5, 50, 50);


                    // await doc.addImage("../../ministerio.jpg", "JPG", 15, finalY+5, 60, 60);
                    // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width-65, finalY+5 , 50, 50);
                    
                    doc.setTextColor(10);
                    doc.setFontSize(10).setFont(undefined, 'bold');
                    doc.setTextColor(18, 73, 39);
                    doc.text(`
                       UNIVERSIDAD INDÍGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA
                       UNIBOL QUECHUA "CASIMIRO HUANCA"
                       `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=20;    

                    doc.setTextColor(100);
                    doc.setFontSize(8).setFont(undefined, 'normal');
                    doc.text(`
                       Decreto Supremo N° 29664 de 2 de agosto de 2008 - Decreto Supremo N° 3079 del 8 de febrero 2017
                       R.M. 505/2013 - R.M. 1300/2018"
                       `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=20; 

                    doc.setTextColor(10);
                    doc.setFontSize(8);
                    doc.text(`
                       Tukuy sunquwan yahcyaninchikta, ruwayninchikta, yuyayninchikta kallpachaspa sumaq kawsayman kutina                       
                       `, (doc.internal.pageSize.getWidth()/2)-5, finalY,null,null,"center");
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes
                       finalY+=15; 


                      doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        BOLETA DE INSCRIPCIÓN 2024
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;    

                      doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        N° ${numero_boleta}
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;  
                    
                    doc.setTextColor(10);
                    doc.setFontSize(8).setFont(undefined, 'bold');
                    doc.text(`
                    APELLIDOS Y NOMBRES:                                  
                    CÉDULA DE IDENTIDAD:
                    NÚMERO DE REGISTRO: 
                    CARRERA:
                    FECHA DE EMISIÓN:
                       
                       `, -20, finalY);
                      //  NRO DE REGISTRO: ${this.numero_registro}

                      //  FECHA DE EMISION: ${this.fecha_emision}
                      //  NIVEL DE FORMACION: ${this.grado}
                       //finalY+=25;    
                       //añadimos 20+50 por el tamaño de las imagenes

                       //datos_estudiante,fecha_emision,numero_boleta

                       let cedula_identidad = datos_estudiante.ci_especial?`${datos_estudiante.ci_estudiante} ${datos_estudiante.ci_especial}`:datos_estudiante.ci_estudiante; 

                       doc.setTextColor(100);
                       doc.text(`
                       ${datos_estudiante.apellidoP} ${datos_estudiante.apellidoM} ${datos_estudiante.nombres}                        
                       ${cedula_identidad}                       
                       ${datos_estudiante.numero_registro}                                 
                       ${datos_estudiante.nombre_carrera}
                       ${fecha_emision}
                       
                       `, (doc.internal.pageSize.getWidth()/2)-150, finalY);



                       finalY+=45; 
                    //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
                    //doc.setFontSize(9);
                    
                    let wantedTableWidth = 279;
                    let pageWidth = doc.internal.pageSize.width;
                    let margin = (pageWidth - wantedTableWidth) / 2;

                    doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        ASIGNATURAS GESTIÓN 2023
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");

                        autoTable(doc, {       
                      //QUITANDO ESPACIO
                      //startY: finalY + 20,               
                      startY: finalY + 20,               
                      head: headersGestionAnterior,
                      body:asignaturas_gestion_anterior,
                      //theme:'grid',theme:'striped',theme:'plain'
                      theme:'plain',
                      tableLineColor:[0,0,0],tableLineWidth:0.2,
                      styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
                      bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
                      margin: {left: margin-30},
                      //columnStyles:{color}
                      padding:1
                      
                    });
                    finalY = doc.lastAutoTable.finalY
                    finalY+=30; 


                    
                    doc.setTextColor(10);
                      doc.setFontSize(10).setFont(undefined, 'bold');                      
                      doc.text(`
                        PROGRAMACIÓN DE ASIGNATURAS GESTIÓN 2024
                        `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
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
                      body:asignaturas_tabla,
                      //theme:'grid',theme:'striped',theme:'plain'
                      theme:'plain',
                      tableLineColor:[0,0,0],tableLineWidth:0.2,
                      styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
                      bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
                      margin: {left: margin-30},
                      //columnStyles:{color}
                      padding:1
                      
                    });
                    finalY = doc.lastAutoTable.finalY
                    finalY+=60; 

                    doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                        FIRMA ESTUDIANTE
                        `, 20, finalY);
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        //finalY+=10; 
                        
                        doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                        RESP. INSCRIPCIÓN
                        `,(doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        //finalY+=10;   

                        doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'normal');                      
                      doc.text(`
                      FIRMA DIRECTOR
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=65;  


                      doc.setTextColor(10);
                      doc.setFontSize(6).setFont(undefined, 'bold');
                      doc.text(`
                      Documento solo válido para trámite interno                                  
                      *Ajuste: Asignaturas validadas con la Resolución Ministerial N°0155/2023
                      *N: Gestión Asignatura Normal                        
                        `, 30, finalY);

                        

                      doc.setTextColor(10);
                      doc.setFontSize(8).setFont(undefined, 'bold');                      
                      doc.text(`
                        Arch: ${numero_archivo}
                        `, (doc.internal.pageSize.getWidth()/2)+120, finalY+50,null,null,"center");
                        //finalY+=25;    
                        //añadimos 20+50 por el tamaño de las imagenes
                        finalY+=10;  

                    //FIN DOCUMENTO DE REGISTRO DE INSCRIPCION

                    //doc.table(1, 1, this.generateData(100), headers1, { autoSize: true });
                    
                    //await doc.save(`inscripcion_${this.apellidoP} ${this.apellidoM} ${this.nombres}.pdf`); 
                    await window.open(doc.output('bloburl'), '_blank');                               
                  //var doc = new jsPDF('p', 'pt', 'A4');
                    // margins = {
                    //     top: 80,
                    //     bottom: 60,
                    //     left: 40,
                    //     width: 522
                    // };       
}

export async function historialAcademico(datos_estudiante,grado,fecha_emision,otros_datos,gestion=2023){
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
  const doc = new jsPDF({orientation:'p',unit:'px',format:'letter'});
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

    //let tabla_promedios=[];        
  
    
      //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
      // tabla_promedios.push(['TOTAL DE ASIGNATURAS APROBADAS',this.cantidad_aprobadas])
      // tabla_promedios.push(['TOTAL DE ASIGNATURAS CURSADAS', this.cantidad_todas])
      // tabla_promedios.push(['PROMEDIO DE CALIFICACIÓN GNRAL.',this.promedio_todas])
      // tabla_promedios.push(['PREMEDIO DE CALIFICACIÓN APROBADAS',this.promedio_aprobadas])

      const headers = [['NRO','GESTIÓN','SIGLA CÓDIGO','ASIGNATURA', 'CALIFICACIÓN NUMERAL','CALIFICACIÓN LITERAL QUECHUA','ESTADO','OBSERVACIÓN']];
     
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
    // await doc.addImage("../../ministerio.jpg", "JPG", 15, finalY+5, 60, 60);
    // await doc.addImage("../../logotipo-unibol-quechua.png", "PNG", doc.internal.pageSize.width-65, finalY+5 , 50, 50);
    
    // doc.setTextColor(10);
    // doc.setFontSize(10).setFont(undefined, 'bold');
    // doc.setTextColor(18, 73, 39);
    // doc.text(`
    //    UNIVERSIDAD INDÍGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA
    //    UNIBOL QUECHUA "CASIMIRO HUANCA"
    //    `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
    //    //finalY+=25;    
    //    //añadimos 20+50 por el tamaño de las imagenes
    //    finalY+=20;    

    // doc.setTextColor(100);
    // doc.setFontSize(8).setFont(undefined, 'normal');
    // doc.text(`
    //    Decreto Supremo N° 29664 de 2 de agosto de 2008 - Decreto Supremo N° 3079 del 8 de febrero 2017
    //    R.M. 505/2013 - R.M. 1300/2018"
    //    `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
    //    //finalY+=25;    
    //    //añadimos 20+50 por el tamaño de las imagenes
    //    finalY+=20; 

    // doc.setTextColor(10);
    // doc.setFontSize(8);
    // doc.text(`
    //    Tukuy sunquwan yahcyaninchikta, ruwayninchikta, yuyayninchikta kallpachaspa sumaq kawsayman kutina                       
    //    `, (doc.internal.pageSize.getWidth()/2)-5, finalY,null,null,"center");
       //finalY+=25;    
       //añadimos 20+50 por el tamaño de las imagenes
       finalY+=75; 


    doc.setTextColor(10);
    doc.setFontSize(6).setFont(undefined, 'bold');                      
    doc.text(`
      SERIE "A"-3 
      `, (doc.internal.pageSize.getWidth()/2)+160, finalY,null,null,"center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY+=10;  
    
    doc.setTextColor(10);
    doc.setFontSize(14).setFont(undefined, 'bold');                      
    doc.text(`
      CERTIFICADO DE CALIFICACIONES GESTIÓN: ${gestion}
      `, (doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
      //finalY+=25;    
      //añadimos 20+50 por el tamaño de las imagenes
      finalY+=30;  

    doc.setTextColor(10);
    doc.setFontSize(8);
    doc.text(`
       APELLIDOS Y NOMBRES:                                  
       CÉDULA DE IDENTIDAD: 
       NRO DE REGISTRO: 
       CARRERA: 
       FECHA DE EMISIÓN: 
       NIVEL DE FORMACIÓN: 
       `, 45, finalY);
       //finalY+=25;    
       //añadimos 20+50 por el tamaño de las imagenes
       //finalY+=35; 
    //SETEAMOS EL TAMAÑO DE LETRA PARA COLOCAR LOS DATOS
    //doc.setFontSize(9);

       //let {estudiante,grado,fecha_emision,datos} = datos_estudiante;
      //  const estudiante =datos_estudiante['estudiante'];
      //  const fecha_emision =datos_estudiante['fecha_emision'];
      //  const grado =datos_estudiante['grado'];
      //  const datos =datos_estudiante['datos'];
       


      const apellidoPaterno= datos_estudiante.apellidoP?datos_estudiante.apellidoP:'';
      const apellidoMaterno= datos_estudiante.apellidoM?datos_estudiante.apellidoM:'';
      console.log(datos_estudiante.apellidoP);

       doc.setTextColor(100);
       doc.text(`
       ${apellidoPaterno} ${apellidoMaterno} ${datos_estudiante.nombres}                         
       ${datos_estudiante.ci_estudiante}                       
       ${datos_estudiante.numero_registro}                                
       ${datos_estudiante.nombre_carrera}
       ${fecha_emision}
       ${grado}
       `, (doc.internal.pageSize.getWidth()/2)-95, finalY);



       finalY+=35; 

      //  let asignaturas_tabla =[];
      let asignaturas_tabla =otros_datos;
      //  for (let index = 0; index < otros_datos.length; index++){
      //   //asignaturas_tabla.push([index+1,datos[index].anio_asignado ,datos[index].codigo_asignatura,datos[index].nombre_asignatura])          
      //   asignaturas_tabla.push([index+1,otros_datos[index].anio_cursado,otros_datos[index].codigo_asignatura,otros_datos[index].nombre_asignatura,otros_datos[index].nota_num_final,
      //                           otros_datos[index].nota_literal_quechua,otros_datos[index].estado_gestion_espaniol,''])
      // }
    
    

      let wantedTableWidth = 279;
      let pageWidth = doc.internal.pageSize.width;
      let margin = (pageWidth - wantedTableWidth) / 2;

    //SEGUNDA FORMA FINALIZADA
    autoTable(doc, {       
      //QUITANDO ESPACIO
      //startY: finalY + 20,               
      startY: finalY + 20,               
      head: headers,
      body:asignaturas_tabla,
      //theme:'grid',theme:'striped',theme:'plain'
      theme:'plain',
      tableLineColor:[0,0,0],tableLineWidth:0.2,
      styles: {fontSize:6,cellWidth:'wrap',halign: 'center'},
      
      bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
      margin: {left: margin-40},
      //columnStyles:{color}
      padding:2,
      columnStyles: {
        0: {cellWidth: 20,halign: 'center'},
        1: {cellWidth: 30,halign: 'center'},
        2: {cellWidth: 25,halign: 'center'},
        3: {cellWidth: 80,halign: 'center'},
        4: {cellWidth: 40,halign: 'center'},
        5: {cellWidth: 80,halign: 'center'},
        6: {cellWidth: 24,halign: 'center'},
        7: {cellWidth: 80,halign: 'center'},
        // etc
      }
      
    });
    finalY = doc.lastAutoTable.finalY
    finalY+=100; 

    doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');                      
      doc.text(`
        Willay Japi'q
        `, 45, finalY);
        //finalY+=25;    
        //añadimos 20+50 por el tamaño de las imagenes
        //finalY+=10; 
        
        doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');                      
      doc.text(`
        Umalliq
        `,(doc.internal.pageSize.getWidth()/2)-20, finalY,null,null,"center");
        //finalY+=25;    
        //añadimos 20+50 por el tamaño de las imagenes
        //finalY+=10;   

        doc.setTextColor(10);
      doc.setFontSize(8).setFont(undefined, 'normal');                      
      doc.text(`
      Sullk'a Kamachiq
        `, (doc.internal.pageSize.getWidth()/2)+120, finalY,null,null,"center");
        //finalY+=25;    
        //añadimos 20+50 por el tamaño de las imagenes
        finalY+=65; 

        doc.setTextColor(10);
        doc.setFontSize(6).setFont(undefined, 'bold');
        doc.text(`
        Valores de malla Aprobados con la R.M. 1300/2018 de Reingeniería Institucional
        *La presente solo es válida para trámite interno
        APR.: APROBADO
        REP.:REPROBADO
        AB.:ABANDONO
          `, 40, finalY);
    //   let wantedTableWidth = 100;
    //   let pageWidth = doc.internal.pageSize.width;
    //   let margin = (pageWidth - wantedTableWidth) / 2;

    //   autoTable(doc, {       
    //   //QUITANDO ESPACIO
    //   //startY: finalY + 20,               
    //   startY: finalY + 10,               
    //   showHead: 'never',
    //   body:tabla_promedios,
    //   //theme:'grid',theme:'striped',theme:'plain'
    //   theme:'plain',
    //   tableLineColor:[0,0,0],tableLineWidth:0.2,
    //   styles: {fontSize:5,cellWidth:'wrap',halign: 'center'},
    //   bodyStyles:{lineWidth:0.2,lineColor:[0,0,0]},
    //   columnStyles: {
    //     1: {columnWidth: 'auto'}
    //   },
    //   tableWidth: doc.internal.pageSize.getWidth()/3,
    //   margin: {left: margin-20, right: margin}
    //   //columnStyles:{color}
      
    // });
    // finalY = doc.lastAutoTable.finalY
    // finalY+=30; 


      
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