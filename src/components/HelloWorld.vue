<script setup>
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import moment from 'moment'
import Papa from 'papaparse'
import {computed, ref} from 'vue'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin

var content;
const parsed = ref(false);
var calendarData;
Papa.parse('https://corsproxy.io/?https://raw.githubusercontent.com/lab-bnu/calendrier-formations-bnu/4b32b05af3607cf1e04ad32cccb6e16ba472d792/data/CatalogueFormations(Calendrier).csv', {
        header: true,
        delimiter: ",",
        download: true,
        skipEmptyLines: true,
        error: function(error, file) {
        console.log("Erreur lors du csv parse:", error, file);
      },
        complete: async function( results ){
            content = results.data
            let tab = []
            let count = 0
            for (const element of content) {
              const oneEvent = {
              id: count,
             title: element["Formation"],
             start: moment(element["Date"], 'DD-MM-YYYY').format('YYYY-MM-DD'),
             end: moment(element["Date"], 'DD-MM-YYYY').format('YYYY-MM-DD'),
              }
              tab.push(oneEvent)
            }
            count = count+1
            
            calendarData = tab
            parsed.value = true;

        }
      })
      

const calendarApp = computed(()=>
createCalendar({
  selectedDate: moment().format('YYYY-MM-DD'),
  views: [
    //createViewDay(),
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  events: calendarData
})
)

</script>
 
<template>
  <div v-if = "parsed">
    <ScheduleXCalendar :calendar-app="calendarApp" />
  </div>
</template>