const bsButton = new bootstrap.Button('#myButton');
document.querySelectorAll('.btnTickets').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement);
    button.toggle();
});
function calculateTotalPrecio() {
  const regular = 200;
  const descuentos = {
    'Sin Descuento': 1,
    'Estudiante': 0.8,
    'Trainee': 0.5,
    'Junior': 0.85
  };

  const categoriaSelect = document.getElementById('ticketsCategory');
  const categoriaSeleccionada = categoriaSelect.options[categoriaSelect.selectedIndex].value;
  const descuento = descuentos[categoriaSeleccionada] || 1;

  console.log('Categoría seleccionada:', categoriaSeleccionada);
  console.log('Descuento aplicado:', descuento);

  const cantidadRegular = parseInt(document.getElementById('ticketsQuantity').value) || 0;
  const cantidadEstudiante = parseInt(document.getElementById('student-ticket').value) || 0;
  const cantidadTrainee = parseInt(document.getElementById('ticketTrainee').value) || 0;
  const cantidadJunior = parseInt(document.getElementById('ticketJr').value) || 0;

  console.log('Cantidad de entradas (regular, estudiante, trainee, junior):', cantidadRegular, cantidadEstudiante, cantidadTrainee, cantidadJunior);

  let totalPrecio = (regular * cantidadRegular) +
                    (regular * cantidadEstudiante * descuentos['Estudiante']) +
                    (regular * cantidadTrainee * descuentos['Trainee']) +
                    (regular * cantidadJunior * descuentos['Junior']);

  totalPrecio *= descuentos[categoriaSeleccionada];

  document.getElementById('botondepago').textContent = `Total a Pagar : $${totalPrecio.toFixed(2)}`;
}


function borrarFormulario() {
  document.getElementById("formulario").reset();
  document.getElementById('botondepago').textContent = "Total a Pagar : $";
}

function mostrarResumen() {
  const total = calculateTotalPrecio();
  document.getElementById("pago").textContent = `Total a Pagar : $${total.toFixed(2)}`;
  document.getElementById("pago").style.display = "block";
}

