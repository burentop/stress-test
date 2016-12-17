var findRatio = function(bad, good) {
  var badCount = bad.length;
  var goodCount = good.length;
  if (badCount / goodCount >= 2) {
    return -1;
  } else if (badCount / goodCount > 1) {
    return 0;
  } else {
    return 1;
  }
}

var pickOutput = function(score) {
  if (score === 1) {
    $("#good").show();
  } else if (score === 0) {
    $("#medium").show();
  } else {
    $("#bad").show();
  }
}

$(document).ready(function() {
  $("form#stress-survey").submit(function(event) {
    event.preventDefault();
    var badResults = [];
    var goodResults = [];
    $("input:checkbox[name=lifestyle]:checked").each(function() {
      var lifestyleSymptom = $(this).val();
      badResults.push(lifestyleSymptom);
    });
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var healthSymptom = $(this).val();
      badResults.push(healthSymptom);
    });
    $("input:checkbox[name=coping]:checked").each(function() {
      var copingItem = $(this).val();
      goodResults.push(copingItem);
    });

  });
});
