import {defineStore} from 'pinia';
import {ProjectStore} from '../types/typings';

const images: Record<string, string> = import.meta.glob("../assets/latest/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects =[
        {
            id:1,
            name:'IND art',
            image: images["../assets/latest/indart.jpg"],
            description:'A woodworking business specialized in producing custom wooden products, carving furniture or other items from wood.',
            tech:['Laravel', 'Bootstrap', 'jQuery', 'CustomCMS'],
            link:'http://indart.mk',
            latest:true,
        },
        {
            id:2,
            name:'AS Design',
            image:images["../assets/latest/asdesign.jpg"],
            description:'AS Design is a local, family owned and operated company specializing in design, manufacture and instalation of quality furniture.',
            tech:['Laravel', 'Bootstrap', 'jQuery'],
            link:'http://asdesign.mk',
            latest:true,
        },
        {
            id:2,
            name:'Becutan',
            image:images["../assets/latest/becutan.jpg"],
            description:'With over 250 million items sold, "Becutan" is a synonym for tradition, constant quality, trust and loyalty. Becutan is an internationally built brand.',
            tech:['Laravel', 'Bootstrap', 'jQuery', 'CustomCMS'],
            link:'https://becutan.mk',
            latest:false,
        },
    ];

    return {
        getAllProjects: projects.slice(),
        getLatestProjects: projects.filter((project)=> project.latest),
    };
})

