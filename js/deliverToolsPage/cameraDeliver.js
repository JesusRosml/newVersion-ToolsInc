import { renderTableDelivery } from "./renderTableDeliver.js";

const deliverCodeIDs = [];
const deliverTypeTools = []; 
const deliverBrandTools = [];
const deliverModelTools = [];
const deliverStateTools = [];

export const scanCodeDeliver = ( camera, bodyTable ) => {
    console.log(camera)

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
        if(!deliverCodeIDs.includes(content)) {
            $.ajax({
                type: "POST",
                url: "server/getDataDeliver.php",
                data: { code: content },
                success: function(data){
                    //console.log("Respuesta del servidor:", data);
                    let toolInfo = JSON.parse(data);
                    
                    if(toolInfo.error){  // Verifica si la respuesta contiene un error
                        console.error(toolInfo.error, 'pipi');
                        return;
                    }
                    
                    if(toolInfo.alerta){  // Verifica si hay una alerta
                        // windowMessageScan( toolInfo.alerta );
                        alert(toolInfo.alerta)
                        return;
                    }
                    
                    deliverCodeIDs.push(content);
                    deliverTypeTools.push(toolInfo.type_tool);
                    deliverBrandTools.push(toolInfo.brand);
                    deliverModelTools.push(toolInfo.model);
                    deliverStateTools.push(toolInfo.status);
          
                    renderTableDelivery( bodyTable, deliverCodeIDs, deliverTypeTools, deliverBrandTools, deliverModelTools, deliverStateTools );
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
    deliverCodeIDs,
    deliverTypeTools, 
    deliverBrandTools,
    deliverModelTools,
    deliverStateTools,
}