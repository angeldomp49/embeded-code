<?php 

/*
Plugin Name: DatePicker
Plugin URI: http://makechtecnology.com/datepicker
Description: pending
Version: 1.0
Author: Makech Tecnology
Author URI: http://makechtecnology.com
License: GPLv2
*/

/* Copyright YEAR PLUGIN_AUTHOR_NAME (email : PLUGIN AUTHOR EMAIL)
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation,Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
*/

//constants

$LOCAL_PATH = plugin_dir_path(__FILE__);
$PLUGINS_URL = plugins_url();
$INCLUDES_URL = includes_url();
$CONTENT_URL = content_url();
$ADMIN_URL = admin_url();
$SITE_URL = site_url();
$HOME_URL = home_url();

register_activate_hook(__FILE__,"mt_dp_activate_plugin");

mt_dp_activate_plugin(){
    
}

add_shortcode('mt-dp-df', 'mt_dp_date_form');

mt_dp_date_form($attr){
    $code = "";
    $code = '<div class="mt_dp_jsportal_dateform '.$attr['classNamesAttrs'].' " ></div>';
    return $code;
}