DIGIT TEXT BOX WIDGETS

Input text field - basics way to collect user input on web applications.

| WIDGET                       | DETAILS                                                                                                                                         |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| dijit/form/TextBox           | basic textbox; Allows trimming and proper-casing the text; place holder; No validation; Uses design theme                                       |
| dijt/form/SimpleTextare      | Similar to native textarea html element;  ability to specify rows ans columns to mention size of the text area                                  |
| dijit/form/Textarea          | Extension of simpleTextArea; dynamically increases or decreases height based on  the amount of content inside                                   |
| dijit/form/ValidationTextBox | A text box that validates user input user based on the criteria provided (required/constraints/regex)                                           |
| dijit/form/NumberTextBox     | textbox allows only numeric input values; ability to put constraints (min/max) on user input                                                    |
| dijit/formCurrentyTextBox    | Extension of dijit/form/NumberTextBox; specialized for input monetary values, like the currency  type in excel; specified by currency attribute |
| dijit/form/CurrencyTextBox   | Extension of dijit/form/NumberTextBox; makes adjustiments by using up and down arrow buttons; click  and hold arrows to continue spinning       |
| dijit/form/DateTextBox       | Provides date entry controls that allow either typing on choosing a data from any calendars widget                                              |
| dijit/form/TimeTextBox       | Textbox that allows entering a time or choosing a time from time-picker                                                                         |