import hero from './assets/hero.jpg'
import whatWeDo from './assets/what we do.jpg'
import banner from './assets/banner2.jpg'
import person1 from './assets/person1.jpg'
import person2 from './assets/person2.jpg'

import abouthero from './assets/aboutmain.jpg'
import banner3 from './assets/banner3.jpg'
import agent1 from './assets/agent1.jpg'
import agent2 from './assets/agent2.jpg'
import agent3 from './assets/agent3.jpg'
import agent4 from './assets/agent4.jpg'

import service1 from './assets/service1.jpg'
import service2 from './assets/service2.jpg'
import service3 from './assets/service3.jpg'
import service4 from './assets/service4.jpg'

import g1 from './assets/Gallery/g1.jpg'
import g2 from './assets/Gallery/g2.jpg'
import g3 from './assets/Gallery/g3.jpg'
import g4 from './assets/Gallery/g4.jpg'
import g5 from './assets/Gallery/g5.jpg'
import g6 from './assets/Gallery/g6.jpg'

import email from './assets/email.jpg'



import { faFacebookSquare, faGooglePlusG, faSquareXTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGears, faHeadset, faCalendar, faCubes, faPeopleGroup, faChartBar, faFolderOpen, faQuoteLeft, faSliders, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'



export const navBar = [
    {
        name: 'Home',
        to: '/'
    },

    {
        name: 'About Us',
        to: '/about'
    },

    {
        name: 'Services',
        to: '/services'
    },

    {
        name: 'Gallery',
        to: '/gallery'
    },

    {
        name: 'Contact',
        to: '/contact'
    }
]

export const images = {
    hero: hero,
    whatWeDo: whatWeDo,
    banner: banner,
    abouthero: abouthero,
    banner3: banner3,
    email: email
}

export const tabs = [
    {   
        name: 'Service title',
        icon: faGears,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    },

    {   
        name: 'Service title',
        icon: faHeadset,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    },

    {   
        name: 'Service title',
        icon: faCalendar,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    },

    {   
        name: 'Service title',
        icon: faCubes,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    }
];

export const serviceTabs = [
    {   
        name: 'Service title',
        icon: faPuzzlePiece,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    },

    {   
        name: 'Service title',
        icon: faGears,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    },

    {   
        name: 'Service title',
        icon: faSliders,
        text: 'Integer sit amet mattis quam, sit amet ultricies velit...'
    }
]

export const stats = [
    {
        title: 'Happy Customers',
        number: '12k',
        icon: faPeopleGroup
    },

    {
        title: 'Completed Work',
        number: '15k',
        icon: faChartBar
    },

    {
        title: 'Total Tours',
        number: '25k',
        icon: faFolderOpen
    }
]


export const testimonials = [
    {
        icon: faQuoteLeft,
        text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod possimus, omnis voluptas.',
        image: person1,
        name: 'Karl Adrian',
        job: 'Sub Contractor'   
    },

    {
        icon: faQuoteLeft,
        text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod possimus, omnis voluptas.',
        image: person2,
        name: 'Nixon Lim',
        job: 'Web Developer'   
    }
]

export const footerIcons = [
    {
        name: 'facebook',
        icon: faFacebookSquare
    },
    
    {
        name: 'twitter',
        icon: faSquareXTwitter
    },

    {
        name: 'google',
        icon: faGooglePlusG
    },

    {
        name: 'instagram',
        icon: faInstagramSquare
    }
]

export const agents = [
    {
        name: 'Karl Adrian',
        role: 'Jungle',
        image: agent1
    },

    {
        name: 'Jhienmar Yabo',
        role: 'Mid',
        image: agent2
    },

    {
        name: 'Hazuko Ryuk',
        role: 'Bot lane',
        image: agent3
    },

    {
        name: 'Megatron',
        role: 'Support',
        image: agent4
    }
];

export const serviceGrid = [
    {
        title: 'TOURS & TRAVELS',
        image: service1,
        style: 'md:row-span-4 md:col-span-2'
    },
    
    {
        title: 'TOURS & TRAVELS',
        image: service2,
        style: 'md:col-span-2 md:row-span-2'
    },

    {
        title: 'TOURS',
        image: service3,
        style: 'md:row-span-2'
    },

    {
        title: 'TRAVELS',
        image: service4,
        style: 'md:row-span-2'
    }
]

export const gallery = [
    {
        image: g1,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g2,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g3,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g4,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g5,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g6,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g4,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    },
    {
        image: g1,
        "title": "VULPUTATER ACT",
        "preview": "Nullam dui mi, vulputater act metus dolor sit amet.",
        "article": "Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus"
    }
]