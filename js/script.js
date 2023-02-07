/*Datos*/
let miembros=[
  {
    'id_miembro': "2021TAYA01",
    'nombre_miembro': "Luis Gómez Taya",
    'estado': "actual_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2019ALLC01",
    'nombre_miembro': "Giordano Limber Aguilar Allcca",
    'estado': "actual_miembro",
    'foto_miembro': "GiordanoAguilar.jpg"
  },
  {
    'id_miembro': "2020GARC07",
    'nombre_miembro': "José Alberto Fuenmayor Garcia",
    'estado': "actual_miembro",
    'foto_miembro': "JoseFuenmayor.jpg"
  },
  {
    'id_miembro': "2014RUIZ10",
    'nombre_miembro': "Kevin Arturo Huamán Ruiz",
    'estado': "actual_miembro",
    'foto_miembro': "KevinHuaman.jpg"
  },
  {
    'id_miembro': "2022NUNE01",
    'nombre_miembro': "Robert Yomi Cadenas Nuñez",
    'estado': "actual_miembro",
    'foto_miembro': "RobertYomi.jpg"
  },
  {
    'id_miembro': "2020CABE02",
    'nombre_miembro': "Elias Alonso Usaqui Cabezas",
    'estado': "actual_miembro",
    'foto_miembro': "EliasUsaqui.jpg"
  },
  {
    'id_miembro': "2020MAYT01",
    'nombre_miembro': "Ingrit Mayta",
    'estado': "actual_miembro",
    'foto_miembro': "IngritMayta.jpg"
  },
  {
    'id_miembro': "2022VIVA01",
    'nombre_miembro': "Julio Adriano Noliz Vivanco",
    'estado': "actual_miembro",
    'foto_miembro': "JulioNoliz.jpg"
  },
  {
    'id_miembro': "2021ROME02",
    'nombre_miembro': "Rodrigo Sasieta Romero",
    'estado': "actual_miembro",
    'foto_miembro': "RodrigoSasieta.png"
  },
  {
    'id_miembro': "2018QUIS04",
    'nombre_miembro': "David Quispe",
    'estado': "actual_miembro",
    'foto_miembro': "DavidQuispe.jpg"
  },
  {
    'id_miembro': "2019VALE16",
    'nombre_miembro': "Jack Valencia",
    'estado': "actual_miembro",
    'foto_miembro': "JackValencia.jpg"
  },
  /*Antiguos Miembros */
  {
    'id_miembro': "2018BENI07",
    'nombre_miembro': "Pedro Juan Fernando Chang Benites",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2022VILL04",
    'nombre_miembro': "Tyffany Villanueva",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2021OSOR02",
    'nombre_miembro': "David Osorio",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2021RIQU01",
    'nombre_miembro': "Favio César Suárez Rique",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2021DIAZ01",
    'nombre_miembro': "Jeyson Paul Espinoza Diaz",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2018MONT28",
    'nombre_miembro': "Alexander Montoya",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  },
  {
    'id_miembro': "2019RAMI09",
    'nombre_miembro': "Joaquín Alberto Osorio Ramírez",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  }
  /*,
  {
    'id_miembro': "2021DIAZ01",
    'nombre_miembro': "Jeyson Paul Espinoza Diaz",
    'estado': "antiguo_miembro",
    'foto_miembro': "MiembroCubeForce.jpg"
  }*/
]
let torneos=[
  {
    'id_torneo_wca': "SpeedcuberPeruILima2023",
    'nombre_torneo': "Speedcuber Peru I Lima 2023",
    'year': "2023",
    'fecha': "Marzo 4 - 5",
    'imagen': "torneosinfondo.jpg",
    'representantes': [],
    'videos_torneo': []
  },
  {
    'id_torneo_wca': "LimaSummer2023",
    'nombre_torneo': "Lima Summer 2023",
    'year': "2023",
    'fecha': "Febrero 4 - 5",
    'imagen': "limaSummer2023.jpg",
    'representantes': ["2019ALLC01","2022NUNE01","2014RUIZ10","2018QUIS04","2020CABE02","2021ROME02","2020MAYT01","2019VALE16"],
    'videos_torneo': []
  },
  {
    'id_torneo_wca': "TCGPowerUp2022",
    'nombre_torneo': "TCG Power Up 2022",
    'year': "2022",
    'fecha': "Diciembre 3 - 4",
    'imagen': "tcgPowerUp2022.jpg",
    'representantes': ["2021TAYA01","2019ALLC01","2020GARC07","2022NUNE01","2014RUIZ10","2019RAMI09","2019VALE16","2018MONT28","2022VIVA01","2020MAYT01","2020CABE02"],
    'videos_torneo': [
    {
      'enlace': "https://www.youtube.com/embed/7ZGtCMPE6pM",
      'enlace_miniatura': "7ZGtCMPE6pM"
    },{
      'enlace': "https://www.youtube.com/embed/p0-FC4fQldM",
      'enlace_miniatura': "p0-FC4fQldM"
    }
    ]
  },
  {
    'id_torneo_wca': "SinDNFenelPalacio2022",
    'nombre_torneo': "Sin DNF en el palacio 2022",
    'year': "2022",
    'fecha': "Noviembre 26",
    "imagen": "sinDNF2022.jpg",
    "representantes": ["2018MONT28","2019VALE16"],
    'videos_torneo': []
  },
  {
    'id_torneo_wca': "PeruNationals2022",
    'nombre_torneo': "Peru Nationals 2022",
    'year': "2022",
    'fecha': "Agosto 19 - 21",
    "imagen": "peruNationals2022.jpg",
    "representantes": ["2022NUNE01","2019RAMI09"],
    'videos_torneo': []
  },
  {
    'id_torneo_wca': "RealCube2022",
    'nombre_torneo': "Real Cube 2022",
    'year': "2022",
    'fecha': "Agosto 6 - 7",
    "imagen": "realCube2022.jpg",
    "representantes": ["2021TAYA01","2019ALLC01","2022VILL04","2022NUNE01","2014RUIZ10","2021DIAZ01","2019RAMI09","2019VALE16","2018MONT28","2021ROME02"],
    'videos_torneo': [
      {
        'enlace': "https://www.youtube.com/embed/5e8OvKZZteI",
        'enlace_miniatura': "5e8OvKZZteI"
      },{
        'enlace': "https://www.youtube.com/embed/FDK2mWrmhkE",
        'enlace_miniatura': "FDK2mWrmhkE"
      },{
        'enlace': "https://www.youtube.com/embed/e1IL0cjACbo",
        'enlace_miniatura': "e1IL0cjACbo"
      },{
        'enlace': "https://www.youtube.com/embed/ffsZTvpozEo",
        'enlace_miniatura': "ffsZTvpozEo"
      }
    ]
  },
  {
    'id_torneo_wca': "SchoolWinterLima2022",
    'nombre_torneo': "School Winter Lima 2022",
    'year': "2022",
    'fecha': "Julio 2 - 3",
    "imagen": "schoolWinter2022.jpg",
    "representantes": ["2021TAYA01","2019ALLC01","2022VILL04","2018BENI07","2022NUNE01","2014RUIZ10","2021DIAZ01","2019RAMI09","2021OSOR02","2018MONT28","2021RIQU01"],
    'videos_torneo': [
      {
        'enlace': "https://www.youtube.com/embed/MfzVwATl96s",
        'enlace_miniatura': "MfzVwATl96s"
      }
    ]
  },
  {
    'id_torneo_wca': "TCGNuevaGeneracion2022",
    'nombre_torneo': "TCG Nueva Generacion 2022",
    'year': "2022",
    'fecha': "Abril 30 - Mayo 1",
    "imagen": "tcgNuevaGeneracion.jpg",
    "representantes": ["2021TAYA01","2019ALLC01","2022VILL04","2018BENI07","2020GARC07","2021RIQU01","2019RAMI09","2021OSOR02"],
    'videos_torneo': []
  },
  {
    'id_torneo_wca': "LimaCuberano2022",
    'nombre_torneo': "Lima Cuberano 2022",
    'year': "2022",
    'fecha': "Marzo 12 - 13",
    "imagen": "cuberano2022.jpg",
    "representantes": ["2021TAYA01","2019ALLC01","2022VILL04","2018BENI07"],
    'videos_torneo': []
  }
]
let category=[
  {
    'id_categoria': "333",
    'nombre_categoria': "3x3x3",
    'imagen': "3x3.png"
  }
  ,{
    'id_categoria': "222",
    'nombre_categoria': "2x2x2",
    'imagen': "2x2.png"
  }
  ,{
    'id_categoria': "444",
    'nombre_categoria': "4x4x4",
    'imagen': "4x4.png"
  }
  ,{
    'id_categoria': "555",
    'nombre_categoria': "5x5x5",
    'imagen': "5x5.png"
  }
  ,{
    'id_categoria': "666",
    'nombre_categoria': "6x6x6",
    'imagen': "6x6.png"
  }
  ,{
    'id_categoria': "777",
    'nombre_categoria': "7x7x7",
    'imagen': "7x7.png"
  }
  ,{
    'id_categoria': "333bf",
    'nombre_categoria': "3x3x3 Ciega",
    'imagen': "blind.png"
  }
  ,{
    'id_categoria': "333fm",
    'nombre_categoria': "3x3x3 Menos Movimientos",
    'imagen': "fmc.png"
  }
  ,{
    'id_categoria': "333oh",
    'nombre_categoria': "3x3x3 One Handed",
    'imagen': "oneHanded.png"
  }
  ,{
    'id_categoria': "clock",
    'nombre_categoria': "Clock",
    'imagen': "clock.png"
  }
  ,{
    'id_categoria': "minx",
    'nombre_categoria': "Megaminx",
    'imagen': "megaminx.png"
  }
  ,{
    'id_categoria': "pyram",
    'nombre_categoria': "Pyraminx",
    'imagen': "pyraminx.png"
  }
  ,{
    'id_categoria': "skewb",
    'nombre_categoria': "Skewb",
    'imagen': "skewb.png"
  }
  ,{
    'id_categoria': "sq1",
    'nombre_categoria': "Square-1",
    'imagen': "square_1.png"
  }
  ,{
    'id_categoria': "444bf",
    'nombre_categoria': "4x4x4 Ciega",
    'imagen': "4x4blind.png"
  }
  ,{
    'id_categoria': "555bf",
    'nombre_categoria': "5x5x5 Ciega",
    'imagen': "5x5blind.png"
  }
  ,{
    'id_categoria': "333mbf",
    'nombre_categoria': "3x3x3 MultiBlind",
    'imagen': "multiBlind.png"
  }
];

