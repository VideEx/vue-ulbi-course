import { createApp } from 'vue'
import App from"./App"
import components  from '@/components/UI';
import router from "@/router/router";
import directives from "@/directives";
import store from "@/store";
// import Vintersection from "@/directives/Vintersection";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})
// app.directive('intersection', Vintersection)

app
    .use(router)
    .use(store)
    .mount('#app')
