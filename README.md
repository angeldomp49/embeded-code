Comandos necesarios para un proyecto react que posteriormente va a ser compilado a javascript puro, el objetivo de este proyecto es  crear un programa en react y posteriormente compilarlo a javascript puro para lueg oembebirlo en otro lugar  como en este caso un proyecto de wordpress

npm init
npm install webpack webpack-cli @babel/core @babel/cli babel-loader @babel/preset-react @babel/plugin-proposal-class-properties react react-dom css-loader

utilizacion del workflow GitFlow

-master(producción)
-develop(desarrollo)
-features (date-picker, etc. nace de develop y una vez finalizada se une a develop)
-hotfix(correccion de bugs en producción, nace de master y una vez finalizada se une a master)
-release(version proxima a lanzamiento y buena para hacer test o compartir para que otros comiencen con la proxima version, nace de develop y una vez finalizada se mezcla con develop y master)

hay un bug en babel que no permite enlazar las funciones en el constructor mediante el metodo bind, de la forma

this.nextMonth = this.nextMonth.bind(this);

por lo que declaramos las funciones en el state de la forma

nextMonth: () => { // codigo}

actualizando la nota anterior resulta que las funciones las estaba declarando fuera de la clase por lo que babel no las reconocia como relacionadas con ella, sin embargo gracias al plugin de proposal-class-properties siempre y cuando estén definidas dentro de la clase, no es necesario usar la palabra reservada function ni usar bind en el constructor, ya que este plugin automáticamente enlaza todo.