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

Para DateRemote vamos a obtener de mtGetDaysTable un array de objetos json con información relacio
nada con cada dia a mostrarse, de manera que el date picker sepa como tratarlos, esta información va a tener la siguiente estructura:

{
    number  : 0 //dia del mes
    weekDay : 0 // dia de la semana
    enable  : true //si está disponible para ser seleccionado
}

el valor enviado en formato json del mes y año actual es:
{
    month: 0, //mes en numero
    year: 11, //año en numero
    febAndLeap: false // si es febrero y además es bisiesto el año
}

la estructura de la tabla en la base de datos es:

