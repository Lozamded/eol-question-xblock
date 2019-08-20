function EolQuestionStudioXBlock(runtime, element) {

    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
  
    $(element).find('.save-button').bind('click', function(e) {
      var form_data = new FormData();
      var type = $(element).find('select[name=type]').val();
      var index = Math.floor( $(element).find('input[name=index]').val());
      var text = $(element).find('input[name=text]').val();
      text = text ? text : 'Enunciado no especificado';
      form_data.append('type', type);
      form_data.append('index', index);
      form_data.append('text', text);
      runtime.notify('save', {state: 'start'});
  
      $.ajax({
        url: handlerUrl,
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: "POST",
        success: function(response){
          runtime.notify('save', {state: 'end'});
        }
      });
      e.preventDefault();
  
    });
  
    $(element).find('.cancel-button').bind('click', function() {
      runtime.notify('cancel', {});
    });
  
  }
  