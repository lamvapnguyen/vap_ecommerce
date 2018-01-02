(function(n){n.fn.validationEngineLanguage=function(){};n.validationEngineLanguage={newLang:function(){n.validationEngineLanguage.allRules={required:{regex:"geen",alertText:"* Dit veld is verplicht",alertTextCheckboxMultiple:"* Selecteer a.u.b. een optie",alertTextCheckboxe:"* Dit selectievakje is verplicht"},requiredInFunction:{func:function(n){return n.val()=="test"?!0:!1},alertText:"* Velden moeten gelijk zijn"},minSize:{regex:"none",alertText:"* Minimaal ",alertText2:" karakters toegestaan"},maxSize:{regex:"none",alertText:"* Maximaal ",alertText2:" karakters toegestaan"},groupRequired:{regex:"none",alertText:"* Vul één van de volgende velden in"},min:{regex:"none",alertText:"* Minimale waarde is "},max:{regex:"none",alertText:"* Maximale waarde is "},past:{regex:"none",alertText:"* Datum voorafgaand aan "},future:{regex:"none",alertText:"* Datum na "},maxCheckbox:{regex:"none",alertText:"* Toegestane aantal vinkjes overschreden"},minCheckbox:{regex:"none",alertText:"* Selecteer a.u.b. ",alertText2:" opties"},equals:{regex:"none",alertText:"* Velden komen niet overeen"},creditCard:{regex:"none",alertText:"* Ongeldige credit card nummer"},phone:{regex:/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,alertText:"* Ongeldig telefoonnummer"},email:{regex:/^[a-z0-9]+[a-z0-9._%+-]*@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i,alertText:"* Ongeldig emailadres"},integer:{regex:/^[\-\+]?\d+$/,alertText:"* Ongeldig geheel getal"},number:{regex:/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,alertText:"* Ongeldig komma getal"},date:{regex:/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,alertText:"* Ongeldige datum, formaat moet DD-MM-JJJJ zijn"},ipv4:{regex:/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,alertText:"* Ongeldig IP-adres"},url:{regex:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,alertText:"* Ongeldige URL"},onlyNumberSp:{regex:/^[0-9\ ]+$/,alertText:"* Alleen cijfers"},onlyLetterSp:{regex:/^[a-zA-Z\ \']+$/,alertText:"* Alleen leestekens"},onlyLetterAccentSp:{regex:/^[a-z\u00C0-\u017F\ ]+$/i,alertText:"* Alleen leestekens"},onlyLetterNumber:{regex:/^[0-9a-zA-Z]+$/,alertText:"* Geen vreemde tekens toegestaan"},ajaxUserCall:{url:"ajaxValidateFieldUser",extraData:"name=eric",alertText:"* Deze gebruiker bestaat al",alertTextLoad:"* Bezig met valideren, even geduld aub"},ajaxNameCall:{url:"ajaxValidateFieldName",alertText:"* Deze naam bestaat al",alertTextOk:"* Deze naam is beschikbaar",alertTextLoad:"* Bezig met valideren, even geduld aub"},validate2fields:{alertText:"* Voer aub HELLO in"}}}};n.validationEngineLanguage.newLang()})(jQuery);