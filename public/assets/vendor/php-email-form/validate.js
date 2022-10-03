/**
* PHP Email Form Validation - v2.3
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
!(function($) {
  "use strict";
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
  };

  $('form.php-email-form').submit(function(e) {
    e.preventDefault();
    
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if(f.length === 0) f = $(this);

    f.children('input').each(function() { // run all inputs
     
      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.siblings('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');
    var isNotifyForm = this_form.attr('data-notify-form');

    if( ! action && !isNotifyForm ) {
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html('The form action property is not set!');
      return false;
    }
    
    this_form.find('.sent-message').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.loading').slideDown();

    if ( $(this).data('recaptcha-site-key') ) {
      // var recaptcha_site_key = $(this).data('recaptcha-site-key');
      // grecaptcha.ready(function() {
      //   grecaptcha.execute(recaptcha_site_key, {action: 'php_email_form_submit'}).then(function(token) {
      //     php_email_form_submit(this_form,action,this_form.serialize() + '&recaptcha-response=' + token);
      //   });
      // });
    } else {
      php_email_form_submit(this_form,action,this_form.serializeObject(), isNotifyForm);
    }
    
    return true;
  });

  function php_email_form_submit(this_form, action, data, isNotifyForm) {
    var submitBtn = this_form.find("button[type=submit]");
    if (submitBtn.length === 0) submitBtn = this_form.find("input[type=submit]")
    var originalVal = submitBtn.text();
    if(isNotifyForm) submitBtn.text('Loading')
    console.log(submitBtn);
    submitBtn.attr("disabled", "");
    console.log(data, isNotifyForm)
    $.ajax({
      type: "POST",
      url: action,
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      timeout: 40000
    }).done( function(msg){
      msg = msg.status;
      // -------------- Change to message to look out for
      var successMsg = "success";
      if (msg.trim() == successMsg) {
        if(isNotifyForm) submitBtn.text('Done')
        this_form.find('.loading').slideUp();
        this_form.find('.sent-message').slideDown();
        this_form.find("input:not(input[type=submit]), textarea").val('');
        setTimeout(function(){
          this_form.find('.sent-message').slideUp();
          if(isNotifyForm) submitBtn.text(originalVal)
          submitBtn.removeAttr("disabled");
        }, 3000)
      } else {
        if(isNotifyForm) submitBtn.text(originalVal)
        submitBtn.removeAttr("disabled");
        this_form.find('.loading').slideUp();
        if(!msg) {
          msg = 'Form submission failed and no error message returned from: ' + action + ' ';
        }
        this_form.find('.error-message').slideDown().html(msg);
      }
    }).fail( function(data){
      var submitBtn = this_form.find("button[type=submit]");
      if (submitBtn.length === 0) submitBtn = this_form.find("input[type=submit]")
      console.log(data);
      var error_msg = "Form submission failed! ";
      if(data.statusText || data.status) {
        error_msg += 'Status:';
        if(data.statusText) {
          error_msg += ' ' + data.statusText;
        }
        if(data.status) {
          error_msg += ' ' + data.status;
        }
        error_msg += ' ';
      }
      if(data.responseText) {
        error_msg += data.responseText;
      }
      submitBtn.removeAttr("disabled");
      if(isNotifyForm) submitBtn.text('Notify Me!')
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html(error_msg);
    });
  }

})(jQuery);
