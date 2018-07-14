<template>
    <Page class="page">
        <ActionBar class="action-bar" title="FGE VERACRUZ / ESTADOS" />
        <!-- <WebView src="~/index.html" /> -->
    
        <FlexboxLayout flexDirection="column" justifyContent="center">
            <Image class="logoFge" src="~/images/logolight.png" />
            <ListView for="estado in estados" @itemTap="seleccionandoEstado">
                <v-template>
                    <!-- Shows the list item label in the default color and stye. -->
                    <Label class="estados" :text="estado.nombre" />
                </v-template>
            </ListView>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                estados: this.$store.state.estados
            }
        },
        methods: {
            seleccionandoEstado(event) {
                alert({
                    title: "Has seleccionado un estado",
                    message: event.item.nombre,
                    okButtonText: "Ok"
                }).then(() => {
                    return
                });
            }
        },
    }
</script>

<style>
    FlexboxLayout {
        background-color: #282828;
        color: #ffffff;
    }
    
    .estados {
        text-align: center;
        align-self: center;
    }
    
    .logoFge {
        height: 180;
        margin-bottom: 50px;
    }
</style>
