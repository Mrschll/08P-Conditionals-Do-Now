$("button").click(function() {
    let response = $("input").val();
    console.log(response);
    if (response === "Revenge of the Sith") {
        $("p").text("You have great taste!");
    } else if(response !== "Revenge of the Sith") {
        $("p").text("I'm sorry but if you didn't say Revenge of the Sith then you're wrong... I don't make the rules.");
    }
});