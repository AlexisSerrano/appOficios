<template>
    <Page class="page">
        <ActionBar class="action-bar" title="FGE VERACRUZ / HOME" />
    
    
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Image class="logoFge" src="~/images/logolight.png" />
            <Label class="titulo" text="LECTOR DE OFICIOS" />
            <Button class="buttonQr" text="Leer Qr de oficio" @tap="alerta" textWrap="false" />
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            alerta() {
                alert({
                    title: "Esto es una prueba",
                    message: "Probando aplicacion movil nativescript",
                    okButtonText: "Ok"
                }).then(() => {
                    this.$router.push('/oficios');
                    console.log("Alert dialog closed");
                });
            }
        },
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
