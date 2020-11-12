function populate() {
    var select = document.getElementById("courses");

    for (code in options) {

        var opt = code + " " + options[code];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;

        select.appendChild(el);
    }
}

function generate(selected) {
    var set = new Set(selected);
    var notSelected = new Array();
    for (code in options) {
        if (!set.has(code + " " + options[code])) {
            notSelected.push(code + " " + options[code])
        }
    }

    var table_body_content = ``;
    for (var i = 0; i < notSelected.length; i++) {
        var row = `
                <tr>
                    <th scope="row">` + notSelected[i] + `</th>
                    <td>3 hrs</td>
                </tr>`
        table_body_content += row;
    }

    var tbody = document.createElement('tbody');
    tbody.innerHTML = table_body_content;

    var button_html = `
                    <div class="col text-center">
                        <button type="button" onclick="genPDF()" class="mybtn btn btn-primary">Download as PDF</button>
                    </div>`
    var pdf_button = document.createElement("div");
    pdf_button.setAttribute("class", "row");
    pdf_button.setAttribute("id", "pdf_button");
    pdf_button.innerHTML = button_html;

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    table.setAttribute("id", "course_table");

    var heading = document.createElement("div");
    heading.innerHTML = `
                <h4>` + document.getElementById("fName").value + ` ` + document.getElementById("lName").value + `</h4>
                <h4>` + document.getElementById("studentID").value + `</h4>
                <h5>General Education courses left to complete</h5>`

    table.appendChild(tbody);

    var total = document.createElement("div");
    total.setAttribute("id", "total");
    total.innerHTML = `<h6> Total hours needed: ` + notSelected.length * 3 + `/72</h6>`;

    document.getElementById("schedule").appendChild(heading);
    document.getElementById("schedule").appendChild(table);
    document.getElementById("schedule").appendChild(total);
    document.getElementById("schedule").appendChild(pdf_button);

    document.getElementById("schedule").style.display = "block";

}

function genPDF() {
    console.log("working");
    var schedule = document.getElementById("schedule");
    document.getElementById("pdf_button").style.display = "none";

    let doc = new jsPDF('p', 'pt', 'a4');

    var opt = { pagesplit: true };

    doc.addHTML(schedule, opt, function () {
        // doc.save("test.pdf");
        doc.save(document.getElementById("studentID").value + "_GENotComplete");
    });
}