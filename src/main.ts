import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import injectElementPlus from './element-plus';
const app=createApp(App);
// injectElementPlus(app);
app.use(store).use(router).mount('#app');