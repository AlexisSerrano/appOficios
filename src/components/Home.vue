<template>
    <Page class="page">
        <ActionBar class="action-bar" title="FGE VERACRUZ / HOME" />
    
    
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Image class="logoFge" src="~/images/logolight.png" />
            <Label class="titulo" text="LECTOR DE OFICIOS" />
            <Button class="buttonQr" text="Leer Qr de oficio" @tap="scanBarcode" textWrap="false" />
            <Button class="buttonQr" text="Cargar Estados" @tap="getEstados" textWrap="false" />
            <Label textWrap="true" v-if="qrr!=''" class="verifiedQr" :text="mensajeQr" />
        </FlexboxLayout>
    </Page>
</template>

<script>
    import axios from "axios";
    import {
        BarcodeScanner
    } from "nativescript-barcodescanner";
    let barcodescanner = new BarcodeScanner();
    export default {
        data() {
            return {
                qr: '',
                mensajeQr:'',
                estados: ''
            }
        },
        methods: {
            alerta() {
                alert({
                    title: "Esto es una prueba",
                    message: "Probando aplicacion movil nativescript",
                    okButtonText: "Ok"
                }).then(() => {
                    this.$router.push('/oficios');
                });
            },
            scanBarcode() {
                var self = this
                barcodescanner.scan({
                    formats: "QR_CODE,PDF_417", // Pass in of you want to restrict scanning to certain types
                    cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
                    cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                    showFlipCameraButton: false, // default false
                    preferFrontCamera: false, // default false
                    showTorchButton: true, // default false
                    beepOnScan: true, // Play or Suppress beep on scan (default true)
                    torchOn: false, // launch with the flashlight on (default false)
                    closeCallback: function() {
                        self.qr = 1
                        self.mensajeQr = "No se ha leido ningun qr"
                        console.log("Scanner closed");
                    }, // invoked when the scanner was closed (success or abort)
                    resultDisplayDuration: 500, // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                    orientation: "landscape", // Android only, optionally lock the orientation to either "portrait" or "landscape"
                    openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
                }).then(
                    function(result) {
                        console.log("Scan format: " + result.format);
                        console.log("Scan text:   " + result.text);
                        self.qr = result.text
                        self.mensajeQr = "Se ha leido el codigo qr éxitosamente " + self.qr
                    },
                    function(error) {
                        self.mensajeQr = "Hubo un error al leer el qr"
                        console.log("No scan: " + error);
                    }
                );
            },
            getEstados() {
                axios.get('http://sistemas.fiscaliaveracruz.gob.mx/componentes/public/api/getEstados')
                    .then((response) => {
                        console.log(response.data)
                        this.$store.commit('asignarEstados',response.data)
                        this.$router.push('/estados');
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>


<style scoped>
    .logoFge {
        height: 130;
    }
    
    FlexboxLayout {
        background-color: #282828;
        color: #ffffff;
    }
    
    .titulo {
        text-align: center;
        font-weight: bold;
        font-size: 19px;
        letter-spacing: .11px;
        border-bottom-width: 2;
        border-color: #ffffff;
        align-self: center;
        height: 30;
        margin-top: 4;
        margin-bottom: 10;
    }
    
    .buttonQr {
        color: #282828;
        align-self: center;
        font-size: 18px;
    }
    
    .verifiedQr {
        text-align: center;
        align-self: center;
    }
</style>
