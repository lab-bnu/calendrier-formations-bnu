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
import { useRoute } from 'vue-router'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin

var content;
const parsed = ref(false);
var calendarData;
const route = useRoute();

const random = Math.random()

// with proxy to avoid CORS 
Papa.parse('https://corsproxy.io/?https://raw.githubusercontent.com/lab-bnu/calendrier-formations-bnu/refs/heads/main/data/CatalogueFormations(Calendrier).csv%3Frefresh%3D' + random, {
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
            events.value = content
            parsed.value = true


        }
      })
  
const events = ref()

// TODO : make list of all tags and ability to filter on tags
console.log(route.params)


</script>

<template>
<div v-if = "parsed" v-for="event in events">
   <Event v-if = "moment(event.Date, 'DD-MM-YYYY') >= moment()" :date="event.Date" :hour="event.Horaire" :title="event.Formation" :description="event.Description" :link="event.Lien"/> 
</div>
</template>
