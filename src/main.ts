// FILE: main.js

import { createApp } from "vue"
import { Quasar } from "quasar"

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css"

// Import Quasar css
import "quasar/src/css/index.sass"

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue"

import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

import { Calendar } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"

const app = createApp(App)

app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
})

app.component("Datepicker", Datepicker)
document.addEventListener("DOMContentLoaded", function () {
	let calendarEl: HTMLElement = document.getElementById("calendar")!

	let calendar = new Calendar(calendarEl, {
		plugins: [dayGridPlugin],
		// options here
	})

	calendar.render()
})
// Assumes you have a <div id="app"></div> in your index.html
app.mount("#app")
