/*Fondos*/
/*Funciones Fondo */
function colocar_fondo(id_torneo){
  document.getElementById(`rayita_${id_torneo}`).style.height="100%";
  document.getElementById(`fecha_${id_torneo}`).style.display="block";
  document.getElementById(`fecha_${id_torneo}`).style.animation="opacidad .5s backwards";
  fondo_torneo.style.backgroundSize="cover";
  fondo_torneo.style.backgroundRepeat="no-repeat";
  fondo_torneo.style.opacity=".5";
  fondo_torneo.style.animation="anim_fondo_torneos 1s";
}

function quitar_fondo(id_torneo){
  document.getElementById(`rayita_${id_torneo}`).style.height="";
  document.getElementById(`fecha_${id_torneo}`).style.display="";
  document.getElementById(`fecha_${id_torneo}`).style.animation="";
  fondo_torneo.style.backgroundImage="";
  fondo_torneo.style.backgroundSize="";
  fondo_torneo.style.backgroundPosition="";
  fondo_torneo.style.backgroundRepeat="";
  fondo_torneo.style.opacity="0";
  fondo_torneo.style.animation="";
}

document.getElementById("activate_CubeForceLima2023").addEventListener("mouseover", function(e){
  colocar_fondo("CubeForceLima2023");
  fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/cubeForceLima2023.jpg)";
  fondo_torneo.style.backgroundPosition="center";
  },false);
document.getElementById("activate_CubeForceLima2023").addEventListener("mouseout", function(e){
  quitar_fondo("CubeForceLima2023");
  },false);

document.getElementById("activate_HuancayoSummer2023").addEventListener("mouseover", function(e){
  colocar_fondo("HuancayoSummer2023");
  fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/huancayoSummer2023.jpg)";
  fondo_torneo.style.backgroundPosition="center";
  },false);
document.getElementById("activate_HuancayoSummer2023").addEventListener("mouseout", function(e){
  quitar_fondo("HuancayoSummer2023");
  },false);
  
document.getElementById("activate_SpeedcuberPeruILima2023").addEventListener("mouseover", function(e){
  colocar_fondo("SpeedcuberPeruILima2023");
  fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/speedcuberPeru1_2023.jpg)";
  fondo_torneo.style.backgroundPosition="center";
  },false);
document.getElementById("activate_SpeedcuberPeruILima2023").addEventListener("mouseout", function(e){
  quitar_fondo("SpeedcuberPeruILima2023");
  },false);

document.getElementById("activate_LimaSummer2023").addEventListener("mouseover", function(e){
    colocar_fondo("LimaSummer2023");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/limaSummer2023.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_LimaSummer2023").addEventListener("mouseout", function(e){
    quitar_fondo("LimaSummer2023");
    },false);
  
  document.getElementById("activate_TCGPowerUp2022").addEventListener("mouseover", function(e){
    colocar_fondo("TCGPowerUp2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/tcgPowerUp2022.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_TCGPowerUp2022").addEventListener("mouseout", function(e){
    quitar_fondo("TCGPowerUp2022");
    },false);
  
  document.getElementById("activate_SinDNFenelPalacio2022").addEventListener("mouseover", function(e){
    colocar_fondo("SinDNFenelPalacio2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/sinDNF2022.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_SinDNFenelPalacio2022").addEventListener("mouseout", function(e){
    quitar_fondo("SinDNFenelPalacio2022");
    },false);
  
  document.getElementById("activate_PeruNationals2022").addEventListener("mouseover", function(e){
    colocar_fondo("PeruNationals2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/peruNationals2022.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_PeruNationals2022").addEventListener("mouseout", function(e){
    quitar_fondo("PeruNationals2022");
    },false);
  
  document.getElementById("activate_RealCube2022").addEventListener("mouseover", function(e){
    colocar_fondo("RealCube2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/realCube2022.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_RealCube2022").addEventListener("mouseout", function(e){
    quitar_fondo("RealCube2022");
    },false);
  
  document.getElementById("activate_SchoolWinterLima2022").addEventListener("mouseover", function(e){
    colocar_fondo("SchoolWinterLima2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/schoolWinter2022.jpg)";
    fondo_torneo.style.backgroundPosition="center";
    },false);
  document.getElementById("activate_SchoolWinterLima2022").addEventListener("mouseout", function(e){
    quitar_fondo("SchoolWinterLima2022");
    },false);
  
  document.getElementById("activate_TCGNuevaGeneracion2022").addEventListener("mouseover", function(e){
    colocar_fondo("TCGNuevaGeneracion2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/tcgNuevaGeneracion.jpg)";
    fondo_torneo.style.backgroundPosition="center 65%";
    },false);
  document.getElementById("activate_TCGNuevaGeneracion2022").addEventListener("mouseout", function(e){
    quitar_fondo("TCGNuevaGeneracion2022");
    },false);
  
  document.getElementById("activate_LimaCuberano2022").addEventListener("mouseover", function(e){
    colocar_fondo("LimaCuberano2022");
    fondo_torneo.style.backgroundImage="url(https://www.teamcubeforce.com/img/torneos/cuberano2022.jpg)";
    fondo_torneo.style.backgroundPosition="center 50%";
    },false);
  document.getElementById("activate_LimaCuberano2022").addEventListener("mouseout", function(e){
    quitar_fondo("LimaCuberano2022");
    },false);
  