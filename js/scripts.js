$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      const valueOne = $("#thing1").val();
      const valueTwo = $("#thing2").val();
      const valueThree = $("#thing3").val();

      const newArray = [valueOne, valueTwo, valueThree];
      const newArray2 = [];
      newArray2.push(newArray[1]);
      newArray2.push(newArray[0]);
      newArray2.push(newArray[2]);
      
      let list = $("<ul></ul>");
      list.append($("<li>" + newArray2[0] + "</li>"));
      list.append($("<li>" + newArray2[1] + "</li>"));
      list.append($("<li>" + newArray2[2] + "</li>"));
      
      $("#fav-list").text("");
      $("#fav-list").append(list);
    });
  });