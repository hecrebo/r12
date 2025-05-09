// Verificación de carga del archivo
console.log('Archivo ubicaciones.js cargado correctamente');

const datosUbicacion = {
    "Amazonas": {
        "municipios": {
            "Alto Orinoco": ["La Esmeralda", "Huachamacare", "Marawaka", "Mavaca", "Sierra Parima"],
            "Atabapo": ["San Fernando de Atabapo", "Ucata", "Yapacana", "Caname"],
            "Autana": ["Isla Ratón", "Samariapo", "Sipapo", "Munduapo", "Guayapo"],
            "Manapiare": ["San Juan de Manapiare", "Alto Ventuari", "Medio Ventuari", "Bajo Ventuari"],
            "Maroa": ["Maroa", "Victorino", "Comunidad"],
            "Río Negro": ["San Carlos de Río Negro", "Solano", "Casiquiare", "Cocuy"],
            "Puerto Ayacucho": ["Fernando Girón Tovar", "Luis Alberto Gómez", "Parhueña", "Platanillal"]
        }
    },
    "Anzoátegui": {
        "municipios": {
            "Anaco": ["Anaco", "San Joaquín"],
            "Aragua": ["Aragua de Barcelona", "Cachipo"],
            "Bolívar": ["Barcelona", "Bergantín", "Caigua", "El Carmen", "El Pilar", "Naricual", "San Cristóbal"],
            "Bruzual": ["Clarines", "Guanape", "Sabana de Uchire"],
            "Cajigal": ["Onoto", "San Pablo"],
            "Carvajal": ["Valle de Guanape", "Santa Bárbara"],
            "Freites": ["Cantaura", "Libertador", "Santa Rosa", "Urica"],
            "Guanipa": ["San José de Guanipa"],
            "Guanta": ["Guanta", "Chorrerón"],
            "Independencia": ["Soledad", "Mamo"],
            "Libertad": ["San Mateo", "El Carito", "Santa Inés", "La Romereña"],
            "McGregor": ["El Chaparro", "Tomás Alfaro"],
            "Miranda": ["Pariaguán", "Atapirire", "Boca del Pao", "El Pao", "Múcura"],
            "Monagas": ["Mapire", "Piar", "Santa Clara", "San Diego de Cabrutica", "Uverito", "Zuata"],
            "Peñalver": ["Puerto Píritu", "San Miguel", "Sucre"],
            "Piritu": ["Píritu", "San Francisco"],
            "San Juan de Capistrano": ["Boca de Uchire", "Boca de Chávez"],
            "Santa Ana": ["Santa Ana", "Pueblo Nuevo"],
            "Simón Rodríguez": ["El Tigre", "Edmundo Barrios", "Miguel Otero Silva"],
            "Sotillo": ["Puerto La Cruz", "Pozuelos"]
        }
    },
    "Apure": {
        "municipios": {
            "Achaguas": ["Achaguas", "Apurito", "El Yagual", "Guachara", "Mucuritas", "Queseras del Medio"],
            "Biruaca": ["Biruaca"],
            "Muñoz": ["Bruzual", "Mantecal"],
            "Páez": ["Guasdualito", "Aramendi", "El Amparo", "San Camilo", "Urdaneta"],
            "Pedro Camejo": ["San Juan de Payara", "Codazzi", "Cunaviche"],
            "Rómulo Gallegos": ["Elorza", "La Trinidad"],
            "San Fernando": ["San Fernando", "El Recreo", "Peñalver", "San Rafael de Atamaica"]
        }
    },
    "Aragua": {
        "municipios": {
            "Bolívar": ["San Mateo", "Camatagua", "Carmen de Cura"],
            "Camatagua": ["Camatagua", "Carmen de Cura"],
            "Francisco Linares Alcántara": ["Santa Rita", "Francisco de Miranda", "Moseñor Feliciano González"],
            "Girardot": ["Maracay", "Choroní", "Las Delicias", "Madre María de San José", "Pedro José Ovalles", "Joaquín Crespo", "Jose Casanova Godoy", "Andrés Eloy Blanco", "Los Tacarigua", "Las Delicias"],
            "José Ángel Lamas": ["Santa Cruz"],
            "José Félix Ribas": ["La Victoria", "Las Guacamayas", "Paúl", "San Juan de los Morros", "San Mateo"],
            "José Rafael Revenga": ["El Consejo", "Palo Negro"],
            "Libertador": ["Palo Negro", "San Martín de Porres"],
            "Mario Briceño Iragorry": ["El Limón", "Caña de Azúcar"],
            "Ocumare de la Costa de Oro": ["Ocumare de la Costa"],
            "San Casimiro": ["San Casimiro", "Güiripa", "Ollas de Caramacate", "Valle Morín"],
            "San Sebastián": ["San Sebastián"],
            "Santiago Mariño": ["Turmero", "Alfredo Pacheco Miranda", "Arevalo Aponte", "Chuao", "Samán de Güere", "Santos Michelena"],
            "Santos Michelena": ["Las Tejerías"],
            "Sucre": ["Cagua", "Bella Vista"],
            "Tovar": ["Colonia Tovar"],
            "Urdaneta": ["Barbacoas", "San Francisco de Cara", "Taguay"],
            "Zamora": ["Villa de Cura", "Magdaleno", "San Francisco de Asís", "Valles de Tucutunemo", "Augusto Mijares"]
        }
    },
    "Barinas": {
        "municipios": {
            "Alberto Arvelo Torrealba": ["Sabaneta", "Alberto Arvelo Larriva"],
            "Andrés Eloy Blanco": ["El Cantón", "Santa Cruz de Guacas", "Puerto Vivas"],
            "Antonio José de Sucre": ["Socopó", "Bum Bum", "La Unión", "El Carmelo"],
            "Arismendi": ["Arismendi", "Guadarrama", "La Unión", "San Antonio"],
            "Barinas": ["Barinas", "Alberto Arvelo Larriva", "San Silvestre", "Santa Inés", "Santa Lucía", "Torunos", "El Carmen", "Rómulo Betancourt", "Corazón de Jesús", "Ramón Ignacio Méndez", "Alto Barinas", "Manuel Palacio Fajardo", "Juan Antonio Rodríguez Domínguez", "Dominga Ortiz de Páez"],
            "Bolívar": ["Barinitas", "Altamira de Cáceres", "Calderas"],
            "Cruz Paredes": ["Barrancas", "El Socorro", "Masparrito"],
            "Ezequiel Zamora": ["Santa Bárbara", "Pedro Briceño Méndez", "Ramón Ignacio Méndez", "José Ignacio del Pumar"],
            "Obispos": ["Obispos", "Los Guasimitos", "El Real", "La Luz"],
            "Pedraza": ["Ciudad Bolivia", "Ignacio Briceño", "José Félix Ribas", "Páez"],
            "Rojas": ["Libertad de Barinas", "Dolores", "Palacio Fajardo"],
            "Sosa": ["Ciudad de Nutrias", "El Regalo", "Puerto de Nutrias", "Santa Catalina"]
        }
    },
    "Bolívar": {
        "municipios": {
            "Caroní": ["Ciudad Guayana", "Unare", "Pozo Verde", "Yocoima", "5 de Julio"],
            "Cedeño": ["Caicara del Orinoco", "Aripao", "Las Majadas", "Moitaco", "San Félix de Cedeño"],
            "El Callao": ["El Callao"],
            "Gran Sabana": ["Santa Elena de Uairén", "Ikabarú"],
            "Heres": ["Ciudad Bolívar", "José Antonio Páez", "Marhuanta", "Vista Hermosa", "Orinoco", "Panapana", "Zea"],
            "Padre Pedro Chien": ["El Palmar"],
            "Piar": ["Upata", "Andrés Eloy Blanco", "Pedro Cova", "Raúl Leoni"],
            "Roscio": ["Guasipati", "Salom"],
            "Sifontes": ["Tumeremo", "Dalla Costa", "San Isidro"],
            "Sucre": ["Maripa", "Aripao", "Guarataro", "Las Majadas", "Moitaco"]
        }
    },
    "Carabobo": {
        "municipios": {
            "Bejuma": ["Bejuma", "Canoabo", "Simón Bolívar"],
            "Carlos Arvelo": ["Güigüe", "Belén", "Tacarigua"],
            "Diego Ibarra": ["Mariara", "Aguas Calientes"],
            "Guacara": ["Guacara", "Ciudad Alianza", "Yagua"],
            "Juan José Mora": ["Morón", "Urama"],
            "Libertador": ["Tocuyito", "Independencia"],
            "Los Guayos": ["Los Guayos"],
            "Miranda": ["Miranda", "Los Mangos"],
            "Montalbán": ["Montalbán"],
            "Naguanagua": ["Naguanagua"],
            "Puerto Cabello": ["Puerto Cabello", "Borburata", "Patanemo"],
            "San Diego": ["San Diego"],
            "San Joaquín": ["San Joaquín"],
            "Valencia": ["Valencia", "San Blas", "San José", "El Socorro", "Miguel Peña", "Rafael Urdaneta", "Negro Primero", "Candelaria", "Catedral", "El Trigal", "Santa Rosa", "Los Mangos", "Pueblo Nuevo"]
        }
    },
    "Cojedes": {
        "municipios": {
            "Anzoátegui": ["Cojedes", "El Pao"],
            "El Baúl": ["El Baúl", "Sucre"],
            "Falcón": ["Tinaquillo"],
            "Girardot": ["El Baúl", "Macapo", "La Aguadita"],
            "Lima Blanco": ["Macapo", "La Aguadita"],
            "Pao de San Juan Bautista": ["El Pao"],
            "Ricaurte": ["Libertad de Cojedes", "El Amparo"],
            "Rómulo Gallegos": ["Las Vegas"],
            "San Carlos": ["San Carlos", "Juan de Mata Suárez"],
            "Tinaco": ["Tinaco", "Bramón"]
        }
    },
    "Delta Amacuro": {
        "municipios": {
            "Antonio Díaz": ["Curiapo", "Alto Barima", "Boca de Cuyubini", "Isla de Cuyubini"],
            "Casacoima": ["Sierra Imataca", "Curiapo", "Piacoa"],
            "Pedernales": ["Pedernales", "Capure", "Manoa"],
            "Tucupita": ["Tucupita", "San Rafael", "Capure", "Manoa"]
        }
    },
    "Distrito Capital": {
        "municipios": {
            "Libertador": ["Caracas", "El Valle", "Coche", "San Agustín", "San Pedro", "San José", "San Juan", "Santa Rosalía", "Santa Teresa", "23 de Enero", "Altagracia", "Candelaria", "Catedral", "La Pastora", "La Vega", "Macarao", "San Bernardino", "San José", "San Juan", "San Pedro", "Santa Rosalía", "Santa Teresa"]
        }
    },
    "Falcón": {
        "municipios": {
            "Acosta": ["San Juan de los Cayos", "Capadare", "La Pastora", "Libertador"],
            "Bolívar": ["San Luis", "Aracua", "La Peña"],
            "Buchivacoa": ["Capatárida", "Borojo", "Guayabital", "Seque", "Zazárida"],
            "Cacique Manaure": ["Yaracal"],
            "Carirubana": ["Punto Fijo", "Carirubana", "Santa Ana", "Punta Cardón"],
            "Colina": ["La Vela de Coro", "Acurigua", "Guaibacoa", "Las Calderas", "Macoruca"],
            "Dabajuro": ["Dabajuro"],
            "Democracia": ["Pedregal", "Agua Clara", "Avaria", "Piedra Grande", "Purureche"],
            "Falcón": ["Pueblo Nuevo", "Adícora", "Baraived", "Buena Vista", "Jadacaquiva", "El Vínculo", "El Hato", "Moruy"],
            "Federación": ["Churuguara", "Agua Larga", "El Paují", "Independencia", "Maparari"],
            "Jacura": ["Jacura", "Agua Linda", "Araurima"],
            "Los Taques": ["Los Taques", "Judibana"],
            "Mauroa": ["Mene de Mauroa", "Casigua", "San Félix"],
            "Miranda": ["Santa Cruz de Bucaral", "El Charal", "Las Vegas del Tuy"],
            "Monseñor Iturriza": ["Chichiriviche", "Boca de Aroa", "Tocópero"],
            "Palmasola": ["Palmasola"],
            "Petit": ["Cabure", "Colina", "Curimagua"],
            "Píritu": ["Píritu", "San José de la Costa"],
            "San Francisco": ["Mirimire", "Dabajuro"],
            "Silva": ["Tucacas", "Boca de Aroa"],
            "Sucre": ["La Cruz de Taratara", "Las Vegas del Tuy", "Sucre"],
            "Tocópero": ["Tocópero"],
            "Unión": ["Santa Cruz de Los Taques", "El Charal", "Las Vegas del Tuy"],
            "Urumaco": ["Urumaco", "Bruzual"],
            "Zamora": ["Puerto Cumarebo", "La Ciénaga", "La Soledad", "Pueblo Cumarebo"]
        }
    },
    "Guárico": {
        "municipios": {
            "Camaguán": ["Camaguán", "Puerto Miranda", "Uverito"],
            "Chaguaramas": ["Chaguaramas"],
            "El Socorro": ["El Socorro"],
            "Francisco de Miranda": ["Calabozo", "El Calvario", "El Rastro", "Guardatinajas"],
            "José Félix Ribas": ["Tucupido", "San Rafael de Laya"],
            "José Tadeo Monagas": ["Altagracia de Orituco", "Lezama", "Libertad de Orituco", "Paso Real de Macaira", "San Francisco de Macaira", "San Rafael de Orituco", "Soublette"],
            "Juan Germán Roscio": ["San Juan de los Morros", "Cantagallo", "Parapara"],
            "Julián Mellado": ["El Sombrero", "Sosa"],
            "Las Mercedes": ["Las Mercedes", "Cabruta", "Santa Rita de Manapire"],
            "Leonardo Infante": ["Valle de la Pascua", "Espino"],
            "Pedro Zaraza": ["Zaraza", "San José de Unare"],
            "Ortíz": ["Ortíz", "San Francisco de Tiznados", "San José de Tiznados", "San Lorenzo de Tiznados"],
            "San Gerónimo de Guayabal": ["Guayabal", "Cazorla"],
            "San José de Guaribe": ["San José de Guaribe"],
            "Santa María de Ipire": ["Santa María de Ipire", "Altamira"]
        }
    },
    "Lara": {
        "municipios": {
            "Andrés Eloy Blanco": ["Sanare", "Pío Tamayo", "Quebrada Honda de Guache"],
            "Crespo": ["Duaca", "Agua Viva", "Aregue"],
            "Iribarren": ["Barquisimeto", "Aguedo Felipe Alvarado", "Buena Vista", "Cují", "Juan de Villegas", "Juárez", "La Concepción", "Tamaca", "Unión", "Villanueva"],
            "Jiménez": ["Quíbor", "Cubiro", "Cují", "San Miguel", "Tintorero"],
            "Morán": ["El Tocuyo", "Anzoátegui", "Bolívar", "Guarico", "Hilario Luna y Luna", "Humocaro Alto", "Humocaro Bajo", "La Candelaria", "Moroturo", "San Isidro"],
            "Palavecino": ["Cabudare", "Agua Viva", "Buría", "José Gregorio Bastidas"],
            "Simón Planas": ["Sarare", "Gustavo Vega", "Mamón de los Curos"],
            "Torres": ["Carora", "Antonio Díaz", "Camacaro", "Castañeda", "Cecilio Zubillaga", "Chiquinquirá", "Espinoza de los Monteros", "Heriberto Arroyo", "Manuel Morillo", "Montes de Oca", "Torres", "Trinidad Samuel"],
            "Urdaneta": ["Siquisique", "Moroturo", "San Miguel", "Xaguas"]
        }
    },
    "Mérida": {
        "municipios": {
            "Alberto Adriani": ["El Vigía", "La Azulita", "Santa María de Caparo"],
            "Andrés Bello": ["La Azulita"],
            "Antonio Pinto Salinas": ["Santa Cruz de Mora", "Mesa Bolívar", "Mesa de Las Palmas"],
            "Aricagua": ["Aricagua", "San Antonio"],
            "Arzobispo Chacón": ["Canagua", "Capurí", "Chacantá", "El Molino", "Guaimaral", "Mucuchachí", "Mucutuy", "Mucuchíes"],
            "Campo Elías": ["Ejido", "Acequias", "Jají", "La Mesa", "San José del Sur"],
            "Caracciolo Parra Olmedo": ["Tucaní", "Florencio Ramírez"],
            "Cardenal Quintero": ["Santo Domingo", "Las Piedras"],
            "Guaraque": ["Guaraque", "Mesa de Quintero", "Río Negro"],
            "Julio César Salas": ["Arapuey", "Palmira"],
            "Justo Briceño": ["Torondoy", "Antonio Spinetti Dini", "Arias", "Caracciolo Parra Pérez", "Domingo Peña", "El Llano", "Gonzalo Picón Febres", "Jacinto Plaza", "Juan Rodríguez Suárez", "Lasso de la Vega", "Mariano Picón Salas", "Milla", "Osuna Rodríguez", "Sagrario", "El Morro", "Los Nevados"],
            "Libertador": ["Mérida", "Acequias", "Jají", "La Mesa", "San José del Sur"],
            "Miranda": ["Timotes", "Andrés Eloy Blanco", "La Venta", "Piñango"],
            "Obispo Ramos de Lora": ["Santa Elena de Arenales", "Eloy Paredes", "San Rafael de Alcázar"],
            "Padre Noguera": ["Santa María de Caparo"],
            "Pueblo Llano": ["Pueblo Llano"],
            "Rangel": ["Mucuchíes", "Cacute", "La Toma", "Mucurubá", "San Rafael"],
            "Rivas Dávila": ["Bailadores", "Gerónimo Maldonado"],
            "Santos Marquina": ["Tabay"],
            "Sucre": ["Lagunillas", "Chiguará", "Estánquez", "La Trampa", "Pueblo Nuevo del Sur", "San Juan"],
            "Tovar": ["Tovar", "El Amparo", "San Francisco"],
            "Tulio Febres Cordero": ["Nueva Bolivia", "Independencia", "María de la Concepción Palacios y Blanco", "Santa Apolonia"],
            "Zea": ["Zea", "Caño El Tigre"]
        }
    },
    "Miranda": {
        "municipios": {
            "Acevedo": ["Caucagua", "Aragüita", "Arévalo González", "Capaya", "El Café", "Marizapa", "Panaquire", "Ribas"],
            "Andrés Bello": ["San José de Barlovento"],
            "Baruta": ["Baruta", "El Cafetal", "Las Minas de Baruta"],
            "Brión": ["Higuerote", "Curiepe", "Tacarigua de Brión"],
            "Buroz": ["Mamporal"],
            "Carrizal": ["Carrizal"],
            "Chacao": ["Chacao"],
            "Cristóbal Rojas": ["Charallave", "Las Brisas"],
            "El Hatillo": ["El Hatillo"],
            "Guaicaipuro": ["Los Teques", "Altagracia de la Montaña", "Cecilio Acosta", "El Jarillo", "Paracotos", "San Pedro", "Tácata"],
            "Independencia": ["Santa Teresa del Tuy", "Cartanal", "La Democracia"],
            "Lander": ["Ocumare del Tuy", "La Democracia"],
            "Los Salias": ["San Antonio de los Altos"],
            "Páez": ["Río Chico", "El Guapo", "Paparo", "Tacarigua de la Laguna"],
            "Paz Castillo": ["Santa Lucía del Tuy"],
            "Pedro Gual": ["Cúpira", "Machurucuto"],
            "Plaza": ["Guarenas", "Caucagüita", "El Cafetal"],
            "Simón Bolívar": ["San Francisco de Yare", "San Antonio de Yare"],
            "Urdaneta": ["Cúa", "Nueva Cúa"],
            "Zamora": ["Guatire", "Bolívar"]
        }
    },
    "Monagas": {
        "municipios": {
            "Acosta": ["San Antonio de Capayacuar", "El Guácharo", "La Guanota", "Sabana de Piedra", "San Agustín"],
            "Aguasay": ["Aguasay"],
            "Bolívar": ["Caripito"],
            "Caripe": ["Caripe", "El Guácharo", "La Guanota", "Sabana de Piedra", "San Agustín", "Teresen"],
            "Cedeño": ["Caicara de Maturín", "Areo", "San Félix de Cantalicio", "Viento Fresco"],
            "Ezequiel Zamora": ["Punta de Mata", "El Tejero"],
            "Libertador": ["Temblador", "Chaguaramas", "El Furrial", "Jusepín", "La Pica", "San Simón"],
            "Maturín": ["Maturín", "Alto de los Godos", "Boquerón", "El Corozo", "El Furrial", "Jusepín", "La Pica", "San Simón", "Santa Cruz", "El Corozo"],
            "Piar": ["Aragua de Maturín", "Chaguaramal", "El Pinto", "Guanaguana", "La Toscana", "Taguaya"],
            "Punceres": ["Quiriquire", "Cachipo"],
            "Santa Bárbara": ["Santa Bárbara", "Morón"],
            "Sotillo": ["Barrancas del Orinoco", "Los Barrancos de Fajardo"],
            "Uracoa": ["Uracoa"]
        }
    },
    "Nueva Esparta": {
        "municipios": {
            "Antolín del Campo": ["La Plaza de Paraguachí"],
            "Arismendi": ["La Asunción", "San Juan Bautista", "Valle del Espíritu Santo", "Zabala"],
            "Díaz": ["San Juan Bautista", "Zabala", "Francisco Fajardo"],
            "García": ["El Valle del Espíritu Santo", "Francisco Fajardo", "Bolívar", "Guevara", "Matasiete", "Santa Ana", "Sucre"],
            "Gómez": ["Santa Ana", "Bolívar", "Guevara", "Matasiete", "Sucre"],
            "Maneiro": ["Pampatar", "Aguirre"],
            "Marcano": ["Juan Griego", "Adrián", "Bolívar", "Mariño"],
            "Mariño": ["Porlamar", "Antolín del Campo", "Francisco Fajardo", "García", "Gómez", "Maneiro", "Marcano"],
            "Península de Macanao": ["Boca de Río", "San Francisco"],
            "Tubores": ["Punta de Piedras", "Los Barales", "Vicente Fuentes"]
        }
    },
    "Portuguesa": {
        "municipios": {
            "Agua Blanca": ["Agua Blanca"],
            "Araure": ["Araure", "Río Acarigua"],
            "Esteller": ["Píritu", "Uveral"],
            "Guanare": ["Guanare", "Córdoba", "San José de la Montaña", "San Juan de Guanaguanare", "Virgen de la Coromoto"],
            "Guanarito": ["Guanarito", "Trinidad de la Capilla", "Divina Pastora"],
            "Monseñor José Vicente de Unda": ["Paraíso de Chabasquén", "Peña Blanca"],
            "Ospino": ["Ospino", "Aparición", "La Estación"],
            "Páez": ["Acarigua", "Payara", "Pimpinela", "Ramón Peraza"],
            "Papelón": ["Papelón", "Caño Delgadito"],
            "San Genaro de Boconoíto": ["Boconoíto", "Antolín Tovar"],
            "San Rafael de Onoto": ["San Rafael de Onoto", "Santa Fé"],
            "Santa Rosalía": ["El Playón", "Florida"],
            "Sucre": ["Biscucuy", "Concepción", "San José de Saguaz", "San Rafael de Palo Alzado", "Uvencio Antonio Velásquez", "Villa Rosa"],
            "Turén": ["Villa Bruzual", "Canelones", "Santa Cruz", "San Isidro Labrador"]
        }
    },
    "Sucre": {
        "municipios": {
            "Andrés Eloy Blanco": ["Casanay", "Arenas", "Cocollar", "San Fernando", "San Lorenzo"],
            "Andrés Mata": ["San José de Aerocuar", "Tavera Acosta"],
            "Arismendi": ["Río Caribe", "Antonio José de Sucre", "El Morro de Puerto Santo", "Puerto Santo", "San Juan de las Galdonas"],
            "Benítez": ["El Pilar", "El Rincón", "General Francisco Antonio Vásquez", "Guaraúnos", "Tunapuicito", "Unión"],
            "Bermúdez": ["Carúpano", "Antonio José de Sucre", "El Morro", "Puerto Santo"],
            "Bolívar": ["Marigüitar", "Libertad", "El Paujil", "Yaguaraparo"],
            "Cajigal": ["Yaguaraparo", "El Paujil", "Libertad"],
            "Cruz Salmerón Acosta": ["Araya", "Chacopata", "Manicuare"],
            "Libertador": ["Tunapuy", "Campo Elías", "Irapa"],
            "Mariño": ["Irapa", "Campo Claro", "Marabal", "San Antonio de Irapa", "Soro"],
            "Mejía": ["San Antonio del Golfo"],
            "Montes": ["Cumanacoa", "Arenas", "Aricagua", "Cocollar", "San Fernando", "San Lorenzo"],
            "Ribero": ["Cariaco", "Catuaro", "Rendón", "Santa Cruz", "Santa María"],
            "Sucre": ["Cumaná", "Altagracia", "Santa Inés", "Valentín Valiente", "Ayacucho", "Gran Mariscal", "Raúl Leoni", "San Juan", "Santa Fe"],
            "Valdéz": ["Güiria", "Bidau", "Cristóbal Colón", "Punta de Piedras"]
        }
    },
    "Táchira": {
        "municipios": {
            "Andrés Bello": ["Cordero"],
            "Antonio Rómulo Costa": ["Las Mesas"],
            "Ayacucho": ["San Juan de Colón", "San Pedro del Río"],
            "Bolívar": ["San Antonio del Táchira", "Palotal", "Juan Vicente Gómez", "Isaías Medina Angarita"],
            "Cárdenas": ["Táriba", "Amenodoro Rangel Lamus", "La Florida"],
            "Córdoba": ["Santa Ana del Táchira", "La Grita"],
            "Fernández Feo": ["San Rafael del Piñal", "Alberto Adriani", "Santo Domingo"],
            "Francisco de Miranda": ["San José de Bolívar"],
            "García de Hevia": ["La Fría", "Boca de Grita", "José Antonio Páez"],
            "Guásimos": ["Palmira"],
            "Independencia": ["Capacho Nuevo", "San Juan Bautista", "San Pedro del Río"],
            "Jáuregui": ["La Grita", "Emilio Constantino Guerrero", "Monseñor Miguel Antonio Salas"],
            "José María Vargas": ["El Cobre"],
            "Junín": ["Rubio", "Bramón", "La Petrólea", "Quinimarí"],
            "Libertad": ["Capacho Viejo", "Cipriano Castro", "Manuel Felipe Rugeles"],
            "Libertador": ["Abejales", "Doradas", "Emeterio Ochoa", "San Joaquín de Navay"],
            "Lobatera": ["Lobatera", "Constitución"],
            "Michelena": ["Michelena"],
            "Panamericano": ["Coloncito", "La Palmita"],
            "Pedro María Ureña": ["Ureña", "Nueva Arcadia"],
            "Rafael Urdaneta": ["Delicias", "San José de Bolívar"],
            "Samuel Darío Maldonado": ["La Tendida", "Boca de Grita", "José Antonio Páez"],
            "San Cristóbal": ["San Cristóbal", "Francisco Romero Lobo", "La Concordia", "Pedro María Morantes", "Juan Vicente Gómez", "Sebastián Araujo Briceño"],
            "San Judas Tadeo": ["Umuquena"],
            "Seboruco": ["Seboruco"],
            "Simón Rodríguez": ["San Simón"],
            "Sucre": ["Queniquea", "San José de Bolívar", "San Miguel"],
            "Torbes": ["San Josecito"],
            "Uribante": ["Pregonero", "Cárdenas", "Juan Pablo Peñaloza", "Potosi"],
            "Ureña": ["Ureña", "Nueva Arcadia"]
        }
    },
    "Trujillo": {
        "municipios": {
            "Andrés Bello": ["Santa Isabel", "Araguaney", "El Jaguito", "La Esperanza", "Santa Isabel"],
            "Boconó": ["Boconó", "El Carmen", "Mosquey", "Ayacucho", "Burbusay", "General Ribas", "Guaramacal", "Vega de Guaramacal", "Monseñor Jáuregui", "Rafael Rangel", "San Miguel", "Guaramacal", "Vega de Guaramacal"],
            "Bolívar": ["Sabana Grande", "Cheregüé", "Granados"],
            "Candelaria": ["Chejendé", "Arnoldo Gabaldón", "Carrillo", "Cegarra", "Manuel Salvador Ulloa", "San José"],
            "Carache": ["Carache", "La Concepción", "Cuicas", "Panamericana", "Santa Cruz"],
            "Escuque": ["Escuque", "La Unión", "Sabana Libre", "Santa Rita"],
            "José Felipe Márquez Cañizalez": ["El Dividive", "Agua Santa", "Agua Caliente", "El Cenizo", "Valerita"],
            "Juan Vicente Campos Elías": ["Campo Elías", "Arnoldo Gabaldón"],
            "La Ceiba": ["Santa Apolonia", "El Progreso", "La Ceiba", "Tres de Febrero"],
            "Miranda": ["El Dividive", "Agua Santa", "Agua Caliente", "El Cenizo", "Valerita"],
            "Monte Carmelo": ["Monte Carmelo", "Buena Vista", "Santa María del Horcón"],
            "Motatán": ["Motatán", "El Baño", "Jalisco"],
            "Pampán": ["Pampán", "Flor de Patria", "La Paz", "Santa Ana"],
            "Pampanito": ["Pampanito", "La Concepción", "Pampanito II"],
            "Rafael Rangel": ["Betijoque", "José Gregorio Hernández", "La Pueblita", "Los Cedros"],
            "San Rafael de Carvajal": ["Carvajal", "Antonio Nicolás Briceño", "Campo Alegre", "José Leonardo Suárez"],
            "Sucre": ["Sabana de Mendoza", "El Paraíso", "Junín", "Valmore Rodríguez"],
            "Trujillo": ["Trujillo", "Andrés Linares", "Chiquinquirá", "Cristóbal Mendoza", "Cruz Carrillo", "Matriz", "Monseñor Carrillo", "San José"],
            "Urdaneta": ["La Quebrada", "Cabimbú", "Jajó", "La Mesa", "Santiago"],
            "Valera": ["Valera", "Juan Ignacio Montilla", "La Beatriz", "La Puerta", "Mendoza Fría", "Mercedes Díaz", "San Luis"]
        }
    },
    "Vargas": {
        "municipios": {
            "Vargas": ["La Guaira", "Caraballeda", "Carayaca", "Carlos Soublette", "Caruao", "Catia La Mar", "El Junko", "La Guaira", "Macuto", "Maiquetía", "Naiguatá", "Urimare"]
        }
    },
    "Yaracuy": {
        "municipios": {
            "Arístides Bastidas": ["San Pablo", "Yaritagua"],
            "Bolívar": ["Aroa", "Chivacoa"],
            "Bruzual": ["Chivacoa", "Campo Elías"],
            "Cocorote": ["Cocorote", "José Antonio Saldivia"],
            "Independencia": ["Independencia", "José Antonio Saldivia"],
            "José Antonio Páez": ["Sabana de Parra"],
            "La Trinidad": ["Boraure"],
            "Manuel Monge": ["Yumare"],
            "Nirgua": ["Nirgua", "Salom", "Temerlave"],
            "Peña": ["Yaritagua", "San Andrés"],
            "San Felipe": ["San Felipe", "Albarico", "San Javier"],
            "Sucre": ["Guama", "Pío Tamayo"]
        }
    },
    "Zulia": {
        "municipios": {
            "Almirante Padilla": ["El Toro", "San Timoteo"],
            "Baralt": ["San Timoteo", "El Moralito"],
            "Cabimas": ["Cabimas", "Ambrosio", "Carmen Herrera", "Germán Ríos Linares", "La Rosa", "Rómulo Betancourt", "San Benito", "Venancio Pulgar"],
            "Catatumbo": ["Encontrados", "Udón Pérez"],
            "Colón": ["San Carlos del Zulia", "Moralito", "Santa Bárbara", "Santa Cruz del Zulia", "Urribarrí"],
            "Francisco Javier Pulgar": ["Pueblo Nuevo", "El Bajo", "El Carmelo"],
            "Jesús Enrique Lossada": ["La Concepción", "San José", "Mariano Parra León", "José Ramón Yépez"],
            "Jesús María Semprún": ["Casigua El Cubo", "Sinamaica"],
            "La Cañada de Urdaneta": ["Concepción", "María Concepción", "Andrés Bello", "Chiquinquirá", "El Carmelo", "Potreritos"],
            "Lagunillas": ["Ciudad Ojeda", "Alonso de Ojeda", "Libertad", "Venezuela"],
            "Machiques de Perijá": ["Machiques", "Bartolomé de las Casas", "Libertad", "Río Negro", "San José de Perijá"],
            "Mara": ["San Rafael del Moján", "El Moján", "La Sierrita"],
            "Maracaibo": ["Maracaibo", "Antonio Borjas Romero", "Bolívar", "Cacique Mara", "Caracciolo Parra Pérez", "Cecilio Acosta", "Chiquinquirá", "Coquivacoa", "Cristo de Aranza", "Francisco Eugenio Bustamante", "Idelfonzo Vásquez", "Juana de Ávila", "Luis Hurtado Higuera", "Manuel Dagnino", "Olegario Villalobos", "Raúl Leoni", "San Isidro", "Venancio Pulgar"],
            "Miranda": ["Los Puertos de Altagracia", "Ana María Campos"],
            "Páez": ["Sinamaica", "El Rosado", "Guajira", "Elías Sánchez Rubio"],
            "Rosario de Perijá": ["La Villa del Rosario", "El Rosario", "Donaldo García", "Sixto Zambrano"],
            "San Francisco": ["San Francisco", "Domitila Flores", "Francisco Ochoa", "Los Cortijos", "Mariano Parra León", "José Ramón Yépez"],
            "Santa Rita": ["Santa Rita", "El Mene", "José Cenobio Urribarrí", "Pedro Lucas Urribarrí"],
            "Simón Bolívar": ["Tía Juana", "Alonso de Ojeda", "Libertad", "Venezuela"],
            "Sucre": ["Bobures", "El Batey", "Gibraltar", "Heras", "Monseñor Arturo Álvarez", "Rómulo Gallegos"],
            "Valmore Rodríguez": ["Bachaquero", "Monseñor Iturriza", "Rafael María Baralt", "San Timoteo"]
        }
    }
};

// Verificación de estados disponibles
console.log('Estados disponibles:', Object.keys(datosUbicacion)); 