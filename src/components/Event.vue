<template>
    <div class="event" :data-date="date">
     <!-- <div class="event" :data-date="date" :data-id="id"> -->

   <WelcomeItem>
        <template #icon>
            <DocumentationIcon/>
        </template>
        <template #heading> {{date}}, {{hour}} -- {{title}}  </template>
        {{description}}
        <br/>
        <a v-if = "link != '' " :href= "link" target="_blank" rel="noopener"> Inscription ici </a>
        <a v-else>Entrée Libre </a>
    </WelcomeItem> 

    <!-- <style >
        /* body:has([data-event-id="{{ id }}"]:hover) [data-id="0"] {
            background: #21005e12;
        } */
    </style> -->
    
    </div> 
</template>


<script setup>


import { defineProps, onMounted } from 'vue';
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

const props = defineProps({

    title: String, 
    description: String,
    date: String,
    link: String,
    hour: String,
    // id: Number
}
);

// onMounted(() => addStyle(props.id))

// const addStyle = id => {
//     document.head.appendChild(document.createElement('style')).textContent = `
//     body:has([data-event-id="${id}"]:hover) [data-id="${id}"] {
//     text-shadow: #21005e 0px 0px 1px;

//     }
//     `
// }

// const addStyle = id => {
//     document.head.appendChild(document.createElement('style')).textContent = `
//     body:has([data-event-id="${id}"]:hover) [data-id="${id}"] {
//         background: #21005e12;
//     }
//     `
// }


</script>

<!-- defined a non scoped style that uses the id variable -->

<!-- <style>
body:has([data-event-id="0"]:hover) [data-id="0"] {
    text-shadow: #21005e 0px 0px 5px;
}
</style> -->

<style scoped>

.event:hover {
    background-color: #e9deff0d;
    border-radius: 5px;
}

</style>



