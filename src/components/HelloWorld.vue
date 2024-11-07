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
import { computed, ref } from 'vue'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin

var content;
const parsed = ref(false);
var calendarData;
const random = Math.random()
Papa.parse('https://corsproxy.io/?https://raw.githubusercontent.com/lab-bnu/calendrier-formations-bnu/refs/heads/main/data/CatalogueFormations(Calendrier).csv%3Frefresh%3D' + random, {
  header: true,
  delimiter: ",",
  download: true,
  skipEmptyLines: true,
  error: function (error, file) {
    console.log("Erreur lors du csv parse:", error, file);
  },
  complete: async function (results) {
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
    count = count + 1

    calendarData = tab
    parsed.value = true;

  }
})


const calendarApp = computed(() =>
  createCalendar({
    selectedDate: moment().format('YYYY-MM-DD'),
    views: [
      //createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: calendarData,
    locale: 'fr-FR',
    callbacks: {

      onRangeUpdate(range) {
      console.log('new calendar range start date', range.start)
      console.log('new calendar range end date', range.end)
    },
 
    /**
     * Is called when an event is updated through drag and drop
     * */
    onEventUpdate(updatedEvent) {
      console.log('onEventUpdate', updatedEvent)
    },
 
    /**
    * Is called when an event is clicked
    * */
    onEventClick(calendarEvent) {
      console.log('onEventClick', calendarEvent)
    },
 
    /**
    * Is called when clicking a date in the month grid
    * */
    onClickDate(date) {
      console.log('onClickDate', date) // e.g. 2024-01-01
    },
 
    /**
    * Is called when clicking somewhere in the time grid of a week or day view
    * */
    onClickDateTime(dateTime) {
      console.log('onClickDateTime', dateTime) // e.g. 2024-01-01 12:37
    },
 
    /**
    * Is called when selecting a day in the month agenda
    * */
    onClickAgendaDate(date) {
      const frenchDate = moment(date).format('DD/MM/YYYY')
      document.querySelector(`[data-date="${frenchDate}"]`)?.scrollIntoView({ behavior: 'smooth' })
    },


    }
  })
)

</script>

<template>
  <div v-if="parsed">
    <ScheduleXCalendar :calendar-app />
  </div>
</template>
