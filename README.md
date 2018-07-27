# mc-dash
Dashboard written with Electron to interface with a Minecraft server.

## How to use
Simply enter your RCON information into the dashboard and it will connect to a server with RCON enabled.

## How to enable RCON on a server?
In order to enable RCON on a Minecraft server, you will need to edit the `server.properties` file with a text-editor of your choice.

Simply change the line `enable-rcon=false` to `enable-rcon=true` and then add a line at the bottom which is `rcon.password=PASSWORDHERE`

You can also specify a port by adding `rcon.port=PORTHERE`.

## Quick Connect
There is currently an auth.json file you can fill in to allow for a Quick Connect. It is not fully implemented yet. As of now, packaging the application will not expose this file for you to edit (Development environment only).

To use it, simply fill in your server information and use the Quick Connect button on the application to speed up the connection process. Eventually this will be added to the production environment.

![Screenshot of Application](https://i.imgur.com/uUF6Fu5.png "Screenshot of Application")

[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/T6T5H1L9)
