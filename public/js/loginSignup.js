
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});




// Makes a new employee row on schedule
$('#newRowBtn').on('click', e => {
  $('#manager-table tr:last').after("<tr class='employee-row'></tr>");
  $('.employee-row').html("<td class='employee' placeholder='Employee Name' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>" +
  "<td class='daily-schedule' placeholder='Format: 9:30AM-5:30PM' contenteditable='true'></td>");
});