document.addEventListener('DOMContentLoaded', function(){
	
	const dateInput = document.querySelector(".date-input")
	const datepicker = document.querySelector(".datepicker")
	const datepickerDates = document.querySelectorAll(".datepicker-dates__single")

	console.log(datepickerDates	)

	dateInput.addEventListener("click", ()=> {
		datepicker.classList.toggle("open")
	})

	datepickerDates.forEach((date) => {
		date.addEventListener("click", function(){
			dateInput.value = this.innerText + '.03.' + '2025'
			datepicker.classList.remove("open")
		})
	})

})