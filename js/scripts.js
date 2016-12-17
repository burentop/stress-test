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
