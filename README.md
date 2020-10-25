Comandos necesarios para un proyecto react que posteriormente va a ser compilado a javascript puro, el objetivo de este proyecto es  crear un programa en react y posteriormente compilarlo a javascript puro para lueg oembebirlo en otro lugar  como en este caso un proyecto de wordpress

npm init
npm install webpack webpack-cli @babel/core @babel/cli babel-loader @babel/preset-react @babel/plugin-proposal-class-properties react react-dom

utilizacion del workflow GitFlow

-master(producción)
-develop(desarrollo)
-features (date-picker, etc. nace de develop y una vez finalizada se une a develop)
-hotfix(correccion de bugs en producción, nace de master y una vez finalizada se une a master)
-release(version proxima a lanzamiento y buena para hacer test o compartir para que otros comiencen con la proxima version, nace de develop y una vez finalizada se mezcla con develop y master)