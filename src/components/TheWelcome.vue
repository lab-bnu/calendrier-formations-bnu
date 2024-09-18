<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Papa from 'papaparse'
import {computed, ref} from 'vue'
import Event from "./Event.vue"
import moment from 'moment'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin

var content;
const parsed = ref(false);
var calendarData;

// with proxy to avoid CORS 
Papa.parse('https://corsproxy.io/?https://raw.githubusercontent.com/lab-bnu/calendrier-formations-bnu/4b32b05af3607cf1e04ad32cccb6e16ba472d792/data/CatalogueFormations(Calendrier).csv', {
        header: true,
        delimiter: "",
        download: true,
        skipEmptyLines: true,
        encoding: "utf-8",
        error: function(error, file) {
        console.log("Erreur lors du csv parse:", error, file);
      },
        complete: async function( results ){
            content = results.data
            let count = 0
            
            for (const element of content) {
              element['id'] = count
              count = count+1  
            }

            content = content.sort((a, b) => moment(a.Date, 'DD-MM-YYYY') - moment(b.Date, 'DD-MM-YYYY') )
            // calendarData = content
            events.value = content
            parsed.value = true
        }
      })
      

// const events = computed(()=>
//       calendarData    
// )
const events = ref()

</script>

<template>
<div v-if = "parsed" v-for="event in events">
   <Event v-if = "moment(event.Date, 'DD-MM-YYYY') >= moment()" :date="event.Date" :hour="event.Horaire" :title="event.Formation" :description="event.Description" :link="event.Lien"/> 
</div>
</template>
