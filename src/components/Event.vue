<template>
     <div class="event">
   <WelcomeItem>
        <template #icon>
            <DocumentationIcon/>
        </template>
        <template #heading> {{date}}, {{hour}} -- {{title}}  </template>
        {{description}}
        <br/>
        <a v-if = "link != '' " :href= "link" target="_blank" rel="noopener"> Inscription ici </a>
        <a v-if = "link == '' " >Entrée Libre </a>
    </WelcomeItem> 
    
    </div> 
</template>


<script setup>


import { defineProps } from 'vue';
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

const props = defineProps({

    title: String, 
    description: String,
    date: String,
    link: String,
    hour: String
}
);



</script>



