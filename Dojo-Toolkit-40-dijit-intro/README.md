Defining Dijit Widgets: Programatic Syntax

- Define anormal html element with an id
- Declare the widget as instance fo the widget object in javascript and bind it to html element
- Startup the widget object

Example:

<button id="btn"></button>

<script>
    require(["dijit/form/Button", "dojo/domReady!"], function(Button) {
        var button = new Button({label: "Click Me!",
            onClick: function() {
                console.log("First button was clicked!");
                }
            },
            "btn");
            button.startup();
        })
    })
</script>