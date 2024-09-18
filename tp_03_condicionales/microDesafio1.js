let perfil = 'administrador';
let perfilMin = perfil.toLocaleLowerCase();
if (perfilMin == 'administrador'){
    console.log('Usted tiene  permisos de administrador');
} else if (perfilMin == 'asistente'){
    console.log('Usted solo tiene permiso de registro, modificar y consultar datos');
} else if (perfilMin == 'invitado') {
    console.log('Usted sólo tiene permiso de consultar datos');
} else {
    console.log('Debe especificar un perfil válido');
};