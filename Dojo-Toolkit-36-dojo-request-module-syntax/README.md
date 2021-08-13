Optional Parameters

| Property     | Type           | Default | Description                                                                                                              |
|--------------|----------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| data         | String\|Object | null    | Data, if any, that should be sent with request.                                                                          |
| query        | String\|Object | null    | The query string, if any, that should be sent with request.                                                              |
| preventCache | Boolean        | false   | If true will send an extra query paramenter to ensure the server won't supply cached values.                             |
| method       | String         | GET     | The HTTP method that should be used to send the request.                                                                 |
| timeout      | Integer        | null    | The number of miliseconds to wait for the response. If this time passe the request is canceled and the promise rejected. |
| handleAs     | String         | text    | The content handler to process the response payload with.                                                                |

Once the request in fulfilled, the response can be handled by a handler.
dojo/request provider json, xml, javascript handler.

Response dojo/promise/Promise

| Property              | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| url                   | The URL that was originally requested.                           |
| options               | Any options that were originally requested.                      |
| data                  | Contains the data of the response if appropriate.                |
| text                  | Contains the text of the response if appropriate                 |
| status                | Contains the status fo the request as returned from the provider |
| getHeader(headerName) | A function to retrieve headers sent from the server.             |