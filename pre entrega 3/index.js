


// Obtener elementos del DOM
const configForm = document.getElementById('configForm');
const option1Input = document.getElementById('option1');
const option2Input = document.getElementById('option2');
const outputDiv = document.getElementById('output');


// Cargar datos de configuración almacenados en el Storage
const storedConfigString = localStorage.getItem('config');
if (storedConfigString) 
{
  const storedConfig = JSON.parse(storedConfigString);
  option1Input.checked = storedConfig.option1;
  option2Input.checked = storedConfig.option2;
}

// Función de respuesta para guardar configuración
function saveConfig(event) 
{
  event.preventDefault();

  // Obtener los valores seleccionados
  const config = {
    John: option1Input.checked,
    Paul: option2Input.checked
  };

  // Almacenar la configuración en el Storage
  const configString = JSON.stringify(config);
  localStorage.setItem('config', configString);

  // Mostrar los resultados en el DOM
  outputDiv.innerHTML = `
    <p>Configuración guardada:</p>
    <p>John: ${config.John}</p>
    <p>Paul: ${config.Paul}</p>
  `;
}

// Agregar el evento de envío del formulario
configForm.addEventListener('submit', saveConfig);

  
