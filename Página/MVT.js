//HISTORIAL
function BorrarhisLinks()
{
	$('#vidUrl').autocomplete('url?new_param=bar');
}
function His(hisActivated)
{
	if(hisActivated)
	{
		vidUrl.autocomplete = 'on';
		hisActivated = true;
		$("#btnHistorial").text("Desactivar historial");
	}
	else
	{
		vidUrl.autocomplete = 'off';
		hisActivated = false;
		$("#btnHistorial").text("Activar historial");
	}
}
//PROXIMAMENTE BUSQUEDA ;)
