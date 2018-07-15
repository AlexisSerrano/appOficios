<template>
  <Page class="page">
    <ActionBar class="action-bar" title="FGE VERACRUZ / OFICIOS">
      <NavigationButton text="Ir atras" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
        <WebView :src="token" />
    </StackLayout>

  </Page>
</template>

<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  created(){
    this.token = this.$route.params.token
  }
}
</script>
