// from data.js
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
  let input = d3.select("#datetime");

  // Get the value property of the input element
  let value = input.property("value");

  // Use the form input to filter the data by data/time
  let filtered = tableData.filter(item => {
    return item.datetime === value;
    });
    
  let table = d3.select("#ufo-table");
  let tbody = table.select("tbody");
  
  // Remove old data in tbody for each search
  tbody.html("");
  filtered.forEach(item => {
    let tr = tbody.append("tr");
    tr.append("td").text(item.datetime);
    tr.append("td").text(item.city);
    tr.append("td").text(item.state);
    tr.append("td").text(item.country);
    tr.append("td").text(item.shape);
    tr.append("td").text(item.durationMinutes);
    tr.append("td").text(item.comments);
  });
});