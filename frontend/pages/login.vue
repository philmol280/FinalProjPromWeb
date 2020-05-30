<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="log">
                Войти
            </v-btn>
        </v-card>
        <div v-if="errors">
            wrong creds
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login: "",
            password: "",
            errors: null
        }
    },
    methods: {
        log(){
            this.$store.dispatch('login', {email: this.email, password: this.password, device_name: 'browser'}).then(r=>{
                document.location = '/'
                console.log('pushing to /')
            }).catch(err=>this.errors = 'error')
        }
    }
}
</script>