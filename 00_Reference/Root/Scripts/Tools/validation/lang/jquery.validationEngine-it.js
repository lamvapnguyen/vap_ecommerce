(function(n){n.fn.validationEngineLanguage=function(){};n.validationEngineLanguage={newLang:function(){n.validationEngineLanguage.allRules={required:{regex:"none",alertText:"* Campo richiesto",alertTextCheckboxMultiple:"* Per favore selezionare un'opzione",alertTextCheckboxe:"* E' richiesta la selezione della casella",alertTextDateRange:"* Sono richiesti entrambi gli intervalli temporali"},requiredInFunction:{func:function(n){return n.val()=="test"?!0:!1},alertText:"* Il campo deve avere valore 'test'"},dateRange:{regex:"none",alertText:"* Intervallo ",alertText2:"non valido"},dateTimeRange:{regex:"none",alertText:"* Intervallo ",alertText2:"non valido"},minSize:{regex:"none",alertText:"* E' richiesto un minimo di ",alertText2:" caratteri"},maxSize:{regex:"none",alertText:"* E' richiesto un massimo di ",alertText2:" caratteri"},groupRequired:{regex:"none",alertText:"* Uno dei seguenti campi deve essere selezionato",alertTextCheckboxMultiple:"* Selezionare una opzione",alertTextCheckboxe:"* Segno di spunta richiesto"},min:{regex:"none",alertText:"* Il valore minimo accettato è "},max:{regex:"none",alertText:"* Il valore massimo accettato è "},past:{regex:"none",alertText:"* Data antecedente al "},future:{regex:"none",alertText:"* Data successiva al "},maxCheckbox:{regex:"none",alertText:"* Massimo ",alertText2:" opzioni consentite"},minCheckbox:{regex:"none",alertText:"* Selezionare almeno ",alertText2:" opzioni"},equals:{regex:"none",alertText:"* I campi non corrispondono"},creditCard:{regex:"none",alertText:"* Numero di carta di credito non valido"},phone:{regex:/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,alertText:"* Numero di telefono non corretto"},email:{regex:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,alertText:"* Indirizzo non corretto"},fullname:{regex:/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,alertText:"* Nome e cognome richiesti"},zip:{regex:/^\d{5}$|^\d{5}-\d{4}$/,alertText:"* Formato zip non valido"},integer:{regex:/^[\-\+]?\d+$/,alertText:"* Richiesto un numero intero"},number:{regex:/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,alertText:"* Richiesto un numero decimale"},date:{func:function(n){var e=new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/),t=e.exec(n.val());if(t==null)return!1;var r=t[1],u=t[2]*1,f=t[3]*1,i=new Date(r,u-1,f);return i.getFullYear()==r&&i.getMonth()==u-1&&i.getDate()==f},alertText:"* Data non corretta, è richeisto il formato AAAA-MM-GG"},ipv4:{regex:/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,alertText:"* IP non corretto"},url:{regex:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,alertText:"* URL non corretta"},onlyNumberSp:{regex:/^[0-9\ ]+$/,alertText:"* Solo numeri"},onlyLetterSp:{regex:/^[a-zA-Z\ \']+$/,alertText:"* Solo lettere"},onlyLetterAccentSp:{regex:/^[a-z\u00C0-\u017F\ ]+$/i,alertText:"* Solo lettere (è possibile inserire lettere accentate)"},onlyLetterNumber:{regex:/^[0-9a-zA-Z]+$/,alertText:"* Non è possibile inserire caratteri speciali"},ajaxUserCall:{url:"ajaxValidateFieldUser",extraData:"name=eric",alertText:"* Questo nome utente è già stato registrato",alertTextLoad:"* Caricamento in corso, attendere prego"},ajaxUserCallPhp:{url:"phpajax/ajaxValidateFieldUser.php",extraData:"name=eric",alertTextOk:"* Questo nome utente è disponibile",alertText:"* Questo nome utente è già stato registrato",alertTextLoad:"* Caricamento in corso, attendere prego"},ajaxNameCall:{url:"ajaxValidateFieldName",alertText:"* Questo nome utente è già stato registrato",alertTextOk:"* Questo nome utente è disponibile",alertTextLoad:"* Caricamento in corso, attendere prego"},ajaxNameCallPhp:{url:"phpajax/ajaxValidateFieldName.php",alertText:"* Questo nome utente è già stato registrato",alertTextLoad:"* Caricamento in corso, attendere prego"},validate2fields:{alertText:"* Prego inserire 'HELLO'"},dateFormat:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,alertText:"* Data non valida"},dateTimeFormat:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,alertText:"* Data o formato non validi",alertText2:"Formato richiesto: ",alertText3:"mm/gg/aaaa oo:mm:ss AM|PM oppure ",alertText4:"aaaa-mm-gg oo:mm:ss AM|PM"}}}};n.validationEngineLanguage.newLang()})(jQuery);