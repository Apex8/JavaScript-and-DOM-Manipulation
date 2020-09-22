// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

	tbody.html("");

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
};

populate(data);

button.on("click", () => {
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	var filterData = data.filter(data => data.datetime === inputDate);
	console.log(filterData)

	populate(filterData);
});

resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})
