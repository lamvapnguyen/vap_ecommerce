<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="aboutTitle" ContentPlaceHolderID="TitleContent" runat="server">
    About Us
</asp:Content>

<asp:Content ID="aboutContent" ContentPlaceHolderID="MainContent" runat="server">
    <fieldset>
        <legend>&lt;legend&gt; Legend</legend>
        <label for="name">&lt;label&gt; Label </label>
        <input class="input-box" name="name" id="name" type="name" size="50" />
        <label for="email">&lt;label&gt; Label </label>
        <input class="input-box" name="email" id="email" type="email" size="50" />
        <label for="notesfield">&lt;label&gt; Label </label>
        <textarea class="input-box" name="notesfield" cols="30" rows="4" id="notesfield"></textarea>
        <label for="favmag1">&lt;label&gt; Label </label>
        <select id="favmag1" name="favmag1" >
            <option value="0" selected="selected">- - Select your favorite magazine - - </option>
            <optgroup label="General Computer Magazines">
            <option value="1">Computer A Magazine</option>
            <option value="2">Computer B Magazine</option>
            <option value="3">Computer C Magazinee</option>
            </optgroup>
            <optgroup label="Software Magazines">
            <option value="5">Software A Magazine</option>
            <option value="6">Software B Magazine</option>
            <option value="7">Software C Magazine</option>
            </optgroup>
            <optgroup label="Hardware Magazine">
            <option value="8">Hardware A Magazine</option>
            <option value="9">Hardware B Magazinek</option>
            <option value="10">Hardware C Magazine</option>
            </optgroup>
        </select>
        <fieldset>
        <legend>Lorem ipsum dolar</legend>
        <label class="no-margin" for="radio1">
        <input class="inline" type="radio" name="radio" id="radio1" title="&lt;label&gt; Label" checked="checked"  />
        &lt;label&gt; Label </label>
        <label class="no-margin" for="radio2">
        <input class="inline" type="radio" name="radio" id="radio2" title="&lt;label&gt; Label"  />
        &lt;label&gt; Label </label>
        <label class="no-margin" for="radio3">
        <input class="inline" type="radio" name="radio" id="radio3" title="&lt;label&gt; Label"  />
        &lt;label&gt; Label </label>
        </fieldset>
        <div class="checkbox">
            <label class="no-margin" for="check1">
            <input class="inline" title="Subscribe" type="checkbox" name="check1" id="check1" value=""  />
            &lt;label&gt; Label </label>
        </div>
        <input class="button-big" name="Submit" type="button" value="Submit"  />
        <input class="button-big" name="Submit2" type="reset" value="Reset" />
    </fieldset>
</asp:Content>
