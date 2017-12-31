(function(n){n.fn.validationEngine=function(t){if(n.validationEngineLanguage?allRules=n.validationEngineLanguage.allRules:n.validationEngine.debug("Validation engine rules are not loaded check your external file"),t=jQuery.extend({allrules:allRules,validationEventTriggers:"blur",inlineValidation:!0,returnIsValid:!1,animateSubmit:!0,unbindEngine:!0,ajaxSubmit:!1,promptPosition:"topRight",success:!1,checking:!1,failure:function(){}},t),n.validationEngine.settings=t,n.validationEngine.ajaxValidArray=[],t.inlineValidation==!0){t.returnIsValid||(allowReturnIsvalid=!1,n(this).find("[class*=validate]").not("[type=checkbox],[type=text],[type=password],select").bind(t.validationEventTriggers,function(){i(this)}).end().filter("[type=checkbox]").bind("click",function(){i(this)}).end().filter("[type=text],[type=password],select").bind("change",function(){i(this)}),firstvalid=!1);function i(i){n.validationEngine.settings=t;n.validationEngine.intercept!=!1&&n.validationEngine.intercept?n.validationEngine.intercept=!1:(n.validationEngine.onSubmitValid=!1,n.validationEngine.loadValidation(i))}}if(t.returnIsValid)return n.validationEngine.submitValidation(this,t)?!1:!0;n(this).bind("submit",function(){if(n.validationEngine.onSubmitValid=!0,n.validationEngine.settings=t,n.validationEngine.submitValidation(this,t)==!1){if(n.validationEngine.submitForm(this,t)==!0)return!1}else return t.failure&&t.failure(),!1})};n.validationEngine={defaultSetting:function(){n.validationEngineLanguage?allRules=n.validationEngineLanguage.allRules:n.validationEngine.debug("Validation engine rules are not loaded check your external file");settings={allrules:allRules,validationEventTriggers:"blur",inlineValidation:!0,returnIsValid:!1,animateSubmit:!0,unbindEngine:!0,ajaxSubmit:!1,promptPosition:"topRight",success:!1,checking:!1,failure:function(){}};n.validationEngine.settings=settings},loadValidation:function(t){n.validationEngine.settings||n.validationEngine.defaultSetting();rulesParsing=n(t).attr("class");rulesRegExp=/\[(.*)\]/;getRules=rulesRegExp.exec(rulesParsing);str=getRules[1];pattern=/\W+/;result=str.split(pattern);return n.validationEngine.validateCall(t,result)},validateCall:function(t,r){function o(){n("input[name='"+f+"']").size()>1&&(callerType=="radio"||callerType=="checkbox")&&(t=n("input[name='"+f+"'][type!=hidden]:first"),n.validationEngine.showTriangle=!1)}function s(t,r){callerType=n(t).attr("type");(callerType=="text"||callerType=="password"||callerType=="textarea")&&(n(t).val()||(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules[r[i]].alertText+"<br />"));(callerType=="radio"||callerType=="checkbox")&&(f=n(t).attr("name"),n("input[name='"+f+"']:checked").size()==0&&(n.validationEngine.isError=!0,u+=n("input[name='"+f+"']").size()==1?n.validationEngine.settings.allrules[r[i]].alertTextCheckboxe+"<br />":n.validationEngine.settings.allrules[r[i]].alertTextCheckboxMultiple+"<br />"));callerType=="select-one"&&(n(t).val()||(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules[r[i]].alertText+"<br />"));callerType=="select-multiple"&&(n(t).find("option:selected").val()||(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules[r[i]].alertText+"<br />"))}function h(t,i,r){customRule=i[r+1];pattern=eval(n.validationEngine.settings.allrules[customRule].regex);pattern.test(n(t).attr("value"))||(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules[customRule].alertText+"<br />")}function c(t,i,r){customAjaxRule=i[r+1];fieldValue=n(t).val();ajaxCaller=t;fieldId=n(t).attr("id");ajaxValidate=!0;ajaxisError=n.validationEngine.isError;ajaxisError||fieldValue==""||fieldValue==null||(n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad&&(n("div."+fieldId+"formError")[0]?n.validationEngine.updatePromptText(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad,"load"):n.validationEngine.buildPrompt(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad,"load")),window[customAjaxRule](t,function(t){t?(n.validationEngine.ajaxValid=!0,n.validationEngine.settings.allrules[customAjaxRule].alertTextOk?(n.validationEngine.updatePromptText(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextOk,"pass",!0),ajaxValidate=!1,n.validationEngine.closePrompt(ajaxCaller)):(n.validationEngine.updatePromptText(ajaxCaller,"","pass",!0),ajaxValidate=!1,n.validationEngine.closePrompt(ajaxCaller)),n.validationEngine.settings.checking&&n.validationEngine.settings.checking(ajaxCaller,!0&&n.validationEngine.ajaxValid)):(n.validationEngine.ajaxValid=!1,u+=n.validationEngine.settings.allrules[customAjaxRule].alertText+"<br />",n.validationEngine.updatePromptText(ajaxCaller,u,"",!0),n.validationEngine.settings.checking&&n.validationEngine.settings.checking(ajaxCaller,!0&&n.validationEngine.ajaxValid))}))}function l(t,i,r){if(customAjaxRule=i[r+1],postfile=n.validationEngine.settings.allrules[customAjaxRule].file,fieldValue=n(t).val(),ajaxCaller=t,fieldId=n(t).attr("id"),ajaxValidate=!0,ajaxisError=n.validationEngine.isError,extraData=n.validationEngine.settings.allrules[customAjaxRule].extraData?"":n.validationEngine.settings.allrules[customAjaxRule].extraData,!ajaxisError){if(fieldId=n(t).attr("id"),n("div."+fieldId+"formError")[0])n.validationEngine.updatePromptText(t,"* Loading, please wait","load");else return n.validationEngine.buildPrompt(t,"* Loading, please wait","load");n.ajax({type:"POST",url:postfile,async:!0,data:"validateValue="+fieldValue+"&validateId="+fieldId+"&validateError="+customAjaxRule+extraData,beforeSend:function(){if(n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad)if(n("div."+fieldId+"formError")[0])n.validationEngine.updatePromptText(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad,"load");else return n.validationEngine.buildPrompt(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextLoad,"load")},error:function(){},success:function(t){function i(t){for(x=0;x<ajaxErrorLength;x++)n.validationEngine.ajaxValidArray[x][0]==fieldId&&(n.validationEngine.ajaxValidArray[x][1]=t,existInarray=!0)}t=eval("("+t+")");ajaxisError=t.jsonValidateReturn[2];customAjaxRule=t.jsonValidateReturn[1];ajaxCaller=n("#"+t.jsonValidateReturn[0])[0];fieldId=ajaxCaller;ajaxErrorLength=n.validationEngine.ajaxValidArray.length;existInarray=!1;ajaxisError=="false"?(i(!1),existInarray||(n.validationEngine.ajaxValidArray[ajaxErrorLength]=new Array(2),n.validationEngine.ajaxValidArray[ajaxErrorLength][0]=fieldId,n.validationEngine.ajaxValidArray[ajaxErrorLength][1]=!1,existInarray=!1),n.validationEngine.ajaxValid=!1,u+=n.validationEngine.settings.allrules[customAjaxRule].alertText+"<br />",n.validationEngine.updatePromptText(ajaxCaller,u,"",!0)):(i(!0),n.validationEngine.ajaxValid=!0,n.validationEngine.settings.allrules[customAjaxRule].alertTextOk?n.validationEngine.updatePromptText(ajaxCaller,n.validationEngine.settings.allrules[customAjaxRule].alertTextOk,"pass",!0):(ajaxValidate=!1,n.validationEngine.closePrompt(ajaxCaller)))}})}}function a(t,i,r){confirmField=i[r+1];n(t).attr("value")!=n("#"+confirmField).attr("value")&&(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules.confirm.alertText+"<br />")}function v(t,i,r){startLength=eval(i[r+1]);endLength=eval(i[r+2]);feildLength=n(t).attr("value").length;(feildLength<startLength||feildLength>endLength)&&(n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules.length.alertText+startLength+n.validationEngine.settings.allrules.length.alertText2+endLength+n.validationEngine.settings.allrules.length.alertText3+"<br />")}function y(t,i,r){nbCheck=eval(i[r+1]);groupname=n(t).attr("name");groupSize=n("input[name='"+groupname+"']:checked").size();groupSize>nbCheck&&(n.validationEngine.showTriangle=!1,n.validationEngine.isError=!0,u+=n.validationEngine.settings.allrules.maxCheckbox.alertText+"<br />")}function p(t,i,r){nbCheck=eval(i[r+1]);groupname=n(t).attr("name");groupSize=n("input[name='"+groupname+"']:checked").size();groupSize<nbCheck&&(n.validationEngine.isError=!0,n.validationEngine.showTriangle=!1,u+=n.validationEngine.settings.allrules.minCheckbox.alertText+" "+nbCheck+" "+n.validationEngine.settings.allrules.minCheckbox.alertText2+"<br />")}var u="",f,e;for(t=t,ajaxValidate=!1,f=n(t).attr("name"),e=!1,n.validationEngine.isError=!1,n.validationEngine.showTriangle=!0,callerType=n(t).attr("type"),i=0;i<r.length;i++)switch(r[i]){case"optional":if(!n(t).val())return n.validationEngine.closePrompt(t),n.validationEngine.isError;break;case"required":s(t,r);break;case"custom":h(t,r,i);break;case"ajax":n.validationEngine.onSubmitValid||(e=!0,l(t,r,i));break;case"length":v(t,r,i);break;case"maxCheckbox":y(t,r,i);groupname=n(t).attr("name");t=n("input[name='"+groupname+"']");break;case"minCheckbox":p(t,r,i);groupname=n(t).attr("name");t=n("input[name='"+groupname+"']");break;case"confirm":a(t,r,i);break;case"func":n.validationEngine.onSubmitValid||(e=!0,c(t,r,i))}return o(),n.validationEngine.isError==!0?(linkTofield=n.validationEngine.linkTofield(t),n("div."+linkTofield).size()==0?n.validationEngine.buildPrompt(t,u,"error"):n.validationEngine.updatePromptText(t,u),n.validationEngine.settings.checking&&n.validationEngine.settings.checking(t,!1)):(n.validationEngine.closePrompt(t),n.validationEngine.settings.checking&&n.validationEngine.settings.checking(t,!0&&(!e||n.validationEngine.ajaxValid))),n.validationEngine.isError?n.validationEngine.isError:!1},submitForm:function(t){return n.validationEngine.settings.ajaxSubmit?(extraData=n.validationEngine.settings.ajaxSubmitExtraData?n.validationEngine.settings.ajaxSubmitExtraData:"",n.ajax({type:"POST",url:n.validationEngine.settings.ajaxSubmitFile,async:!0,data:n(t).serialize()+"&"+extraData,error:function(t,i){n.validationEngine.debug("error in the ajax: "+t.status+" "+i)},success:function(i){if(i=="true")n(t).css("opacity",1),n(t).animate({opacity:0,height:0},function(){return n(t).css("display","none"),n(t).before("<div class='ajaxSubmit'>"+n.validationEngine.settings.ajaxSubmitMessage+"<\/div>"),n.validationEngine.closePrompt(".formError",!0),n(".ajaxSubmit").show("slow"),n.validationEngine.settings.success?(n.validationEngine.settings.success&&n.validationEngine.settings.success(),!1):void 0});else for(i=eval("("+i+")"),i.jsonValidateReturn||n.validationEngine.debug("you are not going into the success fonction and jsonValidateReturn return nothing"),errorNumber=i.jsonValidateReturn.length,index=0;index<errorNumber;index++)fieldId=i.jsonValidateReturn[index][0],promptError=i.jsonValidateReturn[index][1],type=i.jsonValidateReturn[index][2],n.validationEngine.buildPrompt(fieldId,promptError,type)}}),!0):n.validationEngine.settings.success?(n.validationEngine.settings.unbindEngine&&n(t).unbind("submit"),n.validationEngine.settings.success&&n.validationEngine.settings.success(),!0):!1},buildPrompt:function(t,i,r,u){var e;n.validationEngine.settings||n.validationEngine.defaultSetting();var f=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div");return linkTofield=n.validationEngine.linkTofield(t),n(f).addClass("formError"),r=="pass"&&n(f).addClass("greenPopup"),r=="load"&&n(f).addClass("blackPopup"),u&&n(f).addClass("ajaxed"),n(f).addClass(linkTofield),n(o).addClass("formErrorContent"),n(s).addClass("closeFormButton").text("x").click(function(){n(f).fadeTo("fast",0)}),n("body").append(f),n(f).append(o),n.validationEngine.showTriangle!=!1&&(e=document.createElement("div"),n(e).addClass("formErrorArrow"),n(f).append(e),(n.validationEngine.settings.promptPosition=="bottomLeft"||n.validationEngine.settings.promptPosition=="bottomRight")&&(n(e).addClass("formErrorArrowBottom"),n(e).html('<div class="line1"><!-- --><\/div><div class="line2"><!-- --><\/div><div class="line3"><!-- --><\/div><div class="line4"><!-- --><\/div><div class="line5"><!-- --><\/div><div class="line6"><!-- --><\/div><div class="line7"><!-- --><\/div><div class="line8"><!-- --><\/div><div class="line9"><!-- --><\/div><div class="line10"><!-- --><\/div>')),(n.validationEngine.settings.promptPosition=="topLeft"||n.validationEngine.settings.promptPosition=="topRight")&&(n(f).append(e),n(e).html('<div class="line10"><!-- --><\/div><div class="line9"><!-- --><\/div><div class="line8"><!-- --><\/div><div class="line7"><!-- --><\/div><div class="line6"><!-- --><\/div><div class="line5"><!-- --><\/div><div class="line4"><!-- --><\/div><div class="line3"><!-- --><\/div><div class="line2"><!-- --><\/div><div class="line1"><!-- --><\/div>'))),n(o).html(i),n(f).append(s),callerTopPosition=n(t).offset().top,callerleftPosition=n(t).offset().left,callerWidth=n(t).width(),inputHeight=n(f).height(),n.validationEngine.settings.promptPosition=="topRight"&&(callerleftPosition+=callerWidth-30,callerTopPosition+=-inputHeight-10),n.validationEngine.settings.promptPosition=="topLeft"&&(callerTopPosition+=-inputHeight-10),n.validationEngine.settings.promptPosition=="centerRight"&&(callerleftPosition+=callerWidth+13),n.validationEngine.settings.promptPosition=="bottomLeft"&&(callerHeight=n(t).height(),callerleftPosition=callerleftPosition,callerTopPosition=callerTopPosition+callerHeight+15),n.validationEngine.settings.promptPosition=="bottomRight"&&(callerHeight=n(t).height(),callerleftPosition+=callerWidth-30,callerTopPosition+=callerHeight+15),n(f).css({top:callerTopPosition,left:callerleftPosition,opacity:0}),n(f).animate({opacity:.87},function(){return!0})},updatePromptText:function(t,i,r,u){linkTofield=n.validationEngine.linkTofield(t);var f="."+linkTofield;r=="pass"?n(f).addClass("greenPopup"):n(f).removeClass("greenPopup");r=="load"?n(f).addClass("blackPopup"):n(f).removeClass("blackPopup");u?n(f).addClass("ajaxed"):n(f).removeClass("ajaxed");n(f).find(".formErrorContent").html(i);callerTopPosition=n(t).offset().top;inputHeight=n(f).height();(n.validationEngine.settings.promptPosition=="bottomLeft"||n.validationEngine.settings.promptPosition=="bottomRight")&&(callerHeight=n(t).height(),callerTopPosition=callerTopPosition+callerHeight+15);n.validationEngine.settings.promptPosition=="centerRight"&&(callerleftPosition+=callerWidth+13);(n.validationEngine.settings.promptPosition=="topLeft"||n.validationEngine.settings.promptPosition=="topRight")&&(callerTopPosition=callerTopPosition-inputHeight-10);n(f).animate({top:callerTopPosition,opacity:.87})},linkTofield:function(t){return linkTofield=n(t).attr("id")+"formError",linkTofield=linkTofield.replace(/\[/g,""),linkTofield=linkTofield.replace(/\]/g,"")},closePrompt:function(t,i){if(n.validationEngine.settings||n.validationEngine.defaultSetting(),i)return n(t).fadeTo("fast",0,function(){n(t).remove()}),!1;ajaxValidate||(linkTofield=n.validationEngine.linkTofield(t),closingPrompt="."+linkTofield,n(closingPrompt).fadeTo("fast",0,function(){}))},debug:function(){},submitValidation:function(t){var i=!1,r;for(n.validationEngine.ajaxValid=!0,n(t).find(".formError").remove(),r=n(t).find("[class*=validate]").size(),n(t).find("[class*=validate]").each(function(){if(linkTofield=n.validationEngine.linkTofield(this),!n("."+linkTofield).hasClass("ajaxed")){var t=n.validationEngine.loadValidation(this);return t?i=!0:""}}),ajaxErrorLength=n.validationEngine.ajaxValidArray.length,x=0;x<ajaxErrorLength;x++)n.validationEngine.ajaxValidArray[x][1]==!1&&(n.validationEngine.ajaxValid=!1);return i||!n.validationEngine.ajaxValid?(n.validationEngine.settings.animateSubmit&&(destination=n(".formError:not('.greenPopup'):first").offset().top,n(".formError:not('.greenPopup')").each(function(){testDestination=n(this).offset().top;destination>testDestination&&(destination=n(this).offset().top)}),n("html:not(:animated),body:not(:animated)").animate({scrollTop:destination},1100)),!0):!1}}})(jQuery);