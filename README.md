# mc-dash
Dashboard written with Electron to interface with a Minecraft server.

## How to use
Simply enter your RCON information into the dashboard and it will connect to a server with RCON enabled.

## How to enable RCON on a server?
In order to enable RCON on a Minecraft server, you will need to edit the `server.properties` file with a text-editor of your choice. 

Simply change the line `enable-rcon=false` to `enable-rcon=true` 

and then add a line at the bottom which is 

`rcon.password=PASSWORDHERE`
