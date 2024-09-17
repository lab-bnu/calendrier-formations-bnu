<template>
     <div class="event">
   <WelcomeItem>
        <template #icon>
            <DocumentationIcon/>
        </template>
        <template #heading> {{title}}  </template>
        {{description}}
        <br/>
        <a :href= "link" target="_blank" rel="noopener"> Inscription ici </a>
    </WelcomeItem> 
    {{date}}
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
    link: String
}
);



</script>