let fondo_torneo=document.getElementById("fondo_torneo");
let conteiner_torneos=document.getElementById("conteiner_torneos");
let conteiner_list_torneos=document.getElementById("conteiner_list_torneos");
let torneo_conteiner=document.getElementById("torneo_conteiner");
let categorias_torneo;
let confirmo_hay_year=false;
let contenedor_perfiles=document.getElementById('perfiles_miembros');
let cont="";


/*Obtener Tiempo */
function obtenerTiempo(number){
  let c=number.toString().length;
  if(c==9){
    let segundos=parseInt((number%10000000)/100);
    let minutos=parseInt(segundos/60);
    let cubosNoResueltos=parseInt(number%100);
    let cubosresueltos=99-parseInt(number/10000000)+cubosNoResueltos;
    number=cubosresueltos+"/"+(cubosresueltos+cubosNoResueltos)+" "+minutos+":"+segundos%60;
  }
  if(number>80 && number<=6000 && c!=9){
    number=(number/100).toFixed(2);
  }else if(number>6000 && c!=9){
    let segundos=parseInt((number/100)%60);
    if(segundos.toString().length==1){
      segundos="0"+segundos;
    }
    let decimales=number%100;
    if(parseInt(decimales/10)==0){
      decimales="0"+decimales;
    }
    number=parseInt((number/100)/60)+":"+segundos+"."+decimales;
  }else if(number==-1){
    number="DNF";
  }else if(number==-2){
    number="DNS";
  }else if(number==0){
    number="";
  }
  return number;
}

/*Funcion Cerrar */
function cerrar_perfil_miembro(){
  mostrar_miembros();
  contenedor.classList.toggle('ocultar');
  document.getElementById('div_miembros').style.transform="translateX(100%)";
  document.getElementById('footer').classList.toggle('ocultar');
  contenedor_perfiles.classList.toggle('mostrar');
  contenedor_perfiles.innerHTML="";
}
function cerrar_vista_torneo(){
  /*torneo_conteiner.innerHTML="";
  torneo_conteiner.classList.toggle('mostrar_flex');
  conteiner_torneos.classList.toggle('ocultar');
  categorias_torneo=null;*/
  location.href=`https://www.teamcubeforce.com/torneos/`;
}


