const cookieName = 'auth';

export const state = () => ({
    user: null
})
  
export const getters = {
    user(state)
    {
        return state.user
    }
}

export const mutations = {
    serUser (state, user)
    {
        state.user = user
    }
}

export const actions = {
    async nuxtServerInit(ctx)
    {
        const token = this.$cookies.get(cookieName) || null
        if(token)
        {
            this.$axios.setToken(token, 'Bearer')
            await ctx.dispatch('fetchUser')
        }
    },
    async fetchUser(ctx)
    {
        const response = await this.$axios.get('/api/user')
        ctx.commit('setUser', response.data)
        console.log('my user is ', response)
    },
    async login(state, {email, password, device_name})
    {
        return this.$axios.post('/api/get_token', {email, password, device_name}).then(response=>{
            const token = response.data
            this.$cookies.set(cookieName, token, {
                path: '/',
                maxAge: 60*60*24*7,
            })
        })
    }
}