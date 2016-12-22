//declares an empty array and stores answers into this
var surveyArray = new Array

//checks which answer did the user had selected
function submitForm() {
	//selects all elements with class question1
	var checks = document.getElementsByClassName("question1")
	//selects all elements with class question2
	var selects = document.getElementsByClassName("question2")
	//selects all elements with class question3
	var radios = document.getElementsByClassName("question3")

	//stores element by  id to diplay results later
	var results = document.getElementById("results")

	//empty array for storing checkbox asnswer from user input
	var checkboxesArray = []

	//creates variables to eventually hold the users answers, 1 for each survey question
	var answer1, answer2, answer3

	//loop through all checkeboxes to find which one was selected
	for(var i = 0; i < checks.length; i++) {
			// checks if the current checkbox has been selected by the user
			if(checks[i].checked) {
					//adds the selected checkbos to array
					checkboxesArray.push(checks[i].value)
			}
			//set answer 1 variable equal to checkbox array
			console.log(checkboxesArray)
			answer1 = checkboxesArray
	}

	//stop the function if no data for question 1 
	if(answer1.length == 0) {
		// add a class to results
		results.className = "failure"
		//update the content of results
		results.textContent = "you forgot to answer question 1"
		//stops the function if no answer
		return
	}

	//confirm answer1 value
	console.log("answer 1: " + answer1)

	//loops through the select options to find user input
	for(var i = 0; i < selects.length; i++) {

			//checks which answer was selected
			if(selects[i].selected) {
					//set value of answer2 to the value in the selected item
					answer2 = selects[i].value
			}
	}

	//stops the function if no data for question 2
	if(answer2 == "") {
			//add a class of success to results
			results.className = "failure"
			//update the text contect of results
			results.textContent = "you forgot to answer question 2"
			//stop the function if no answer
			return
	}

	//confirm answer 2 value
	console.log("answer 2: " + answer2)

	//loop through radio options
	for(var i = 0; i < radios.length; i++) {
			//if the radio was selected by user do this
			if(radios[i].checked) {
					//set value of answer 3 to the value in the radio item 
					answer3 = radios[i].value
			}
	}

	//stops function if no data for question 3
	if(answer3 == undefined) {
			// add a class of success to results
			results.className = "failure"
			// updates the text content of results
			results.textContent = "you forgot to answer question 3"
			// stop function if no answer
			return
	}

	//confirm answer 3 value 
	console.log("answer 3: " + answer3)

	// create an object from user answers
	var surveyAnswers = {
			checked: answer1,
			selected: answer2,
			radio: answer3
	}

	//add a class of success to results
	results.className = "success"
	//updates the text content of results upon survey completion
	results.textContent = "thanks for completing the survey!"

	//confirm new objects existence
	console.log("current survey answers: #1 " + surveyAnswers.checked + " #2 " + surveyAnswers.selected + " #3 " + surveyAnswers.radio )

	//add surveyAnswers to answer array
	surveyArray.push(surveyAnswers)

	//check survey array to confirm new objects
	console.log(surveyArray)

	//reset form for next user
	form.reset()
	form2.reset()
	form3.reset()

}

// add event to submit button
document.getElementById("submitSurvey").addEventListener("click", submitForm, false)