/*<TORNEOS CUBEFORCE>*/
//Funciones Video
function videos_torneo(id_torneo){
  let caja =`<div class="videos_torneo"><div class="contenedor_videos">`;
  const iTorneo=torneos.filter((element)=>{
    return element.id_torneo_wca==id_torneo;
  });
  if(iTorneo[0].videos_torneo.length>=1){
    for(u=0;u<iTorneo[0].videos_torneo.length;u++){
      caja+=`<button class="video" onclick=verVideo("${iTorneo[0].videos_torneo[u].enlace}")>
                <img src="https://img.youtube.com/vi/${iTorneo[0].videos_torneo[u].enlace_miniatura}/mqdefault.jpg" class="img_video">
                <div class="play_video"><img src="https://www.teamcubeforce.com/img/icons/play.png" width="50"></div>
              </button>`;
    }
    caja+="</div></div>";
    return caja;
  }else{
    return "";
  }
}

function verVideo(enlace_video){
  torneo_conteiner.classList.toggle('mostrar_flex');
  document.getElementById('conteiner_video').style.left="0%";
  document.getElementById('conteiner_video').innerHTML=`
  <div class="video_elegido"><iframe width="920" height="320px" src="${enlace_video}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><button onclick="cerrar_video()" class="btnCerrar">X</button>
  `;
}

function cerrar_video(){
  torneo_conteiner.classList.toggle('mostrar_flex');
  document.getElementById('conteiner_video').style.left="100%";
  document.getElementById('conteiner_video').innerHTML="";
}
//Funciones Basicas
function organizar_nombres_torneos(){
  let list_nombres_torneos="";
  for(i=0;i<torneos.length;i++){
    list_nombres_torneos+=`
    <div class="list_title_torneo">
    <div class="rayita_title" id="rayita_${torneos[i].id_torneo_wca}"></div>
    <span>${torneos[i].nombre_torneo}</span>
    <div class="fecha" id="fecha_${torneos[i].id_torneo_wca}">${torneos[i].fecha}</div>
    </div>`;
  }
  return list_nombres_torneos;
}

function organizar_torneos(year){
  let list_torneos="";
  for(u=0; u<torneos.length;u++){
    if(torneos[u].year==year){
      list_torneos+=`<div class="conteiner_foto_torneo">
      <button class="foto_torneo class_right_left" id="activate_${torneos[u].id_torneo_wca}" onclick="ir_torneo('${torneos[u].id_torneo_wca}')">
        <div class="raya_1"></div>
        <div class="raya_2"></div>
        <div class="raya_3"></div>
        <div class="raya_4"></div>
        <img src="https://www.teamcubeforce.com/img/torneos/${torneos[u].imagen}" alt="${torneos[u].nombre_torneo}_2022">
      </button></div>`;  
    }
  }
  return list_torneos;
}

function obtener_array_categoria(cat){
  const iCate=category.filter((element)=>{
    return element.id_categoria==cat;
  });
  return iCate;
}

