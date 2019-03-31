export class AppConstants {
    public static CONTACT_SERVER_BASE_URL: string = 'http://localhost:3000';

    public static modalAddDisply: boolean = false;
    public static modalViewDisplay: Number = 0;
    /**
    * @exports printData function
    * @desc function to print data on the page
    * @param x - localJSON object
    */
    public static printData(x) {
        x.sort((a, b) => {
            return a.FirstName.toUpperCase() <= b.FirstName.toUpperCase() ? -1 : 1;
        })
        var pos = 0, currentchar = "A";
        for (var i = 0; i < x.length; i++) {
            const row = document.createElement("li");
            /**
            * @desc The below if loop is to set the id of li
            */
            if (currentchar == x[i].FirstName.charAt(0).toUpperCase()) {
                pos++;
            } else {
                currentchar = x[i].FirstName.charAt(0).toUpperCase();
                pos = 1;
            }
            row.id = currentchar + pos;
            const rowLabel = document.createElement("div");
            rowLabel.innerHTML = x[i].FirstName + " " + x[i].LastName;
            rowLabel.id = x[i]._id;
            row.append(rowLabel);
            document.getElementById("list").append(row);
        }
    }
}