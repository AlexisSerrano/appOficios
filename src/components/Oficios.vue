<template>
  <Page class="page">
    <ActionBar class="action-bar" title="FGE VERACRUZ / OFICIOS">
      <NavigationButton text="Ir atras" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
        <WebView :src="url" />
    </StackLayout>

  </Page>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  created(){
    this.url = `http://sistemas.fiscaliaveracruz.gob.mx/uat/public/getOficiosApp/${this.$route.params.token}`
  }
}
</script>
