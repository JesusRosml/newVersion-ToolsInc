import { windowMessageScan } from "./messageAlert.js";
import { renderTableInformation } from "./renderTable.js";

const codeIDs = [];
const typeTools = []; 
const brandTools = [];
const modelTools = [];
const stateTools = [];

export const scanCodeCamera = ( camera, bodyTable ) => {

    let scanner = new Instascan.Scanner({
        video: camera,
        mirror: false,
        backgroundScan: false,
        captureImage: false,
        scanPeriod: 1,
        videoConstraints: {
            width: { ideal: 256 },
            height: { ideal: 144 },
            facingMode: "environment"
        }
    });

    scanner.addListener("scan", (content)=> {
        if(!codeIDs.includes(content)) {
            $.ajax({
                type: "POST",
                url: "server/getData.php",
                data: { code: content },
                success: function(data){
                    //console.log("Respuesta del servidor:", data);
                    let toolInfo = JSON.parse(data);
                    
                    if(toolInfo.error){  // Verifica si la respuesta contiene un error
                        console.error(toolInfo.error, 'pipi');
                        return;
                    }
                    
                    if(toolInfo.alerta){  // Verifica si hay una alerta
                        windowMessageScan( toolInfo.alerta );
                        return;
                    }
                    
                    codeIDs.push(content);
                    typeTools.push(toolInfo.type_tool);
                    brandTools.push(toolInfo.brand);
                    modelTools.push(toolInfo.model);
                    stateTools.push(toolInfo.status);
          
                    renderTableInformation( bodyTable, codeIDs, typeTools, brandTools, modelTools, stateTools );
                },  
                error: function(error){console.error("Error al recuperar información del código QR: ", error);
                }
            });
        };
    });

    Instascan.Camera.getCameras()
    .then(function (cameras) {
        if (cameras.length > 0) {
        scanner.start(cameras[0]);
        } else {
        console.error("La camara no funciona");
        }
    })
    .catch(function (e) {
        console.error(e);
    });
}

export default {
    codeIDs,
    typeTools,
    brandTools,
    modelTools,
    stateTools,
}