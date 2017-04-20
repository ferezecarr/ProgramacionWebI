$(document).ready(function(){
	var expr=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	$(document).ready(function(){
		$("#btn-submit").click(function(){
			var nombre_apellido=$("#nombre_apellido").val();
			var dni=$("#dni").val();
			var fecha_nacimiento=$("#fecha").val();
			var email=$("#email").val();
			var password=$("#password").val();
			var password2=$("#password2").val();
			var enviar=$("#btn-submit").val();
			if(nombre_apellido=="")
			{
				$("#mensaje1").fadeIn();
				return false;
				}
				else
				{
					$("#mensaje1").fadeOut();
					if(dni=="")
					{
						$("#mensaje2").fadeIn();
						return false;
						}
						else
						{
							$("#mensaje2").fadeOut();
							if(fecha_nacimiento=="")
							{
								$("#mensaje3").fadeIn();
								return false;
								}
								else
								{
									$("#mensaje3").fadeOut();
									if(email==""|| !expr.test(email))
									{
										$("#mensaje4").fadeIn();
										return false;
										}
										else
										{
											$("#mensaje4").fadeOut();
											if(password=="")
											{
												$("#mensaje5").fadeIn();
												return false;
												}
												else
												{
													$("#mensaje5").fadeOut();
													if(password2=="")
													{
														$("#mensaje6").fadeIn();
														return false;
														}
														else
														{
															$("#mensaje6").fadeOut();
															if(enviar)
															{
																$("#mensaje7").fadeIn();
																return false
															}
															else
															{
																$("#mensaje7").fadeOut();
															}

														}
													}
											}
									}
							}
					}
			});
		});
});