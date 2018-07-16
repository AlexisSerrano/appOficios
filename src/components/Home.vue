<template>
    <Page class="page">
        <ActionBar class="action-bar" title="FGE VERACRUZ" />
    
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Image class="logoFge" src="~/images/logolight.png" />
            <Label class="titulo" text="LECTOR DE OFICIOS" />
            <Button class="buttonQr" text="Leer Qr de oficio" @tap="scanBarcode" textWrap="false" />
        </FlexboxLayout>
    
    </Page>
</template>

<script>
    import {
        TNSFancyAlert,
        TNSFancyAlertButton
    } from 'nativescript-fancyalert';
    
    import {
        BarcodeScanner
    } from "nativescript-barcodescanner";
    let barcodescanner = new BarcodeScanner();
    export default {
        data() {
            return {
                token:''
            }
        },
        methods: {
            scanBarcode() {
                this.token=''
                var self = this
                barcodescanner.scan({
                    formats: "QR_CODE",
                    message: "Use los botones de volumen para activar o desactivar la linterna",
                    closeCallback: function() {
                        console.log("closed scann")
                    },
                    resultDisplayDuration: 0,
                    orientation: "landscape", // Android only, optionally lock the orientation to either "portrait" or "landscape"
                    openSettingsIfPermissionWasPreviouslyDenied: true
                }).then(
                    function(result) {
                        self.token = result.text
                        setTimeout(function() {
                            TNSFancyAlert.showSuccess('Qr Correcto', 'Se ha leido el código QR éxitosamente.', 'Ver oficio').then(() => {
                                self.$router.push({
                                    name: 'oficios',
                                    params: {
                                        token: self.token
                                    }
                                })
                            })
                        }, 1000);
                    },
                    function(error) {
                        console.log(self.token)
                        if (self.token == '') {
                            setTimeout(function() {
                                TNSFancyAlert.showInfo('Intentalo de nuevo ', 'No se ha leido ningun codigo QR.', 'Entendido').then(() => {
                                    return
                                })
                            }, 1000);
                        } else {
                            setTimeout(function() {
                                TNSFancyAlert.showError('Algo salio mal', 'Hubo un error al leer el código QR o es incorrecto.', 'Entendido').then(() => {
                                    return
                                })
                            }, 1000)
                        }
                        console.log("No scan: " + error);
                    }
                )
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
</style>
