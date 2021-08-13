DIGIT BUTTON WIDGET

Most commonly used element on the web form to submit/reset user inputs.
Dijit supports four button widget under dijit/form package

1. dijit/form/Button: regular html button
2. dijit/form/ToggleButton: a button that maintains an on/off state
3. digit/form/DropDownButton: a button designed to show a popup widget (menu, tooltip, etc)
4. digit/form/ComboButton: It is a digit/form/Button and a digit/form/DropDownButton combined. The primary region can perform an action when clicked, and the drop-down region can show a popup widget.

Declarative syntax;

<button id="btn" data-dojo-type="dijit/form/Button"
 data-dojo-props="onClick: function() { console.log('First button was clicked!'); }">
    Click Me!
</button>

<script>
    // load necesasry modules
    require(["dijit/form/Button", "dojo/parser", "dojo/domReady!"]);
</script>  

Programmatic Syntax:

<button id="btn"></button>

<script>
    // load necesasry modules
    require(["dijit/form/Button", "dojo/domReady!"], function() {
        var button = new Button({ label: "Click Me",
            onClick: function() {console.log("First button was clicked!"); } }, 
    "btn");
        button.startup();
    });
</script>  

Button widget properties: 

1. iconClass: used to display icon for the button 
2. showLabel: used to control whether to show any text in the button 
3. label: content/innerHTML of the button label