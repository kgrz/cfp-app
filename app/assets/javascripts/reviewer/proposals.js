$(document).ready(function() {

  $.datepicker.regional[""].dateFormat = 'yy-mm-dd ';
  $.datepicker.setDefaults($.datepicker.regional['']);

  var oTable = cfpDataTable(
    '#reviewer-proposals.datatable',
    [
      'number',    // Score
      null,        // Your Score
      'number',    // Ratings
      'text',      // Title
      'text',      // Proposal Tags
      'text',      // Reviewer Tags
      null,        // Comments
      'text',      // Submitted On
      'text',      // Updated At
    ]
  );

  $("#sort_reset").click(function(){
    oTable.fnSortNeutral();
  });

  $('table input').addClass('form-control input-sm');

  $('.multiselect').multiselect({
    buttonClass: 'btn btn-default',
    buttonText: function(options, select) {
      if (options.length == 0) {
        return 'None selected <b class="caret"></b>';
      } else {
        var tagClass = 'label ';
        if ($(select).hasClass('review-tags')) {
            tagClass += 'label-success';
        } else {
            tagClass += 'label-primary';
        }
        var selected = '';
        options.each(function() {
          selected += '<span class="' + tagClass + '">' + $(this).html() + '</span> ';
        });
        return selected + '<b class="caret"></b>';
      }
    }
  });

});