//Funcion General para obtener Resultados
async function cargar_person(id_torneo,id_person,cat){
  let array_miembro=[];
	try {
		const respuesta = await fetch(`https://www.worldcubeassociation.org/api/v0/competitions/${id_torneo}/results/?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
		if(respuesta.status === 200){
			const datos = await respuesta.json();
      for(c=0;c<datos.length;c++){
        if(datos[c].wca_id==id_person){
          if(cat=="all_results"){
            array_miembro.push(datos[c]);
          }
          if(datos[c].event_id==cat){
            array_miembro.push(datos[c]);
          }
        }
      }
      return array_miembro;
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('Lo que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}
	} catch(error){
		console.log(error);
	}
}

//Generar Resultados Torneo
async function resultados_torneo(id_torneo,id_person,nombre_person){
  let i;
  let elemento=`<h4>${nombre_person}</h4>`;
  document.getElementById("conteiner_resultados").innerHTML=`
  <div class="pantalladecarga">
            <div class="logo">
                <img src="https://www.teamcubeforce.com/img/logoCubeForce.png" alt="logocubeforce" width="200">
            </div>
            cargando...
        </div>`;
  for(cate=0;cate<categorias_torneo.length;cate++){
    const aea3 = await cargar_person(id_torneo,id_person,categorias_torneo[cate]);
    if(aea3.length>=1){
      i=obtener_array_categoria(categorias_torneo[cate]);
      elemento+=`<h5>${i[0].nombre_categoria}</h5>`;
      elemento+=`<table class="tabla_results">
          <tr>
              <th>#</th>
              <th class="th_ronda">Ronda</th>
              <th>1</th>`;
      if(aea3[0].attempts[1]!=0){
        elemento+="<th>2</th>";
      }
      if(aea3[0].attempts[2]!=0){
        elemento+="<th>3</th>";
      }
      if(aea3[0].attempts[3]!=0){
        elemento+="<th>4</th><th>5</th>";
      }
      elemento+=`<th class="result_important">Average</th>
              <th class="result_important">Single</th>
          </tr>`;
      for(rt=0;rt<aea3.length;rt++){
        console.log(aea3[rt]);
        elemento+=`<tr><td>${aea3[rt].pos}</td>`;
          if(aea3[rt].round_type_id==1 || aea3[rt].round_type_id=="d"){
            elemento+="<td>Primera Ronda</td>";
          }else if(aea3[rt].round_type_id==2 || aea3[rt].round_type_id=="e"){
            elemento+="<td>Segunda Ronda</td>";
          }else if(aea3[rt].round_type_id==3 || aea3[rt].round_type_id=="g"){
            elemento+="<td>Tercera Ronda</td>";
          }else if(aea3[rt].round_type_id=="f" || aea3[rt].round_type_id=="c"){
            elemento+="<td>Final</td>";
          }
          for(tiempo of aea3[rt].attempts){
            if(obtenerTiempo(tiempo)!=0){
              elemento+=`<td>${obtenerTiempo(tiempo)}</td>`;
            }
          }
          elemento+=`
              <td><b>${obtenerTiempo(aea3[rt].average)}</b> <span class="record_regional">${aea3[rt].regional_average_record}</span></td>
              <td>${obtenerTiempo(aea3[rt].best)} <span class="record_regional">${aea3[rt].regional_single_record}</span></td>
          </tr>`;
      }
      elemento+=`</table>`;
    }
  }
  document.getElementById("conteiner_resultados").innerHTML=elemento;
}

//Generar Lista de Podios
async function resultados_podiums(id_torneo,id_person,cat,array_categoria){
  let elemento;
  let cont=0;
  const aea = await cargar_person(id_torneo,id_person,cat);
  elemento=document.getElementById("podios_torneo").innerHTML;
  if (aea.length>=1){
    for(rp=0;rp<aea.length;rp++){
      if(aea[rp].round_type_id=="f" || aea[rp].round_type_id=="c"){
        if(aea[rp].pos<=3 && aea[rp].average!=-1){
          console.log(aea[rp]);
          elemento +=`<div class="podio"><div class="detalles_Podio">
          <img src="https://www.teamcubeforce.com/img/categorias/${array_categoria[0].imagen}" width="50">`;
          if(aea[rp].pos==1){
            cont=parseInt(document.getElementById("medallaOro").value);
            cont+=1;
            document.getElementById("medallaOro").value=cont;
            elemento +=`
              <p>${array_categoria[0].nombre_categoria} 🥇</p>
            `;
          }
          if(aea[rp].pos==2){
            cont=parseInt(document.getElementById("medallaPlata").value);
            cont+=1;
            document.getElementById("medallaPlata").value=cont;
            elemento +=`
              <p>${array_categoria[0].nombre_categoria} 🥈</p>
            `;
          }
          if(aea[rp].pos==3){
            cont=parseInt(document.getElementById("medallaBronce").value);
            cont+=1;
            document.getElementById("medallaBronce").value=cont;
            elemento +=`
              <p>${array_categoria[0].nombre_categoria} 🥉</p>
            `;
          }
          elemento +=`<p>${aea[rp].name}</p></div>`;
          /*Aqui viene la tabla de detalles del podio*/
          elemento+=`
          <table class="tabla_podio">
          <tr>
              <th>Lugar</th>
              <th>Single</th>
              <th>Average</th>
              <th class="th_tiempos">Tiempos</th>
          </tr>
          <tr>
              <td>${aea[rp].pos}</td>
              <td>${obtenerTiempo(aea[rp].best)} <span class="record_regional">${aea[rp].regional_single_record}</span></td>
              <td>${obtenerTiempo(aea[rp].average)} <span class="record_regional">${aea[rp].regional_average_record}</span></td>
              <td>
          `;
          for(tiempo of aea[rp].attempts){
            if(obtenerTiempo(tiempo)!=0){
              elemento+=`<span>${obtenerTiempo(tiempo)}</span>`;
            }
          }
          elemento+=`</td></tr></table></div>`;
          document.getElementById("podios_torneo").innerHTML=elemento;
        }
      }
    }
  }
}

function generar_vista_podios(id_torneo, representantes){
  let i;
  for(cate=0;cate<categorias_torneo.length;cate++){
    i=obtener_array_categoria(categorias_torneo[cate]);
    for(person=0;person<representantes.length;person++){
      resultados_podiums(id_torneo,representantes[person],categorias_torneo[cate],i);
    }
  }
}

//Generar Lista de Representantes
async function resultados_persona(id_torneo,id_person){
  let elemento;
  const aea2= await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${id_person}?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
  const datos = await aea2.json();
  elemento=document.getElementById("lista_enlaces_miembros").innerHTML;
  elemento+=`<button onclick="resultados_torneo('${id_torneo}','${id_person}','${datos.person.name}')"> 
    ${datos.person.name}
  </button>`;
  console.log(id_person);
  document.getElementById("lista_enlaces_miembros").innerHTML=elemento;
}

function generar_vista_miembros(id_torneo, representantes){
    for(person=0;person<representantes.length;person++){
      resultados_persona(id_torneo,representantes[person]);
    }
}

//Location Torneo
function ir_torneo(id_torneo){
  location.href=`https://www.teamcubeforce.com/torneos/#${id_torneo}`;
  console.log(id_torneo);
  cargarCompetencia(id_torneo);
  torneo_conteiner.classList.toggle('mostrar_flex');
  conteiner_torneos.classList.toggle('ocultar');
}

//Funcion Principal
async function cargarCompetencia(id_torneo){
  let cajita=`<div class="vista_torneo" id="${id_torneo}">`;
  let delegados = ``;
  let organizadores = ``;
	try {
		const respuesta = await fetch(`https://www.worldcubeassociation.org/api/v0/competitions/${id_torneo}/?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
      for(g=0;g<datos.delegates.length;g++){
        if(g<datos.delegates.length-1){
          delegados+=datos.delegates[g].name+", ";
        }else{
          delegados+=datos.delegates[g].name+".";
        }
      }
      for(p=0;p<datos.organizers.length;p++){
        if(p<datos.organizers.length-1){
          organizadores+=datos.organizers[p].name+", ";
        }else{
          organizadores+=datos.organizers[p].name+".";
        }
      }
      const iTorneo=torneos.filter((element,index)=>{
        return element.id_torneo_wca==id_torneo;
      });
      console.log(iTorneo);
      cajita+=`
      <div class="title_torneo">
                <h2>${datos.name}</h2>
                <span>${iTorneo[0].fecha}</span>
            </div>
            <div class="logo_torneo">
                <img src="https://www.teamcubeforce.com/img/torneos/${iTorneo[0].imagen}" alt="Imagen_Logo_${iTorneo[0].id_torneo_wca}" width="100">
            </div>
            <div class="medallero" id="medallero">
                <div class="medalla oro">
                    <input type="text" class="textPuesto" id="medallaOro" value="0" disabled>
                </div>
                <div class="medalla plata">
                    <input type="text" class="textPuesto" id="medallaPlata" value="0" disabled>
                </div>
                <div class="medalla bronce">
                    <input type="text" class="textPuesto" id="medallaBronce" value="0" disabled>
                </div>
            </div>
            <div class="main_torneo">
                <div class="detalles_main_torneo">
                  <div class="detalles_torneo">
                      <h3>Detalles</h3><br>
                      <p>Pais: Perú<br>
                      Ciudad: ${datos.city}<br>
                      Direccion: ${datos.venue_address}<br>
                      Organizador: ${organizadores}<br>
                      Delegados:  ${delegados}<br>
                      Puedes ver los detalles completos <a href="${datos.url}">aqui</a><br>
                      <br>
                      </p>
                  </div>
                </div>
                ${videos_torneo(id_torneo)}
                <div class="podios_torneo" id="podios_torneo">
                    <h3>Podios</h3>
                </div>
                <div class="resultados_miembros" id="resultados_miembros">
                    <h3>Resultados</h3>
                    <div class="conteiner_miembros_resultados">
                      <div class="lista_enlaces_miembros" id="lista_enlaces_miembros"></div>
                      <div class="conteiner_resultados" id="conteiner_resultados"></div>
                    </div>
                </div>
            </div><button onclick="cerrar_vista_torneo()" class="btnCerrar">X</button>
      `;
      categorias_torneo=datos.event_ids;
      generar_vista_podios(id_torneo,iTorneo[0].representantes);
      generar_vista_miembros(id_torneo,iTorneo[0].representantes);
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('Lo que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}
	} catch(error){
		console.log(error);
	}
  torneo_conteiner.innerHTML=cajita;
}

/*</TORNEOS CUBEFORCE> */


/*<MIEMBROS CUBEFORCE>*/

/*Funciones Basicas*/
function validarTextoEntrada(input, patron) {
  var texto = input.value
  var letras = texto.split("")
  for (var x in letras) {
      var letra = letras[x]
      if (!(new RegExp(patron, "i")).test(letra)) {
          letras[x] = ""
      }
  }
  input.value = letras.join("")
}

function medallero(oro,plata,bronze){
    return `<div class="medallero_records"><h3>Medallero</h3>
    <table>
    <tr>
      <th>Oro</th>
      <th>Plata</th>
      <th>Bronce</th>
    <tr>
    <tr>
      <td>${oro}</td>
      <td>${plata}</td>
      <td>${bronze}</td>
    <tr>
    </table></div>`;
}

function hrecords(wr,cr,nr){
  return `<div class="medallero_records"><h3>Historial de Records</h3>
  <table>
  <tr>
    <th>WR</th>
    <th>CR</th>
    <th>NR</th>
  <tr>
  <tr>
    <td>${wr}</td>
    <td>${cr}</td>
    <td>${nr}</td>
  <tr>
  </table></div>`;
}

function tiempos_records(aea,id_competidor){
    let results_categorias='';
    let botones_list='<div class="botones_list_categorias">';
    let conteiner_four_categorias=`<div class="conteiner_four_categorias" id="list_Categorias${id_competidor}1">`;
    let ou=1,ou_2=1;
    let tabla_media='';
    results_categorias=`<div class="categorias_perfil">`;
    for(u=0;u<category.length;u++){
      let id_cat=category[u].id_categoria;
      if(aea[id_cat]!=undefined){
        if(aea[id_cat].average!=undefined){
          tabla_media=`<table class="media">
                  <tr><th class="bgtemp">Media</th><th>NR</th><th>CR</th><th>WR</th></tr>
                  <tr><td class="bgtemp">${obtenerTiempo(aea[id_cat].average.best)}</td><td>${aea[id_cat].average.country_rank}</td><td>${aea[id_cat].average.continent_rank}</td><td>${aea[id_cat].average.world_rank}</td></tr>
              </table>`;
        }else if(aea[id_cat].average==undefined){
          tabla_media=`<table class="media">
                  <tr><th class="bgtemp">Media</th><th>NR</th><th>CR</th><th>WR</th></tr>
                  <tr><td class="bgtemp">'---'</td><td>'---'</td><td>'---'</td><td>'---'</td></tr>
              </table>`;
        }
        conteiner_four_categorias=conteiner_four_categorias+`
        <div class="conteiner_categoria"><div class="img"><img src="https://www.teamcubeforce.com/img/categorias/${category[u].imagen}" width="50"></div>
          <div class="tables"><table class="single"><tr><th class="bgtemp">Single</th><th>NR</th><th>CR</th><th>WR</th></tr><tr><td class="bgtemp">${obtenerTiempo(aea[id_cat].single.best)}</td><td>${aea[id_cat].single.country_rank}</td><td>${aea[id_cat].single.continent_rank}</td><td>${aea[id_cat].single.world_rank}</td></tr></table>${tabla_media}</div>
        </div>`;
        if(ou%4==0){
          botones_list+=`<button onclick="mostrar_lista(${ou_2},'${id_competidor}')"><img src="https://www.teamcubeforce.com/img/logoCubeForce.png" alt="logocubeforce" width="15"></button>`;
          ou_2++;
          conteiner_four_categorias+='</div>';
          results_categorias+=conteiner_four_categorias;
          conteiner_four_categorias=`<div class="conteiner_four_categorias ocultar" id="list_Categorias${id_competidor+ou_2}">`;
        }
        ou++;
      }
    }
    if((ou-1)%4!=0){
      botones_list+=`<button onclick="mostrar_lista(${ou_2},'${id_competidor}')"><img src="https://www.teamcubeforce.com/img/logoCubeForce.png" alt="logocubeforce" width="15"></button>`;
      conteiner_four_categorias+='</div>';
      results_categorias+=conteiner_four_categorias;
    }
    botones_list+='</div>';
    results_categorias=botones_list+results_categorias+'</div>';
    return results_categorias;
    
}

function mostrar_lista(id,id_competidor){
  for(ga=1;ga<=4;ga++){
    if(ga!=id){
      try{
      if(document.getElementById(`list_Categorias${id_competidor+ga}`).classList.contains('ocultar')==false){
            document.getElementById(`list_Categorias${id_competidor+ga}`).classList.toggle('ocultar');
            }
      }catch(error){
        
      }
    
    }
  }
  if(document.getElementById(`list_Categorias${id_competidor+id}`).classList.contains('ocultar')==true){
    document.getElementById(`list_Categorias${id_competidor+id}`).classList.toggle('ocultar');
  }
}

//Funciones generales para obtener Resultados
async function cargar_person_torneo(id_torneo,id_person){
  let array_person_torneo=[];
	try {
		const respuesta = await fetch(`https://www.worldcubeassociation.org/api/v0/competitions/${id_torneo}/results/?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
		if(respuesta.status === 200){
			const datos = await respuesta.json();
      for(c=0;c<datos.length;c++){
        if(datos[c].wca_id==id_person){
          array_person_torneo.push(datos[c]);
        }
      }
      return array_person_torneo;
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('Lo que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}
	} catch(error){
		console.log(error);
	}
}

async function cargar_person_torneo_cat(conteinerperson_torneo,cat){
  let array_person_cat=[];
	try {
			const datos = await conteinerperson_torneo;
      for(c=0;c<datos.length;c++){
        if(datos[c].event_id==cat){
          array_person_cat.push(datos[c]);
        }
      }
      return array_person_cat;
	} catch(error){
		console.log(error);
	}
}

/*Funciones Desafio*/
function ganador(tiempo1, tiempo2){
  let tabla_ganador="";
  if(tiempo1>0 && tiempo2>0){
    if(tiempo1<tiempo2){
      tabla_ganador+=`
        <td class="td_ganador">${obtenerTiempo(tiempo1)}</td>
        <td>${obtenerTiempo(tiempo2)}</td>
      `
    }else if(tiempo1>tiempo2){
      tabla_ganador+=`
        <td>${obtenerTiempo(tiempo1)}</td>
        <td class="td_ganador">${obtenerTiempo(tiempo2)}</td>
      `
    }else if(tiempo1==tiempo2){
      tabla_ganador+=`
        <td class="td_ganador">${obtenerTiempo(tiempo1)}</td>
        <td class="td_ganador">${obtenerTiempo(tiempo2)}</td>
      `
    }  
  }else{
    if(tiempo1==-1 && tiempo2>0){
      tabla_ganador+=`
        <td>${obtenerTiempo(tiempo1)}</td>
        <td class="td_ganador">${obtenerTiempo(tiempo2)}</td>
      `
    }else if(tiempo2==-1 && tiempo1>0){
      tabla_ganador+=`
        <td class="td_ganador">${obtenerTiempo(tiempo1)}</td>
        <td>${obtenerTiempo(tiempo2)}</td>
      `
    }else if(tiempo1<=0 && tiempo2<=0){
      tabla_ganador+=`
        <td>${obtenerTiempo(tiempo1)}</td>
        <td>${obtenerTiempo(tiempo2)}</td>
      `
    }
  }
  
  return tabla_ganador;
}

async function torneos_desafio(id_torneo, id_miembro, id_person){
  let elemento = "";
  const resultados_miembro=await cargar_person_torneo(id_torneo,id_miembro);
  const resultados_person=await cargar_person_torneo(id_torneo,id_person);
  for(ind_cat=0;ind_cat<category.length;ind_cat++){
    if(resultados_miembro.length!=0 && resultados_person.length!=0){
      const resultados_miembro_cat = await cargar_person_torneo_cat(resultados_miembro,category[ind_cat].id_categoria);
      const resultados_person_cat = await cargar_person_torneo_cat(resultados_person,category[ind_cat].id_categoria);
      if(resultados_miembro_cat.length!=0 && resultados_person_cat.length!=0){
        console.log(resultados_miembro_cat);
        console.log(resultados_person_cat);
        elemento+=`<div class="torneo_results_vs"><h6>${category[ind_cat].nombre_categoria}</h6>`;
        for(rt=0;rt<resultados_miembro_cat.length;rt++){
          try{
          if(resultados_miembro_cat[rt].round_type_id==resultados_person_cat[rt].round_type_id){
          if(resultados_miembro_cat[rt].round_type_id==1 || resultados_miembro_cat[rt].round_type_id=="d"){
              elemento+=`<table class="tabla_results"><tr><th class="th_ronda">Primera Ronda</th></tr>`;
            }else if(resultados_miembro_cat[rt].round_type_id==2 || resultados_miembro_cat[rt].round_type_id=="e"){
              elemento+=`<table class="tabla_results"><tr><th class="th_ronda">Segunda Ronda</th></tr>`;
            }else if(resultados_miembro_cat[rt].round_type_id==3 || resultados_miembro_cat[rt].round_type_id=="g"){
              elemento+=`<table class="tabla_results"><tr><th class="th_ronda">Tercera Ronda</th></tr>`;
            }else if(resultados_miembro_cat[rt].round_type_id=="f" || resultados_miembro_cat[rt].round_type_id=="c"){
              elemento+=`<table class="tabla_results"><tr><th class="th_ronda">Final</th></tr>`;
            }
          console.log(resultados_miembro_cat[rt]);
          elemento+=`<tr><th>-_-</th><th>${resultados_miembro_cat[0].name}</th><th>${resultados_person_cat[0].name}</th></tr>`;
          elemento+=`<tr><th>Posicion</th><td>${resultados_miembro_cat[rt].pos}</td><td>${resultados_person_cat[rt].pos}</td></tr>`;
          for(tiempo=0;tiempo<=5;tiempo++){
            try{
            if(obtenerTiempo(resultados_miembro_cat[rt].attempts[tiempo])!=0 && obtenerTiempo(resultados_person_cat[rt].attempts[tiempo])!=0){
              elemento+=`<tr><th>${tiempo+1}</th>
              ${ganador(resultados_miembro_cat[rt].attempts[tiempo],resultados_person_cat[rt].attempts[tiempo])}
              </tr>`;
            }  
            }catch{
              
            }
            
          }
          elemento+=`
              <tr><th class="result_important">Average</th>
              ${ganador(resultados_miembro_cat[rt].average,resultados_person_cat[rt].average)}
              </tr>
              <tr><th class="result_important">Single</th>
              ${ganador(resultados_miembro_cat[rt].best,resultados_person_cat[rt].best)}
              </tr></table>`;
          }
          }catch{

          }
        }
        elemento+=`</div>`
      }
    }
  }
  return elemento;
}

async function confirmar(id_miembro, id_person){
  let contenedor="";
  if(id_miembro!=id_person){
    try {
      const respuesta = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${id_person}?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
      const respuesta2 = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${id_miembro}?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
      if(respuesta.status === 200 && respuesta2.status==200){
        const retador = await respuesta.json();
        const miembro = await respuesta2.json();
        console.log(retador);
        console.log(miembro);
        contenedor+=`<div class="titulo_desafio"><div class="cont_nombre"><div class="nombre">${miembro.person.name}</div><div class="caja_nombre miembro"></div></div>
        <img src="https://www.teamcubeforce.com/img/img_basicas/cont_versus.png" width="80" alt="Imagen VS CubeForce">
        <div class="cont_nombre"><div class="nombre">${retador.person.name}</div><div class="caja_nombre desafiante"></div></div></div>`;
        /*Versus de Single*/
        contenedor+=`<div class="tabla_desafio"><h5>-- Single --</h5><table>
        <tr>
          <th class="th_categoria">Categoria</th>
          <th>${miembro.person.name}</th>
          <th>${retador.person.name}</th>
        </tr>`;
        for(u=0;u<category.length;u++){
          let ind_cat=category[u].id_categoria;
          if(retador.personal_records[ind_cat]!=undefined && miembro.personal_records[ind_cat]!=undefined){
            contenedor+=`
            <tr>
              <td><img src="https://www.teamcubeforce.com/img/categorias/${category[u].imagen}" width="40" title="${category[u].nombre_categoria}" alt="${category[u].nombre_categoria}"></td>
              ${ganador(miembro.personal_records[ind_cat].single.best,retador.personal_records[ind_cat].single.best)}
            </tr>`;
          }
        }
        contenedor+=`</table></div>`;
        /*Versus de Average*/
        contenedor+=`<div class="tabla_desafio"><h5>-- Average --</h5><table>
        <tr>
          <th class="th_categoria">Categoria</th>
          <th>${miembro.person.name}</th>
          <th>${retador.person.name}</th>
        </tr>`;
        for(u=0;u<category.length;u++){
          let ind_cat=category[u].id_categoria;
          try{
            if(retador.personal_records[ind_cat]!=undefined && miembro.personal_records[ind_cat]!=undefined){
              contenedor+=`
              <tr>
                <td><img src="https://www.teamcubeforce.com/img/categorias/${category[u].imagen}" width="40" title="${category[u].nombre_categoria}" alt="${category[u].nombre_categoria}"></td>
                ${ganador(miembro.personal_records[ind_cat].average.best,retador.personal_records[ind_cat].average.best)}
              </tr>`;
            }
          }catch{

          }
        }
        contenedor+=`</table></div>`;
        /*Confrontamientos en torneos*/
        for(cont_torn=0;cont_torn<torneos.length;cont_torn++){
          const contenedor_torneo=await torneos_desafio(torneos[cont_torn].id_torneo_wca, id_miembro, id_person);
          if(contenedor_torneo!=""){
            contenedor+=`<div class="tabla_desafio torneo">
            <h5>${torneos[cont_torn].nombre_torneo}</h5>
            ${contenedor_torneo}
            </div>`;
          }
        }
        return contenedor;
      } else if(respuesta.status === 401 && respuesta2.status==401){
        console.log('Pusiste la llave mal');
      } else if(respuesta.status === 404 && respuesta2.status==404){
        console.log('Lo que buscas no existe');
        alert("WCAID Incorrecta");
        document.getElementById("desafio").innerHTML=`
        <div class="formulario_desafio">
          <input type="text" class="input_text_persona" value="${id_miembro}" disabled id="miembro_id">vs<input type="text" class="input_text_persona" maxlength="10" placeholder="ID del Retador" id="desafiante_id" autocapitalize="off" oninput="validarTextoEntrada(this, '[a-z0-9_]')">
          <button class="boton_important" onclick="desafio()">Desafiar</button>
        </div>`;
      } else {
        console.log('Hubo un error y no sabemos que paso');
        alert("WCAID Incorrecta");
        document.getElementById("desafio").innerHTML=`
        <div class="formulario_desafio">
          <input type="text" class="input_text_persona" value="${id_miembro}" disabled id="miembro_id">vs<input type="text" class="input_text_persona" maxlength="10" placeholder="ID del Retador" id="desafiante_id" autocapitalize="off" oninput="validarTextoEntrada(this, '[a-z0-9_]')">
          <button class="boton_important" onclick="desafio()">Desafiar</button>
        </div>`;
      }
    } catch(error){
      console.log(error);
    }  
  }else{
    document.getElementById("desafio").innerHTML=`
    <img src="https://www.teamcubeforce.com/img/a.jpg" width="200">
    `;
  }
}

async function desafio(){
  let miembro=document.getElementById("miembro_id").value;
  let desafiante=document.getElementById("desafiante_id").value;
  document.getElementById("desafio").innerHTML=`<div class="pantalladecarga">
    <div class="logo">
        <img src="https://www.teamcubeforce.com/img/logoCubeForce.png" alt="logocubeforce" width="200">
    </div>
    cargando...
  </div>`;
  if(desafiante.length!=0){
    const aea = await confirmar(miembro,desafiante);
    if (aea.length>=1){
      document.getElementById("desafio").innerHTML=aea;
    }
  }else{
    confirmar(miembro,"inputvacion:V");
  }
}

/*Funcion Mostrar Perfil */
async function mostrarPerfil(id_miembro,pos_foto){
  let perfiles='';
  let medallas;
  let records;
  let clases_desafio;
	try {
      const respuesta = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${id_miembro}?api_key=IkvmTG9_oWagDmPj_cHE8sEa9aUpvijFerb_P-QRssQ`);
      if(respuesta.status === 200){
        const datos = await respuesta.json();
        if(JSON.stringify(datos.medals.total)>=1){
            medallas=medallero(datos.medals.gold,datos.medals.silver,datos.medals.bronze);
        }else{
          medallas='';
        }
        if(JSON.stringify(datos.records.total)>=1){
          records=hrecords(datos.records.world,datos.records.continental,datos.records.national);
        }else{
          records='';
        }
        const iMiembro=miembros.filter((element)=>{
          return element.id_miembro==id_miembro;
        });
        if(iMiembro[0].estado=="actual_miembro"){
          clases_desafio="conteiner_desafio";
        }else if(iMiembro[0].estado=="antiguo_miembro"){
          clases_desafio="conteiner_desafio exMiembro";
        }
        perfiles=perfiles+`
        <div class="perfil" id="CF${id_miembro}">
            <div class="conteiner">
              <div class="header_perfil">
              <h2>${datos.person.name}</h2>
              <img src="https://www.teamcubeforce.com/img/miembros/${miembros[pos_foto].foto_miembro}" alt="" width=200>
              </div>
            <table>
              <tr>
                <th>Pais</th><th>Competiciones</th><th>Podios</th>
              </tr>
              <tr>
                <td>${datos.person.country.name}</td>
                <td>${JSON.stringify(datos.competition_count)}</td>
                <td>${JSON.stringify(datos.medals.total)}</td>
              </tr>
            </table> 
            ${tiempos_records(datos.personal_records,datos.person.id)}
            <div class="${clases_desafio}">
              <h3>Desafio</h3>
              <div class="desafio" id="desafio">
                <div class="formulario_desafio">
                  <input type="text" class="input_text_persona" value="${id_miembro}" disabled id="miembro_id">vs<input type="text" class="input_text_persona" maxlength="10" placeholder="ID del Retador" id="desafiante_id" autocapitalize="off" oninput="validarTextoEntrada(this, '[a-z0-9_]')">
                  <button class="boton_important" onclick="desafio()">Desafiar</button>
                </div>
              </div>
            </div>
            ${medallas}
            ${records}
            </div>
            <button onclick="cerrar_perfil_miembro()" class="btnCerrar">X</button>
        </div>
        `;
      } else if(respuesta.status === 401){
        console.log('Pusiste la llave mal');
      } else if(respuesta.status === 404){
        console.log('Lo que buscas no existe');
      } else {
        console.log('Hubo un error y no sabemos que paso');
      }
      contenedor_perfiles.innerHTML=perfiles;
	} catch(error){
		console.log(error);
	}
}

/*Location Miembro */
function ir(perfil_wcaid, pos_foto){
  location.href=`https://www.teamcubeforce.com/miembros/#CF${perfil_wcaid}`;
  mostrarPerfil(perfil_wcaid,pos_foto)
  document.getElementById('div_miembros').style.transform="translateX(0%)";
  contenedor_perfiles.classList.toggle('mostrar');
  contenedor.classList.toggle('ocultar');
  document.getElementById('footer').classList.toggle('ocultar');
}

/*Funcion Principal */
function mostrar_miembros(){
  cajita=`<div class="contenedor_miembros js-scroll scrolled">
  <h1 class="class_opacidad">Miembros | Team Cube Force</h1>
  <div class="div_contenedor_miembros">`;
  cajita2=`<div class="contenedor_miembros_antiguos js-scroll">
  <h2 class="class_opacidad">Miembros Antiguos</h2>
  <div class="div_contenedor_miembros">`;
  for(i=0;i<miembros.length;i++){
    if(miembros[i].estado=="actual_miembro"){
      cajita = cajita + `<div class="conteiner_cajita_miembro">
          <div class="cajita_miembro class_right_left">
              <div class="fotito">
              <img src="https://www.teamcubeforce.com/img/miembros/${miembros[i].foto_miembro}" alt="Miembro - ${miembros[i].nombre_miembro}">
              </div>
              <div class="nombre">
                  ${miembros[i].nombre_miembro}
              </div>
              <button class="boton_important" onclick="ir('${miembros[i].id_miembro}','${i}')">
                  Ver Perfil
              </button>
          </div></div>
          `;  
    }
  };
  for(i=0;i<miembros.length;i++){
    if(miembros[i].estado=="antiguo_miembro"){
      cajita2 = cajita2 + `<div class="conteiner_cajita_miembro">
          <div class="cajita_miembro class_left_right">
              <div class="fotito">
              <img src="https://www.teamcubeforce.com/img/miembros/${miembros[i].foto_miembro}" alt="ExMiembro - ${miembros[i].nombre_miembro}">
              </div>
              <div class="nombre">
                  ${miembros[i].nombre_miembro}
              </div>
              <button class="boton_important" onclick="ir('${miembros[i].id_miembro}','${i}')">
                  Ver Perfil
              </button>
          </div></div>
          `;  
    }
  };
  cajita+="</div></div>";
  cajita2+=`</div></div>`;
  document.getElementById('contenedor').innerHTML=cajita+cajita2;
}

/*</MIEMBROS CUBEFORCE>*/


/*Inicio*/

inicio();

function inicio(){
  if(location.href==`https://www.teamcubeforce.com/torneos/`){
    document.getElementById("list_nombres_torneos").innerHTML=organizar_nombres_torneos();
    document.getElementById("conteiner_list_torneos_2022").innerHTML=organizar_torneos("2022");
    document.getElementById("conteiner_list_torneos_2023").innerHTML=organizar_torneos("2023");
    confirmo_hay_year=true;
  }else if(location.href==`https://www.teamcubeforce.com/miembros/`){
    mostrar_miembros();
  }
  for(o=0;o<torneos.length;o++){
    if(location.href==`https://www.teamcubeforce.com/torneos/#${torneos[o].id_torneo_wca}`){
        document.getElementById("list_nombres_torneos").innerHTML=organizar_nombres_torneos();
        document.getElementById("conteiner_list_torneos_2022").innerHTML=organizar_torneos("2022");
        document.getElementById("conteiner_list_torneos_2023").innerHTML=organizar_torneos("2023");
        confirmo_hay_year=true;
        location.href=`https://www.teamcubeforce.com/torneos/#${torneos[o].id_torneo_wca}`;
        cargarCompetencia(torneos[o].id_torneo_wca);
        torneo_conteiner.classList.toggle('mostrar_flex');
        conteiner_torneos.classList.toggle('ocultar');
    }
  }
  for(i=0;i<miembros.length;i++){
      if(location.href==`https://www.teamcubeforce.com/miembros/#CF${miembros[i].id_miembro}`){
          location.href=`https://www.teamcubeforce.com/miembros/#CF${miembros[i].id_miembro}`;
          mostrarPerfil(miembros[i].id_miembro,i);
          document.getElementById('div_miembros').style.transform="translateX(0%)";
          contenedor_perfiles.classList.toggle('mostrar');
          contenedor.classList.toggle('ocultar');
          document.getElementById('footer').classList.toggle('ocultar');
      }
  }  
}

/*Scroll*/
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  if(confirmo_hay_year){
    document.getElementById("year_torneo").innerHTML="2022";
  }
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  if(confirmo_hay_year){
    document.getElementById("year_torneo").innerHTML="2023";
  }
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el,.5)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});