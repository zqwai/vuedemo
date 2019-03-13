

// 一级导航
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Product from './components/Product.vue'
import Contact from './components/Contact.vue'

// 二级导航
import ContactUs from './components/contact/ContactUs.vue'
import Message from './components/contact/Message.vue'
import MapShow from './components/contact/MapShow.vue'



export default [
    {
        path: '/', name: 'homeLink', component: Home,
    },
    {
        path: '/about', name: 'aboutLink', component: About
    },
    {
        path: '/work', name: 'workLink', component: Work
    },
    {
        path: '/product', name: 'productLink', component: Product
    },
    {
        path: '/contact', name: 'contactLink', component: Contact, children:[
            {
                path:'/contact_us',  name: 'contact_usLink', component: ContactUs,
            },
            {
                path:'/message',  name: 'messageLink', component: Message,
            },
            {
                path:'/map',  name: 'mapLink', component: MapShow,
            },
        ]
    },
    {
        path: '*', redirect: '/'
    }
]
