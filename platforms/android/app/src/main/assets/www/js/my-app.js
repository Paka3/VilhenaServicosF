//COMANDO PARA "OUVIR" QUANDO O DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Vilhena Serviços',
    // App id
    id: 'br.com.vilhenaservicos',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: 'index.html',
            on: {
                pageInit: function (event, page) {
					
					var skin = localStorage.getItem("azul");
                    
					//NAO TEM SKIN DEFINIDA (ATIVAR PADRAO - BLACK)
					if (skin == null) {
						localStorage.setItem("skin",'azul');
						$("#skin").attr("href", "css/skin-azul.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}	
					
					//SKIN AZUL
					if (skin == 'black') {
						$("#skin").attr("href", "css/skin-black.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN VERMELHO
					if (skin == 'vermelho') {
						$("#skin").attr("href", "css/skin-vermelho.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN LARANJA
					if (skin == 'laranja') {
						$("#skin").attr("href", "css/skin-laranja.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN BLACK
					if (skin=='black') {
						$("#skin").attr("href", "css/skin-black.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN ROXO
					if (skin=='roxo') {
						$("#skin").attr("href", "css/skin-roxo.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN VERDE
					if (skin=='verde') {
						$("#skin").attr("href", "css/skin-verde.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN PINK
					if (skin=='pink') {
						$("#skin").attr("href", "css/skin-pink.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
					}
					
					//SKIN WHITE
					if (skin=='branco') {
						$("#skin").attr("href", "css/skin-branco.css"); 
						$("#logoMenu").attr("src", "img/logo-black.png");
						$("#logoInicio").attr("src", "img/logo-black.png");
					}
                    
					
					//DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
					
                    //REMOVER ANIMACAO DE "CORACAO BATENDO" 2 SEGUNDOS
                    setTimeout(function () {
                        $(".Aligner").removeClass("animated lightSpeedIn");
                    }, 2000);
					
					//ANIMAÇÃO DE BATER CORACAO 2 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").addClass("animated heartBeat");
                    }, 2500);

					//REMOVER ANIMACAO DE "CORACAO BATENDO" 3 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").removeClass("animated heartBeat");
                    }, 3500);
					
                    //FAZER NOVAMENTE ANIMACAO DO CORACAO BATENDO 4 SEGUNDOS E MEIO
                    setTimeout(function () {
                        $(".Aligner").addClass("animated lightSpeedOut");
                    }, 4500);


                    //REDIRECIONAR PARA HOME EM 5 SEGUNDOS
                    setTimeout(function () {
						var login= localStorage.getItem("login");
						if (login==null) {
						app.views.main.router.navigate('/index/');
						}else{
						
						
						app.views.main.router.navigate('/destino/');
						}
						var networkState = navigator.connection.type;

						// Verifica disponibilidade do anunciate logado
						const statusToggle = document.querySelector('.status-toggle');
						let hasEventListener = false;

						setInterval(() => {
							const anunciante_id = localStorage.getItem('anunciante_id');

							if (anunciante_id) {
								const statusToggleBox = document.querySelector('.status-toggle-box');
								statusToggleBox.classList.remove('d-none');

								if (!hasEventListener) {
									statusToggle.addEventListener('change', (e) => {
										const isChecked = e.target.checked;
			
										$.ajax({
											url: 'https://vilhenaservicos.com.br/App/atualizar-disponibilidade.php',
											type: 'POST',
											crossDomain: true,
											data: { chave: 'ok', anunciante_id, is_available: isChecked },
											success: () => {
												updateRadioButtonState(isChecked);
											}
										});
									});

									hasEventListener = true;
								}

								$.ajax({
									url: 'https://vilhenaservicos.com.br/App/carregar-disponibilidade.php',
									type: 'POST',
									data: { chave: 'ok', anunciante_id },
									crossDomain: true,
									success: (res) => {
										const isAvailable = res == '1';
										updateRadioButtonState(isAvailable);
									},
								});

								const updateRadioButtonState = (state) => {
									statusToggle.checked = state;
								};
							} else {
								const statusToggleBox = document.querySelector('.status-toggle-box');
								statusToggleBox.classList.add('d-none');

								if (hasEventListener) {
									statusToggle.removeEventListener('change');
									hasEventListener = false;
								}
							}
						}, 2000);

					 //DAR NOMES PARA OS STATUS DE REDE
                    var states = {}; 
                    states[Connection.UNKNOWN] = 'desconhecida'; 
                    states[Connection.ETHERNET] = 'cabo';
                    states[Connection.WIFI] = 'wifi';
                    states[Connection.CELL_2G] = '2g';
                    states[Connection.CELL_3G] = '3g';
                    states[Connection.CELL_4G] = '4g';
                    states[Connection.CELL] = 'celular';
                    states[Connection.NONE] = 'nenhuma';
																				
                    //SE A REDE FOR "NENHUMA" OU "DESCONHECIDA"   devolver para a linha de baixo->|| (states[networkState] =='desconhecida')<-
                    if ((states[networkState] =='nenhuma') ) {
					//SEM INTERNET
					app.views.main.router.navigate('/offline/');
					}else{
					//SE TIVER INTERNET VERIFICAR SE JÁ ESCOLHEU CIDADE	
					var cidade = localStorage.getItem("idCidade");
                    if (cidade == null) {
						//NAO TEM CIDADE - DIRECIONA PARA SELECAO
                        app.views.main.router.navigate('/cidade/');
                    }else{
						//TEM CIDADE JOGA DIRETO PARA HOME 
						app.views.main.router.navigate('/destino/');
					}	
					
					}
                        
                    	
                    }, 5500);
					
					

                    }
               }
        },
		{
            path: '/cidade/',
            url: 'cidade.html',
            on: {
                pageInit: function (event, page) {
				
						app.dialog.preloader('Aguarde');
								$.ajax({
                                type: 'POST',
                                data: {appvalidation:'oi'},
                                url: 'https://vilhenaservicos.com.br/App/carregar-cidades.php',
                                crossDomain: true,

                                success: function (respost) {

                                    if (respost == 0) {
                                        app.dialog.close();

                                            app.dialog.alert('Houve um problema. Carregamento não foi efetuado.', '<i class="mdi mdi-alert-circle"></i> <b>Falhou Carregamento!</b>');
                                            return false;
                                   
                                    }

                                    if (respost !== 0) {
                                        app.dialog.close();
                                        
                                        //ALISTA OS FORNECEDORES
                                        $("#Qualcidade").html(respost);                                      
										$("#Qualcidade").val("");
                                      
                                    }

                                    

                                },

                                error: function (erro) {
                                    app.dialog.close();
                                 
                                        app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
                                   
                                    
                                   
                                }

                            });
							
							//QUANDO SELECIONAR CIDADE APARECER BOTÃO
							$('#Qualcidade').on('change', function() {
								var qualcidade = $('#Qualcidade').val();
								
								if (qualcidade==""){
									$("#botaoCidade").addClass("display-none");
								}else{
									$("#botaoCidade").removeClass("display-none");
								}							
							});
							
							//CLICOU PARA SEGUIR EM FRENTE
							$('#vamosLa').on('click', function() {
								var idcidade=$('#Qualcidade').val();
								//SETANDO PARA CIDADE ESCOLHIDA
								localStorage.setItem("idCidade",idcidade);
								app.views.main.router.navigate('/home/');
							});

                    }
               }
        },
		{
            path: '/destino/',
            url: 'destino.html',
            on: {
                pageInit: function (event, page) {
					
					//ATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.enableSwipe('left');
					
											//PUSH PARA ATUALIZAR
											var $ptrContent = $$('.ptr-content');
											// Add 'refresh' listener on it
											$ptrContent.on('ptr:refresh', function (e) {
												setTimeout(function(){ 	
												app.view.current.router.refreshPage();
													}, 100);						 
												});
					
						
						 var swiper = app.swiper.create('.icon-swiper', {
												spaceBetween: 10,
												slidesPerView:5,
												autoplay: {
													delay: 2000,
												 },
											});
											
						 var swiper = app.swiper.create('.banner-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												autoplay: {
													delay: 5000,
												 },
											});	

										var swiper = app.swiper.create('.destaque-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												spaceBetween: 5,
												slidesPerView:2,
												autoplay: {
													delay: 3000,
												 },
											});	

									var swiper = app.swiper.create('.promocoes-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												spaceBetween: 5,
												slidesPerView:2,
												autoplay: {
													delay: 1500,
												 },
											});	
											
										var cidade = localStorage.getItem("idCidade");									

										$.ajax({
										type: 'POST',
										data: { cidade:cidade,chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-home.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												
												$("#homeConteudo").html(respost);
												
												var swiper = app.swiper.create('.icon-swiper', {
												spaceBetween: 10,
												slidesPerView:5,
												autoplay: {
													delay: 2000,
												 },
											});
											
						 var swiper = app.swiper.create('.banner-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												autoplay: {
													delay: 5000,
												 },
											});	

										var swiper = app.swiper.create('.destaque-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												spaceBetween: 5,
												slidesPerView:2,
												autoplay: {
													delay: 3000,
												 },
											});	

									var swiper = app.swiper.create('.promocoes-swiper', {
												pagination: {
													el: '.swiper-pagination',
													type: 'bullets',
												},
												spaceBetween: 5,
												slidesPerView:2,
												autoplay: {
													delay: 1500,
												 },
											});	
											
											   $(".swip-banner").on("click",function(){
													var id=$(this).attr("data-id");
													var alvo=$(this).attr("data-alvo");
													
													//ALVO DO BANNER É CATEGORIA
													if (alvo=="categoria"){
													var idcat=$(this).attr("data-id");
													var iconecat=$(this).attr("data-icone");
													var nomecat=$(this).attr("data-nome");	
													
													localStorage.setItem('categoriaSelecionada',idcat);
													localStorage.setItem('categoriaIcone',iconecat);
													localStorage.setItem('categoriaNome',nomecat);
													
													app.views.main.router.navigate('/lista-anunciantes/');
													
													}
													
													//ALVO DO BANNER É PROMOCAO
													if (alvo=="promocao"){
																										
													}
													
													//ALVO DO BANNER É ANUNCIANTE
													if (alvo=="anunciante"){
													localStorage.setItem('idAnunciante',id);													
													app.views.main.router.navigate('/anunciante/');													
													}
													
													
												});
											
												$(".swip-categoria").on("click",function(){
													var id=$(this).attr("data-categoria");
													var icone=$(this).attr("data-icone");
													var nome=$(this).attr("data-nome");
													
													localStorage.setItem('categoriaSelecionada',id);
													localStorage.setItem('categoriaIcone',icone);
													localStorage.setItem('categoriaNome',nome);
													
													app.views.main.router.navigate('/lista-anunciantes/');
												});
											
											$(".swip-destaque").on("click",function(){
													var id=$(this).attr("data-anunciante");
													localStorage.setItem('idAnunciante',id);													
													app.views.main.router.navigate('/anunciante/');
												});
												
												$(".swip-promocao").on("click",function(){
													var id=$(this).attr("data-promotion");
													//app.dialog.alert(id);
													localStorage.setItem('idPromocao',id);													
													app.views.main.router.navigate('/promocao/');
												});
											
																																			
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});							
						
		
				}	
               }
        },
		{
            path: '/skins/',
            url: 'skin-demo.html',
            on: {
                pageInit: function (event, page) {
					
					//DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
					
					//FECHAR PAINEL
					 app.panel.close();
					 
					 //AO CLICAR NA COR AZUL
					 $("#corAzul").on("click", function(){
						$("#skin").attr("href", "css/skin-azul.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'azul');
					 });
					 
					  //AO CLICAR NA COR VERMELHO
					 $("#corVermelho").on("click", function(){
						$("#skin").attr("href", "css/skin-vermelho.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'vermelho');
					 });
					 
					  //AO CLICAR NA COR LARANJA
					 $("#corLaranja").on("click", function(){
						$("#skin").attr("href", "css/skin-laranja.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'laranja');
					 });
					 
					 //AO CLICAR NA COR BLACK
					 $("#corBlack").on("click", function(){
						$("#skin").attr("href", "css/skin-black.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'black');
					 });
					 
					 //AO CLICAR NA COR ROXO
					 $("#corRoxo").on("click", function(){
						$("#skin").attr("href", "css/skin-roxo.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'roxo');
					 });
					 
					 //AO CLICAR NA COR VERDE
					 $("#corVerde").on("click", function(){
						$("#skin").attr("href", "css/skin-verde.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'verde');
					 });
					 
					 //AO CLICAR NA COR PINK
					 $("#corPink").on("click", function(){
						$("#skin").attr("href", "css/skin-pink.css"); 
						$("#logoMenu").attr("src", "img/logo-white.png");
						$("#logoInicio").attr("src", "img/logo-white.png");
						localStorage.setItem("skin",'pink');
					 });
					 
					 //AO CLICAR NA COR WHITE
					 $("#corWhite").on("click", function(){
						$("#skin").attr("href", "css/skin-branco.css"); 
						$("#logoMenu").attr("src", "img/logo-black.png");
						$("#logoInicio").attr("src", "img/logo-black.png");
						localStorage.setItem("skin",'branco');
					 });
					 
					 
					
					

                    }
               }
        },
		{
            path: '/categorias/',
            url: 'categorias.html',
            on: {
                pageInit: function (event, page) {
				
					//DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
					
					//FECHAR PAINEL
					 app.panel.close();
					 
					 // SEARCHBAR
					var searchbar = app.searchbar.create({
					  el: '#categoriaSearch',
					  searchContainer: '.lista-categoria',
					  searchIn: '.item-title',
					  on: {
						
					  }
					});
					
					app.dialog.preloader('Carregando');
							$.ajax({
										type: 'POST',
										data: { chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-categorias.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												app.dialog.close();
												$("#categoriasLista").html(respost);
												
												//PEGAR A CATEGORIA CLICADA
												$(".item-link").on("click",function(){
													var id=$(this).attr("data-categoria");
													var icone=$(this).attr("data-icone");
													var nome=$(this).attr("data-nome");
													
													localStorage.setItem('categoriaSelecionada',id);
													localStorage.setItem('categoriaIcone',icone);
													localStorage.setItem('categoriaNome',nome);
													
													
													app.views.main.router.navigate('/lista-anunciantes/');
												});
																								
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	
					
					

                    }
               }
        },
		{
            path: '/lista-anunciantes/',
            url: 'lista-anunciantes.html',
            on: {
                pageInit: function (event, page) {
						
						var categoria=localStorage.getItem('categoriaSelecionada');
						var icone=localStorage.getItem('categoriaIcone');
						var nome=localStorage.getItem('categoriaNome');
						
						var xsearchbar = app.searchbar.create({
												  el: '#listaSearch',
												  searchContainer: '.lista-anuc',
												  searchIn: '.item-title',
												  on: {
													
												  }
												});
						
						$("#listaAnuncTitle").html(icone+" "+nome);
						
						var cidade = localStorage.getItem("idCidade");
						
						app.dialog.preloader('Carregando');
							$.ajax({
										type: 'POST',
										data: { cidade:cidade,categoria:categoria,chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-listaanunciantes.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												app.dialog.close();
												$("#ListaAnunciante").html(respost);
												
												//PEGAR A CATEGORIA CLICADA
												$(".item-anunc").on("click",function(){
													var anunciante=$(this).attr("data-anunciante");
													var capa=$(this).attr("data-capa");
													var perfil=$(this).attr("data-perfil");
													var endereco=$(this).attr("data-endereco");
													var ligar=$(this).attr("data-ligar");
													var whats=$(this).attr("data-whats");
													var facebook=$(this).attr("data-facebook");
													var mapa=$(this).attr("data-mapa");
													var sobre=$(this).attr("data-sobre");
													
													//PEGAR DADOS VINDO DO AJAX
													localStorage.setItem('idAnunciante',anunciante);
													localStorage.setItem('capaAnunciante',capa);
													localStorage.setItem('imagemperfilAnunciante',perfil);
													localStorage.setItem('enderecoAnunciante',endereco);
													localStorage.setItem('ligarAnunciante',ligar);
													localStorage.setItem('whatsAnunciante',whats);
													localStorage.setItem('facebookAnunciante',facebook);
													localStorage.setItem('mapaAnunciante',mapa);
													localStorage.setItem('sobreAnunciante',sobre);
													
													app.views.main.router.navigate('/anunciante/');
												});
												
												var xsearchbar = app.searchbar.create({
												  el: '#listaSearch',
												  searchContainer: '.lista-anuc',
												  searchIn: '.item-title',
												  on: {
													
												  }
												});
																								
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	

                    }
               }
        },
		{
            path: '/anunciante/',
            url: 'anunciante.html',
            on: {
                pageInit: function (event, page) {
				
						//RECUPERAR DADOS
						var anunciante=localStorage.getItem('idAnunciante');
						var capa=localStorage.getItem('capaAnunciante');
						var perfil=localStorage.getItem('imagemperfilAnunciante');
						var endereco=localStorage.getItem('enderecoAnunciante');
						var ligar=localStorage.getItem('ligarAnunciante');
						var whats=localStorage.getItem('whatsAnunciante');
						var facebook=localStorage.getItem('facebookAnunciante');
						var mapa=localStorage.getItem('mapaAnunciante');
						var sobre=localStorage.getItem('sobreAnunciante');
						
						$.ajax({
										type: 'POST',
										data: { anunciante:anunciante,chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-anunciante.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												
												$("#conteudoAnunciante").html(respost);	
												
																																																
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	
						
						

                    }
               }
        },
		{
            path: '/offline/',
            url: 'offline.html',
            on: {
                pageInit: function (event, page) {
					
					//FECHAR PAINEL
					 app.panel.close();
					 
					 //DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
										
					var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var grid = 16;
var snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};
var count = 0;
var apple = {
  x: 320,
  y: 320
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 - 60/15 = 4
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  // draw snake
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {
    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
      
      // collision. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}

var allowedTime = 200;
var startX = 0;
var startY = 0;

document.addEventListener('touchstart', function(e){
    var touch = e.changedTouches[0]
    startX = touch.pageX
    startY = touch.pageY
    startTime = new Date().getTime()
    e.preventDefault()
}, false)

document.addEventListener('touchmove', function(e){
    e.preventDefault()
}, false)

document.addEventListener('touchend', function(e){
    var touch = e.changedTouches[0]
    distX = touch.pageX - startX
    distY = touch.pageY - startY

    if (Math.abs(distX) > Math.abs(distY)) {
      if (distX > 0 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      else if (distX < 0 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      }
    } else {
      if (distY > 0 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
      else if (distY < 0 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
    }
    e.preventDefault();

}, false)

document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);
					
					

                    }
               }
        },
		{
            path: '/promocao/',
            url: 'promocao.html',
            on: {
                pageInit: function (event, page) {
				
						//RECUPERAR DADOS
						var promocao=localStorage.getItem('idPromocao');
												
						$.ajax({
										type: 'POST',
										data: { promocao:promocao,chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-promocao.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												
												$("#conteudoPromocao").html(respost);										
																																																
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	

                    }
               }
        },
		{
            path: '/lista-promocao/',
            url: 'lista-promocao.html',
            on: {
                pageInit: function (event, page) {
						app.panel.close();
						var cidade = localStorage.getItem("idCidade");
						app.dialog.preloader("Carregando");
						$.ajax({
										type: 'POST',
										data: {cidade:cidade,chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-listapromocao.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												app.dialog.close();
												
												$("#listaPromocoes").html(respost);										
																																																
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	

                    }
               }
        },
		{
            path: '/lista-destaque/',
            url: 'lista-destaque.html',
            on: {
                pageInit: function (event, page) {
					    app.panel.close();
						var cidade = localStorage.getItem("idCidade");
						app.dialog.preloader('Carregando');
							$.ajax({
										type: 'POST',
										data: {cidade:cidade, chave:'ok'},
										url: 'https://vilhenaservicos.com.br/App/carregar-destaques.php',
										crossDomain: true,

										success: function (respost) {
										
											if (respost !== 0) {
												app.dialog.close();
												$("#destaqueLista").html(respost);
												
												$(".item-anunc").on("click",function(){
													var anunciante=$(this).attr("data-anunciante");
													var capa=$(this).attr("data-capa");
													var perfil=$(this).attr("data-perfil");
													var endereco=$(this).attr("data-endereco");
													var ligar=$(this).attr("data-ligar");
													var whats=$(this).attr("data-whats");
													var facebook=$(this).attr("data-facebook");
													var mapa=$(this).attr("data-mapa");
													var sobre=$(this).attr("data-sobre");
													
													//PEGAR DADOS VINDO DO AJAX
													localStorage.setItem('idAnunciante',anunciante);
													localStorage.setItem('capaAnunciante',capa);
													localStorage.setItem('imagemperfilAnunciante',perfil);
													localStorage.setItem('enderecoAnunciante',endereco);
													localStorage.setItem('ligarAnunciante',ligar);
													localStorage.setItem('whatsAnunciante',whats);
													localStorage.setItem('facebookAnunciante',facebook);
													localStorage.setItem('mapaAnunciante',mapa);
													localStorage.setItem('sobreAnunciante',sobre);
													
													app.views.main.router.navigate('/anunciante/');
												});
																								
											}
											
											if (respost == 0) {
												app.dialog.close();
												app.dialog.alert('Por favor tente novamente...','<b>Houve um problema</b>');
											}

										},

										error: function (erro) {
											app.dialog.close();
										 
												app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
										   
											
										   
										}

									});	

                    }
               }
        },
		{
            path: '/busca/',
            url: 'busca.html',
            on: {
                pageInit: function (event, page) {
				
						$("#campoBusca").focus();
						
						$("#buscaSearch").submit(function(e){
							e.preventDefault();
							var valor=$("#campoBusca").val();
							if(valor!==""){
							localStorage.setItem('pesquisa',valor);
							var cidade = localStorage.getItem("idCidade");
							app.dialog.preloader('Pesquisando');
								$.ajax({
                                type: 'POST',
                                data: {cidade:cidade,pesquisa:valor,appvalidation:'oi'},
                                url: 'https://vilhenaservicos.com.br/App/pesquisa.php',
                                crossDomain: true,

                                success: function (respost) {

                                    if (respost == 0) {
                                        app.dialog.close();

                                            app.dialog.alert('Houve um problema. Carregamento não foi efetuado.', '<i class="mdi mdi-alert-circle"></i> <b>Falhou Carregamento!</b>');
                                            return false;
                                   
                                    }

                                    if (respost !== 0) {
                                        app.dialog.close();
                                        
                                        //ALISTA OS FORNECEDORES
                                        $("#pesquisaLista").html(respost);     

										$(".item-anunc").on("click",function(){
													var anunciante=$(this).attr("data-anunciante");
													var capa=$(this).attr("data-capa");
													var perfil=$(this).attr("data-perfil");
													var endereco=$(this).attr("data-endereco");
													var ligar=$(this).attr("data-ligar");
													var whats=$(this).attr("data-whats");
													var facebook=$(this).attr("data-facebook");
													var mapa=$(this).attr("data-mapa");
													var sobre=$(this).attr("data-sobre");
													
													//PEGAR DADOS VINDO DO AJAX
													localStorage.setItem('idAnunciante',anunciante);
													localStorage.setItem('capaAnunciante',capa);
													localStorage.setItem('imagemperfilAnunciante',perfil);
													localStorage.setItem('enderecoAnunciante',endereco);
													localStorage.setItem('ligarAnunciante',ligar);
													localStorage.setItem('whatsAnunciante',whats);
													localStorage.setItem('facebookAnunciante',facebook);
													localStorage.setItem('mapaAnunciante',mapa);
													localStorage.setItem('sobreAnunciante',sobre);
													
													app.views.main.router.navigate('/anunciante/');
												});	
										
                                      
                                    }

                                    

                                },

                                error: function (erro) {
                                    app.dialog.close();
                                 
                                        app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
                                   
                                    
                                   
                                }

                            });
							
							
							$("#titlepesquisa").html('<i class="mdi mdi-magnify"></i>  "'+valor+'"');
							$("#campoBusca").val('');							
						   }
						});
						
						

                    }
               }
        },
		{
            path: '/configuracoes/',
            url: 'configuracoes.html',
            on: {
                pageInit: function (event, page) {
				
						app.panel.close();
						
						 $("#sair").on("click", function(){
	   localStorage.clear(login);
 });

                    }
               }
        },
		{
            path: '/escolhecidade/',
            url: 'escolhecidade.html',
            on: {
                pageInit: function (event, page) {
				
						app.dialog.preloader('Aguarde');
								$.ajax({
                                type: 'POST',
                                data: {appvalidation:'oi'},
                                url: 'https://vilhenaservicos.com.br/App/carregar-cidades.php',
                                crossDomain: true,

                                success: function (respost) {

                                    if (respost == 0) {
                                        app.dialog.close();

                                            app.dialog.alert('Houve um problema. Carregamento não foi efetuado. Volte uma página e tente novamente.', '<i class="mdi mdi-alert-circle"></i> <b>Falhou Carregamento!</b>');
                                            return false;
                                   
                                    }

                                    if (respost !== 0) {
                                        app.dialog.close();
                                        
                                        //ALISTA OS FORNECEDORES
                                        $("#cidadesListadas").html(respost);

                                      //PUXAR CIDADE
									  var cidade = localStorage.getItem("idCidade");
									  $("#cidadesListadas").val(cidade);
                                      
                                    }

                                    

                                },

                                error: function (erro) {
                                    app.dialog.close();
                                 
                                        app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
                                   
                                    
                                   
                                }

                            });
							
							$('#cidadesListadas').on('change', function() {
						var qualcidade = $('#cidadesListadas').val();
										
						
						if (qualcidade==""){
							app.dialog.alert('Por favor, selecione uma cidade!');
						}else{
						//SETANDO PARA CIDADE ESCOLHIDA
						localStorage.setItem("idCidade",qualcidade);
						app.dialog.alert('Cidade alterada!','<b>SUCESSO!</b>');
						}
						
						
					});

                    }
               }
        },
        {
            path: '/home/',
            url: 'home.html',
            on: {
                pageInit: function (event, page) {
					
				setTimeout(function(){ 
				
				app.dialog.alert('<img src="img/swipe-left.gif" style="max-width:100%">','');

				}, 500);
				
				$("#queroCadastrar").on("click", function(){
					 app.views.main.router.navigate('/cadastrar/');
				});
		
				}	
               }
        },
		{
            path: '/cadastrar/',
            url: 'cadastrar.html',
            on: {
                pageInit: function (event, page) {
				
					$('#CadtelefoneCadastro').mask('(00) 00000-0009');
					$('#CadcpfCadastro').mask('000.000.000-00');
					
					$('#Cadcadastra').click(function () {
					 
						var nome = $$("#CadnomeCadastro").val();
                        var email = $$("#CademailCadastro").val();
                        var senha = $$("#CadsenhaCadastro").val();
						var RepeteSenha = $$("#CadrepeteSenhaCadastro").val();
						var telefone = $$("#CadtelefoneCadastro").val();
						var CPF = $$("#CadcpfCadastro").val();
						var dataNascimento = $$("#CaddatanascimentoCadastro").val();	
                    
                        if ((nome == '') || (email == '') || (senha == '') || (telefone =='')|| (CPF =='')|| (RepeteSenha =='')|| (dataNascimento =='')) {
                               app.dialog.alert('Por favor, todos os campos sao obrigatorios.', '<i class="mdi mdi-alert"></i> Campos faltando!');
                                return false;                            
                        }

                        if ((nome !== '') && (email !== '') && (senha !== '')&& (telefone !== '')&& (CPF !== '')&& (RepeteSenha !== '')&& (dataNascimento !== '')) {

                            //VALIDACAO DO EMAIL
                            var sEmail = email;
                            // filtros
                            var emailFilter = /^.+@.+\..{2,}$/;
                            var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
                            // condicao
                            if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
                                //EMAIL INVALIDO
                                app.dialog.alert('Por favor, informe um e-mail valido!', '<i class="mdi mdi-alert"></i> E-mail Invalido');
                                    return false;
                                                             
                            } else {								
								//VERIFICAR SE AS SENHAS SAO IGUAIS
								if (senha==RepeteSenha){
									//SENHAS SAO IGUAIS - VERIFICAR O CHECKBOX
									//EMAIL E VALIDO
                                 if(($("#CadcheckPolitica").is(":checked"))&&($("#CadcheckTermos").is(":checked"))){
									//TA TUDO OK
								//TUDO OK
                                    //AJAX PARA CADASTRAR
									app.dialog.preloader('Cadastrando');                          
                              
                                $.ajax({
                                    type: 'POST',
                                    data: { nome: nome, email: email, senha: senha, telefone: telefone,CPF:CPF,datanascimento:dataNascimento,valida:'ok'},
                                    url: 'https://vilhenaservicos.com.br/cadastro/cadastra.php',
                                    crossDomain: true,

                                    success: function (resposta) {

                                        if (resposta == 0) {
                                            app.dialog.close();

                                                app.dialog.alert('Tudo certo. Um email foi enviado para endere&ccedil;o cadastrado. Caso esque&ccedil;a a senha verifique este email.', '<i class="mdi mdi-email-check-outline"></i> <b>Cadastrado!</b>', function () {
                                                    //ARMAZENA CADA ITEM DO USUARIO EM UM LOCALSTORAGE
                                                    localStorage.setItem("nome", nome);
                                                    localStorage.setItem("login", email);
                                                    localStorage.setItem("senha", senha);
													localStorage.setItem("telefone", telefone);
													localStorage.setItem("CPF", CPF);
													localStorage.setItem("DataNascimento", dataNascimento);
													
													app.views.main.router.navigate('/destino/');
													
                                                });
                           
                                           

                                        }

                                        if (resposta == 1) {
                                            app.dialog.close();
                                           app.dialog.alert('Por favor tente novamente!', 'Falhou...');                                   
                                            
                                        }

                                        if (resposta == 3) {
                                            app.dialog.close();

                                                app.dialog.alert('Por favor, informe outro email!', '<i class="mdi mdi-email-lock"></i> <b>Email j&aacute; Cadastrado</b>');
                                                                                       
                                          

                                        }

                         

                                    },

                                    error: function (erro) {
                                        app.dialog.close();
                                     
                                       app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
                                                                               
                                    }

                                });
								
								
								
								}else{
								app.dialog.alert("É preciso aceitar as <b>Políticas de Privacidade</b> e também os <b>Termos de Uso</b> para se cadastrar.","<i class='mdi mdi-alert'></i> Aceitar Termos");  
								}
									
									
								}else{
								  app.dialog.alert('A senha e a repetição da senha não são iguais!', '<i class="mdi mdi-alert"></i> Senha e Repetição de Senha');
                                    return false;	
								}
								
								
                                							 
                                    
                            }


                        }
					 
					 						
				 });

                    }
               }
        },
		{
            path: '/login/',
            url: 'login.html',
            on: {
                pageInit: function (event, page) {
				
						$('#Fazerlogin').on('click', function () {
                       
                        var email = $("#ContaLogin").val();
                        var senha = $("#ContaSenha").val();

                        if ((email == '') || (senha == '')) {
                         app.dialog.alert('Por favor, preencha seu email e senha.', '<i class="mdi mdi-alert"></i> Campos Vazios');                        
                           
                        }else{
                           
							app.dialog.preloader('Fazendo Login'); 
                                                      
                            $.ajax({
                                type: 'POST',
                                data: { email: email, senha: senha, chave:'123'},
                                url: 'https://vilhenaservicos.com.br/cadastro/login.php',
                                crossDomain: true,

                                success: function (respost) {

                                    if (respost == 0) {
                                        app.dialog.close();

                                            app.dialog.alert('Nenhum usuário encontrado com este login / senha. Tente novamente!', '<i class="mdi mdi-alert-circle"></i> <b>Login Inválido</b>');
                                            return false;
                                   
                                    }

                                    if (respost !== 0) {
                                        app.dialog.close();
                                        
                                        //DESENCAPSULA OS DADOS DA RESPOSTA
                                        var dados = JSON.parse(respost);

                                        //ARMAZENA CADA ITEM DO USUARIO EM UM LOCALSTORAGE
                                        localStorage.setItem("anunciante_id", dados.anunciante_id);
                                        localStorage.setItem("nome", dados.nome);
                                        localStorage.setItem("login", dados.email);
                                        localStorage.setItem("senha", dados.senha);
										localStorage.setItem("telefone", dados.telefone);
										localStorage.setItem("CPF", dados.cpf);
                                        										                                     
                                      //REDIRECIONA PARA PAGINA PRINCIPAL
                                       app.views.main.router.navigate('/destino/');
                                      
                                    }

                                    

                                },

                                error: function (erro) {
                                    app.dialog.close();
                                 
                                        app.dialog.alert('Falha em se comunicar com servidor. Por favor, tente novamente!');
                                   
                                    
                                   
                                }

                            });
                        }

                        
                    });
					
					$('#esqueceuSenha').on('click', function () {
						app.dialog.prompt('Informe o e-mail de login','<b>SEU EMAIL DE LOGIN</b>', function (email) {
									
					var email=email;
					
					app.dialog.preloader('Verificando');
					
					$.ajax({
						type: 'POST', 
						data: {email:email,chave:'123'}, 
						url: 'https://vilhenaservicos.com.br/cadastro/verificar-email.php',  
							 
						success: function (resposta) {
							
							
							if (resposta==0){
							app.dialog.close();
								app.dialog.prompt('Você recebeu <b><u>no seu email</u></b> um código de verificação para autorizar a criação de uma nova senha. <b>Por favor, informe o código recebido no email</b>:','<b>CÓDIGO DE VERIFICAÇÃO</b>', function (codigo) {
									localStorage.setItem('emailValido',email);
									validaCodigo(codigo);
								});
							
							}
							
							if (resposta==1){
								app.dialog.close();
								app.dialog.alert('Por favor, informe um email válido!','<b>E-MAIL NÃO ENCONTRADO</b>');
							}
							
							if (resposta==2){
								app.dialog.close();
								app.dialog.alert('Houve um problema. Tente novamente','<b>OPS!</b>');
							}
							
						},
							
						error: function (erro) {
							app.dialog.close();
							app.dialog.alert('Não foi possivel se conectar ao servidor');								   
						},
												
						});
					
					
				  });
					});
					
					function validaCodigo(codigo){
						
						app.dialog.close();
						app.dialog.preloader('Verificando');
						
						var email=localStorage.getItem('emailValido');
						
						$.ajax({
						type: 'POST', 
						data: {email:email,codigo:codigo,chave:'123'}, 
						url: 'https://vilhenaservicos.com.br/cadastro/verificar-codigo.php',  
							 
						success: function (resposta) {
							
							if (resposta==0){
							app.dialog.close();
								app.dialog.prompt('Informe a nova senha:','<b>NOVA SENHA</b>', function (senha) {
									criarNovaSenha(senha);
								});
							
							}
							
							if (resposta==1){
								app.dialog.close();
								app.dialog.alert('Por favor, informe um código válido!','<b>CÓDIGO INVÁLIDO</b>');
							}
							
							if (resposta==2){
								app.dialog.close();
								app.dialog.alert('Houve um problema. Tente novamente','<b>OPS!</b>');
							}
							
						},
							
						error: function (erro) {
							app.dialog.close();
							app.dialog.alert('Não foi possivel se conectar ao servidor');								   
						},
						
						
						});
						
						
					}
					
					function criarNovaSenha(senha){
						
						app.dialog.close();
						
						app.dialog.preloader('Salvando nova senha');						
						var email=localStorage.getItem('emailValido');
						
						$.ajax({
						type: 'POST', 
						data: {email:email,senha:senha,chave:'123'}, 
						url: 'https://vilhenaservicos.com.br/cadastro/salvar-nova-senha.php',  
							 
						success: function (resposta) {
							
							if (resposta==0){
							app.dialog.close();
						    app.dialog.alert('Nova senha gerada. Você já pode fazer login com ela!','<b>SUCESSO!</b>');							
							}
							
							if (resposta==1){
								app.dialog.close();
								app.dialog.alert('Por favor, informe um código válido!','<b>CÓDIGO INVÁLIDO</b>');
							}
							
							if (resposta==2){
								app.dialog.close();
								app.dialog.alert('Houve um problema. Tente novamente','<b>OPS!</b>');
							}
							
						},
							
						error: function (erro) {
							app.dialog.close();
							app.dialog.alert('Não foi possivel se conectar ao servidor');								   
						},
						
						
						});
						
						
					}

                    }
               }
        },
    ],
    // ... other parameters
});

var $$=Dom7;

//QUANDO O DISPOSITIVO ESTIVER PRONTO
function onDeviceReady() {
	
	//DISPOSITIVO PRONTO INICIALIZAR POR ESSA ROTA
    var mainView = app.views.create('.view-main', {
        url: '/index/'
    });
	
	//COMANDO PARA "OUVIR" QUANDO FICAR OFFLINE
	document.addEventListener("offline", onOffline, false);

	function onOffline() {
		var rota=app.views.main.router.url;
		localStorage.setItem('rotaAtual',rota);
		app.views.main.router.navigate('/offline/');
	}
	
	//COMANDO PARA "OUVIR" QUANDO FICAR ONLINE
	document.addEventListener("online", onOnline, false);

	function onOnline() {
		var rota=localStorage.getItem('rotaAtual');		
		app.views.main.router.navigate(rota);
	}
	
	 //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
	 document.addEventListener("backbutton", onBackKeyDown, false);
	 
	  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("44b14fc6-e71b-4baa-8ae0-5cdf8d5b5032")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

//FUNCÃO QUANDO CLICAR NO BOTAO VOLTAR NATIVO
function onBackKeyDown() {
	
	//VARIAVEL PARA VER EM QUE ROTA ESTAMOS
	var nome=app.views.main.router.url;
    
	//EXEMPLO DE VOLTAR:	
	if (nome=='/categorias/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/lista-anunciantes/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/busca/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/lista-promocao/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/lista-destaque/'){
	app.views.main.router.navigate('/destino/');	
	}
			
	if (nome=='/configuracoes/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/escolhecidade/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/skins/'){
	app.views.main.router.navigate('/destino/');	
	}
	
	if (nome=='/anunciante/'){
	app.views.main.router.back('/destino/');	
	}
	
	if (nome=='/promocao/'){
	app.views.main.router.back('/destino/');
	}
	

	
	
}



}